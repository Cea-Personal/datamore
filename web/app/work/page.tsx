'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

type FilterType = 'all' | 'ai-analytics' | 'data-architecture' | 'cloud';

const caseStudies = [
  {
    id: 1,
    title: 'Automating Multi-Region Risk Assessment Pipelines',
    client: 'Global Finance Corp',
    category: 'ai-analytics' as FilterType,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCNUL98t5leCW55W_Xa2QeI0x8_F4aQjIll4ntAor3F1M5LiIIKZ8DKfQ-Zz1Gz9N5kLMKeD6vwJ0SDqto4phdZmm5J-hQS2ZGizwULAZ_XWXYYRkHh61kKGkVhEo1MZyh_6h5n6q59HZ011FjADrVvSC__Km0SeAOg02facgkuPePt2sHShB-CjdEJIaB-7iOQO52DfPFoMFX0pAxXU9tmLcENjpgt9CHTO85uw0Ikzyq0NMdEuHo0D4SeVkDYiY9mqFcBbxtwwXw',
    metrics: [
      { value: '70%', label: 'Automation Rate' },
      { value: '12.5x', label: 'Throughput Increase', color: 'primary' },
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Supply Chain Forecasting Engine',
    client: 'Retail Giants Inc',
    category: 'ai-analytics' as FilterType,
    description: 'Leveraging deep learning to predict stockouts across 400+ nodes globally.',
    metric: { value: '85%', label: 'Faster Reporting', color: 'tertiary' },
  },
  {
    id: 3,
    title: 'Cloud Migration 2.0',
    client: 'Healthcare Provider Network',
    category: 'cloud' as FilterType,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-nEXGPP89F1i3SQ50CaYhzxrpFM6_vqEGHkGkNRGBSG_8SE-hd_SOPYEY469KppMklFs6p9v8g23KfEXWMALUMxB886eZAirADG65EHV469A_YCo9Y8ndzfPRd5plPbpNYTaOCQrynNdBabFBuXuWBELRYbm5-iTyOy1FBdHjbqbocLrcU6OaIr4cION2EyuYmnJT-TutClP_otVS_J4kRHO9_wDKqShFDVrgpZit7maU_TSo1AGzP31njtQfCMM-y8OUIanRuqQp',
    tag: 'Zero Downtime Migration',
  },
  {
    id: 4,
    title: 'Secure Ledger Architecture',
    client: 'Trading Platforms Ltd',
    category: 'data-architecture' as FilterType,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApDj2T8b5hh9p8NsWog8n3xd395ooAq8hamsw-aHViuCSNobNsn4XMFMnljho_Pf7Lm771kaI_O3Vq61etUfkOrvFtUcb2Ypj7yH0H8fnw1wBjjKZATp0wKrl8dfoYHIasGcOnfhOuk8B75ewVrtXtBM4EkbfxG0y4vPXbVN84i1LWS8fFjzSr6CEC9rwhBj8REuOVausEnMm7W-WGZe_ck8ZROjbh0XbaYyis1SAPvPeDbo5uMmwU2A82V2vAnjwilXOJmBvMIYto',
    tag: '99.99% Reliability',
  },
  {
    id: 5,
    title: 'Intelligent Edge Ops',
    client: 'Manufacturing Co',
    category: 'ai-analytics' as FilterType,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkwLKCkA_P9LbjauNkRhj2dCRPgK0pxJfaZyhTp7rINH5r9glah5QMwluLzgkw7uh9ivtYJcTxJlPUcA6v9BxgdgC_3mdfwn1yzR149DnpmpUZUcUuBLRDqViW3oc4GyEUjgIQ26Ax308tPjM0SD3WXmM0JleG77ZjfJr0ssOqWqib2u4qJ8UViXuGic1ftGJjxbarxVihqWHxILBYUv9HAmsriFNdIH8WACZh7edBAQdJz_w6VKqsyOK09QfKDtqGkC1ekvsAeYRF',
    tag: '30% Energy Reduction',
  },
  {
    id: 6,
    title: 'Open Source Data Governance Framework',
    client: 'Enterprise Consortium',
    category: 'data-architecture' as FilterType,
    metrics: [
      { value: '50+', label: 'Fortune 500 Users', color: 'primary' },
      { value: '1.2M', label: 'Monthly API Calls', color: 'secondary' },
    ],
    wide: true,
  },
];

export default function Work() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = caseStudies.filter((cs) =>
    filter === 'all' ? true : cs.category === filter
  );

  const featured = filtered.find((cs) => cs.featured);
  const regular = filtered.filter((cs) => !cs.featured);

  return (
    <PageLayout>
      <main className="pt-32 pb-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="max-w-3xl">
            <h1 className="font-display-lg text-display-lg mb-6">Our Work</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Empowering enterprise leaders with high-performance data architecture and
              AI-native scalability. Explore our most impactful transformations.
            </p>
          </div>
        </section>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 items-center">
          <span className="text-label-md uppercase tracking-widest text-outline">
            Filter by Pillar:
          </span>
          <button
            className={`px-6 py-2 rounded-full font-label-md transition-colors ${
              filter === 'all'
                ? 'bg-primary text-on-primary'
                : 'border border-outline-variant hover:bg-surface-container-high'
            }`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`px-6 py-2 rounded-full font-label-md transition-colors ${
              filter === 'ai-analytics'
                ? 'bg-primary text-on-primary'
                : 'border border-outline-variant hover:bg-surface-container-high'
            }`}
            onClick={() => setFilter('ai-analytics')}
          >
            AI &amp; Analytics
          </button>
          <button
            className={`px-6 py-2 rounded-full font-label-md transition-colors ${
              filter === 'data-architecture'
                ? 'bg-primary text-on-primary'
                : 'border border-outline-variant hover:bg-surface-container-high'
            }`}
            onClick={() => setFilter('data-architecture')}
          >
            Data Architecture
          </button>
          <button
            className={`px-6 py-2 rounded-full font-label-md transition-colors ${
              filter === 'cloud'
                ? 'bg-primary text-on-primary'
                : 'border border-outline-variant hover:bg-surface-container-high'
            }`}
            onClick={() => setFilter('cloud')}
          >
            Cloud Strategy
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Featured Case Study */}
          {featured && (
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl glass-card gradient-border-top p-gutter flex flex-col justify-between min-h-[480px]">
              <div
                className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity"
                style={{
                  backgroundImage: `url(${featured.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">
                      Featured Case Study
                    </span>
                    <span className="text-on-surface-variant font-label-md">
                      {featured.client}
                    </span>
                  </div>
                  <h2 className="font-headline-xl text-headline-xl mb-4 max-w-xl">
                    {featured.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-margin-tablet items-end">
                  {featured.metrics?.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className={`font-display-lg text-display-lg leading-none text-${metric.color}`}>
                        {metric.value}
                      </span>
                      <span className="text-label-md text-on-surface-variant uppercase">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                  <div className="ml-auto">
                    <Link
                      href={`/work/${featured.id}`}
                      className="bg-surface-container-highest/80 backdrop-blur text-on-surface p-4 rounded-full hover:bg-primary hover:text-on-primary transition-all"
                    >
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Side Card */}
          {regular[0] && (
            <div className="md:col-span-4 glass-card rounded-xl p-gutter gradient-border-top flex flex-col justify-between">
              <div>
                <span className="text-tertiary font-label-md uppercase mb-2 block">AI &amp; Analytics</span>
                <h3 className="font-headline-md text-headline-md mb-4">{regular[0].title}</h3>
                <p className="text-on-surface-variant font-body-sm">{regular[0].description || 'Leveraging deep learning to predict stockouts across 400+ nodes globally.'}</p>
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-tertiary">show_chart</span>
                  <span className="font-display-lg text-[48px] leading-tight text-on-surface">
                    {regular[0].metric?.value}
                  </span>
                </div>
                <span className="text-label-md text-on-surface-variant uppercase">
                  {regular[0].metric?.label}
                </span>
              </div>
            </div>
          )}

          {/* Mid Row: 3 equal cards */}
          {regular.slice(1, 4).map((study) => (
            <div
              key={study.id}
              className="glass-card rounded-xl p-gutter flex flex-col justify-between group"
            >
              <div className="h-32 mb-6 overflow-hidden rounded-lg">
                <img
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={study.image}
                />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">{study.title}</h3>
                <p className="text-on-surface-variant font-body-sm mb-6">{study.description}</p>
                <div className="flex items-center gap-1 text-secondary font-bold">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>{study.tag}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Row: Wide Card */}
          {regular[4] && (
            <div className="md:col-span-12 glass-card rounded-xl p-gutter flex flex-col md:flex-row gap-gutter items-center">
              <div className="md:w-1/2">
                <span className="text-secondary font-label-md uppercase mb-2 block">
                  Special Initiative
                </span>
                <h3 className="font-headline-xl text-headline-xl mb-4">{regular[4].title}</h3>
                <p className="text-on-surface-variant font-body-lg mb-8">{regular[4].description}</p>
                <div className="flex gap-gutter">
                  <div>
                    <span className="block font-headline-md text-primary">{regular[4].metrics?.[0]?.value}</span>
                    <span className="text-label-md text-on-surface-variant">
                      {regular[4].metrics?.[0]?.label}
                    </span>
                  </div>
                  <div>
                    <span className="block font-headline-md text-secondary">{regular[4].metrics?.[1]?.value}</span>
                    <span className="text-label-md text-on-surface-variant">
                      {regular[4].metrics?.[1]?.label}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[48px]" data-icon="shield">
                    shield
                  </span>
                </div>
                <div className="aspect-square rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-[48px]" data-icon="hub">
                    hub
                  </span>
                </div>
                <div className="aspect-square rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-[48px]" data-icon="security">
                    security
                  </span>
                </div>
                <div className="aspect-square rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant text-[48px]" data-icon="terminal">
                    terminal
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <section className="mt-margin-desktop py-margin-desktop border-t border-outline-variant/20 text-center">
          <h2 className="font-headline-xl text-headline-xl mb-6">Ready for your transformation?</h2>
          <p className="text-on-surface-variant font-body-lg mb-12 max-w-2xl mx-auto">
            Join the ranks of high-performance enterprises leveraging our precision data
            solutions.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/30">
              Start Project Discovery
            </button>
            <button className="border border-outline-variant px-8 py-4 rounded-full font-bold hover:bg-surface-container transition-colors">
              Download Capabilities PDF
            </button>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
