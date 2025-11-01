'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Favorite {
  id: number;
  favoriteId: number;
  brand: string;
  model: string;
  laser_type: string;
  power_kw: number;
  image_url: string | null;
}

interface SavedComparison {
  id: number;
  name: string;
  equipment_ids: number[];
  created_at: string;
  updated_at: string;
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'profile' | 'favorites' | 'comparisons'>('profile');
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [savedComparisons, setSavedComparisons] = useState<SavedComparison[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tab = searchParams.get('tab') as 'profile' | 'favorites' | 'comparisons' | null;
    if (tab && ['profile', 'favorites', 'comparisons'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login?callbackUrl=/profile');
      return;
    }

    if (status === 'authenticated') {
      loadData();
    }
  }, [status, router]);

  const loadData = async () => {
    try {
      setLoading(true);

      // Load favorites
      const favoritesRes = await fetch('/api/user/favorites');
      const favoritesResult = await favoritesRes.json();
      if (favoritesResult.success) {
        setFavorites(favoritesResult.data);
      }

      // Load saved comparisons
      const comparisonsRes = await fetch('/api/user/comparisons');
      const comparisonsResult = await comparisonsRes.json();
      if (comparisonsResult.success) {
        setSavedComparisons(comparisonsResult.data);
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFavorite = async (equipmentId: number) => {
    try {
      const response = await fetch(`/api/user/favorites?equipment_id=${equipmentId}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        setFavorites(favorites.filter((f) => f.id !== equipmentId));
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const handleDeleteComparison = async (id: number) => {
    if (!confirm('Are you sure you want to delete this saved comparison?')) return;

    try {
      const response = await fetch(`/api/user/comparisons?id=${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        setSavedComparisons(savedComparisons.filter((c) => c.id !== id));
      }
    } catch (error) {
      console.error('Error deleting comparison:', error);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated' || !session?.user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your account, favorites, and saved comparisons</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'profile'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'favorites'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Favorites ({favorites.length})
          </button>
          <button
            onClick={() => setActiveTab('comparisons')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'comparisons'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Saved Comparisons ({savedComparisons.length})
          </button>
        </nav>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500">Name</label>
              <p className="mt-1 text-gray-900">{session.user.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Email</label>
              <p className="mt-1 text-gray-900">{session.user.email}</p>
            </div>
            {(session.user as any).role && (
              <div>
                <label className="text-sm font-medium text-gray-500">Role</label>
                <p className="mt-1">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {(session.user as any).role}
                  </span>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Favorites Tab */}
      {activeTab === 'favorites' && (
        <div>
          {favorites.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p className="text-gray-600 mb-4">No favorites yet</p>
                <Link href="/equipment">
                  <Button variant="primary">Browse Equipment</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {favorites.map((fav) => (
                <Card key={fav.favoriteId}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Link href={`/equipment/${fav.id}`} className="hover:text-blue-600">
                          <h3 className="font-semibold text-gray-900">{fav.brand} {fav.model}</h3>
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">{fav.laser_type}</p>
                        {fav.power_kw && (
                          <p className="text-sm text-gray-500 mt-1">{fav.power_kw} kW</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemoveFavorite(fav.id)}
                        className="ml-4 text-red-600 hover:text-red-700"
                        title="Remove from favorites"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Saved Comparisons Tab */}
      {activeTab === 'comparisons' && (
        <div>
          {savedComparisons.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
                <p className="text-gray-600 mb-4">No saved comparisons yet</p>
                <Link href="/comparison">
                  <Button variant="primary">Start Comparing</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {savedComparisons.map((comp) => (
                <Card key={comp.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{comp.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {comp.equipment_ids.length} equipment{comp.equipment_ids.length !== 1 ? 's' : ''}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Saved {new Date(comp.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Link
                          href={`/comparison?ids=${comp.equipment_ids.join(',')}`}
                          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleDeleteComparison(comp.id)}
                          className="px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

