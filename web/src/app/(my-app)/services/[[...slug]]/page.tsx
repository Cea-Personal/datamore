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
  'data-foundations': () => import('@data/services/data-foundation.json'),
  'bi-analytics': () => import('@data/services/bi-analytics.json'),
  'ai-automation': () => import('@data/services/ai-automation.json'),
  'systems-integration': () => import('@data/services/systems-integration.json'),
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
  
  const loadData = serviceFiles[serviceName as keyof typeof serviceFiles] 
  const data = (await loadData()).default as ServiceData
  
  const capabilities: Capability[] = data.capabilities || data.offerings || data.pillars || []

  return (
    <>
      <ServicesHero data={data.hero} />
      <ServiceCapabilities data={capabilities} />
      <ServicePageImpact data={data.impact} />
      <ServicesCTA data={data.cta} />
    </>
  )
}