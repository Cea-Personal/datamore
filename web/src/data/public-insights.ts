import type { Article, InsightData } from '@/(my-app)/types/insight'
import { assessmentCTA } from './v1'

// Add CMS slugs only after reviewing the body, author and any evidence claims.
// An empty list keeps unaudited live content stored without exposing it in V1.
export const reviewedCMSInsightSlugs: readonly string[] = []

// Shortened versions of existing topics. No seeded author identities, client
// results, performance claims or proprietary frameworks are carried forward.
export const practicalInsights = [
  {
    slug: 'the-rise-of-semantic-layers-in-bi',
    title: 'Agree on your metrics before building more dashboards',
    category: 'Data & Analytics',
    summary: 'A practical starting point when sales, finance and operations report different numbers.',
    sections: [
      { type: 'heading', content: 'Start with a decision' },
      { type: 'text', content: 'Choose one business question your team needs to answer. Identify who uses the answer, how often it is needed, and what action follows. This gives reporting a clear purpose.' },
      { type: 'heading', content: 'Write down the definition' },
      { type: 'text', content: 'Agree on what the metric includes. For revenue, decide how to handle refunds, tax, currency and the date of recognition. Identify the source and who owns the definition.' },
      { type: 'heading', content: 'Use the same definition across reports' },
      { type: 'text', content: 'A shared data model or semantic layer can express business definitions once for multiple dashboards. Validate a small set of measures against the source systems before adding more reports.' },
    ],
  },
  {
    slug: 'ethics-and-transparency-in-financial-llms',
    title: 'Keep people and sources in your AI workflow',
    category: 'AI Automation',
    summary: 'Questions to ask before using an assistant to search company knowledge or process documents.',
    sections: [
      { type: 'heading', content: 'Choose approved knowledge' },
      { type: 'text', content: 'Define which documents the assistant may use and who can access them. An answer should point to its supporting sources so the person using it can check the context.' },
      { type: 'heading', content: 'Make uncertainty visible' },
      { type: 'text', content: 'Plan for missing, outdated and conflicting information. Give the workflow a way to say that it cannot answer, and route uncertain or consequential decisions to a person.' },
      { type: 'heading', content: 'Test against the real task' },
      { type: 'text', content: 'Use representative questions and documents to evaluate the workflow. Review source relevance, answer usefulness and errors with the people who will use the system before expanding its role.' },
    ],
  },
  {
    slug: 'modernizing-legacy-data-for-global-banks',
    title: 'Modernize one reporting process at a time',
    category: 'Data & Analytics',
    summary: 'A focused alternative to starting with a large platform replacement.',
    sections: [
      { type: 'heading', content: 'Map the current process' },
      { type: 'text', content: 'Trace a useful report from source systems to the final decision. Record manual steps, duplicated data and recurring quality problems. Keep the starting point visible so you can compare the new process.' },
      { type: 'heading', content: 'Build a narrow first implementation' },
      { type: 'text', content: 'Select the sources and measures needed for that report. Automate ingestion, document transformations and add validation checks. Test the new output alongside the current process.' },
      { type: 'heading', content: 'Expand based on use' },
      { type: 'text', content: 'Review reporting effort, data quality and adoption with the team. Improve the first implementation before connecting more systems or migrating work that already meets business needs.' },
    ],
  },
] satisfies { slug: string; title: string; category: string; summary: string; sections: InsightData['sections'] }[]

export function practicalInsightCards(): Article[] {
  return practicalInsights.map(insight => ({ slug: insight.slug, title: insight.title, description: insight.summary, category: insight.category, thumbnail: '/hero_image.png', date: '', readTime: '' }))
}

export function practicalInsightDetail(slug: string): InsightData | undefined {
  const insight = practicalInsights.find(item => item.slug === slug)
  if (!insight) return undefined
  return { title: insight.title, author: { name: 'Datamore', title: 'Practical guide', date: '' }, heroImage: { alt: 'Illustration of connected data workflows', url: '/hero_image.png' }, sections: insight.sections, socialShare: true, cta: assessmentCTA }
}
