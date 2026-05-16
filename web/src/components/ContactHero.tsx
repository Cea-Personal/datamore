// src/components/ContactHero.tsx
import Image from 'next/image'
import ContactForm from './ContactForm'

export default function ContactHero() {
  return (
    <section className="pt-32 pb-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Left Column: Branding & Info */}
        <div className="md:col-span-5 flex flex-col gap-12">
          <div className="space-y-6">
            <h1 className="font-display-lg text-display-lg text-primary leading-tight">
              Let’s Build More Value From Your Data
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
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
                  <p className="font-caption text-caption text-outline">Email us at</p>
                  <p className="font-body-md text-body-md font-semibold">partnerships@datamore.ai</p>
                </div>
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