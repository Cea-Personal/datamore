// web/app/contact/page.tsx
import ContactHero from '@/(my-app)/components/ContactHero'
import ReadyToScaleCTA from '@/(my-app)/components/CTA'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ReadyToScaleCTA data={{
        title: "Ready to Scale Your AI Ambitions?",
        subtitle: "Our team of senior engineers and AI strategists are ready to help you navigate the complexities of enterprise-grade automation. Let's build the future together."
      }} />
    </>
  )
}