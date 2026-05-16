// src/components/Navbar.tsx
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/insights', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-surface shadow-sm w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img alt="Datamore Logo" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ugacJ5dMBxRkXdS03XhMkj7gCoE2d8i3qE97MysiBXpfy12t-0cBr3M8ucg6o4UFJvO6ij3JphzzoMQ15EbS6qpL8FFPJTKpOyJ8o6-7P5wq6oXPHX1hVDRbNu69eyquWaKXie39JN0_qCBZ0sjUv7Ca8eIeod0XNpJpjDxrCJ3v0r1QhM5w3taJX-SYr4tgr8ketyFPlRRUvlNT6j0GorWu5r3QtqKCKMEvbUXqdHE_gx-O8kLeUA8icMt" />
          <span className="-ml-1 text-headline-md font-bold text-primary">atamore</span>
        </Link>
        <div className="hidden md:flex gap-gutter items-center">
          {navItems.slice(1).map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`${pathname === item.href ? 'text-body-md text-secondary border-b-2 border-secondary pb-1' : 'text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="glassy-button text-on-primary px-6 py-3 rounded-lg text-label-md active:scale-95 transition-transform">
          Book
        </Link>
        
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant">
          <div className="px-margin-mobile py-4 space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-body-md ${pathname === item.href ? 'text-secondary' : 'text-on-surface-variant'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-body-md text-secondary"
            >
              Book
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}