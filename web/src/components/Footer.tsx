// src/components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary-container border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-10">
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          <div className="md:col-span-3">
            <Link href="/" className="flex items-center mb-6">
              <img alt="Datamore Logo" className="h-6 w-auto brightness-0 invert opacity-90" src="https://lh3.googleusercontent.com/aida/ADBb0ugacJ5dMBxRkXdS03XhMkj7gCoE2d8i3qE97MysiBXpfy12t-0cBr3M8ucg6o4UFJvO6ij3JphzzoMQ15EbS6qpL8FFPJTKpOyJ8o6-7P5wq6oXPHX1hVDRbNu69eyquWaKXie39JN0_qCBZ0sjUv7Ca8eIeod0XNpJpjDxrCJ3v0r1QhM5w3taJX-SYr4tgr8ketyFPlRRUvlNT6j0GorWu5r3QtqKCKMEvbUXqdHE_gx-O8kLeUA8icMt" />
              <span className="-ml-1 text-headline-md font-bold text-white">atamore</span>
            </Link>
            <p className="text-body-md opacity-80 max-w-xs leading-relaxed">
              Empowering decision-makers with rigorous data engineering and strategic AI automation.
            </p>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-label-md mb-6 text-white uppercase tracking-wider">Services</h6>
            <ul className="space-y-4">
              <li>
                <Link href="/services/data-engineering" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/bi" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/ai-llm-automation" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  AI & LLM Automation
                </Link>
              </li>
              <li>
                <Link href="/services/data-strategy" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  Data Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/managed-data-services" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  Managed Data Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <h6 className="text-label-md mb-6 text-white uppercase tracking-wider">Company</h6>
            <ul className="space-y-4">
              <li>
                <Link href="/success-stories" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-label-md mb-6 text-white uppercase tracking-wider">Legal</h6>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-body-md opacity-70 hover:opacity-100 hover:text-tertiary-fixed transition-all">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h6 className="text-label-md mb-6 text-white uppercase tracking-wider">Stay Updated</h6>
            <div className="flex gap-2">
              <input
                className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-white/40"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-secondary text-white px-6 py-3 rounded-lg text-label-md hover:bg-secondary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-body-md opacity-60">© 2024 Datamore. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="material-symbols-outlined opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
              public
            </span>
            <span className="material-symbols-outlined opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
              terminal
            </span>
            <span className="material-symbols-outlined opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
              monitoring
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}