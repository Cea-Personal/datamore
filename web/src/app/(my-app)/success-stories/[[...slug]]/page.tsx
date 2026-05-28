// app/success-stories/[[...slug]]/page.tsx
import SuccessStoriesHero from '@/(my-app)/components/PageHero'
import StoriesGrid from '@/(my-app)/components/StoriesGrid'
import SuccessStoriesCTA from '@/(my-app)/components/CTA'
import StoryExecutiveSummary from '@/(my-app)/components/StoryExecutiveSummary'
import StoryChallenge from '@/(my-app)/components/StoryChallenge'
import StorySolution from '@/(my-app)/components/StorySolution'
import StoryTestimonial from '@/(my-app)/components/StoryTestimonial'
import type { StoryData } from '@/(my-app)/types/success-story'
import { StoryFiles, LoadedStories, SuccessStoriesData } from '@/data/success-stories/index'

export default async function SuccessStoriesPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const storySlug = slug?.[0]
  

  if (!storySlug) {
    return (
      <>
        <SuccessStoriesHero data={SuccessStoriesData.hero} />
        <StoriesGrid data={LoadedStories } />
        <SuccessStoriesCTA data={SuccessStoriesData.cta} />
      </>
    )
  }

  const loadData = StoryFiles[storySlug as keyof typeof StoryFiles] || StoryFiles['optimizing-liquidity-risk-for-tier-1-fintech']
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