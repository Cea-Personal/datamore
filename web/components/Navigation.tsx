'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto h-16 px-margin-mobile flex justify-between items-center">
        <Link href="/" className="text-on-surface font-display font-bold text-xl tracking-wider">
          DATAMORE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/services') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Services
            </Link>
            <Link
              href="/products"
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname.startsWith('/products') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Products
            </Link>
            <Link
              href="/use-cases"
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname.startsWith('/use-cases') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Use Cases
            </Link>
            <Link
              href="/insights"
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname.startsWith('/insights') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/contact') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Contact
            </Link>
          </div>
          <Link
            href="/contact"
            className="bg-primary text-on-surface px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-on-surface-variant hover:text-on-surface p-2"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link
            href="/contact"
            className="bg-primary text-on-surface px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container border-b border-outline-variant/30">
          <div className="flex flex-col py-4 px-margin-mobile gap-2">
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
               }`}
               onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
             <Link
               href="/services"
               className={`text-sm font-medium tracking-wide transition-colors ${
                 isActive('/services') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
               }`}
               onClick={() => setMobileMenuOpen(false)}
             >
               Services
             </Link>
             <Link
               href="/products"
               className={`text-sm font-medium tracking-wide transition-colors ${
                 pathname.startsWith('/products') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
               }`}
               onClick={() => setMobileMenuOpen(false)}
             >
               Products
             </Link>
             <Link
               href="/use-cases"
               className={`text-sm font-medium tracking-wide transition-colors ${
                 pathname.startsWith('/use-cases') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
               }`}
               onClick={() => setMobileMenuOpen(false)}
             >
               Use Cases
             </Link>
             <Link
               href="/insights"
               className={`text-sm font-medium tracking-wide transition-colors ${
                 pathname.startsWith('/insights') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
               }`}
               onClick={() => setMobileMenuOpen(false)}
             >
               Insights
             </Link>
             <Link
               href="/contact"
               className={`text-sm font-medium tracking-wide transition-colors ${
                 isActive('/contact') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
               }`}
               onClick={() => setMobileMenuOpen(false)}
             >
               Contact
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
