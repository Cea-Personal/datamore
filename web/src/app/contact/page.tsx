// web/app/contact/page.tsx
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactBadges from '@/components/ContactBadges'
import ReadyToScaleCTA from '@/components/CTA'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBadges />
    </>
  )
}