"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/work', label: 'Work' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
]
const solutionItems = [
  { href: '/solutions/data-analytics', label: 'Data & Analytics' },
  { href: '/solutions/ai-automation', label: 'AI Automation' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href) || (href === '/solutions' && pathname.startsWith('/services')) || (href === '/work' && pathname.startsWith('/success-stories'))
  const closeMenus = () => { setMobileOpen(false); setSolutionsOpen(false) }
  const linkClass = (href: string) => `text-body-md transition-colors hover:text-secondary ${isActive(href) ? 'text-secondary' : 'text-on-surface-variant'}`

  return (
    <nav aria-label="Main navigation" className="bg-surface shadow-sm w-full relative z-50">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center gap-4">
        <Link href="/" aria-label="Datamore home" onClick={closeMenus} className="flex items-center shrink-0">
          <img alt="" className="h-8 w-auto" src="/logo.svg" />
          <span className="-ml-0.5 text-headline-md font-bold text-primary" style={{ fontSize: '2rem' }}>atamore</span>
        </Link>
        <div className="hidden xl:flex gap-6 items-center">
          {navItems.map(item => item.href === '/solutions' ? (
            <div key={item.href} className="relative" onKeyDown={event => { if (event.key === 'Escape') setSolutionsOpen(false) }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setSolutionsOpen(false) }}>
              <div className="flex items-center gap-1">
                <Link href={item.href} className={linkClass(item.href)} onClick={closeMenus} aria-current={isActive(item.href) ? 'page' : undefined}>{item.label}</Link>
                <button type="button" aria-label="Show solution areas" aria-expanded={solutionsOpen} aria-controls="solution-links" onClick={() => setSolutionsOpen(!solutionsOpen)} className="p-2 text-secondary">
                  <span aria-hidden="true" className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
              {solutionsOpen && (
                <div id="solution-links" className="absolute top-full left-0 w-60 bg-white rounded-lg shadow-lg border border-outline-variant p-4 space-y-3">
                  {solutionItems.map(solution => <Link key={solution.href} href={solution.href} onClick={closeMenus} className="block text-body-md hover:text-secondary">{solution.label}</Link>)}
                </div>
              )}
            </div>
          ) : (
            <Link key={item.href} href={item.href} className={linkClass(item.href)} onClick={closeMenus} aria-current={isActive(item.href) ? 'page' : undefined}>{item.label}</Link>
          ))}
          <Link href="/contact" onClick={closeMenus} className="glassy-button text-on-primary px-5 py-3 rounded-lg text-label-md">Free Data &amp; AI Assessment</Link>
        </div>
        <button type="button" className="xl:hidden flex items-center justify-center w-11 h-11 text-primary" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
          <span aria-hidden="true" className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      {mobileOpen && (
        <div id="mobile-navigation" className="xl:hidden px-margin-mobile py-6 border-t border-outline-variant space-y-4">
          {navItems.map(item => (
            <div key={item.href}>
              <Link href={item.href} onClick={closeMenus} className={`block ${linkClass(item.href)}`} aria-current={isActive(item.href) ? 'page' : undefined}>{item.label}</Link>
              {item.href === '/solutions' && <div className="pl-4 mt-3 space-y-3">{solutionItems.map(solution => <Link key={solution.href} href={solution.href} onClick={closeMenus} className="block text-body-md text-on-surface-variant">{solution.label}</Link>)}</div>}
            </div>
          ))}
          <Link href="/contact" onClick={closeMenus} className="inline-block glassy-button text-on-primary px-5 py-3 rounded-lg text-label-md">Free Data &amp; AI Assessment</Link>
        </div>
      )}
    </nav>
  )
}
