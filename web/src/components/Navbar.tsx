// src/components/Navbar.tsx
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-surface sticky top-0 z-50 shadow-sm w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img alt="Datamore Logo" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ugacJ5dMBxRkXdS03XhMkj7gCoE2d8i3qE97MysiBXpfy12t-0cBr3M8ucg6o4UFJvO6ij3JphzzoMQ15EbS6qpL8FFPJTKpOyJ8o6-7P5wq6oXPHX1hVDRbNu69eyquWaKXie39JN0_qCBZ0sjUv7Ca8eIeod0XNpJpjDxrCJ3v0r1QhM5w3taJX-SYr4tgr8ketyFPlRRUvlNT6j0GorWu5r3QtqKCKMEvbUXqdHE_gx-O8kLeUA8icMt" />
          <span className="ml-2 text-headline-md text-headline-md font-bold text-primary">Datamore</span>
        </div>
        <div className="hidden md:flex gap-gutter items-center">
          <Link 
            href="/services" 
             className={`${pathname === '/services' ? 'text-body-md text-body-md text-secondary border-b-2 border-secondary pb-1' : 'text-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'}`}
          >
            Services
          </Link>
          <Link 
            href="/success-stories" 
             className={`${pathname === '/success-stories' ? 'text-body-md text-body-md text-secondary border-b-2 border-secondary pb-1' : 'text-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'}`}
          >
            Success Stories
          </Link>
          <Link 
            href="/insights" 
             className={`${pathname === '/insights' ? 'text-body-md text-secondary border-b-2 border-secondary pb-1' : 'text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'}`}
          >
            Insights
          </Link>
          <Link 
            href="/careers" 
             className={`${pathname === '/careers' ? 'text-body-md text-secondary border-b-2 border-secondary pb-1' : 'text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200'}`}
          >
            Careers
          </Link>
        </div>
        <Link href="/contact" className="glassy-button text-on-primary px-6 py-3 rounded-lg text-label-md active:scale-95 transition-transform">
          Book
        </Link>
      </div>
    </nav>
  )
}