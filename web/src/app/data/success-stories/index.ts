import { getFirstTwoSentences } from '..';
export const StoryFiles = {
  'optimizing-liquidity-risk-for-tier-1-fintech': () => import('@/data/success-stories/fixing-broken-reporting-for-ecommerce-company.json'),
  'supply-chain-predictive-modeling': () => import('@/data/success-stories/supply-chain-predictive-modeling.json'),
  'data-driven-philanthropy-impact': () => import('@/data/success-stories/data-driven-philanthropy-impact.json'),
  'enterprise-knowledge-retrieval': () => import('@/data/success-stories/enterprise-knowledge-retrieval.json'),
  'scaling-data-maturity-for-growth': () => import('@/data/success-stories/scaling-data-maturity-for-growth.json'),
}

export const LoadedStories = await Promise.all(
  Object.values(StoryFiles).map(async (storyLoader) => {
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
export const SuccessStoriesData = {
  "hero": {
    "title": "Strategic Transformation <br><span class=\"text-secondary\">Enabled by Data</span>",
    "subtitle": "Explore how Datamore partners with global leaders in fintech, NGOs, and enterprise sectors to solve complex challenges through AI strategy and engineering.",
    "image": {
      "alt": "Success Stories Visualization",
      "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuDyD67EvyfN4FJbWZRRuHPVDYrYz6EIZyNi92teVnEb67g3DzVpP43aHkPZ5TRjC8sN8UF6iLQwEEJhze9E1ZIdTkvtppjXDB5Da7MUuNlqbiaCLRC__Cubbvaa583E2npOSbSZIJDkY0W0gdA8qwCf-I4iXZ7-DnU-0-Ad6w_NSUgt7KJiPaIrCLSG0v-9AwbhtGTO-TN7Fm8k60rkHsdGq7yuKutBHLyJHy8Yfx1JGixZ6x9D_177V3KaZM8SBs3aMFSLx2SZpFDd"
    },
    "badge": {
      "label": "Our Impact",
      "icon": "star"
    }
  },
  "cta": {
    "title": "Ready to scale your impact with data?",
    "subtitle": "Our consultants are ready to audit your current data architecture and identify high-leverage AI opportunities."
  }
}