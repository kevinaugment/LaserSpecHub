'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold text-primary-700 flex-shrink-0 hover:text-primary-800 transition-colors"
        >
          LaserSpecHub
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-6">
          <Link href="/comparison" className="hover:text-primary-600 transition-colors">
            Comparison
          </Link>
          <div className="relative group">
            <button className="hover:text-primary-600 transition-colors flex items-center gap-1">
              Tools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/tools/power-calculator" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                Power Calculator
              </Link>
              <Link href="/tools/workspace-matcher" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                Workspace Matcher
              </Link>
              <Link href="/tools/laser-type-wizard" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                Type Wizard
              </Link>
            </div>
          </div>
          <Link href="/equipment" className="hover:text-primary-600 transition-colors">
            Database
          </Link>
          <div className="relative group">
            <button className="hover:text-primary-600 transition-colors flex items-center gap-1">
              Guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/guides/compare" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                Technology Comparison
              </Link>
              <Link href="/guides/selection" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                Selection Guides
              </Link>
              <Link href="/guides/tech-explain" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                Technical Explanations
              </Link>
              <Link href="/guides/reports" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                Industry Reports
              </Link>
              <Link href="/guides/glossary" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                Glossary & FAQ
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors" 
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav 
          className="lg:hidden border-t border-gray-200 bg-white"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-2 space-y-1">
            <Link 
              href="/comparison" 
              className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comparison
            </Link>
            
            <div className="px-3 py-2 font-medium text-gray-900">Tools</div>
            <Link 
              href="/tools/power-calculator" 
              className="block px-6 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Power Calculator
            </Link>
            <Link 
              href="/tools/workspace-matcher" 
              className="block px-6 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workspace Matcher
            </Link>
            <Link 
              href="/tools/laser-type-wizard" 
              className="block px-6 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Type Wizard
            </Link>
            
            <Link 
              href="/equipment" 
              className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Database
            </Link>
            
            <div className="px-3 py-2 font-medium text-gray-900">Guides</div>
            <Link 
              href="/guides/compare" 
              className="block px-6 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technology Comparison
            </Link>
            <Link 
              href="/guides/selection" 
              className="block px-6 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Selection Guides
            </Link>
            <Link 
              href="/guides/tech-explain" 
              className="block px-6 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technical Explanations
            </Link>
            <Link 
              href="/guides/reports" 
              className="block px-6 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industry Reports
            </Link>
            <Link 
              href="/guides/glossary" 
              className="block px-6 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Glossary & FAQ
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}











