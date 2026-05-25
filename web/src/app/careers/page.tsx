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
    </>
  )
}