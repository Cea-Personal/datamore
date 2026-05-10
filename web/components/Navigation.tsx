'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto h-16 px-margin-mobile flex justify-between items-center">
        <Link href="/" className="text-on-surface font-display font-bold text-xl tracking-wider">
          DATAMORE
        </Link>
        <div className="hidden md:flex gap-8">
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
            href="/work"
            className={`text-sm font-medium tracking-wide transition-colors ${
              pathname.startsWith('/work') ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Our Work
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
    </nav>
  );
}
