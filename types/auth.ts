// Authentication and Authorization Types

export type UserRole = 'user' | 'admin';

export interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
  email_verified: boolean;
  avatar_url?: string | null;
  created_at: string;
  updated_at: string;
}

export interface DatabaseUser {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  role: UserRole;
  email_verified: number;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Session {
  user: {
    id: number;
    email: string;
    name: string;
    role: UserRole;
  };
  expires: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}




