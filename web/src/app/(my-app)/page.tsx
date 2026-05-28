// app/page.tsx
import LandingData from '@/data/landing.json'
import Hero from '@/(my-app)/components/Hero'
import WhatWeDo from '@/(my-app)/components/WhatWeDo'
import HowWeDoIt from '@/(my-app)/components/HowWeDoIt'
import Impact from '@/(my-app)/components/Impact'
import IndustriesEmpower from '@/(my-app)/components/IndustriesEmpower'
import FeaturedSuccessStory from '@/(my-app)/components/FeaturedSuccessStory'
import { LoadedStories } from '@/data/success-stories/index'
import ReadyToScaleCTA from '@/(my-app)/components/CTA'


export default function Home() {
  return (
    <div>
      <Hero data={LandingData.hero} />
      <WhatWeDo data={LandingData.whatWeDo} />
      <HowWeDoIt data={LandingData.howWeDoIt} />
      <Impact data={LandingData.impact} />
      <IndustriesEmpower data={LandingData.industriesEmpower} />
      <FeaturedSuccessStory data={LoadedStories[0]} />
      <ReadyToScaleCTA data={LandingData.cta} />
    </div>
  )
}
