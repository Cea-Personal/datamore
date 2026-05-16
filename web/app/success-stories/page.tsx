// app/success-stories/page.tsx
import SuccessStoriesData from '@/src/data/success-stories.json'
import SuccessStoriesHero from '@/src/components/SuccessStoriesHero'
import StoriesGrid from '@/src/components/StoriesGrid'
import SuccessStoriesCTA from '@/src/components/SuccessStoriesCTA'

export default function SuccessStoriesPage() {
  return (
    <>
      <SuccessStoriesHero data={SuccessStoriesData.hero} />
      <StoriesGrid data={SuccessStoriesData.stories} />
      <SuccessStoriesCTA data={SuccessStoriesData.cta} />
    </>
  )
}