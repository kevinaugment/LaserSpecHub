import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us',
  description: 'Learn about LaserSpecHub - your comprehensive platform for comparing laser cutting equipment specifications and making informed manufacturing decisions.',
  path: '/about',
  keywords: ['about', 'mission', 'team', 'laser equipment'],
});

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About LaserSpecHub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your comprehensive platform for comparing laser cutting equipment specifications
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              LaserSpecHub was created to simplify the complex process of selecting laser cutting equipment. 
              We understand that purchasing industrial laser machines represents a significant investment, 
              and our goal is to provide you with the tools and information needed to make informed decisions.
            </p>
            <p className="text-gray-700">
              Whether you're a manufacturing engineer, procurement manager, or business owner, 
              we provide comprehensive technical specifications, comparison tools, and expert guides 
              to help you find the perfect equipment for your needs.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Comprehensive Equipment Database
              </h3>
              <p className="text-gray-700">
                Access detailed specifications for 50+ laser cutting machines from leading manufacturers. 
                Search and filter by power, laser type, brand, and technical parameters.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Advanced Comparison Tools
              </h3>
              <p className="text-gray-700">
                Compare up to 5 machines side-by-side with our intuitive comparison tool. 
                Export comparisons to PDF or share them with your team via unique links.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Professional Calculators
              </h3>
              <p className="text-gray-700">
                Use our 8 specialized calculators to determine power requirements, 
                workspace needs, cost estimates, and other critical parameters for your application.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Expert Guides & Resources
              </h3>
              <p className="text-gray-700">
                Access 30+ detailed guides covering everything from equipment selection 
                to technical specifications, maintenance, and safety protocols.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Data Sources Section */}
      <div className="mb-12">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Data Sources</h2>
            <p className="text-gray-700 mb-4">
              All equipment specifications in our database are sourced from:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Manufacturer datasheets and official documentation</li>
              <li>Verified installation databases and industry reports</li>
              <li>User-submitted data (reviewed and validated by our team)</li>
              <li>Third-party testing reports and technical publications</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We strive to keep our database accurate and up-to-date. If you notice any discrepancies, 
              please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> or 
              <Link href="/equipment/submit" className="text-blue-600 hover:underline"> submit a correction</Link>.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contact CTA */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            We're here to help! Reach out to our team for support, suggestions, or partnerships.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </CardContent>
      </Card>
    </div>
  );
}

