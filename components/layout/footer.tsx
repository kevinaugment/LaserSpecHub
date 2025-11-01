import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">LaserSpecHub</h3>
            <p className="text-sm text-gray-600">
              Professional laser equipment specification comparison and selection tools.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/comparison" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Equipment Comparison
                </Link>
              </li>
              <li>
                <Link href="/tools/power-calculator" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Power Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/workspace-matcher" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Workspace Matcher
                </Link>
              </li>
              <li>
                <Link href="/tools/laser-type-wizard" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Type Wizard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/equipment" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Equipment Database
                </Link>
              </li>
              <li>
                <Link href="/guides/compare" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Technology Guides
                </Link>
              </li>
              <li>
                <Link href="/guides/selection" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Selection Guides
                </Link>
              </li>
              <li>
                <Link href="/guides/glossary" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Glossary & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} LaserSpecHub. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span>Built with Next.js & Turso on Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

























