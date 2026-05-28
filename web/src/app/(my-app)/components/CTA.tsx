// src/components/ReadyToScaleCTA.tsx
import Link from 'next/link'

interface ReadyToScaleCTAData {
  title: string
  subtitle: string
}

export default function ReadyToScaleCTA({ data }: { data: ReadyToScaleCTAData }) {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="text-headline-lg text-primary mb-6">{data.title}</h2>
        <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
          {data.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={"/contact"} className="glassy-button text-on-primary px-10 py-4 rounded-lg text-label-md active:scale-95 transition-transform">
                Book a Session
              </Link>
              <Link href={"/success-stories"} className="border border-outline-variant hover:border-secondary transition-colors text-primary px-10 py-4 rounded-lg text-label-md">
                View Success Stories
              </Link>
        </div>
      </div>
    </section>
  )
}