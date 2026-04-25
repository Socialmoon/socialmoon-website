// ─────────────────────────────────────────────────────────────
//  BLOG CATALOG  —  edit this file to add/update blog posts
// ─────────────────────────────────────────────────────────────

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
  tags?: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'why-systems-beat-campaigns',
    title: 'Why Systems Beat Campaigns Every Time',
    excerpt: 'Most businesses run campaigns. The ones that scale run systems. Here\'s the difference and why it matters for your growth.',
    content: `Most businesses approach marketing the same way: run a campaign, see results, stop, repeat. The problem is that campaigns are episodic — they create spikes, not compounding growth.

Systems are different. A growth system is a repeatable, documented process that runs consistently regardless of who's executing it. It has inputs, outputs, and feedback loops built in.

When we work with clients, the first thing we do is audit whether they have campaigns or systems. Almost always, it's campaigns. And almost always, that's why their growth is inconsistent.

Here's what a content system looks like vs a content campaign:

Campaign: "Let's post 3x a week for the next month and see what happens."
System: "We publish 3 formats weekly — one educational, one social proof, one offer — reviewed every 4 weeks against engagement and pipeline data, with a documented production workflow that any team member can run."

The system compounds. The campaign doesn't.

If you want predictable growth, stop running campaigns. Start building systems.`,
    author: 'SocialMoon Team',
    date: '2025-11-15',
    tags: ['Growth', 'Strategy', 'Systems'],
  },
  {
    id: 2,
    slug: 'linkedin-for-b2b-founders',
    title: 'LinkedIn Is the Highest-ROI Channel for B2B Founders in 2025',
    excerpt: 'If you\'re a B2B founder and you\'re not posting on LinkedIn consistently, you\'re leaving pipeline on the table. Here\'s how to fix that.',
    content: `LinkedIn has quietly become the most powerful B2B sales channel available — and most founders are either not using it or using it wrong.

The data is clear: decision-makers are on LinkedIn. They're reading content, following thought leaders, and making vendor decisions based on what they see in their feed. If you're not showing up, your competitors are.

Here's what we've seen work consistently for B2B founders:

1. Post 3-4 times per week. Consistency beats virality. One post that reaches 500 of the right people every week compounds into thousands of warm impressions over a quarter.

2. Lead with insight, not promotion. The posts that perform best share a specific, counterintuitive observation from your work. "We analyzed 50 sales calls and found that..." outperforms "We're excited to announce..." every time.

3. Engage before you post. Spend 15 minutes commenting on posts from your ICP before you publish your own. This primes the algorithm and builds genuine relationships.

4. Make your profile a landing page. Your headline, about section, and featured posts should answer one question: "Why should I trust this person with my problem?"

The founders we work with who commit to this system see inbound DMs from qualified prospects within 60-90 days. Not from ads. Not from cold outreach. From showing up consistently with useful thinking.`,
    author: 'SocialMoon Team',
    date: '2025-11-08',
    tags: ['LinkedIn', 'B2B', 'Personal Brand'],
  },
  {
    id: 3,
    slug: 'ai-automation-for-small-teams',
    title: 'How Small Teams Can Use AI Automation to Compete with Larger Ones',
    excerpt: 'AI automation isn\'t just for enterprise. Here\'s how small teams are using it to punch above their weight.',
    content: `The biggest competitive advantage available to small businesses right now isn't a bigger budget or a larger team. It's AI automation.

Here's the reality: a 5-person team running the right automation stack can execute at the speed of a 20-person team. We've seen it happen with our clients.

The key is knowing where to automate first. Not everything should be automated — but the right processes, automated well, free up your team to focus on the work that actually requires human judgment.

The highest-ROI automation categories for small teams:

1. Lead qualification and routing. Instead of manually reviewing every inbound lead, set up a qualification workflow that scores leads, routes them to the right person, and sends a personalized first response — all automatically.

2. Content repurposing. One long-form piece of content can be automatically broken into 10 social posts, 3 email snippets, and a short video script. Most teams do this manually. It takes hours. Automated, it takes minutes.

3. Client onboarding. The first 48 hours of a new client relationship set the tone. Automate the welcome sequence, document delivery, and kickoff scheduling so nothing falls through the cracks.

4. Reporting. Weekly performance reports that used to take 2 hours to compile can be automated to generate and send themselves.

The teams that win in the next 5 years won't be the ones with the most people. They'll be the ones who figured out how to make every person 3x more effective.`,
    author: 'SocialMoon Team',
    date: '2025-11-01',
    tags: ['AI', 'Automation', 'Operations'],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  BLOG_POSTS.find(p => p.slug === slug) || null;
