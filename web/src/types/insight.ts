// src/types/insight.ts

export interface AuthorInfo {
  name: string
  title: string
  date: string
  imageUrl?: string
}

export interface HeroImage {
  alt: string
  url: string
}

export interface ROIData {
  label: string
  value: string
  color?: string
}

export interface Section {
  type: 'text' | 'heading' | 'roi-chart'
  content: string
  title?: string
  data?: ROIData[]
  variant?: string
}

export interface RelatedArticle {
  title: string
  readTime: string
  imageUrl: string
}

export interface CTA {
  title: string
  subtitle: string
  primaryButton: {
    label: string
    icon: string
  }
  secondaryButton: {
    label: string
  }
}

export interface InsightData {
  title: string
  author: AuthorInfo
  heroImage: HeroImage
  sections: Section[]
  socialShare?: boolean
  relatedArticles?: RelatedArticle[]
  cta: CTA
}

export interface Article {
  slug: string
  thumbnail: string
  category: string
  date: string
  readTime: string
  title: string
  description: string
}