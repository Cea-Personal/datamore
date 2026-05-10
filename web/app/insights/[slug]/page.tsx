import PageLayout from '@/components/PageLayout';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { Insight } from '@/payload-types';

// Fetch single insight by slug
async function getInsight(slug: string): Promise<Insight | null> {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: 'insights',
      where: { slug: { equals: slug } },
      depth: 1,
      limit: 1,
    });

    return result.docs[0] as Insight || null;
  } catch (error) {
    console.error('Error fetching insight:', error);
    return null;
  }
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <PageLayout>
      <article className="pt-32 pb-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/insights" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Insights
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-label-md font-bold uppercase tracking-wider ${
              insight.category === 'ai-ml' ? 'bg-secondary/20 text-secondary border border-secondary/30' :
              insight.category === 'data-engineering' ? 'bg-primary/20 text-primary border border-primary/30' :
              insight.category === 'analytics' ? 'bg-tertiary/20 text-tertiary border border-tertiary/30' :
              insight.category === 'cloud-architecture' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
              'bg-surface-variant text-on-surface-variant border border-outline-variant/30'
            }`}>
              {insight.category?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg mb-6 max-w-4xl">
            {insight.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-label-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface-variant" />
              <span>{insight.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">calendar_today</span>
              <span>
                {new Date(insight.publishedAt || '').toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">schedule</span>
              <span>{Math.ceil((insight.content?.length || 0) / 1000)} min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden glass-card">
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Rich text content would be rendered using payload's richText component */}
            <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed whitespace-pre-wrap">
              {typeof insight.content === 'string' 
                ? insight.content 
                : JSON.stringify(insight.content)}
            </div>
          </div>

          {/* Tags */}
          {insight.category && (
            <div className="mt-12 pt-8 border-t border-outline-variant/20">
              <div className="flex flex-wrap gap-2">
                <span className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2 mr-2">Topics:</span>
                <span className="px-3 py-1 bg-surface-variant/30 rounded-full text-label-md text-on-surface-variant">
                  {insight.category.replace('-', ' ')}
                </span>
              </div>
            </div>
          )}

          {/* Share & Navigation */}
          <div className="mt-12 pt-8 border-t border-outline-variant/20 flex justify-between items-center">
            <Link
              href="/insights"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              All Insights
            </Link>
            <div className="flex gap-4">
              <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-variant transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
              <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-variant transition-colors">
                <span className="material-symbols-outlined">bookmark</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
