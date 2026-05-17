// app/success-stories/[[...slug]]/page.tsx
import SuccessStoriesData from '@/data/success-stories.json'
import SuccessStoriesHero from '@/components/SuccessStoriesHero'
import StoriesGrid from '@/components/StoriesGrid'
import SuccessStoriesCTA from '@/components/CTA'
import StoryHero from '@/components/StoryHero'
import StoryExecutiveSummary from '@/components/StoryExecutiveSummary'
import StoryChallenge from '@/components/StoryChallenge'
import StorySolution from '@/components/StorySolution'
import StoryTechnicalSpotlight from '@/components/StoryTechnicalSpotlight'
import StoryTestimonial from '@/components/StoryTestimonial'
import StoryCTA from '@/components/StoryCTA'
import type { StoryData } from '@/types/success-story'

const storyFiles = {
  'optimizing-liquidity-risk-for-tier-1-fintech': () => import('@/data/success-stories/optimizing-liquidity-risk-for-tier-1-fintech.json'),
  'supply-chain-predictive-modeling': () => import('@/data/success-stories/supply-chain-predictive-modeling.json'),
  'data-driven-philanthropy-impact': () => import('@/data/success-stories/data-driven-philanthropy-impact.json'),
  'enterprise-knowledge-retrieval': () => import('@/data/success-stories/enterprise-knowledge-retrieval.json'),
  'scaling-data-maturity-for-growth': () => import('@/data/success-stories/scaling-data-maturity-for-growth.json'),
}

export default async function SuccessStoriesPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const storySlug = slug?.[0]

  if (!storySlug) {
    return (
      <>
        <SuccessStoriesHero data={SuccessStoriesData.hero} />
        <StoriesGrid data={SuccessStoriesData.stories} />
        <SuccessStoriesCTA data={SuccessStoriesData.cta} />
      </>
    )
  }

  const loadData = storyFiles[storySlug as keyof typeof storyFiles] || storyFiles['optimizing-liquidity-risk-for-tier-1-fintech']
  const data = (await loadData()).default as StoryData

  return (
    <>
      <StoryHero data={data.hero} />
      <StoryExecutiveSummary data={data} />
      <StoryChallenge data={data.challenge} metrics={data.metrics} />
      <StorySolution data={data.solution} technicalSpotlight={data.technicalSpotlight} />
      <StoryTestimonial data={data.testimonial} />
      <StoryCTA data={data.cta} />
    </>
  )
}