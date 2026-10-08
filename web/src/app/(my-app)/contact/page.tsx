import type { Metadata } from 'next'
import ContactHero from '@/(my-app)/components/ContactHero'

export const metadata: Metadata = { title: 'Free Data & AI Assessment | Datamore', description: 'Tell us about your business and the data or workflow problem you want to solve.' }

export default function ContactPage() {
  return <ContactHero />
}
