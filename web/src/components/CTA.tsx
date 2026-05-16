// src/components/CTA.tsx
import Link from 'next/link'

interface CTAProps {
  title: string
  subtitle: string
  primaryButton: {
    label: string
    url: string
    className?: string
  }
  secondaryButton: {
    label: string
    url: string
    className?: string
  }
}

export default function CTA({ title, subtitle, primaryButton, secondaryButton }: CTAProps) {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8">
          {title}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href={primaryButton.url}
            className={`${primaryButton.className} text-on-primary px-10 py-5 rounded-lg font-label-md text-label-md hover:brightness-110 shadow-xl transition-all`}
          >
            {primaryButton.label}
          </Link>
          <Link
            href={secondaryButton.url}
            className={`${secondaryButton.className} px-10 py-5 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all`}
          >
            {secondaryButton.label}
          </Link>
        </div>
      </div>
    </section>
  )
}