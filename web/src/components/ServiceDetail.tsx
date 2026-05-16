// src/components/ServiceDetail.tsx
import Link from 'next/link'
import Image from 'next/image'

interface ServiceDetailProps {
  title: string
  category: string
  icon: string
  imageAlt: string
  imageUrl: string
  heroTitle: string
  heroSubtitle: string
  primaryButtonLabel: string
  secondaryButtonLabel: string
  offerings: Array<{
    icon: string
    title: string
    description: string
    specsLabel?: string
  }>
  impactMetrics: Array<{
    value: string
    label: string
    description: string
  }>
  ctaTitle: string
  ctaSubtitle: string
  primaryCTALabel: string
  secondaryCTALabel: string
}

export default function ServiceDetail({
  title,
  category,
  icon,
  imageAlt,
  imageUrl,
  heroTitle,
  heroSubtitle,
  primaryButtonLabel,
  secondaryButtonLabel,
  offerings,
  impactMetrics,
  ctaTitle,
  ctaSubtitle,
  primaryCTALabel,
  secondaryCTALabel,
}: ServiceDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-secondary mb-6">
              <span className="material-symbols-outlined text-sm" data-icon={icon}>
                {icon}
              </span>
              <span className="font-label-md text-label-md">{category}</span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8 text-on-surface" dangerouslySetInnerHTML={{ __html: heroTitle }}>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md text-label-md hover:brightness-110 shadow-lg transition-all">
                {primaryButtonLabel}
              </button>
              <button className="glass-edge px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all">
                {secondaryButtonLabel}
              </button>
            </div>
          </div>
          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <div className="aspect-square rounded-2xl bg-surface-container-high overflow-hidden tinted-shadow">
              <Image
                alt={imageAlt}
                src={imageUrl}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl tinted-shadow glass-edge hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary">
                  <span className="material-symbols-outlined" data-icon="trending_up">
                    trending_up
                  </span>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-secondary">94%</div>
                  <div className="font-caption text-caption text-on-surface-variant">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Core Offerings - Bento Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface-container-low rounded-[2rem] my-10">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Core Offerings</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Enterprise-grade analytics built on the foundation of technical rigor and transparency.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {offerings.map((offering, index) => {
            // Determine layout based on index for bento grid effect
            const isFirstOrFourth = index === 0 || index === 3;
            const isSecondOrThird = index === 1 || index === 2;
            
            return (
              <div
                key={index}
                className={`${isFirstOrFourth ? 'md:col-span-2' : 'md:col-span-1'} bg-surface-container-lowest p-10 rounded-2xl tinted-shadow interactive-shadow transition-all group flex flex-col justify-between`}
              >
                <div>
                  <span className={`material-symbols-outlined text-secondary text-4xl mb-6`} data-icon={offering.icon}>
                    {offering.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md mb-4">{offering.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant{max-w-md}">
                    {offering.description}
                  </p>
                </div>
                {offering.specsLabel && (
                  <div className="mt-8 flex items-center text-secondary font-label-md text-label-md cursor-pointer group-hover:gap-2 transition-all">
                    {offering.specsLabel}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Dashboards Feature */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Interactive Dashboards: <br><span className="text-secondary">Precision in Motion</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-container/10 rounded-lg flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" data-icon="query_stats">
                    query_stats
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md mb-1">Real-Time Drill-Down</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    From global trends to individual transaction details in two clicks. Our dashboards maintain high-speed performance even with petabyte-scale datasets.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-container/10 rounded-lg flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" data-icon="sync_alt">
                    sync_alt
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md mb-1">Cross-Functional Integration</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Bridge the gap between Finance, Marketing, and Operations with a single source of truth that updates dynamically as your business moves.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-container/10 rounded-lg flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" data-icon="security">
                    security
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md mb-1">Role-Based Granularity</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Strict governance models ensure that data visibility is perfectly aligned with organizational hierarchy and compliance mandates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="glass-edge p-4 rounded-3xl bg-surface-container-lowest tinted-shadow">
              <Image
                alt="Dashboard preview"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP-p2rhD34ZHlhJel-j-mJDGIakA8EGZn2CxN87fQOv4hsyJas5mZi7FHHKLjxenG7xpolihYdWrZFLq1m0w-uFMDpXrlRbzpcLsHZ7eVJxygrOu5_R8dmvdVA4_lGdRepFdPhDY9yCOXr_I3ZRWZl4VgC_Ad3DNMRMqE8e8yRDvgnTNt8KYSgidOVGaTYJcKe_osUHAjDNN6pfIGqGupbrEzbjQp5mfxKa2LlnqAlHmTeh7MvaKuH3UIrhelnCWoZ6jUd8hiK0tVv"
                className="rounded-2xl w-full h-full object-cover"
                priority
              />
            </div>
            {/* Precision Label */}
            <div className="absolute top-10 -right-4 bg-tertiary text-on-tertiary px-4 py-2 rounded-lg font-label-md text-label-md rotate-3 shadow-lg">
              Real-time Sync Active
            </div>
          </div>
        </div>
      </section>

      {/* Datamore Impact Metrics */}
      <section className="py-24 bg-primary-container text-on-primary-container overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-surface">The Datamore Impact</h2>
            <p className="font-body-md text-body-md opacity-70">Measuring the tangible shift from intuition to intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="p-8 border-l border-outline-variant/30">
                <div className="font-display-lg text-display-lg mb-2 text-surface">{metric.value}</div>
                <div className="font-label-md text-label-md uppercase tracking-wider mb-2">{metric.label}</div>
                <p className="font-body-md text-body-md opacity-60">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8">{ctaTitle}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">{ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-secondary text-on-secondary px-10 py-5 rounded-lg font-label-md text-label-md hover:brightness-110 shadow-xl transition-all">
              {primaryCTALabel}
            </button>
            <button className="glass-edge px-10 py-5 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all">
              {secondaryCTALabel}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}