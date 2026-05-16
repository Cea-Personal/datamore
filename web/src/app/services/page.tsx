// app/services/page.tsx
import ServicesData from '@/data/services.json'
import ServicesHero from '@/components/ServicesHero'
import ServiceCategories from '@/components/ServiceCategories'
import ServiceImpact from '@/components/ServiceImpact'
import ServicesCTA from '@/components/CTA'

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