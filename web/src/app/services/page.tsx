// app/services/page.tsx
import ServicesData from '@/src/data/services.json'
import ServicesHero from '@/src/components/ServicesHero'
import ServiceCategories from '@/src/components/ServiceCategories'
import ServiceImpact from '@/src/components/ServiceImpact'
import ServicesCTA from '@/src/components/ServicesCTA'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero data={ServicesData.hero} />
      <ServiceCategories data={ServicesData.categories} />
      <ServiceImpact data={ServicesData.impact} />
      <ServicesCTA data={ServicesData.cta} />
    </>
  )
}