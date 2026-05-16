// app/page.tsx
import LandingData from '@/src/data/landing.json'
import Hero from '@/src/components/Hero'
import WhatWeDo from '@/src/components/WhatWeDo'
import HowWeDoIt from '@/src/components/HowWeDoIt'
import Impact from '@/src/components/Impact'
import Industries from '@/src/components/Industries'
import FeaturedSuccessStory from '@/src/components/FeaturedSuccessStory'
import ReadyToScaleCTA from '@/src/components/ReadyToScaleCTA'

export default function Home() {
  return (
    <>
      <Hero data={LandingData.hero} />
      <WhatWeDo data={LandingData.whatWeDo} />
      <HowWeDoIt data={LandingData.howWeDoIt} />
      <Impact data={LandingData.impact} />
      <Industries data={LandingData.industries} />
      <FeaturedSuccessStory data={LandingData.featuredSuccessStory} />
      <ReadyToScaleCTA data={LandingData.cta} />
    </>
  )
}