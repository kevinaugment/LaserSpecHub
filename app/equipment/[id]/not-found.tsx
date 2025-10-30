import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function EquipmentNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <svg
            className="mx-auto h-24 w-24 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Equipment Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          We couldn't find the equipment you're looking for. 
          It may have been removed or the ID is incorrect.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link href="/equipment">
            <Button variant="primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Browse All Equipment
            </Button>
          </Link>
          <Link href="/tools/laser-type-wizard">
            <Button variant="outline">
              Find Equipment
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help finding the right equipment?{' '}
            <Link href="/tools/laser-type-wizard" className="text-primary-600 hover:underline">
              Try our selection wizard
            </Link>
            {' '}for personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}





