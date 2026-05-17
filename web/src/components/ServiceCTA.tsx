// src/components/ServiceCTA.tsx
import Link from 'next/link'

interface ServiceCTAData {
  title: string
  subtitle: string
  primaryButton?: {
    label: string
    url: string
  }
  secondaryButton?: {
    label: string
    url: string
  }
}

export default function ServiceCTA({ data }: { data: ServiceCTAData }) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8">{data.title}</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">{data.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {data.primaryButton && (
            <Link href={data.primaryButton.url} className="bg-secondary text-on-secondary px-10 py-4 rounded-lg font-label-md text-label-md hover:brightness-110 transition-all">
              {data.primaryButton.label}
            </Link>
          )}
          {data.secondaryButton && (
            <Link href={data.secondaryButton.url} className="glass-edge px-10 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all">
              {data.secondaryButton.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}