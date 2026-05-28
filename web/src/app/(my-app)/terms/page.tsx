// app/terms/page.tsx
import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
      <Link href="/" className="text-secondary text-body-md hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6">Terms of Use</h1>
      
      <div className="space-y-8 text-body-lg text-on-surface-variant max-w-3xl">
        <section>
          <h2 className="text-headline-lg text-primary mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Datamore's services, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.
          </p>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">2. Services</h2>
          <p>
            Datamore provides data engineering and AI automation services to enterprise clients. We reserve the right to modify or discontinue services at any time.
          </p>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">3. Use of Services</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Use our services for unlawful purposes</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt our services</li>
            <li>Reverse engineer our software</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property on our website and in our services are owned by Datamore or our licensors.
          </p>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">5. Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be error-free or uninterrupted.
          </p>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Datamore shall not be liable for any indirect, incidental, special, or consequential damages.
          </p>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">7. Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:legal@datamore.ai" className="text-secondary hover:underline">
              legal@datamore.ai
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}