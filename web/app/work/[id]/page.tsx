import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

const caseStudy = {
  industry: 'FinTech Architecture',
  title: 'Real-Time Fraud Detection for Global Payment Gateways',
  description: 'How we architected a high-concurrency AI processing layer that reduced fraudulent transactions by 42% while maintaining sub-50ms latency.',
  client: 'NexuStream Financial',
  duration: '6 Months',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnZR4NqemDVZZAs8DGV0cMQn59JotxHoglW_Y6hqH9_Cwe_S1mMb3NfUlvdS6sFbmpYJwf9DjNe4-o2qGOfbXTtMDo9Tffd9Yxwm3HhODpspeqRnjToc_iw9SxRZDv__8j3bQ8eoJwq4KVYsQi67hGdB_X_P0F4yUyGLtdk-9DJg8ymrDkUiU7_3LmKT3P2ZmSpuerHe7W2YrqP2wT6RI3wXa6ieREFALGeJKtzp6e7r6EKEgNX71M-WlSexpQwjru52rP0PuMSIZs',
  challengePoints: [
    'Inability to process more than 500 transactions per second.',
    'Manual review queues taking upwards of 4 hours per flagged case.',
    'Static thresholds failing to adapt to evolving cyber-threat vectors.',
  ],
  metrics: [
    { value: '$12M', label: 'Recovered Revenue', color: 'primary' },
    { value: '89%', label: 'Auto-Clearance Rate', color: 'secondary' },
  ],
  impactMetrics: [
    { value: '-42%', label: 'Fraud Loss Reduction', color: 'secondary' },
    { value: '+15%', label: 'Checkout Conversion', color: 'primary' },
    { value: '5x', label: 'Scale Capacity', color: 'tertiary' },
  ],
  architecture: [
    {
      icon: 'hub',
      title: 'Ingestion Layer',
      color: 'secondary',
      description: 'High-throughput Kafka clusters handling raw event streams from globally distributed edge locations. We implemented a custom schema registry to ensure data integrity before normalization.',
    },
    {
      icon: 'psychology',
      title: 'Neural Scoring',
      color: 'tertiary',
      description: 'PyTorch-based Transformer models analyzing sequential behavior patterns. The model evaluates 150+ features including geolocational velocity and device fingerprinting in real-time.',
    },
    {
      icon: 'dynamic_form',
      title: 'Adaptive Policy',
      color: 'primary',
      description: 'A dynamic decision engine that adjusts thresholds based on global threat levels and regional compliance requirements, allowing for zero-downtime policy updates.',
    },
  ],
  quote: 'The architecture Datamore delivered didn\'t just solve our security problem—it transformed our speed-to-market for new payment products. We can now deploy custom fraud policies in minutes instead of weeks.',
  author: 'Marcus Thorne',
  role: 'CTO, NexuStream Financial',
  implementationImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeR9e5iDK5d6N54PLmCVyCwjnJad328am91x98HMTkBAKTRiFJ_MvjGk2Sf6r2gj_0UTNMWK0cbblkrMbEbXo1OdfFOapo1QiqEWov0ZT60Zfc58s7gF-H5gCyWu-ekVGQjolLI1ByslVmQQ5KzVJ8EztcXB_Ol2h1tXA-1fIEvgp6kFQuxwJGmr7AzlTbD3344I75U9iXbjSEnKmieDBJzpom1PWCstoBnyUH1L8_6bRIYRuMZMiDJLInRpQnxL8d0_oZAZNGOmyc',
  related: [
    {
      category: 'HEALTHCARE',
      title: 'Predictive Patient Diagnostics',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS0saltst9OvbacaMpBjz1HfDeVRm1g0yZd73YWEtNJBUKYk_cS32YHfVewJBi6Joc_mbhyoVTW_h2mzHu3eDtUd1lCPRAp913cgp6D8ZV-dZehztDbs48kyWLnDogFSf-4qK8lfAZl4Jk1BYUiUvIBWW6spV_iJexyrc5CtImQ5jcNaMFszHJnlEUWE_IMP1pKZtnZ4-QF0PfaewUf7Kx59fkIZZtHB9-E5TA-eW51nXatGu3p4kL3EvjmMiqCDwKkLSGAIKSeZuV',
    },
    {
      category: 'SUPPLY CHAIN',
      title: 'Autonomous Logistics Optimization',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh1V4t7P8oJjPakIo54MghBUHfNJCIPif4Syg1jIv_xiG4N641q2O3g7tIYtyydQwVMDYPjFw3b7gA5F405Gkgc5c_bhplMBu_WzFfkhulUW-5v7HyvNGx57Wa6FRNTvp0S5g8yuGmK_KY7b_ciH3vN33FrAJ5RhEIGWh3yxy8Xyx8msd4Y3vuD6MPsp7ZJpZhbHRsOzw2UY5H9fiU5y6nxjSlUg8uWtw3Czz_BNgmlMASUizQAqE6Ibt_snmOUhnxWD3rUxSHUr6Y',
    },
    {
      category: 'RETAIL',
      title: 'Hyper-Personalized Recommendation Engine',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFjRXVqfq_8Q7MmOYcl-KtACMmacirrk-QeQzArG5AvVY6YMxhM0NnxDcjFzq0G2qiYe1EnAn9pYK9ffTC3NdZsQ2naJBagIlfjASQIjIRUHPwcL7l-acwzeYuEkjOKdo-_cTPGyY-bBbPmC-YWGDQSD0IuZxRIkgqmvYHMlmb6dEnwOPvCI8BVOaZUa6ZNVzPGL4CLTzWsCEdlbEOqFRxq0S0iIXM4UJgrgYjIn5ZwjKFqWqIyrEdj_CVanYG6AJ07yjiqGWXN9Gl',
    },
  ],
};

export default function CaseStudy() {
  return (
    <PageLayout>
      <main className="pt-24 pb-margin-desktop">
        {/* Hero: Title & Industry */}
        <section className="px-margin-mobile max-w-container-max mx-auto mb-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-8">
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-4 block">
                {caseStudy.industry}
              </span>
              <h1 className="font-display-lg text-display-lg leading-tight mb-6">
                {caseStudy.title}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                {caseStudy.description}
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 border-l border-outline-variant/30 pl-8">
              <div>
                <p className="font-label-md text-label-md text-outline">CLIENT</p>
                <p className="font-headline-md text-headline-md">{caseStudy.client}</p>
              </div>
              <div>
                <p className="font-label-md text-label-md text-outline">DURATION</p>
                <p className="font-headline-md text-headline-md">{caseStudy.duration}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Visualization */}
        <section className="px-margin-mobile max-w-container-max mx-auto mb-margin-desktop">
          <div className="glass-card rounded-xl overflow-hidden relative aspect-[21/9] flex items-center justify-center">
            <img
              alt="System Dashboard"
              className="w-full h-full object-cover opacity-60"
              src={caseStudy.heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="bg-surface/80 backdrop-blur-md p-6 rounded-lg border border-outline-variant/30 max-w-md">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    analytics
                  </span>
                  <span className="font-label-md text-label-md text-on-surface">
                    LIVE MONITORING
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Centralized AI Command Center managing over 1.2M transactions per hour
                  with neural anomaly detection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Impact Bento Grid */}
        <section className="px-margin-mobile max-w-container-max mx-auto mb-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* The Challenge */}
            <div className="md:col-span-2 glass-card p-12 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-error text-3xl">
                    warning
                  </span>
                  <h2 className="font-headline-xl text-headline-xl">The Challenge</h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  NexuStream faced a critical scaling bottleneck. Their legacy rule-based
                  engines were unable to detect sophisticated polymorphic fraud patterns,
                  leading to millions in annual losses and a high rate of false positives
                  that frustrated legitimate users.
                </p>
                <ul className="space-y-4">
                  {caseStudy.challengePoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="material-symbols-outlined text-primary mt-1"
                      >
                        check_circle
                      </span>
                      <span className="font-body-md text-body-md">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass-card p-8 rounded-xl bg-primary-container/10 border-primary/20 flex flex-col justify-center gap-8">
              <div className="text-center">
                <p className="font-display-lg text-display-lg text-primary mb-0">
                  {caseStudy.metrics[0].value}
                </p>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  {caseStudy.metrics[0].label}
                </p>
              </div>
              <div className="h-px bg-outline-variant/30 w-full" />
              <div className="text-center">
                <p className="font-display-lg text-display-lg text-secondary mb-0">
                  {caseStudy.metrics[1].value}
                </p>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  {caseStudy.metrics[1].label}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="px-margin-mobile max-w-container-max mx-auto mb-margin-desktop">
          <div className="mb-gutter text-center">
            <h2 className="font-headline-xl text-headline-xl ai-gradient-text inline-block">
              Technical Architecture &amp; AI Integration
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              A multi-layered neural processing pipeline built for sub-millisecond
              precision.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {caseStudy.architecture.map((arch, idx) => (
              <div
                key={idx}
                className={`lg:col-span-4 glass-card p-8 rounded-xl ${
                  idx === 0 ? 'border-l-4 border-l-' + arch.color : ''
                } ${idx === 1 ? 'border-t-4 border-t-' + arch.color : ''} ${
                  idx === 2 ? 'border-r-4 border-r-' + arch.color : ''
                }`}
              >
                <span
                  className={`material-symbols-outlined text-${arch.color} text-4xl mb-4`}
                  data-icon={arch.icon}
                  style={
                    arch.icon === 'psychology'
                      ? { fontVariationSettings: "'FILL' 1" }
                      : {}
                  }
                >
                  {arch.icon}
                </span>
                <h3 className="font-headline-md text-headline-md mb-4">{arch.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {arch.description}
                </p>
              </div>
            ))}

            {/* Large Visual Logic Card */}
            <div className="lg:col-span-12 glass-card p-1 rounded-xl overflow-hidden mt-gutter">
              <div className="bg-surface-container-low p-12 flex flex-col lg:flex-row items-center gap-margin-tablet">
                <div className="lg:w-1/2">
                  <h3 className="font-headline-lg text-headline-lg mb-6">
                    The &quot;Intelligent Shield&quot; Implementation
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                    Our core innovation was the implementation of a &quot;Shadow Mode&quot;
                    evaluation system. This allowed NexuStream to test new AI models against
                    live production traffic without affecting transactions, ensuring
                    99.99% reliability during migrations.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container p-4 rounded border border-outline-variant/30">
                      <p className="font-label-md text-label-md text-primary mb-1">
                        LATENCY
                      </p>
                      <p className="font-headline-md text-headline-md">42ms avg.</p>
                    </div>
                    <div className="bg-surface-container p-4 rounded border border-outline-variant/30">
                      <p className="font-label-md text-label-md text-secondary mb-1">
                        PRECISION
                      </p>
                      <p className="font-headline-md text-headline-md">0.984 AUC</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full h-80 bg-surface-container-highest rounded-lg relative overflow-hidden group">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-60"
                    alt="Implementation"
                    src={caseStudy.implementationImage}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-primary animate-pulse">
                      settings_input_component
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-margin-mobile max-w-container-max mx-auto mb-margin-desktop py-margin-desktop bg-surface-container-lowest rounded-3xl border border-outline-variant/20">
          <div className="max-w-4xl mx-auto text-center px-margin-mobile">
            <span
              className="material-symbols-outlined text-secondary text-5xl mb-6"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              workspace_premium
            </span>
            <h2 className="font-display-lg text-display-lg mb-8">
              Measurable Business Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-margin-tablet">
              {caseStudy.impactMetrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className={`font-display-lg text-display-lg text-${metric.color}`}>
                    {metric.value}
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-16 p-8 glass-card rounded-2xl text-left border-l-4 border-l-primary">
              <p className="font-headline-md text-headline-md italic mb-6">
                &quot;{caseStudy.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface">
                    person
                  </span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-bold">{caseStudy.author}</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    {caseStudy.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="px-margin-mobile max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-gutter">
            <div>
              <h2 className="font-headline-xl text-headline-xl">Related Case Studies</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Explore more of our data-driven success stories.
              </p>
            </div>
            <button className="hidden md:block text-primary font-bold hover:underline">
              View All Projects
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {caseStudy.related.map((project, idx) => (
              <Link
                key={idx}
                href={`/work/${idx + 10}`}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={project.title}
                    src={project.image}
                  />
                </div>
                <div className="p-6">
                  <span className="font-label-md text-label-md text-outline">
                    {project.category}
                  </span>
                  <h4 className="font-headline-md text-headline-md mt-2 mb-4">
                    {project.title}
                  </h4>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
