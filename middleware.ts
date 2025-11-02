import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes (except /admin/login)
  if (pathname.startsWith('/admin')) {
    // Allow access to login page
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    try {
      // Check authentication
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production',
      });

      console.log('[Middleware] Checking access to:', pathname);
      console.log('[Middleware] Token present:', !!token);
      console.log('[Middleware] Token role:', token?.role);

      // Not authenticated - redirect to login
      if (!token) {
        console.log('[Middleware] No token, redirecting to login');
        const loginUrl = new URL('/admin/login', request.url);
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
      }

      // Check if user is admin
      if (token.role !== 'admin') {
        console.error('[Middleware] User is not admin, role:', token.role);
        const loginUrl = new URL('/admin/login', request.url);
        loginUrl.searchParams.set('error', 'unauthorized');
        return NextResponse.redirect(loginUrl);
      }

      console.log('[Middleware] Access granted to admin');
      // Authenticated and authorized - allow access
      return NextResponse.next();
    } catch (error) {
      console.error('[Middleware] Error checking authentication:', error);
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('error', 'auth_error');
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};




