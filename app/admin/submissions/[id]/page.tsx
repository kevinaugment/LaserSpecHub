'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AdminNav } from '@/components/admin/admin-nav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Submission {
  id: number;
  brand: string;
  model: string;
  laser_type: string;
  power_kw: number | null;
  work_area_length: number | null;
  work_area_width: number | null;
  max_cutting_thickness: string | null;
  cutting_speed: string | null;
  positioning_accuracy: number | null;
  repeat_accuracy: number | null;
  beam_quality: number | null;
  wavelength: number | null;
  control_system: string | null;
  cooling_type: string | null;
  power_consumption: number | null;
  dimensions: string | null;
  weight: number | null;
  price_range: string | null;
  manufacturer_url: string | null;
  spec_sheet_url: string | null;
  image_url: string | null;
  description: string | null;
  applications: string | null;
  origin_country: string | null;
  submitter_name: string | null;
  submitter_email: string | null;
  source_url: string | null;
  status: string;
  created_at: string;
  reviewer_notes: string | null;
}

export default function SubmissionDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    loadSubmission();
  }, [params.id]);

  const loadSubmission = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/submissions/${params.id}`);
      const result = await response.json();

      if (result.success) {
        setSubmission(result.data);
      } else {
        setError(result.error || 'Failed to load');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    loadSubmission();
  }, [loadSubmission]);

  const handleReview = async (action: 'approve' | 'reject') => {
    if (!submission) return;

    const confirmMessage = action === 'approve'
      ? 'Are you sure you want to approve this submission? An equipment record will be created automatically.'
      : 'Are you sure you want to reject this submission?';

    if (!confirm(confirmMessage)) return;

    try {
      setProcessing(true);
      const response = await fetch(`/api/admin/submissions/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, notes }),
      });

      const result = await response.json();

      if (result.success) {
        alert(action === 'approve' ? '✅ Submission approved and equipment created' : '✅ Submission rejected');
        router.push('/admin/submissions');
      } else {
        alert(`❌ Operation failed: ${result.error}`);
      }
    } catch (err: any) {
      alert(`❌ Operation failed: ${err.message}`);
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminNav />
        <div className="max-w-7xl mx-auto p-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !submission) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminNav />
        <div className="max-w-7xl mx-auto p-8">
          <div className="text-center py-12">
            <p className="text-red-600">❌ {error || 'Submission not found'}</p>
            <Button onClick={() => router.push('/admin/submissions')} className="mt-4">
              Back to List
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
    };
    const labels = {
      pending: 'Pending',
      approved: 'Approved',
      rejected: 'Rejected',
    };
    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Review Submission #{submission.id}</h1>
            <p className="mt-2 text-gray-600">View and review user-submitted equipment information</p>
          </div>
          <Button variant="outline" onClick={() => router.push('/admin/submissions')}>
            Back to List
          </Button>
        </div>

        {/* Status Badge */}
        <div className="mb-6">
          {getStatusBadge(submission.status)}
        </div>

        {/* Submission Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Brand</label>
                    <p className="mt-1 text-gray-900">{submission.brand}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Model</label>
                    <p className="mt-1 text-gray-900">{submission.model}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Laser Type</label>
                    <p className="mt-1 text-gray-900">{submission.laser_type}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Power (kW)</label>
                    <p className="mt-1 text-gray-900">{submission.power_kw || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Origin Country</label>
                    <p className="mt-1 text-gray-900">{submission.origin_country || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Price Range</label>
                    <p className="mt-1 text-gray-900">{submission.price_range || '-'}</p>
                  </div>
                </div>

                {submission.description && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Description</label>
                    <p className="mt-1 text-gray-900">{submission.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Technical Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Work Area Length (mm)</label>
                    <p className="mt-1 text-gray-900">{submission.work_area_length || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Work Area Width (mm)</label>
                    <p className="mt-1 text-gray-900">{submission.work_area_width || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Positioning Accuracy (mm)</label>
                    <p className="mt-1 text-gray-900">{submission.positioning_accuracy || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Repeat Accuracy (mm)</label>
                    <p className="mt-1 text-gray-900">{submission.repeat_accuracy || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Beam Quality (M²)</label>
                    <p className="mt-1 text-gray-900">{submission.beam_quality || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Wavelength (nm)</label>
                    <p className="mt-1 text-gray-900">{submission.wavelength || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Control System</label>
                    <p className="mt-1 text-gray-900">{submission.control_system || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Cooling Type</label>
                    <p className="mt-1 text-gray-900">{submission.cooling_type || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Power Consumption (kW)</label>
                    <p className="mt-1 text-gray-900">{submission.power_consumption || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Weight (kg)</label>
                    <p className="mt-1 text-gray-900">{submission.weight || '-'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            {(submission.manufacturer_url || submission.spec_sheet_url || submission.source_url) && (
              <Card>
                <CardHeader>
                  <CardTitle>Related Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {submission.manufacturer_url && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Manufacturer Website</label>
                      <p className="mt-1">
                        <a href={submission.manufacturer_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {submission.manufacturer_url}
                        </a>
                      </p>
                    </div>
                  )}
                  {submission.spec_sheet_url && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Spec Sheet</label>
                      <p className="mt-1">
                        <a href={submission.spec_sheet_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {submission.spec_sheet_url}
                        </a>
                      </p>
                    </div>
                  )}
                  {submission.source_url && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Source URL</label>
                      <p className="mt-1">
                        <a href={submission.source_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {submission.source_url}
                        </a>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Submitter Info */}
            <Card>
              <CardHeader>
                <CardTitle>Submitter Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="mt-1 text-gray-900">{submission.submitter_name || '-'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="mt-1 text-gray-900">{submission.submitter_email || '-'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Submitted At</label>
                  <p className="mt-1 text-gray-900">
                    {new Date(submission.created_at).toLocaleString('en-US')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Review Actions */}
            {submission.status === 'pending' && (
              <Card>
                <CardHeader>
                  <CardTitle>Review Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Review Notes (Optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Add review notes..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() => handleReview('approve')}
                      disabled={processing}
                    >
                      {processing ? 'Processing...' : '✅ Approve Submission'}
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={() => handleReview('reject')}
                      disabled={processing}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      {processing ? 'Processing...' : '❌ Reject Submission'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Review Notes (if already reviewed) */}
            {submission.status !== 'pending' && submission.reviewer_notes && (
              <Card>
                <CardHeader>
                  <CardTitle>Review Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900">{submission.reviewer_notes}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

