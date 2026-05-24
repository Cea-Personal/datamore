// app/careers/page.tsx
import CareersData from '@/data/careers.json'
import CareersHero from '@/components/PageHero'
import CareersValues from '@/components/CareersValues'
import CareersWhyJoin from '@/components/CareersWhyJoin'
import Link from 'next/link'

export default function CareersPage() {
  return (
    <>
      <CareersHero data={CareersData.hero} />
      <CareersValues data={CareersData.values} />
      <CareersWhyJoin data={CareersData.benefits} />
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <Link 
          href="/careers/positions" 
          className="inline-block bg-primary text-on-primary px-8 py-4 rounded-lg text-label-md hover:bg-secondary transition-all active:scale-95"
        >
          View Open Positions
        </Link>
      </section>
    </>
  )
}