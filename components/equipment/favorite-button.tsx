'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface FavoriteButtonProps {
  equipmentId: number;
}

export function FavoriteButton({ equipmentId }: FavoriteButtonProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  const checkFavoriteStatus = useCallback(async () => {
    try {
      const response = await fetch('/api/user/favorites');
      const result = await response.json();

      if (result.success) {
        const favoriteIds = result.data.map((f: any) => f.id);
        setIsFavorited(favoriteIds.includes(equipmentId));
      }
    } catch (error) {
      console.error('Error checking favorite status:', error);
    } finally {
      setChecking(false);
    }
  }, [equipmentId]);

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      checkFavoriteStatus();
    } else {
      setChecking(false);
    }
  }, [status, session, checkFavoriteStatus]);

  const handleToggleFavorite = async () => {
    if (status !== 'authenticated') {
      router.push('/auth/login?callbackUrl=' + window.location.pathname);
      return;
    }

    try {
      setLoading(true);

      if (isFavorited) {
        // Remove from favorites
        const response = await fetch(`/api/user/favorites?equipment_id=${equipmentId}`, {
          method: 'DELETE',
        });

        const result = await response.json();
        if (result.success) {
          setIsFavorited(false);
        }
      } else {
        // Add to favorites
        const response = await fetch('/api/user/favorites', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ equipment_id: equipmentId }),
        });

        const result = await response.json();
        if (result.success) {
          setIsFavorited(true);
        } else if (result.error === 'Equipment already in favorites') {
          setIsFavorited(true);
        }
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || checking) {
    return (
      <Button variant="outline" disabled>
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Loading...
      </Button>
    );
  }

  if (status !== 'authenticated') {
    return (
      <Button
        variant="outline"
        onClick={handleToggleFavorite}
        title="Sign in to add to favorites"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Add to Favorites
      </Button>
    );
  }

  return (
    <Button
      variant={isFavorited ? 'primary' : 'outline'}
      onClick={handleToggleFavorite}
      disabled={loading}
    >
      {isFavorited ? (
        <>
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          Favorited
        </>
      ) : (
        <>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Add to Favorites
        </>
      )}
    </Button>
  );
}




