'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md text-gray-800 shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Image src="/1.png" alt="Logo" width={80} height={80} className="transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  pathname === '/'
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                Home
                {pathname === '/' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  pathname === '/services'
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                Services
                {pathname === '/services' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  pathname === '/portfolio'
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                Portfolio
                {pathname === '/portfolio' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  pathname.startsWith('/insights')
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                Insights
                {pathname.startsWith('/insights') && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  pathname === '/contact'
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                Contact Us
                {pathname === '/contact' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Ask Luna button — desktop */}
        <a
          href="https://luna.socialmoon.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Ask Luna
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
          <nav className="container mx-auto px-6 py-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    pathname === '/'
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    pathname === '/services'
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    pathname === '/portfolio'
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    pathname.startsWith('/insights')
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    pathname === '/contact'
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://luna.socialmoon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 font-semibold hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Sparkles className="w-4 h-4" />
                  Ask Luna AI
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;