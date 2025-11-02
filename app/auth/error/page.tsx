'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// NextAuth error codes and their user-friendly messages
const errorMessages: Record<string, string> = {
  Configuration: 'There is a problem with the server configuration. Please contact support if this problem persists.',
  AccessDenied: 'You do not have permission to sign in.',
  Verification: 'The verification token has expired or has already been used.',
  Default: 'An error occurred during authentication. Please try again.',
};

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const errorMessage = error ? errorMessages[error] || errorMessages.Default : errorMessages.Default;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">LaserSpecHub</h1>
          <p className="mt-2 text-sm text-gray-600">Authentication Error</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">Authentication Failed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-red-800">{errorMessage}</p>
                  {error && (
                    <p className="mt-2 text-xs text-red-600">Error code: {error}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/auth/login">
                <Button
                  fullWidth
                  variant="primary"
                >
                  Return to Sign In
                </Button>
              </Link>
              <Link href="/">
                <Button
                  fullWidth
                  variant="secondary"
                >
                  Go to Home
                </Button>
              </Link>
            </div>

            <div className="pt-4 border-t text-center text-sm text-gray-600">
              <p>
                If you continue to experience issues, please{' '}
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                  contact support
                </Link>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <ErrorContent />
    </Suspense>
  );
}

