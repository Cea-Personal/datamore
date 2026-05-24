export const storyFiles = {
  'optimizing-liquidity-risk-for-tier-1-fintech': () => import('@/data/success-stories/fixing-broken-reporting-for-ecommerce-company.json'),
  'supply-chain-predictive-modeling': () => import('@/data/success-stories/supply-chain-predictive-modeling.json'),
  'data-driven-philanthropy-impact': () => import('@/data/success-stories/data-driven-philanthropy-impact.json'),
  'enterprise-knowledge-retrieval': () => import('@/data/success-stories/enterprise-knowledge-retrieval.json'),
  'scaling-data-maturity-for-growth': () => import('@/data/success-stories/scaling-data-maturity-for-growth.json'),
}

function getFirstTwoSentences(text) {

  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];

  const firstTwo = sentences.slice(0, 2).join(" ").trim();

  return sentences.length > 2 ? firstTwo + "..." : firstTwo;

}
export const loadedStories = await Promise.all(
  Object.values(storyFiles).map(async (storyLoader) => {
    const loadedStory = await storyLoader();
    const story = loadedStory.default;
    return {
      slug: story.hero.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      title: story.hero.title,
      sector: story.hero.badge.label,
      image: story.hero.image,
      summary: getFirstTwoSentences(story.hero.subtitle),
      metrics: story.metrics
    };

  })

);