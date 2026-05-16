// src/components/Navbar.tsx
"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SiDatamore } from 'react-icons/si'
import { BsBookmarkStar } from 'react-icons/bs'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-surface sticky top-0 z-50 shadow-sm w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Datamore Logo as D */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              D
            </span>
            <span className="ml-2 font-headline-md text-headline-md font-bold text-primary">
              atamore
            </span>
          </div>
        </div>
      <div className="hidden md:flex gap-gutter items-center">
          <Link 
            href="/services" 
            className={`${pathname} === '/services' ? 'font-body-md text-body-md text-secondary border-b-2 border-secondary pb-1' : 'font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'`}
          >
            Services
          </Link>
          <Link 
            href="/success-stories" 
            className={`${pathname} === '/success-stories' ? 'font-body-md text-body-md text-secondary border-b-2 border-secondary pb-1' : 'font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'`}
          >
            Success Stories
          </Link>
          <Link 
            href="/insights" 
            className={`${pathname} === '/insights' ? 'font-body-md text-body-md text-secondary border-b-2 border-secondary pb-1' : 'font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'`}
          >
            Insights
          </Link>
          <Link 
            href="/careers" 
            className={`${pathname} === '/careers' ? 'font-body-md text-body-md text-secondary border-b-2 border-secondary pb-1' : 'font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'`}
          >
            Careers
          </Link>
        </div>
        <Link href="/contact" className="glassy-button text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
          Book
        </Link>
      </div>
  </nav>
  )
}