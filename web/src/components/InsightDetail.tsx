// src/components/InsightDetail.tsx
'use client'

import Image from 'next/image'
import type { InsightData } from '@/types/insight'
import GlobalCTA from '@/components/CTA'

export default function InsightDetail({
  title,
  author,
  heroImage,
  sections,
  socialShare = false,
  relatedArticles = [],
  cta
}: InsightData) {
  return (
    <>
      {/* Hero Section */}
      <header className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7">
            <nav className="mb-6 flex items-center space-x-2 text-on-surface-variant opacity-70">
              <span className="text-caption font-caption">Insights</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-caption font-caption">Artificial Intelligence</span>
            </nav>
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: title }}>
            </h1>
<div className="flex items-center space-x-4">
              {author.imageUrl && (
             <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                    <Image
                      alt={`${author.name} headshot`}
                      src={author.imageUrl}
                      className="w-full h-full object-cover"
                      width={120}
                      height={120}
                      priority
                    />
                  </div>
              )}
              <div>
                <p className="text-label-md text-on-surface">{author.name}</p>
                <p className="text-caption text-on-surface-variant">
                  {author.title} • {author.date}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden ambient-shadow h-[400px]">
              <Image
                alt={heroImage.alt}
                src={heroImage.url}
                className="w-full h-full object-cover"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter pb-32">
        {/* Article Body */}
        <article className="lg:col-span-8 space-y-8 pr-0 lg:pr-12">
          {sections.map((section, index) => {
            switch (section.type) {
              case 'text':
                return (
                  <p
                    key={index}
                    className={section.variant === 'caption'
                      ? 'font-caption text-on-surface-variant italic'
                      : section.variant === 'first-letter'
                        ? 'text-body-lg text-on-surface leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-secondary'
                        : 'text-body-lg text-on-surface leading-relaxed'}
                  >
                    {section.content}
                  </p>
                );
              case 'heading':
                return (
                  <h2 key={index} className="text-headline-lg text-on-surface mt-12">
                    {section.content}
                  </h2>
                );
              case 'roi-chart':
                return (
                  <div key={index} className="my-12 p-8 bg-surface-container-low rounded-xl border border-outline-variant ambient-shadow">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-headline-md">{section.title}</h3>
                      <span className={`bg-${section.data?.[0]?.color || 'tertiary-fixed'} text-on-${section.data?.[0]?.color || 'tertiary-fixed'} px-3 py-1 rounded-full text-caption font-label-md uppercase tracking-wider`}>
                        Technical Data
                      </span>
                    </div>
                    {/* ROI Chart Placeholder Representation */}
                    <div className="space-y-6">
                      {section.data?.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between text-caption font-label-md">
                            <span>{item.label}</span>
                            <span className="text-secondary">{item.value}</span>
                          </div>
                          <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-tertiary-fixed-dim to-secondary rounded-full"
                              style={{ width: item.value.includes('%') ? item.value : '0%' }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {section.data && section.data.length > 0 && (
                      <p className="mt-8 text-caption text-on-surface-variant italic">
                        Source: Datamore Internal Benchmark Study 2024. Data represents average performance gains across 12 enterprise fintech deployments.
                      </p>
                    )}
                  </div>
                );
              default:
                return null;
            }
          })}
          
{socialShare && (
             <div className="flex items-center space-x-4 pt-12 border-t border-outline-variant">
               <span className="text-label-md text-on-surface">Share Article:</span>
               <button 
                 onClick={() => navigator.share({ title: document.title, url: window.location.href })}
                 className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-all active:scale-95"
                 title="Share this article"
               >
                 <span className="material-symbols-outlined text-[20px]">share</span>
               </button>
               <button 
                 onClick={() => navigator.clipboard.writeText(window.location.href).then(() => alert('Link copied to clipboard!'))}
                 className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-all active:scale-95"
                 title="Copy link"
               >
                 <span className="material-symbols-outlined text-[20px]">link</span>
               </button>
<button 
                  onClick={() => window.open(`mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-all active:scale-95"
                  title="Share via email"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </button>
             </div>
           )}
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Subscribe Widget */}
          <div className="bg-primary-container text-on-primary-fixed p-8 rounded-xl ambient-shadow glass-edge">
            <span className="material-symbols-outlined text-tertiary-fixed-dim mb-4">mail</span>
            <h4 className="text-headline-md text-on-secondary-container mb-2">Weekly Insights</h4>
            <p className="text-body-md text-on-primary-container mb-6">Stay ahead of the curve with our technical breakdown of AI trends in fintech.</p>
            <div className="space-y-4">
              <input
                className="w-full bg-transparent border border-on-primary-container rounded-lg px-4 py-3 text-on-primary-fixed placeholder:opacity-50 focus:ring-2 focus:ring-tertiary-cyan focus:outline-none transition-all"
                placeholder="Email address"
                type="email"
              />
              <button className="w-full bg-secondary text-on-secondary py-3 rounded-lg text-label-md hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
          
          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <>
              <h4 className="text-label-md text-secondary uppercase tracking-widest mb-6">Related Articles</h4>
              <div className="space-y-6">
                {relatedArticles.map((article, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group block"
                  >
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-variant">
<Image
                           alt={article.title}
                           src={article.imageUrl}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                           width={200}
                           height={200}
                         />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h5 className="text-label-md text-on-surface group-hover:text-secondary transition-colors leading-snug">
                          {article.title}
                        </h5>
                        <span className="text-caption font-caption text-on-surface-variant mt-1">{article.readTime}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
</aside>
      </main>
      {cta && <GlobalCTA data={cta} />}
    </>
  )
}