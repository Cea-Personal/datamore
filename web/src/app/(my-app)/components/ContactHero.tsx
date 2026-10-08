import ContactForm from './ContactForm'

export default function ContactHero() {
  return (
    <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <p className="text-label-md text-secondary mb-4">Free Data &amp; AI Assessment</p>
            <h1 className="text-display-lg-mobile text-primary mb-6">What is slowing your business down?</h1>
            <p className="text-body-lg text-on-surface-variant">Tell us where reporting, scattered data or repetitive work gets in the way. We will start with a conversation about the problem and a practical next step.</p>
          </div>
          <div>
            <h2 className="text-headline-md mb-4">What happens next</h2>
            <ol className="list-decimal pl-5 space-y-4 text-body-md text-on-surface-variant">
              <li>We review your request and arrange a conversation.</li>
              <li>We discuss your current process, systems and goals.</li>
              <li>We recommend a next step. Any paid work is scoped and agreed separately.</li>
            </ol>
          </div>
          <div>
            <p className="text-body-md text-on-surface-variant mb-2">Prefer email?</p>
            <a href="mailto:contact@datamore.org" className="text-body-lg text-secondary hover:underline break-all">contact@datamore.org</a>
          </div>
          <div className="flex flex-wrap gap-6 text-body-md">
            <a href="https://www.linkedin.com/company/datamore.org" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">LinkedIn</a>
            <a href="https://www.facebook.com/datamore.org" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Facebook</a>
          </div>
        </div>
        <div className="lg:col-span-7"><ContactForm /></div>
      </div>
    </section>
  )
}
