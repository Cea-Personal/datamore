import { Article, InsightData, RelatedArticle, Section} from '@/(my-app)/types/insight';
import { getFirstTwoSentences } from '..';
import { getPayloadClient } from '@/_(payload)/payload-client'
import { Insight} from '@payload-types'

export const insightFiles = {
  'the-future-of-ai-automation-in-enterprise-fintech': () => import('./the-future-of-ai-automation-in-enterprise-fintech.json'),
  'optimizing-data-pipelines-for-high-frequency-trading': () => import('./optimizing-data-pipelines-for-high-frequency-trading.json'),
  'ethics-and-transparency-in-financial-llms': () => import('./ethics-and-transparency-in-financial-llms.json'),
  'scaling-ngo-impact-with-data-strategy': () => import('./scaling-ngo-impact-with-data-strategy.json'),
  'the-rise-of-semantic-layers-in-bi': () => import('./the-rise-of-semantic-layers-in-bi.json'),
  'modernizing-legacy-data-for-global-banks': () => import('./modernizing-legacy-data-for-global-banks.json'),
  'ai-driven-fraud-detection-strategies': () => import('./ai-driven-fraud-detection-strategies.json'),
}


export const LoadedInsights = await Promise.all(
  Object.values(insightFiles).map(async (insightLoader) => {
    const loadedInsight = await insightLoader();
    const insight = loadedInsight.default;
    return {
        insights: {
          slug: insight.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          thumbnail: insight.heroImage.url,
          category: insight.category,
          date: insight.author.date,
          readTime: insight.readTime,
          title: insight.title,
          description: getFirstTwoSentences(insight.summary)
          },
          filter:{
              label: insight.category,
              variant: "outline"
          }
      }
  })
);


export const InsightsData = 
{
  "hero": {
    "title": "The Future of AI Automation <br/> in <span class=\"text-secondary\">Enterprise Fintech</span>",
    "subtitle": "Exploring how machine learning models are revolutionizing risk assessment and automated compliance for global financial institutions. A dive into the technical rigor behind transparent AI.",
    "readTime": "12 min read",
    "badge": {
      "label": "Featured Analysis",
      "color": "tertiary-fixed"
    },
    "image": {
      "alt": "Featured Article",
      "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ_Vn36LGGHSB2SfBKMknZPPd82nR9ulQvtF8kwcgDuZCU20Ny-jEfQNlmsaVePzhZEQM2G429lHy--fc_dwX3l58iLXhrw-lvaozZsvuyq_6ksLVyYyNbZv27tn1Hz1UbBjQEtRpSDkSO2EWGgJbrGD8G5whdGHW07PeJCDuCksBpHmn9lkx245UMq0UkLFv0EDfg-dBPGwYSGo8fkn4enKQ6gyuYB8lVG4H4uct6wm6M6wxDyzGiv_PWPK8_rciRTElQdOQy_IvD"
    },
    "slug": {
      "url": "/insights/the-future-of-ai-automation-in-enterprise-fintech",
      "label": "Read Full Article"
    }
  },
  "cta": {
    "title": "Ready to scale your impact with data?",
    "subtitle": "Partner with Datamore to transform your organization through technical excellence and strategic AI innovation."
  }
}






export async function getAllInsightsFromPayload() {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'insights',
    limit: 100,
  })

  return result.docs
}

export async function getInsightBySlugFromPayload(slug: string) {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'insights',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  return result.docs[0] ?? null
}


export const mapInsightToCard = (insight: Insight, categoryLabelMap: Record<string, string>): Article => ({
  slug: insight.slug,
  thumbnail: insight.heroImage?.image || '',
  category: categoryLabelMap[insight.category] || insight.category,
  date: insight.publishedDate || '',
  readTime: insight.readTime || '',
  title: insight.title,
  description: insight.summary || '',
  likes: insight.likes || 0,

})

export const getHeroData = (heroInsight: Article) => ({
      title: heroInsight?.title || "Insights",
      subtitle: heroInsight?.description || "",
      readTime: heroInsight?.readTime || "",
      likes: heroInsight?.likes || 0,
      badge: {
        label: heroInsight?.likes && heroInsight?.likes > 0 ? "Most Liked" : "Featured Analysis",
        color: "tertiary-fixed",
        icon: heroInsight?.likes && heroInsight?.likes > 0 ? "favorite" : "lightbulb"
      },
      image: {
        alt: typeof (heroInsight?.thumbnail) === "object" ? heroInsight?.thumbnail.alt : "",
        url: typeof (heroInsight?.thumbnail) === "object" ? heroInsight?.thumbnail.url : "",
      },
      slug: heroInsight?.slug ? {
        url: `/insights/${heroInsight?.slug}`,
        label: "Read Full Article"
      } : undefined
    })
export const ctaData = {
      title: "Ready to scale your impact with data?",
      subtitle: "Partner with Datamore to transform your organization through technical excellence and strategic AI innovation."
     }


export function getInsightData(insightDoc: Insight): InsightData {
    const sections : Section[] = insightDoc?.sections?.map(section => {
      const imageData = section.image
        ? (typeof section.image === 'object' && section.image.url
            ? { alt: section.image.alt || "", url: section.image.url }
            : undefined)
        : undefined
  
      return {
        type: section.type,
        content: section.content || '',
        title: section.title,
        variant: section.variant,
        image: imageData,
        data: section.data
      } 
    }) ?? [];

  return ({
    id: insightDoc?.id,
    title: insightDoc?.title,
    author: {
      name: insightDoc?.author?.name || "Datamore Team",
      title: insightDoc?.author?.title || "",
      date: insightDoc?.publishedDate || "",
      imageUrl: typeof (insightDoc?.author?.image) === "object" ?  insightDoc?.author?.image?.url : ""
    },
    heroImage: {
      alt: typeof (insightDoc?.heroImage?.image) === "object" ? insightDoc?.heroImage.image?.alt : "",
      url: typeof (insightDoc?.heroImage?.image) === "object" ? insightDoc?.heroImage.image?.url : "",
    },
    sections,
    socialShare: insightDoc?.socialShare,
    relatedArticles: insightDoc?.relatedArticles?.map(article => ({
      title: article?.title || "",
      readTime: article?.readTime || "",
      imageUrl: article?.imageUrl || ""
    })),
    cta: {
      title: insightDoc?.cta?.title || "Ready to scale your impact with data?",
      subtitle: insightDoc?.cta?.subtitle || "Partner with Datamore to transform your organization through technical excellence and strategic AI innovation."
    },
    likes: insightDoc?.likes || 0,
  })}