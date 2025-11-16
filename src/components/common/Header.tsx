'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-white to-blue-100 text-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/1.png" alt="Logo" width={80} height={80} />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className={`${pathname === '/' ? 'text-blue-600 font-semibold' : ''} hover:text-blue-200 transition-colors`}>Home</Link></li>
            <li><Link href="/services" className={`${pathname === '/services' ? 'text-blue-600 font-semibold' : ''} hover:text-blue-200 transition-colors`}>Services</Link></li>
            <li><Link href="/portfolio" className={`${pathname === '/portfolio' ? 'text-blue-600 font-semibold' : ''} hover:text-blue-200 transition-colors`}>Portfolio</Link></li>
            <li><Link href="/insights" className={`${pathname.startsWith('/insights') ? 'text-blue-600 font-semibold' : ''} hover:text-blue-200 transition-colors`}>Insights</Link></li>
            <li><Link href="/contact" className={`${pathname === '/contact' ? 'text-blue-600 font-semibold' : ''} hover:text-blue-200 transition-colors`}>Contact Us</Link></li>
          </ul>
        </nav>
        {/* Mobile menu button - placeholder for future implementation */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;