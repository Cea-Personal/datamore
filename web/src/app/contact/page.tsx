// web/app/contact/page.tsx
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactBadges from '@/components/ContactBadges'
import ReadyToScaleCTA from '@/components/CTA'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactBadges />
      <ReadyToScaleCTA data={{
        title: "Ready to Scale Your AI Ambitions?",
        subtitle: "Our team of senior engineers and AI strategists are ready to help you navigate the complexities of enterprise-grade automation. Let's build the future together.",
        primaryButton: {
          label: "Get a Technical Audit",
          url: "#"
        },
        secondaryButton: {
          label: "View Our Services",
          url: "/services"
        }}}
      />
    </>
  )
}