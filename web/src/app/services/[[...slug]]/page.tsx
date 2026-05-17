// app/services/[[...slug]]/page.tsx
import ServicesData from '@/data/services.json'
import ServicesHero from '@/components/ServicesHero'
import ServiceCategories from '@/components/ServiceCategories'
import ServiceImpact from '@/components/ServiceImpact'
import ServicesCTA from '@/components/CTA'
import ServicePageHero from '@/components/ServicePageHero'
import ServiceCapabilities from '@/components/ServiceCapabilities'
import ServiceSecurity from '@/components/ServiceSecurity'
import ServicePageImpact from '@/components/ServicePageImpact'
import ServiceFeatures from '@/components/ServiceFeatures'
import ServiceInfrastructure from '@/components/ServiceInfrastructure'
import type { ServiceData, Capability } from '@/types/service'

const serviceFiles = {
  'data-engineering': () => import('@/data/services/data-engineering.json'),
  'bi': () => import('@/data/services/bi.json'),
  'ai-llm-automation': () => import('@/data/services/ai-llm-automation.json'),
  'data-strategy': () => import('@/data/services/data-strategy.json'),
  'managed-data-services': () => import('@/data/services/managed-data-services.json'),
}

export default async function ServicePage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const serviceName = slug?.[0]
  
  // If no slug, show the main services overview page
  if (!serviceName) {
    return (
      <>
        <ServicesHero data={ServicesData.hero} />
        <ServiceCategories data={ServicesData.categories} />
        <ServiceImpact data={ServicesData.impact} />
        <ServicesCTA data={ServicesData.cta} />
      </>
    )
  }
  
  const loadData = serviceFiles[serviceName as keyof typeof serviceFiles] || serviceFiles['data-engineering']
  const data = (await loadData()).default as ServiceData
  
  const capabilities: Capability[] = data.capabilities || data.offerings || data.pillars || []

  return (
    <>
      <ServicePageHero data={data.hero} />
      <ServiceCapabilities data={capabilities} />
      {data.security && <ServiceSecurity data={data.security} />}
      {data.features && <ServiceFeatures data={data.features} />}
      {data.infrastructure && <ServiceInfrastructure data={data.infrastructure} />}
      <ServicePageImpact data={data.impact} />
      <ServicesCTA data={data.cta} />
    </>
  )
}