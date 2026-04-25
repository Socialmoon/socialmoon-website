// Sub-services that live inside each solution package
// Each solution slug maps to a list of sub-services with their own detail pages

export type SubService = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string; // lucide icon name
  deliverables: string[];
  outcomes: string[];
  process: { step: string; title: string; desc: string }[];
  idealFor: string[];
};

export type SolutionWithSubServices = {
  solutionSlug: string;
  solutionTitle: string;
  section: 'Growth' | 'Efficiency';
  color: string;
  subServices: SubService[];
};

export const SOLUTION_SUB_SERVICES: SolutionWithSubServices[] = [
  {
    solutionSlug: 'content-social-growth-system',
    solutionTitle: 'Content & Social Growth System',
    section: 'Growth',
    color: 'emerald',
    subServices: [
      {
        slug: 'social-media-management',
        title: 'Social Media Management',
        tagline: 'Full-service management of your brand across all platforms',
        description: 'We handle everything — content calendar, posting, community engagement, and performance tracking — so your brand stays consistently visible without draining your team.',
        icon: 'Globe',
        deliverables: [
          'Monthly content calendar with platform-specific formats',
          'Daily/weekly posting across Instagram, LinkedIn, Twitter, Facebook',
          'Community management and comment responses',
          'Monthly performance report with growth metrics',
        ],
        outcomes: [
          'Consistent brand presence without founder involvement',
          'Growing follower base with qualified audience',
          'Higher engagement rates month over month',
        ],
        process: [
          { step: '01', title: 'Brand Audit', desc: 'We audit your current presence, voice, and audience to build a baseline.' },
          { step: '02', title: 'Strategy Build', desc: 'Content pillars, posting cadence, and platform priorities are defined.' },
          { step: '03', title: 'Production', desc: 'Content is created, reviewed, and scheduled for the month.' },
          { step: '04', title: 'Optimize', desc: 'Weekly performance review and monthly strategy refinement.' },
        ],
        idealFor: ['Founders who want to stay off social but stay visible', 'Brands with inconsistent posting history', 'Teams without a dedicated social media person'],
      },
      {
        slug: 'content-creation',
        title: 'Content Creation',
        tagline: 'High-quality content that converts attention into demand',
        description: 'From short-form reels to long-form thought leadership — we produce content that is on-brand, audience-specific, and built to perform on each platform.',
        icon: 'Video',
        deliverables: [
          'Short-form video scripts and production briefs',
          'Graphic design for posts, stories, and carousels',
          'Long-form articles and LinkedIn posts',
          'Content repurposing across formats',
        ],
        outcomes: [
          'Content that actually gets saved, shared, and commented on',
          'Consistent visual identity across all touchpoints',
          'Reduced time spent on content production internally',
        ],
        process: [
          { step: '01', title: 'Brief', desc: 'We define content goals, formats, and audience for the month.' },
          { step: '02', title: 'Create', desc: 'Scripts, designs, and copy are produced and reviewed.' },
          { step: '03', title: 'Refine', desc: 'Feedback loop with your team before publishing.' },
          { step: '04', title: 'Repurpose', desc: 'Top-performing content is adapted across formats.' },
        ],
        idealFor: ['Brands that need volume without sacrificing quality', 'Founders with ideas but no time to execute', 'Teams scaling content output'],
      },
      {
        slug: 'instagram-growth',
        title: 'Instagram Growth',
        tagline: 'Organic Instagram growth built on strategy, not hacks',
        description: 'We grow your Instagram following with the right audience — people who actually care about your product or service — through content strategy, hashtag research, and engagement systems.',
        icon: 'TrendingUp',
        deliverables: [
          'Instagram-specific content strategy and grid aesthetic',
          'Reels, carousels, and story sequences',
          'Hashtag and keyword research',
          'Engagement outreach and community building',
        ],
        outcomes: [
          'Steady follower growth with qualified audience',
          'Higher reach and saves on content',
          'Instagram as a real lead generation channel',
        ],
        process: [
          { step: '01', title: 'Profile Audit', desc: 'Bio, highlights, grid, and content history reviewed.' },
          { step: '02', title: 'Content Plan', desc: 'Reels, carousels, and stories mapped to growth goals.' },
          { step: '03', title: 'Publish & Engage', desc: 'Content goes live with active community engagement.' },
          { step: '04', title: 'Analyze', desc: 'Weekly reach and follower data reviewed for optimization.' },
        ],
        idealFor: ['D2C brands wanting Instagram as a sales channel', 'Creators building a personal brand', 'Businesses with low Instagram engagement'],
      },
      {
        slug: 'linkedin-marketing',
        title: 'LinkedIn B2B Marketing',
        tagline: 'Turn LinkedIn into your highest-ROI B2B channel',
        description: 'We build and execute a LinkedIn strategy that positions your brand as a category authority, drives inbound from decision-makers, and generates qualified B2B pipeline.',
        icon: 'Users',
        deliverables: [
          'Company page optimization and content strategy',
          'Thought leadership post series',
          'Employee advocacy content',
          'LinkedIn newsletter setup and management',
        ],
        outcomes: [
          'Consistent inbound from target accounts',
          'Brand recognized as a category authority',
          'Measurable pipeline from LinkedIn activity',
        ],
        process: [
          { step: '01', title: 'ICP Mapping', desc: 'Define who you want to reach and what they care about.' },
          { step: '02', title: 'Content System', desc: 'Build a posting cadence that builds trust over time.' },
          { step: '03', title: 'Amplify', desc: 'Engage with target accounts and amplify reach.' },
          { step: '04', title: 'Convert', desc: 'Turn profile visitors into conversations.' },
        ],
        idealFor: ['B2B companies targeting enterprise or mid-market', 'Consultancies and agencies', 'Founders wanting inbound from LinkedIn'],
      },
    ],
  },
  {
    solutionSlug: 'lead-generation-system',
    solutionTitle: 'Lead Generation System',
    section: 'Growth',
    color: 'blue',
    subServices: [
      {
        slug: 'outbound-lead-generation',
        title: 'Outbound Lead Generation',
        tagline: 'Systematic outreach that fills your pipeline with qualified prospects',
        description: 'We build and run outbound sequences — email, LinkedIn, and multi-channel — that reach your ideal customers with the right message at the right time.',
        icon: 'Target',
        deliverables: [
          'ICP definition and prospect list building',
          'Multi-channel outreach sequences (email + LinkedIn)',
          'Message testing and iteration framework',
          'CRM integration and pipeline tracking',
        ],
        outcomes: [
          'Predictable flow of qualified meetings per month',
          'Shorter time from first touch to sales conversation',
          'Clear data on what messaging converts',
        ],
        process: [
          { step: '01', title: 'ICP & Offer', desc: 'Define who to target and what problem you solve for them.' },
          { step: '02', title: 'List Build', desc: 'Prospect lists built from verified data sources.' },
          { step: '03', title: 'Sequence', desc: 'Multi-touch outreach sequences launched and monitored.' },
          { step: '04', title: 'Optimize', desc: 'A/B test messages and refine based on reply rates.' },
        ],
        idealFor: ['B2B companies with a defined ICP', 'Teams without a dedicated SDR', 'Founders wanting pipeline without relying on referrals'],
      },
      {
        slug: 'paid-social-advertising',
        title: 'Paid Social Advertising',
        tagline: 'Performance ads that generate leads, not just impressions',
        description: 'We run paid campaigns on Meta, LinkedIn, and Google that are built around conversion — not vanity metrics. Every rupee is tracked to pipeline.',
        icon: 'BarChart3',
        deliverables: [
          'Campaign strategy and audience targeting',
          'Ad creative production (copy + design)',
          'A/B testing framework',
          'Weekly performance reporting with ROAS tracking',
        ],
        outcomes: [
          'Lower cost per qualified lead over time',
          'Ads that scale without losing efficiency',
          'Clear attribution from ad spend to revenue',
        ],
        process: [
          { step: '01', title: 'Audit', desc: 'Review existing campaigns or start from scratch with a strategy.' },
          { step: '02', title: 'Launch', desc: 'Campaigns go live with tracking and conversion events set up.' },
          { step: '03', title: 'Test', desc: 'Creative and audience variants tested systematically.' },
          { step: '04', title: 'Scale', desc: 'Winning combinations scaled while losers are cut.' },
        ],
        idealFor: ['Brands with a proven offer ready to scale', 'E-commerce and D2C companies', 'B2B companies with a clear conversion path'],
      },
      {
        slug: 'lead-nurture-system',
        title: 'Lead Nurture System',
        tagline: 'Convert warm leads into paying customers with automated nurture',
        description: 'We build email and messaging sequences that keep your leads warm, educated, and moving toward a purchase — without manual follow-up from your team.',
        icon: 'Mail',
        deliverables: [
          'Lead nurture email sequence design',
          'Segmentation and trigger logic setup',
          'CRM workflow automation',
          'Re-engagement campaigns for cold leads',
        ],
        outcomes: [
          'Higher conversion rate from lead to customer',
          'Fewer leads falling through the cracks',
          'Sales team receives warmer, better-prepared prospects',
        ],
        process: [
          { step: '01', title: 'Map Journey', desc: 'Define the stages from lead to customer for your business.' },
          { step: '02', title: 'Write Sequences', desc: 'Email and message sequences written for each stage.' },
          { step: '03', title: 'Automate', desc: 'Sequences set up in your CRM or email platform.' },
          { step: '04', title: 'Refine', desc: 'Open rates, click rates, and conversions tracked and improved.' },
        ],
        idealFor: ['Businesses with leads that go cold before converting', 'Teams without time for manual follow-up', 'Companies with long sales cycles'],
      },
    ],
  },
  {
    solutionSlug: 'personal-brand-system',
    solutionTitle: 'Personal Brand System',
    section: 'Growth',
    color: 'purple',
    subServices: [
      {
        slug: 'founder-linkedin-system',
        title: 'Founder LinkedIn System',
        tagline: 'Make your LinkedIn profile a 24/7 sales asset',
        description: 'We build a complete LinkedIn presence for founders — from profile optimization to a weekly content system that builds authority and drives inbound from the right people.',
        icon: 'Users',
        deliverables: [
          'LinkedIn profile rewrite and optimization',
          'Positioning and messaging framework',
          'Weekly content calendar with post drafts',
          'Engagement and connection strategy',
        ],
        outcomes: [
          'Profile views from target buyers increase significantly',
          'Inbound DMs from qualified prospects',
          'Recognized as a thought leader in your category',
        ],
        process: [
          { step: '01', title: 'Position', desc: 'Define your unique angle and what you want to be known for.' },
          { step: '02', title: 'Optimize', desc: 'Profile rewritten to attract the right audience.' },
          { step: '03', title: 'Publish', desc: 'Weekly posts that build trust and demonstrate expertise.' },
          { step: '04', title: 'Engage', desc: 'Strategic engagement with target accounts and decision-makers.' },
        ],
        idealFor: ['Founders of B2B companies', 'Consultants and advisors', 'Anyone whose credibility drives business'],
      },
      {
        slug: 'thought-leadership-content',
        title: 'Thought Leadership Content',
        tagline: 'Content that makes you the obvious expert in your space',
        description: 'We research, write, and publish long-form content — articles, newsletters, and posts — that positions you as the go-to authority in your industry.',
        icon: 'BookOpen',
        deliverables: [
          'Monthly thought leadership articles',
          'LinkedIn newsletter setup and management',
          'Speaking topic development',
          'Content repurposing across channels',
        ],
        outcomes: [
          'Recognized as a category authority',
          'Content that gets shared by peers and prospects',
          'Inbound opportunities from content visibility',
        ],
        process: [
          { step: '01', title: 'Research', desc: 'Identify the topics your audience cares about most.' },
          { step: '02', title: 'Write', desc: 'Long-form content drafted and refined with your input.' },
          { step: '03', title: 'Publish', desc: 'Content distributed across the right channels.' },
          { step: '04', title: 'Amplify', desc: 'Repurpose into shorter formats for maximum reach.' },
        ],
        idealFor: ['Founders wanting to build a media presence', 'Experts with knowledge but no time to write', 'Brands investing in long-term authority'],
      },
    ],
  },
  {
    solutionSlug: 'opsflow-ai',
    solutionTitle: 'OpsFlow AI',
    section: 'Efficiency',
    color: 'orange',
    subServices: [
      {
        slug: 'workflow-automation',
        title: 'Workflow Automation',
        tagline: 'Eliminate repetitive manual work with intelligent automation',
        description: 'We identify your most time-consuming manual processes and automate them using AI and no-code/low-code tools — so your team focuses on work that actually matters.',
        icon: 'Zap',
        deliverables: [
          'Process audit and automation opportunity scoring',
          'Automation build using Make, Zapier, or custom scripts',
          'Testing and error handling setup',
          'Team training and documentation',
        ],
        outcomes: [
          '40-70% reduction in manual task time',
          'Fewer errors from human-in-the-loop processes',
          'Team capacity freed for higher-value work',
        ],
        process: [
          { step: '01', title: 'Audit', desc: 'Map all manual processes and score by time cost and automation potential.' },
          { step: '02', title: 'Prioritize', desc: 'Select highest-impact automations to build first.' },
          { step: '03', title: 'Build', desc: 'Automations built, tested, and deployed.' },
          { step: '04', title: 'Monitor', desc: 'Error rates and time savings tracked post-launch.' },
        ],
        idealFor: ['Teams spending hours on repetitive data entry or status updates', 'Operations teams with growing workload', 'Businesses scaling without adding headcount'],
      },
      {
        slug: 'ai-integration',
        title: 'AI Integration',
        tagline: 'Embed AI into your operations for real productivity gains',
        description: 'We integrate AI tools — LLMs, classification models, and intelligent agents — into your existing workflows to speed up decisions, reduce errors, and improve output quality.',
        icon: 'BrainCircuit',
        deliverables: [
          'AI use case identification and prioritization',
          'Integration with existing tools and workflows',
          'Prompt engineering and model configuration',
          'Performance monitoring and iteration',
        ],
        outcomes: [
          'Faster decision-making with AI-assisted analysis',
          'Reduced time on research, drafting, and classification tasks',
          'Competitive advantage from AI-powered operations',
        ],
        process: [
          { step: '01', title: 'Discover', desc: 'Identify where AI can have the highest impact in your workflow.' },
          { step: '02', title: 'Prototype', desc: 'Build a working proof of concept for the top use case.' },
          { step: '03', title: 'Integrate', desc: 'Connect AI to your existing tools and processes.' },
          { step: '04', title: 'Refine', desc: 'Monitor outputs and improve model performance over time.' },
        ],
        idealFor: ['Teams doing repetitive research or content tasks', 'Operations with high-volume classification or routing', 'Companies wanting to move faster with AI'],
      },
    ],
  },
  {
    solutionSlug: 'workflowos',
    solutionTitle: 'WorkflowOS',
    section: 'Efficiency',
    color: 'indigo',
    subServices: [
      {
        slug: 'process-design',
        title: 'Process Design & Documentation',
        tagline: 'Replace tribal knowledge with clear, repeatable processes',
        description: 'We map, design, and document your core business processes so anyone on your team can execute them consistently — without depending on one person who "knows how it works."',
        icon: 'Code',
        deliverables: [
          'End-to-end process maps for core operations',
          'SOPs and runbooks for each process',
          'Role and ownership assignment',
          'Process library in your tool of choice',
        ],
        outcomes: [
          'Onboarding new team members 3x faster',
          'Fewer errors from unclear handoffs',
          'Processes that survive team changes',
        ],
        process: [
          { step: '01', title: 'Discovery', desc: 'Interview team members and map current state processes.' },
          { step: '02', title: 'Design', desc: 'Redesign processes for clarity, speed, and accountability.' },
          { step: '03', title: 'Document', desc: 'SOPs and runbooks written and organized.' },
          { step: '04', title: 'Implement', desc: 'Team trained and processes embedded in daily work.' },
        ],
        idealFor: ['Growing teams where "how we do things" lives in people\'s heads', 'Companies preparing to scale or hire', 'Operations with high error or rework rates'],
      },
      {
        slug: 'project-management-setup',
        title: 'Project Management Setup',
        tagline: 'One system where your entire team executes with clarity',
        description: 'We set up and configure your project management tool (Notion, Linear, Asana, or ClickUp) to match how your team actually works — with clear ownership, deadlines, and visibility.',
        icon: 'BarChart3',
        deliverables: [
          'PM tool setup and configuration',
          'Workspace structure and template library',
          'Team onboarding and training',
          'Reporting dashboards for leadership',
        ],
        outcomes: [
          'Everyone knows what they own and when it\'s due',
          'Leadership has real-time visibility into execution',
          'Fewer status meetings and check-ins needed',
        ],
        process: [
          { step: '01', title: 'Assess', desc: 'Understand how your team works and what\'s breaking down.' },
          { step: '02', title: 'Design', desc: 'Build the workspace structure and templates.' },
          { step: '03', title: 'Migrate', desc: 'Move existing work into the new system.' },
          { step: '04', title: 'Train', desc: 'Team trained and adoption monitored.' },
        ],
        idealFor: ['Teams using spreadsheets or chat for project tracking', 'Companies with missed deadlines and unclear ownership', 'Scaling teams needing operational visibility'],
      },
    ],
  },
  {
    solutionSlug: 'cloudtrim',
    solutionTitle: 'CloudTrim',
    section: 'Efficiency',
    color: 'cyan',
    subServices: [
      {
        slug: 'cloud-cost-optimization',
        title: 'Cloud Cost Optimization',
        tagline: 'Cut your cloud bill by 40-60% without touching your product',
        description: 'We audit your AWS, GCP, or Azure spend, identify waste, and implement rightsizing, reserved instances, and policy changes that reduce cost without impacting performance.',
        icon: 'Shield',
        deliverables: [
          'Full cloud spend audit by service and team',
          'Waste identification and rightsizing recommendations',
          'Reserved instance and savings plan analysis',
          'Cost governance policies and alerting',
        ],
        outcomes: [
          '40-60% reduction in monthly cloud spend',
          'Predictable infrastructure costs for budgeting',
          'No performance degradation from optimization',
        ],
        process: [
          { step: '01', title: 'Audit', desc: 'Pull full cost and usage data across all cloud accounts.' },
          { step: '02', title: 'Analyze', desc: 'Identify waste, over-provisioning, and savings opportunities.' },
          { step: '03', title: 'Implement', desc: 'Apply rightsizing, policies, and reserved capacity.' },
          { step: '04', title: 'Monitor', desc: 'Set up cost dashboards and anomaly alerts.' },
        ],
        idealFor: ['Startups with growing AWS/GCP bills', 'Companies preparing for Series A/B with investor scrutiny on burn', 'Engineering teams without a dedicated FinOps function'],
      },
      {
        slug: 'infrastructure-architecture',
        title: 'Infrastructure Architecture Review',
        tagline: 'Build infrastructure that scales without surprises',
        description: 'We review your current cloud architecture for reliability, scalability, and cost efficiency — and deliver a prioritized roadmap to fix what\'s fragile before it breaks.',
        icon: 'Globe',
        deliverables: [
          'Architecture review and risk assessment',
          'Scalability and reliability gap analysis',
          'Prioritized improvement roadmap',
          'Documentation of current and target state',
        ],
        outcomes: [
          'Infrastructure ready for 5-10x traffic growth',
          'Reduced risk of outages and performance incidents',
          'Clear roadmap for engineering to execute',
        ],
        process: [
          { step: '01', title: 'Review', desc: 'Audit current architecture, dependencies, and failure points.' },
          { step: '02', title: 'Assess', desc: 'Score risks by likelihood and business impact.' },
          { step: '03', title: 'Roadmap', desc: 'Prioritized list of improvements with effort estimates.' },
          { step: '04', title: 'Support', desc: 'Optional implementation support for critical fixes.' },
        ],
        idealFor: ['Companies scaling traffic rapidly', 'Teams that have never had an architecture review', 'Businesses preparing for high-traffic events or launches'],
      },
    ],
  },
  {
    solutionSlug: 'queryboost',
    solutionTitle: 'QueryBoost',
    section: 'Efficiency',
    color: 'teal',
    subServices: [
      {
        slug: 'database-performance-audit',
        title: 'Database Performance Audit',
        tagline: 'Find and fix the queries killing your app performance',
        description: 'We audit your database for slow queries, missing indexes, and schema issues — then deliver a prioritized fix list that makes your app dramatically faster.',
        icon: 'BarChart3',
        deliverables: [
          'Slow query log analysis and ranking',
          'Index audit and recommendations',
          'Schema review for performance anti-patterns',
          'Query rewrite recommendations',
        ],
        outcomes: [
          '5-10x faster page and API response times',
          'Fewer database-related incidents',
          'Clear list of fixes ranked by impact',
        ],
        process: [
          { step: '01', title: 'Instrument', desc: 'Enable query logging and performance monitoring.' },
          { step: '02', title: 'Analyze', desc: 'Identify top slow queries and their root causes.' },
          { step: '03', title: 'Fix', desc: 'Implement index changes and query rewrites.' },
          { step: '04', title: 'Validate', desc: 'Measure before/after performance improvements.' },
        ],
        idealFor: ['Apps with slow dashboards or API endpoints', 'Teams experiencing database bottlenecks at scale', 'Products preparing for a traffic spike or launch'],
      },
    ],
  },
  {
    solutionSlug: 'smartlayer-ai',
    solutionTitle: 'SmartLayer AI',
    section: 'Efficiency',
    color: 'violet',
    subServices: [
      {
        slug: 'ai-product-strategy',
        title: 'AI Product Strategy',
        tagline: 'A clear roadmap for AI features that actually ship',
        description: 'We help product teams identify the highest-impact AI opportunities, validate them quickly, and build a realistic roadmap from prototype to production.',
        icon: 'Rocket',
        deliverables: [
          'AI opportunity assessment across your product',
          'Prioritization by value, effort, and risk',
          'Prototype development for top use cases',
          'Production roadmap with validation checkpoints',
        ],
        outcomes: [
          'Clarity on which AI features to build first',
          'Working prototypes to test with real users',
          'Faster path from AI idea to shipped feature',
        ],
        process: [
          { step: '01', title: 'Discover', desc: 'Map your product and identify AI opportunity areas.' },
          { step: '02', title: 'Prioritize', desc: 'Score opportunities by business impact and feasibility.' },
          { step: '03', title: 'Prototype', desc: 'Build fast proofs of concept for top opportunities.' },
          { step: '04', title: 'Roadmap', desc: 'Deliver a production roadmap with clear milestones.' },
        ],
        idealFor: ['Product teams exploring AI but lacking direction', 'Founders wanting AI differentiation before competitors', 'Companies with AI ambition but unclear execution path'],
      },
      {
        slug: 'ai-feature-development',
        title: 'AI Feature Development',
        tagline: 'From prototype to production-ready AI features',
        description: 'We take your validated AI use cases and build them into production-ready features — with proper error handling, monitoring, and the ability to improve over time.',
        icon: 'BrainCircuit',
        deliverables: [
          'Production AI feature development',
          'Model selection and prompt engineering',
          'Evaluation framework and quality metrics',
          'Monitoring and feedback loop setup',
        ],
        outcomes: [
          'AI features that work reliably in production',
          'Measurable improvement in product metrics',
          'Foundation for continuous AI improvement',
        ],
        process: [
          { step: '01', title: 'Spec', desc: 'Define the feature requirements and success metrics.' },
          { step: '02', title: 'Build', desc: 'Develop the AI feature with proper architecture.' },
          { step: '03', title: 'Evaluate', desc: 'Test against quality benchmarks before launch.' },
          { step: '04', title: 'Ship', desc: 'Deploy with monitoring and feedback collection.' },
        ],
        idealFor: ['Teams with validated AI use cases ready to build', 'Products needing AI features without an ML team', 'Companies wanting to ship AI faster'],
      },
    ],
  },
];

export const getSolutionSubServices = (solutionSlug: string) =>
  SOLUTION_SUB_SERVICES.find(s => s.solutionSlug === solutionSlug) || null;

export const getSubService = (solutionSlug: string, subSlug: string) => {
  const solution = getSolutionSubServices(solutionSlug);
  return solution?.subServices.find(s => s.slug === subSlug) || null;
};
