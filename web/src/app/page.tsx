// app/page.tsx
import LandingData from '@/data/landing.json'
import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import HowWeDoIt from '@/components/HowWeDoIt'
import Impact from '@/components/Impact'
import Industries from '@/components/Industries'
import FeaturedSuccessStory from '@/components/FeaturedSuccessStory'
import ReadyToScaleCTA from '@/components/CTA'

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