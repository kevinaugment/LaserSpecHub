import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with LaserSpecHub team. Ask questions, report issues, or suggest improvements.',
  path: '/contact',
  keywords: ['contact', 'support', 'help', 'feedback'],
});

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Have a question, suggestion, or need support? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold text-gray-900">Email</h3>
            </div>
            <p className="text-gray-600 text-sm">
              <a href="mailto:support@laserspechub.com" className="text-blue-600 hover:underline">
                support@laserspechub.com
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-gray-900">Response Time</h3>
            </div>
            <p className="text-gray-600 text-sm">
              We typically respond within 24-48 hours
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="font-semibold text-gray-900">Support</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Technical support and general inquiries
            </p>
          </CardContent>
        </Card>
      </div>

      <ContactForm />
    </div>
  );
}

