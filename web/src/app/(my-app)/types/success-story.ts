export interface StoryHero {
  title: string
  subtitle: string
  badge?: {
    label: string
    icon: string
  }
  image: {
    alt: string
    url: string
  }
}

export interface Challenge {
  title: string
  description: string
  items: { icon: string; text: string }[]
}

export interface SolutionFeature {
  icon: string
  title: string
  description: string
}

export interface Solution {
  title: string
  description: string
  features: SolutionFeature[]
}

export interface TechnicalSpotlight {
  title: string
  metrics: { label: string; value: string; percentage?: number }[]
  quote?: string
}

export interface Testimonial {
  quote: string
  author: string
  title: string
  image: {
    alt: string
    url: string
  }
}

export interface StoryData {
  hero: StoryHero
  executiveSummary: string
  metrics: { value: string; label: string }[]
  challenge: Challenge
  solution: Solution
  technicalSpotlight?: TechnicalSpotlight
  testimonial: Testimonial
  cta: {
    title: string
    subtitle: string
    primaryButton: { label: string; url: string }
    secondaryButton: { label: string; url: string }
  }
}