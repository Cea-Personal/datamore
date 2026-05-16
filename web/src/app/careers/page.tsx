// app/careers/page.tsx
import CareersData from '@/src/data/careers.json'
import CareersHero from '@/src/components/CareersHero'
import PositionsList from '@/src/components/PositionsList'
import CareersCTA from '@/src/components/CareersCTA'

export default function CareersPage() {
  return (
    <>
      <CareersHero data={CareersData.hero} />
      <PositionsList data={CareersData.positions} />
      <CareersCTA data={CareersData.cta} />
    </>
  )
}