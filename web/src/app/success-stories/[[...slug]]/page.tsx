// app/success-stories/[[...slug]]/page.tsx
import SuccessStoriesData from '@/data/success-stories.json'
import SuccessStoriesHero from '@/components/PageHero'
import StoriesGrid from '@/components/StoriesGrid'
import SuccessStoriesCTA from '@/components/CTA'
import StoryExecutiveSummary from '@/components/StoryExecutiveSummary'
import StoryChallenge from '@/components/StoryChallenge'
import StorySolution from '@/components/StorySolution'
import StoryTestimonial from '@/components/StoryTestimonial'
import type { StoryData } from '@/types/success-story'
import { storyFiles, loadedStories } from '@/utils/success-stories'

export default async function SuccessStoriesPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const storySlug = slug?.[0]
  

  if (!storySlug) {
    return (
      <>
        <SuccessStoriesHero data={SuccessStoriesData.hero} />
        <StoriesGrid data={loadedStories } />
        <SuccessStoriesCTA data={SuccessStoriesData.cta} />
      </>
    )
  }

  const loadData = storyFiles[storySlug as keyof typeof storyFiles] || storyFiles['optimizing-liquidity-risk-for-tier-1-fintech']
  const data = (await loadData()).default as StoryData

  return (
    <>
      <SuccessStoriesHero data={data.hero} />
      <StoryExecutiveSummary data={data} />
      <StoryChallenge data={data.challenge} metrics={data.metrics} />
      <StorySolution data={data.solution} technicalSpotlight={data.technicalSpotlight} />
      <StoryTestimonial data={data.testimonial} />
      <SuccessStoriesCTA data={data.cta} />
    </>
  )
}