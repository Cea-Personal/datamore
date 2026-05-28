'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log('Subscribing email:', email)
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-primary-container text-on-primary-container border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-10">
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          <div className="md:col-span-3">
            <Link href="/" className="flex items-center mb-6">
              <img alt="Datamore Logo" className="h-6 w-auto brightness-0 invert opacity-90" src="/logo.svg" />
              <span className="-ml-0.5 text-headline-md font-bold text-white">atamore</span>
            </Link>
            <p className="text-body-md text-on-primary-container/80 max-w-xs leading-relaxed">
              Empowering decision-makers with rigorous data engineering and strategic AI automation.
            </p>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-label-md mb-6 text-white uppercase tracking-wider">Services</h6>
            <ul className="space-y-4">
              <li>
                <Link href="/services/data-engineering" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/bi" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/ai-llm-automation" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  AI & LLM Automation
                </Link>
              </li>
              <li>
                <Link href="/services/data-strategy" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  Data Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/managed-data-services" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  Managed Data Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <h6 className="text-label-md mb-6 text-white uppercase tracking-wider">Company</h6>
            <ul className="space-y-4">
              <li>
                <Link href="/success-stories" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-label-md mb-6 text-white uppercase tracking-wider">Legal</h6>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h6 className="text-label-md mb-6 text-white uppercase tracking-wider">Stay Updated</h6>
            {subscribed ? (
              <p className="text-body-md text-tertiary-fixed font-label-md">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-full">
                <input
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-white/40 min-w-0"
                  placeholder="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="bg-secondary text-white px-6 py-3 rounded-lg text-label-md hover:bg-secondary/90 transition-colors whitespace-nowrap">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-body-md text-on-primary-container/70">© 2024 Datamore. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-on-primary-container/70 hover:text-on-primary-container transition-opacity cursor-pointer">
              public
            </span>
            <span className="material-symbols-outlined text-on-primary-container/70 hover:text-on-primary-container transition-opacity cursor-pointer">
              terminal
            </span>
            <span className="material-symbols-outlined text-on-primary-container/70 hover:text-on-primary-container transition-opacity cursor-pointer">
              monitoring
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}