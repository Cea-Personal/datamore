// src/components/ContactHero.tsx
import Image from 'next/image'
import ContactForm from './ContactForm'

export default function ContactHero() {
  return (
    <section className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Left Column: Branding & Info */}
        <div className="md:col-span-5 flex flex-col gap-12">
          <div className="space-y-6">
<h1 className="text-display-lg-mobile md:text-display-lg text-primary leading-tight">
              Build More Value <br/>From <span className="text-secondary">Your Data</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-md">
              Transforming complex financial and non-profit data into actionable strategic insights through enterprise-grade AI.
            </p>
          </div>
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-caption text-outline">Email us at</p>
                  <p className="text-body-md font-semibold">contact@datamore.org</p>
                </div>
              </div>
              <h3> Follow Us</h3>
<div className="flex items-center gap-6 mt-4">
                <a href="https://facebook.com/profile.php?id=61590612928160" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-on-primary-container/90 hover:text-secondary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.95H7.9v-2.93h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.93h-2.34v6.95C18.34 21.13 22 17 22 12z"/></svg>
                  <span className="text-body-md">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/data-more/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-on-primary-container/90 hover:text-secondary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.52c0-1.33-.02-3.04-1.86-3.04-1.87 0-2.16 1.46-2.16 2.95v5.57H9.34V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v5.6zM5.34 7.43a2.04 2.04 0 110-4.08 2.04 2.04 0 010 4.08zM7.14 20.45H3.55V9h3.59v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.55C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                  <span className="text-body-md">LinkedIn</span>
                </a>
              </div>
              
              {/* Address & Map */}
              <div className="space-y-4">
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-premium glass-edge">
                  <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Contact Form - will be in separate component */}
        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}