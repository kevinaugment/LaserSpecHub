/**
 * Custom image loader for Cloudflare Images
 * This loader is used by Next.js Image component
 * https://developers.cloudflare.com/images/image-resizing/
 */

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // For local development or external images, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // In production, use Cloudflare Image Resizing
  // Format: /cdn-cgi/image/width=800,quality=75,format=auto/path-to-image
  if (process.env.NODE_ENV === 'production') {
    return `/cdn-cgi/image/width=${width},quality=${quality || 75},format=auto${src}`;
  }

  // In development, return original image
  return src;
}



