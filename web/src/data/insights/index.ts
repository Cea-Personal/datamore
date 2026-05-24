import { getFirstTwoSentences } from '..';

export const insightFiles = {
  'the-future-of-ai-automation-in-enterprise-fintech': () => import('@/data/insights/the-future-of-ai-automation-in-enterprise-fintech.json'),
  'optimizing-data-pipelines-for-high-frequency-trading': () => import('@/data/insights/optimizing-data-pipelines-for-high-frequency-trading.json'),
  'ethics-and-transparency-in-financial-llms': () => import('@/data/insights/ethics-and-transparency-in-financial-llms.json'),
  'scaling-ngo-impact-with-data-strategy': () => import('@/data/insights/scaling-ngo-impact-with-data-strategy.json'),
  'the-rise-of-semantic-layers-in-bi': () => import('@/data/insights/the-rise-of-semantic-layers-in-bi.json'),
  'modernizing-legacy-data-for-global-banks': () => import('@/data/insights/modernizing-legacy-data-for-global-banks.json'),
  'ai-driven-fraud-detection-strategies': () => import('@/data/insights/ai-driven-fraud-detection-strategies.json'),
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
    "slug": "the-future-of-ai-automation-in-enterprise-fintech"
  },
  "cta": {
    "title": "Ready to scale your impact with data?",
    "subtitle": "Partner with Datamore to transform your organization through technical excellence and strategic AI innovation."
  }
}