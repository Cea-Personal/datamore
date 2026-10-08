import Link from 'next/link'
import { FooterSection } from './FooterSection'
import { FooterLinkList } from './FooterLinkList'
import { SocialIcon } from './SocialIcons'
import FooterData from '@data/footer.json'
import { secondaryPagesVisible } from '@data/v1'

export default function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary-container border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          <div className="md:col-span-3 md:col-start-3">
            <Link href="/" className="flex items-center mb-6">
              <img alt="" src="/logo.svg" className="h-6 w-auto brightness-0 invert opacity-90" />
              <span className="-ml-0.5 text-headline-md font-bold text-white">
                atamore
              </span>
            </Link>
            <p className="text-body-md text-white/80 max-w-xs leading-relaxed">
              Reliable analytics and AI-powered workflows for growing organizations.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <FooterSection title="Solutions">
              <FooterLinkList links={FooterData.servicelinks} />
            </FooterSection>
          </div>
          <div className="md:col-span-2 md:col-start-8">
            <FooterSection title="Company">
              <FooterLinkList links={FooterData.companyLinks.filter(link => secondaryPagesVisible || !['/insights', '/about'].includes(link.href))} />
            </FooterSection>
          </div>
          <div className="md:col-span-2 md:col-start-10">
            <FooterSection title="Legal">
              <FooterLinkList links={FooterData.legalLinks} />
            </FooterSection>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-body-md text-white/70">
            © {new Date().getFullYear()} Datamore. All rights reserved.
          </span>
          <SocialIcon />
        </div>
      </div>
    </footer>
  )
}
