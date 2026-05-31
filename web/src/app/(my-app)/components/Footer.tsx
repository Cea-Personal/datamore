'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FooterSection } from './FooterSection'
import { FooterLinkList } from './FooterLinkList'
import { SocialIcon } from './SocialIcons'
import FooterData from '@data/footer.json'

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          <div className="md:col-span-3 md:col-start-2">
            <Link href="/" className="flex items-center mb-6">
              <img src="/logo.svg" className="h-6 w-auto brightness-0 invert opacity-90" />
              <span className="-ml-0.5 text-headline-md font-bold text-white">
                atamore
              </span>
            </Link>
            <p className="text-body-md text-on-primary-container/80 max-w-xs leading-relaxed">
              Empowering decision-makers with rigorous data engineering and strategic AI automation.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <FooterSection title="Services">
              <FooterLinkList links={FooterData.servicelinks} />
            </FooterSection>
          </div>
          <div className="md:col-span-2 md:col-start-8">
            <FooterSection title="Company">
              <FooterLinkList links={FooterData.companyLinks} />
            </FooterSection>
          </div>
          <div className="md:col-span-2 md:col-start-10">
            <FooterSection title="Legal">
              <FooterLinkList links={FooterData.legalLinks} />
            </FooterSection>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-body-md text-on-primary-container/70">
            © 2024 Datamore. All rights reserved.
          </span>
          <div className="flex gap-6">
            {FooterData.socialIcons.map((icon) => (
              <SocialIcon key={icon} name={icon} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}