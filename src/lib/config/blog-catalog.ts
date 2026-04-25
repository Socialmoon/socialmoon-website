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
  {
    id: 6,
    slug: 'onhour-building-a-gig-platform',
    title: 'What It Actually Takes to Build a Gig Marketplace from Scratch',
    excerpt: 'OnHour is an Uber-style gig platform we built end-to-end — app, brand, marketing, and field ops. Here\'s what we learned about building a two-sided marketplace from zero.',
    content: `Building a gig marketplace sounds straightforward until you realize it\'s actually three businesses in one: a product company, a marketing operation, and a field logistics business. All three have to work simultaneously or the platform never gets off the ground.

When we took on OnHour — an on-demand gig platform where vendors post jobs and workers pick them up instantly, like Uber for tasks — we owned every layer. Here\'s what that taught us.

**The two-sided problem is real and it\'s brutal.**
Every marketplace has a chicken-and-egg problem. Vendors won\'t post jobs if there are no workers. Workers won\'t sign up if there are no jobs. You have to build both sides in parallel, which means your acquisition strategy has to run two completely different playbooks at the same time.

For OnHour, we ran B2B outreach to onboard vendors while simultaneously running field operations to onboard workers. Neither could wait for the other.

**The app is the easy part.**
Most people think the app is the hard part. It\'s not. The hard part is everything around the app — the brand that makes people trust it, the marketing that makes people find it, the field operations that make the supply side real, and the support systems that keep both sides coming back.

We built the OnHour app from wireframe to beta, but the work that determined whether it would succeed happened outside the codebase.

**Brand matters more at zero than at scale.**
When you have no users and no reviews, your brand is your only trust signal. We built OnHour\'s visual identity, tone of voice, and positioning from scratch with one goal: make a first-time user feel like this platform is reliable before they\'ve used it once.

**Field operations is a growth channel.**
For a gig platform, worker onboarding isn\'t an HR function — it\'s a growth channel. Every worker you onboard is supply that makes the platform more useful for vendors. We treated field activation with the same rigor as a paid ad campaign: defined targets, daily tracking, and clear conversion metrics at each stage.

**What OnHour looks like today.**
OnHour is currently in beta — a fully functional gig marketplace with a live app, an established brand, an active marketing system, and a growing worker and vendor base. It was built entirely by SocialMoon across every function.

If you\'re building a marketplace or platform product and need a partner who can own the full picture — not just one piece of it — that\'s exactly what we do.`,
    author: 'SocialMoon Team',
    date: '2026-03-15',
    tags: ['Product Build', 'Gig Economy', 'Marketplace', 'Full-Scope'],
  },
  {
    id: 4,
    slug: 'field-activation-driver-onboarding',
    title: 'How Structured Field Activation Scales Partner Networks Faster Than Digital Alone',
    excerpt: 'When Bharat Taxi needed to onboard hundreds of driver-partners across multiple cities, the answer wasn\'t an ad campaign. It was a ground team with a system.',
    content: `Most growth conversations start with digital — ads, content, LinkedIn. But for businesses that depend on a physical partner or agent network, the fastest path to scale is often a well-structured field activation operation.

When we worked with Bharat Taxi on their driver acquisition campaign, the challenge wasn't awareness. Drivers knew about the platform. The bottleneck was conversion — getting interested drivers through registration, document verification, and activation without dropping them at each step.

Here's what we learned from running that campaign:

**1. The funnel is physical, not digital.**
For driver-partner onboarding, the drop-off happens in person — at the registration desk, during document collection, or when someone doesn't understand the next step. A field team that can walk someone through the process in real time converts at dramatically higher rates than a self-serve digital flow.

**2. Structured execution beats enthusiasm.**
Field teams without a clear process create chaos at scale. We built a simple execution model: outreach → lead capture → verification → registration → activation. Every team member knew exactly what their role was at each stage. This made the operation repeatable across cities.

**3. Speed of activation matters more than volume of leads.**
The metric that mattered most wasn't how many drivers showed up — it was how quickly they went from interested to active. Reducing the time between registration and first trip was the real lever for Bharat Taxi's network growth.

**4. Field operations and digital operations are complementary.**
The drivers we onboarded through field activation became the social proof for digital campaigns. Real faces, real stories, real numbers — all generated through ground-level work that then fueled content and community.

If your business depends on a network of partners, agents, or field operators, the question isn't whether to invest in field activation. It's whether you have a system for it.

A well-run field activation campaign is one of the highest-ROI growth investments a network-dependent business can make.`,
    author: 'SocialMoon Team',
    date: '2026-01-20',
    tags: ['Field Operations', 'Partner Onboarding', 'Growth'],
  },
  {
    id: 5,
    slug: 'data-annotation-ai-readiness',
    title: 'Why Data Quality Is the Bottleneck Most AI Teams Don\'t Talk About',
    excerpt: 'Before a model can learn, someone has to label the data. Here\'s what high-quality annotation operations actually look like — and why they matter more than the algorithm.',
    content: `Everyone talks about AI models. Almost nobody talks about the data operations that make those models work.

When we partnered with Shaip on their data annotation and dataset structuring work, the core challenge wasn't technical — it was operational. High-volume annotation at consistent quality requires a system, not just a team.

Here's what we learned:

**1. Accuracy compounds — in both directions.**
A 95% accurate annotation workflow sounds good until you realize that 5% error rate across 10,000 records means 500 mislabeled data points feeding your model. Quality assurance isn't a nice-to-have in annotation work. It's the entire product.

We built multi-layer QA into every workflow: annotator-level checks, batch-level validation, and final dataset audits before delivery. The result was 98%+ accuracy maintained across all datasets.

**2. Workflow design determines throughput.**
Most annotation bottlenecks aren't about the number of annotators — they're about how work is structured. Clear labeling guidelines, well-defined edge case rules, and efficient review loops can double throughput without adding headcount.

**3. AI-readiness is a format problem, not just a labeling problem.**
A dataset that's accurately labeled but poorly structured is still a problem for the engineering team consuming it. We worked with Shaip to ensure every dataset was packaged in the format their ML pipelines expected — reducing integration friction and speeding up model training cycles.

**4. Data operations is a real service category.**
For AI companies, data annotation and structuring is as critical as software development. It's not a commodity task — it's a precision operation that directly determines model performance.

If you're building AI products and struggling with data quality, labeling consistency, or annotation throughput, the answer is usually a better operations system, not more annotators.`,
    author: 'SocialMoon Team',
    date: '2026-02-05',
    tags: ['Data Operations', 'AI', 'Annotation'],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  BLOG_POSTS.find(p => p.slug === slug) || null;
