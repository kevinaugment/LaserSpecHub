'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ImageUploadProps {
  equipmentId: number;
  onUploadSuccess?: () => void;
}

interface UploadedImage {
  id: number;
  image_url: string;
  image_type: string;
  display_order: number;
  is_primary: boolean;
  alt_text?: string;
  caption?: string;
}

export function ImageUpload({ equipmentId, onUploadSuccess }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageType, setImageType] = useState('photo');
  const [altText, setAltText] = useState('');
  const [caption, setCaption] = useState('');
  const [isPrimary, setIsPrimary] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/equipment/${equipmentId}/upload-image`);
      const result = await response.json();

      if (result.success) {
        setImages(result.data);
      }
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image');
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('image_type', imageType);
      formData.append('alt_text', altText);
      formData.append('caption', caption);
      formData.append('is_primary', isPrimary.toString());

      const response = await fetch(`/api/equipment/${equipmentId}/upload-image`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert('Image uploaded successfully!');
        
        // Reset form
        setSelectedFile(null);
        setPreviewUrl(null);
        setAltText('');
        setCaption('');
        setIsPrimary(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }

        // Reload images
        loadImages();

        // Callback
        if (onUploadSuccess) {
          onUploadSuccess();
        }
      } else {
        alert(`Upload failed: ${result.error}`);
      }
    } catch (error: any) {
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (imageId: number) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const response = await fetch(
        `/api/equipment/${equipmentId}/upload-image?image_id=${imageId}`,
        { method: 'DELETE' }
      );

      const result = await response.json();

      if (result.success) {
        alert('Image deleted successfully!');
        loadImages();
        if (onUploadSuccess) {
          onUploadSuccess();
        }
      } else {
        alert(`Delete failed: ${result.error}`);
      }
    } catch (error: any) {
      alert(`Delete failed: ${error.message}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload New Image</h3>
        
        <div className="space-y-4">
          {/* File Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Image (Max 5MB, JPEG/PNG/WebP)
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleFileSelect}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                cursor-pointer"
            />
          </div>

          {/* Preview */}
          {previewUrl && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preview</label>
              <Image
                src={previewUrl}
                alt="Preview"
                width={400}
                height={300}
                className="max-w-xs max-h-48 rounded-lg border border-gray-200"
              />
            </div>
          )}

          {/* Image Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image Type</label>
            <select
              value={imageType}
              onChange={(e) => setImageType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="photo">Product Photo</option>
              <option value="diagram">Technical Diagram</option>
              <option value="spec_sheet">Specification Sheet</option>
              <option value="demo">Demonstration</option>
              <option value="installation">Installation Photo</option>
              <option value="detail">Detail Shot</option>
            </select>
          </div>

          {/* Alt Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alt Text (Optional)
            </label>
            <Input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Describe the image for accessibility"
            />
          </div>

          {/* Caption */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Caption (Optional)
            </label>
            <Input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Add a caption"
            />
          </div>

          {/* Primary Image */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is-primary"
              checked={isPrimary}
              onChange={(e) => setIsPrimary(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="is-primary" className="ml-2 text-sm text-gray-700">
              Set as primary image
            </label>
          </div>

          {/* Upload Button */}
          <Button
            variant="primary"
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            fullWidth
          >
            {uploading ? 'Uploading...' : 'Upload Image'}
          </Button>
        </div>
      </div>

      {/* Existing Images */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Uploaded Images</h3>
          <Button variant="outline" size="sm" onClick={loadImages} disabled={loading}>
            {loading ? 'Loading...' : 'Refresh'}
          </Button>
        </div>

        {images.length === 0 ? (
          <div className="text-center py-8 text-gray-500 border border-gray-200 rounded-lg">
            No images uploaded yet
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group border border-gray-200 rounded-lg overflow-hidden"
              >
                <Image
                  src={image.image_url}
                  alt={image.alt_text || 'Equipment image'}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                {image.is_primary && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                    Primary
                  </div>
                )}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="p-1 bg-red-600 text-white rounded hover:bg-red-700"
                    title="Delete image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {image.caption && (
                  <div className="p-2 bg-gray-50 text-xs text-gray-600">
                    {image.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}




