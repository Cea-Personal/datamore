// app/page.tsx
import LandingData from '@data/landing.json'
import Hero from '@/(my-app)/components/Hero'
import WhatWeDo from '@/(my-app)/components/WhatWeDo'
import HowWeDoIt from '@/(my-app)/components/HowWeDoIt'
import ReadyToScaleCTA from '@/(my-app)/components/CTA'
import { ProblemsSection, UseCasesSection, WorkPreview, WhoWeHelp } from './components/V1Sections'


export default function Home() {
  return (
    <div>
      <Hero data={LandingData.hero} />
      <ProblemsSection />
      <WhatWeDo data={LandingData.whatWeDo} />
      <UseCasesSection />
      <HowWeDoIt data={LandingData.howWeDoIt} />
      <WorkPreview />
      <WhoWeHelp />
      <ReadyToScaleCTA data={LandingData.cta} />
    </div>
  )
}
