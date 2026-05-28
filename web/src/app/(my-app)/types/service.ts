// src/types/service.ts
export interface ServiceHero {
  title: string
  subtitle: string
  badge?: {
    label: string
    caption: string
    icon: string
  }
  image: {
    alt: string
    url: string
  }
}

export interface Capability {
  icon: string
  title: string
  description: string
  features?: string[]
  gridSpan?: number
  image?: string
  regulatoryScore?: number
}

export interface SecurityFeature {
  icon: string
  title: string
  description: string
}

export interface SecurityData {
  title: string
  subtitle: string
  features: SecurityFeature[]
  metrics: { label: string; value: string }[]
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface InfrastructureFeature {
  icon: string
  title: string
  description: string
}

export interface FeatureData {
  title: string
  items: FeatureItem[]
}

export interface InfrastructureData {
  title: string
  subtitle: string
  features: InfrastructureFeature[]
  metrics?: { label: string; value: string }[]
}

export interface RoadmapStep {
  num: string
  title: string
  description: string
}

export interface Metric {
  value: string
  label: string
  description: string
}

export interface ServiceData {
  hero: ServiceHero
  capabilities?: Capability[]
  offerings?: Capability[]
  pillars?: Capability[]
  features?: FeatureData
  security?: SecurityData
  infrastructure?: InfrastructureData
  roadmap?: {
    title: string
    steps: RoadmapStep[]
  }
  impact: {
    title: string
    metrics: Metric[]
  }
  cta: {
    title: string
    subtitle: string
    primaryButton?: { label: string; url: string }
    secondaryButton?: { label: string; url: string }
  }
}

export type ServiceDataType = 'data-engineering' | 'bi' | 'ai-llm-automation' | 'data-strategy' | 'managed-data-services'