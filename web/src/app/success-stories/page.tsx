// app/success-stories/page.tsx
import SuccessStoriesData from '@/data/success-stories.json'
import SuccessStoriesHero from '@/components/SuccessStoriesHero'
import StoriesGrid from '@/components/StoriesGrid'
import SuccessStoriesCTA from '@/components/CTA'

export default function SuccessStoriesPage() {
  return (
    <>
      <SuccessStoriesHero data={SuccessStoriesData.hero} />
      <StoriesGrid data={SuccessStoriesData.stories} />
      <SuccessStoriesCTA data={SuccessStoriesData.cta} />
    </>
  )
}