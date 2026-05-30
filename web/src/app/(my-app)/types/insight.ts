// src/types/insight.ts

import { Media } from "@payload-types"

export interface AuthorInfo {
  name: string
  title: string
  date: string
  imageUrl?: string | null
}

export interface HeroImage {
  alt: string | null | undefined
  url: string | null | undefined
}

export interface ROIData {
  label?: string  | null
  value?: string  | null
  color?: string  | null
  id?: string | null
}

export interface Section {
  type: 'text' | 'heading' | 'Chart' | 'image'
  content: string
  title?: string | null
  data?: ROIData[] | null
  variant?: string | null 
  image?: {
    alt: string
    url: string
  }
}

export interface RelatedArticle {
  title: string
  readTime: string
  imageUrl: string
}

export interface CTA {
  title: string
  subtitle: string
  primaryButton?: {
    label: string
    url?: string
    icon?: string
  }
  secondaryButton?: {
    label: string
    url?: string
  }
}

export interface InsightData {
  id?: number
  title: string
  author: AuthorInfo
  heroImage: HeroImage
  sections: Section[]
  socialShare?: boolean | null | undefined
  relatedArticles?: RelatedArticle[]
  cta?: CTA
  likes?: number
}

export interface Article {
  slug: string
  thumbnail: string | number | Media
  category: string
  date: string
  readTime: string
  title: string
  description: string
  likes?: number
}
  