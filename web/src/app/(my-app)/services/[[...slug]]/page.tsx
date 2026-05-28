// app/services/[[...slug]]/page.tsx
import ServicesData from '@data/services/services.json'
import ServicesHero from '@/(my-app)/components/PageHero'
import ServiceCategories from '@/(my-app)/components/ServiceCategories'
import ServicesCTA from '@/(my-app)/components/CTA'
import ServiceCapabilities from '@/(my-app)/components/ServiceCapabilities'
import ServiceSecurity from '@/(my-app)/components/ServiceSecurity'
import ServiceFeatures from '@/(my-app)/components/ServiceFeatures'
import ServiceInfrastructure from '@/(my-app)/components/ServiceInfrastructure'
import type { ServiceData, Capability } from '@/(my-app)/types/service'
import ServicePageImpact from '@/(my-app)/components/ServicePageImpact'

const serviceFiles = {
  'data-engineering': () => import('@data/services/data-engineering.json'),
  'bi': () => import('@data/services/bi.json'),
  'ai-llm-automation': () => import('@data/services/ai-llm-automation.json'),
  'data-strategy': () => import('@data/services/data-strategy.json'),
  'managed-data-services': () => import('@data/services/managed-data-services.json'),
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
        <ServicePageImpact data={ServicesData.impact} />
        <ServicesCTA data={ServicesData.cta} />
      </>
    )
  }
  
  const loadData = serviceFiles[serviceName as keyof typeof serviceFiles] || serviceFiles['data-engineering']
  const data = (await loadData()).default as ServiceData
  
  const capabilities: Capability[] = data.capabilities || data.offerings || data.pillars || []

  return (
    <>
      <ServicesHero data={data.hero} />
      <ServiceCapabilities data={capabilities} />
      {data.security && <ServiceSecurity data={data.security} />}
      {data.features && <ServiceFeatures data={data.features} />}
      {data.infrastructure && <ServiceInfrastructure data={data.infrastructure} />}
      <ServicePageImpact data={data.impact} />
      <ServicesCTA data={data.cta} />
    </>
  )
}