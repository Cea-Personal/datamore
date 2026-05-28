// app/privacy/page.tsx
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
      <Link href="/" className="text-secondary text-body-md hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6">Privacy Policy</h1>
      
      <div className="space-y-8 text-body-lg text-on-surface-variant max-w-3xl">
        <section>
          <h2 className="text-headline-lg text-primary mb-4">1. Introduction</h2>
          <p>
            Datamore ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
          </p>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">2. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Personal identification information (name, email, phone number)</li>
            <li>Business information related to your organization</li>
            <li>Technical data about your device and usage</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Provide and improve our services</li>
            <li>Communicate with you about updates and offers</li>
            <li>Analyze usage patterns to enhance user experience</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. This includes encryption, access controls, and regular security audits.
          </p>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Access your personal data</li>
            <li>Request corrections to inaccurate data</li>
            <li>Request deletion of your data</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-headline-lg text-primary mb-4">6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@datamore.ai" className="text-secondary hover:underline">
              privacy@datamore.ai
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}