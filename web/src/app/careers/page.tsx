// app/careers/page.tsx
import CareersData from '@/data/careers.json'
import CareersHero from '@/components/CareersHero'
import PositionsList from '@/components/PositionsList'
import CareersCTA from '@/components/CTA'

export default function CareersPage() {
  return (
    <>
      <CareersHero data={CareersData.hero} />
      <PositionsList data={CareersData.positions} />
      <CareersCTA data={CareersData.cta} />
    </>
  )
}