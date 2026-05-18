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

const serviceItems = [
  { href: '/services/data-engineering', label: 'Data Engineering & Infrastructure' },
  { href: '/services/bi', label: 'Business Intelligence & Analytics' },
  { href: '/services/ai-llm-automation', label: 'AI & LLM Automation' },
  { href: '/services/data-strategy', label: 'Data Strategy & Advisory' },
  { href: '/services/managed-data-services', label: 'Managed Data Services' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="bg-surface shadow-sm w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img alt="Datamore Logo" className="h-8 w-auto" src="/logo.svg" />
          <span className="-ml-0.5 text-headline-md text font-bold" style={{fontSize: '2rem'}}>atamore</span>
        </Link>
        <div className="hidden md:flex gap-gutter items-center">
          {navItems.slice(1).map((item) => (
            <div 
              key={item.href}
              className="relative"
              onMouseEnter={() => item.href === '/services' && setServicesOpen(true)}
              onMouseLeave={() => item.href === '/services' && setServicesOpen(false)}
            >
              <Link 
                href={item.href} 
                className={`${pathname.startsWith(item.href) ? 'text-body-md text-secondary border-b-2 border-secondary pb-1' : 'text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'}`}
              >
                {item.label}
              </Link>
              {item.href === '/services' && servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-surface-container-lowest rounded-lg shadow-lg border border-outline-variant p-4 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="space-y-2">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-body-md text-on-surface-variant hover:text-secondary transition-colors py-1"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <Link href="/contact" className="hidden md:flex glassy-button text-on-primary px-6 py-3 rounded-lg text-label-md active:scale-95 transition-transform">
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
        <div className="md:hidden fixed inset-0 bg-surface z-50 overflow-y-auto">
          <div className="px-margin-mobile py-4 flex justify-between items-center border-b border-outline-variant">
            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <img alt="Datamore Logo" className="h-8 w-auto" src="/logo.svg" />
              <span className="-ml-0.5 text-headline-md text font-bold" style={{fontSize: '2rem'}}>atamore</span>
            </Link>
            <button 
              className="flex items-center justify-center w-10 h-10 text-primary"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="px-margin-mobile py-8 space-y-6 min-h-screen">
            {navItems.slice(1).map((item) => (
              <div key={item.href}>
                <Link 
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-headline-md hover:underline decoration-2 underline-offset-4 ${item.href !== '/' && pathname.startsWith(item.href) ? 'text-secondary' : 'text-on-surface-variant'}`}
                >
                  {item.label}
                </Link>
                {item.href === '/services' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceItems.map((service) => (
<Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-body-lg text-on-surface-variant hover:underline decoration-2 underline-offset-4"
                        >
                          {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-headline-md text-secondary hover:underline decoration-2 underline-offset-4"
            >
              Book
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}