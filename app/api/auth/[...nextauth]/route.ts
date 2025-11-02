import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { getDatabase } from '@/lib/db/client';
import type { DatabaseUser } from '@/types/auth';

export const runtime = 'nodejs';

// NextAuth v5 handler configuration
const handler = NextAuth({
  debug: process.env.NODE_ENV === 'development',
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error('[Auth] Missing credentials');
          return null;
        }

        try {
          console.log('[Auth] Attempting login for:', credentials.email);
          
          const db = getDatabase();
          const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
          const result = await stmt.bind(credentials.email as string).all();
          
          if (!result.results || result.results.length === 0) {
            console.error('[Auth] User not found:', credentials.email);
            return null;
          }

          const user = result.results[0] as unknown as DatabaseUser;
          console.log('[Auth] User found, verifying password...');

          // Verify password
          const isValidPassword = await bcrypt.compare(
            credentials.password as string,
            user.password_hash
          );

          if (!isValidPassword) {
            console.error('[Auth] Invalid password for:', credentials.email);
            return null;
          }

          console.log('[Auth] Login successful for:', credentials.email, 'Role:', user.role);

          // Return user object (will be stored in JWT)
          return {
            id: String(user.id),
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error('[Auth] Critical error during authentication:', error);
          console.error('[Auth] Error details:', {
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
          });
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user }) {
      // Verify user has admin role
      if (!user || !(user as any).role) {
        console.error('[Auth] SignIn callback: User has no role');
        return false;
      }
      
      if ((user as any).role !== 'admin') {
        console.error('[Auth] SignIn callback: User is not admin, role:', (user as any).role);
        return '/auth/error?error=unauthorized';
      }
      
      console.log('[Auth] SignIn callback: Admin verified, allowing sign in');
      return true;
    },
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = (user as any).role;
        console.log('[Auth] JWT callback: Token created for user', user.email, 'with role', (user as any).role);
      }
      return token;
    },
    async session({ session, token }) {
      // Add user info to session
      if (token && session.user) {
        session.user.id = String(token.id);
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        (session.user as any).role = token.role;
        console.log('[Auth] Session callback: Session created for', session.user.email);
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production',
});

export { handler as GET, handler as POST };

