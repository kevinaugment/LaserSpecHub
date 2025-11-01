'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { UserMenu } from './user-menu';
import { MegaMenuTools } from './mega-menu-tools';
import { MegaMenuGuides } from './mega-menu-guides';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              LaserSpecHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-1">
            {/* Comparison */}
            <Link 
              href="/comparison" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              Comparison
            </Link>

            {/* Tools Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('tools')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium flex items-center"
                aria-expanded={activeDropdown === 'tools'}
                aria-haspopup="true"
              >
                Tools
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === 'tools' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'tools' && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-7xl">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    <MegaMenuTools />
                  </div>
                </div>
              )}
            </div>

            {/* Database */}
            <Link 
              href="/equipment" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              Database
            </Link>

            {/* Guides Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('guides')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium flex items-center"
                aria-expanded={activeDropdown === 'guides'}
                aria-haspopup="true"
              >
                Guides
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === 'guides' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'guides' && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-7xl">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    <MegaMenuGuides />
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link 
              href="/contact" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              Contact
            </Link>

            {/* About */}
            <Link 
              href="/about" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              About
            </Link>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:block">
              <UserMenu />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" 
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          className="lg:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-3 space-y-1">
            {/* User Menu Mobile */}
            <div className="pb-3 mb-3 border-b border-gray-200">
              <UserMenu />
            </div>

            {/* Comparison */}
            <Link
              href="/comparison"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Comparison Tool
              </div>
            </Link>

            {/* Database */}
            <Link
              href="/equipment"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                Equipment Database
              </div>
            </Link>

            {/* Tools Section */}
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Tools & Calculators
              </div>
              <div className="space-y-1">
                <Link href="/tools/power-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  Power Calculator
                </Link>
                <Link href="/tools/workspace-matcher" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  Workspace Matcher
                </Link>
                <Link href="/tools/laser-type-wizard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  Laser Type Wizard
                </Link>
                <Link href="/tools/cost-estimator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  Cost Estimator
                </Link>
                <Link href="/tools/kerf-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  Kerf Calculator
                </Link>
              </div>
            </div>

            {/* Guides Section */}
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Expert Guides
              </div>
              <div className="space-y-1">
                <Link href="/guides/selection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  Equipment Selection Guide
                </Link>
                <Link href="/guides/co2-vs-fiber-laser" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  CO2 vs Fiber Laser
                </Link>
                <Link href="/guides/tech-explain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  Technical Explanations
                </Link>
                <Link href="/guides/cutting-speed-chart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  Cutting Speed Chart
                </Link>
                <Link href="/guides/maintenance-schedule" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>
                  Maintenance Schedule
                </Link>
              </div>
            </div>

            {/* Contact & About */}
            <Link
              href="/contact"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
