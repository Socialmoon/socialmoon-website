export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
};

export type ServiceDetail = {
  section: 'Growth' | 'Efficiency' | 'Build';
  subtitle: string;
  deliverables: string[];
  outcomes: string[];
  idealFor: string[];
};

export const toServiceSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export const SERVICES_PAGE_CONTENT = {
  title: 'Growth & Efficiency Systems',
  services: [
    {
      id: 1,
      title: 'Content & Social Growth System',
      description:
        'A strategic content engine that keeps your brand consistently visible and converts attention into demand.',
      price: 'Custom',
      popular: true,
      features: [
        'Platform-specific content architecture',
        'Monthly content production and publishing rhythm',
        'Narrative consistency across all audience touchpoints',
      ],
    },
    {
      id: 2,
      title: 'Lead Generation System',
      description:
        'A repeatable outbound and inbound pipeline system focused on qualified conversations, not vanity volume.',
      price: 'Custom',
      popular: true,
      features: [
        'Offer-to-audience alignment framework',
        'Lead capture and nurture workflow design',
        'Qualified handoff process for your sales team',
      ],
    },
    {
      id: 3,
      title: 'Personal Brand System',
      description:
        'A founder-led authority system that turns expertise into trust, visibility, and high-quality inbound.',
      price: 'Custom',
      features: [
        'Founder positioning and narrative blueprint',
        'Thought leadership content pipeline',
        'Relationship-building engine on LinkedIn',
      ],
    },
    {
      id: 11,
      title: 'SEO & AEO Visibility System',
      description:
        'Search visibility work for people and answer engines: keyword strategy, local SEO, on-page structure, schema, content briefs, and ethical backlink outreach planning.',
      price: 'Custom',
      features: [
        'Keyword strategy for services, Lucknow, and priority city pages',
        'AEO-ready FAQs, schema, and answer-focused content structure',
        'Local SEO, Google Business Profile, citations, and earned backlink plan',
      ],
    },
    {
      id: 4,
      title: 'Website Development System',
      description:
        'Mobile-first websites, landing pages, and campaign pages built to make your offer clear and credible.',
      price: 'Custom',
      features: [
        'Website structure, copy direction, and conversion flow',
        'Responsive frontend implementation',
        'Launch-ready pages with analytics and SEO basics',
      ],
    },
    {
      id: 5,
      title: 'App Development System',
      description:
        'Product design and development for web apps, mobile app flows, dashboards, and internal tools.',
      price: 'Custom',
      features: [
        'Product scope and user-flow planning',
        'Frontend, backend, and integration implementation',
        'Testing, launch support, and iteration roadmap',
      ],
    },
    {
      id: 6,
      title: 'OpsFlow AI',
      description:
        'Automation-first operational redesign that removes repetitive workload and improves team throughput.',
      price: 'Custom',
      features: [
        'High-friction process mapping',
        'Automation implementation for repetitive workflows',
        'SLA and execution speed monitoring',
      ],
    },
    {
      id: 7,
      title: 'WorkflowOS',
      description:
        'A unified internal operating layer that replaces scattered docs, handoffs, and status-chaos with control.',
      price: 'Custom',
      features: [
        'Process architecture and ownership mapping',
        'Custom internal workflow board setup',
        'Escalation and accountability rules',
      ],
    },
    {
      id: 8,
      title: 'CloudTrim',
      description:
        'Cloud cost and architecture optimization to reduce spend while improving reliability and scale readiness.',
      price: 'Custom',
      features: [
        'Cloud cost and usage audit',
        'Resource rightsizing and policy tuning',
        'Cost governance and alerting baseline',
      ],
    },
    {
      id: 9,
      title: 'QueryBoost',
      description:
        'Database and query optimization for significantly faster endpoints, better stability, and scale confidence.',
      price: 'Custom',
      features: [
        'Slow query and index diagnostics',
        'Schema and query path optimization',
        'Load behavior testing and tuning recommendations',
      ],
    },
    {
      id: 10,
      title: 'SmartLayer AI',
      description:
        'A practical AI feature roadmap from opportunity discovery to prototyping and production shipping plan.',
      price: 'Custom',
      features: [
        'AI opportunity prioritization by business impact',
        'Rapid proof-of-concept development',
        'Production rollout roadmap with risk controls',
      ],
    },
  ] as ServiceItem[],
};

export const SERVICE_DETAIL_CONTENT: Record<string, ServiceDetail> = {
  'content-social-growth-system': {
    section: 'Growth',
    subtitle:
      'We design and operate your brand content system so your audience sees consistent authority, clear positioning, and conversion-focused communication every week.',
    deliverables: [
      'Audience narrative map and messaging hierarchy',
      'Monthly platform-specific content calendar with hooks, themes, and formats',
      'Production workflow with review loops and publishing governance',
      'Performance rhythm for testing topics, angles, and formats',
    ],
    outcomes: [
      'Predictable visibility and stronger category recall',
      'Higher quality inbound from better audience-fit content',
      'Lower content dependency on founder bandwidth',
    ],
    idealFor: [
      'B2B or service companies scaling thought leadership',
      'Founder-led brands with irregular posting and weak consistency',
      'Teams wanting outsourced structure without losing brand voice',
    ],
  },
  'lead-generation-system': {
    section: 'Growth',
    subtitle:
      'We build a full-funnel lead engine that combines targeting, message sequencing, and conversion handoff so pipeline growth becomes measurable and repeatable.',
    deliverables: [
      'ICP and offer refinement linked to market pain points',
      'Outbound and inbound acquisition workflow with qualification criteria',
      'Lead nurturing sequence design across touchpoints',
      'Pipeline instrumentation and source-level performance tracking',
    ],
    outcomes: [
      'Steady flow of qualified opportunities each month',
      'Faster movement from first touch to sales conversation',
      'Clear visibility into what channels actually generate revenue',
    ],
    idealFor: [
      'Teams with inconsistent pipeline quality',
      'Companies relying only on referrals or ad spikes',
      'Founders needing predictable lead flow to plan growth',
    ],
  },
  'personal-brand-system': {
    section: 'Growth',
    subtitle:
      'We turn founder visibility into strategic leverage by building a personal brand system that compounds trust and opens high-value conversations.',
    deliverables: [
      'Founder positioning framework and authority narrative',
      'Content strategy for reputation, trust, and demand generation',
      'LinkedIn publishing system with engagement prompts and response flow',
      'Relationship expansion plan for decision-maker visibility',
    ],
    outcomes: [
      'Higher inbound quality from strategic buyers',
      'Shorter trust cycle in sales and partnerships',
      'Stronger founder signal in competitive markets',
    ],
    idealFor: [
      'Consultancies, agencies, and high-trust B2B offers',
      'Founders with expertise but low digital presence',
      'Teams where founder credibility drives top-of-funnel demand',
    ],
  },
  'seo-aeo-visibility-system': {
    section: 'Growth',
    subtitle:
      'We build a search visibility system that helps people and answer engines understand what you offer, where you serve, and why your pages are trustworthy.',
    deliverables: [
      'Keyword map for primary services, supporting topics, Lucknow intent, and priority city pages',
      'On-page SEO improvements for titles, descriptions, headings, internal links, and content structure',
      'AEO-ready question sections, FAQ schema, and concise answer blocks for service pages',
      'Local SEO checklist for Google Business Profile, local citations, service areas, and review prompts',
      'Ethical backlink and digital PR target list based on relevant directories, partners, publications, and real relationships',
    ],
    outcomes: [
      'Clearer search intent coverage across service and city pages',
      'Better structured pages for Google, AI answer engines, and real visitors',
      'A backlink strategy that can be explained without spam or fake placements',
    ],
    idealFor: [
      'Lucknow businesses that want stronger local discovery',
      'Brands launching new websites and needing SEO foundations before ads scale',
      'Companies that want sustainable search growth without unverifiable claims',
    ],
  },
  'opsflow-ai': {
    section: 'Efficiency',
    subtitle:
      'We identify repetitive operations slowing your team and deploy practical automation layers that improve speed, quality, and operational control.',
    deliverables: [
      'Workflow friction audit and automation opportunity scoring',
      'Automation setup for repetitive internal and client-facing tasks',
      'Exception handling logic and fallback rules',
      'Performance dashboard for cycle time and SLA monitoring',
    ],
    outcomes: [
      'Reduced manual effort and operational drag',
      'Faster execution across onboarding, support, and delivery',
      'More output capacity without immediate team expansion',
    ],
    idealFor: [
      'Teams buried under repetitive process work',
      'Growing operations with increasing execution delays',
      'Businesses needing speed without quality compromise',
    ],
  },
  'website-development-system': {
    section: 'Build',
    subtitle:
      'We design websites as campaign experiences: mobile-first, memorable, trust-building, and shaped around the action your audience should take next.',
    deliverables: [
      'Creative website concept and page-flow planning',
      'Hero, service, proof, and conversion-section copy direction',
      'Responsive frontend implementation with distinctive interaction ideas',
      'Analytics, basic SEO setup, trust signals, and launch checklist',
    ],
    outcomes: [
      'A website that feels specific to the brand, not copied from a template',
      'Higher engagement paths for campaign and organic traffic',
      'A clearer place for visitors to understand, trust, and act',
    ],
    idealFor: [
      'Brands with outdated or generic websites',
      'Campaigns that need dedicated landing pages',
      'Businesses that need creative trust-building pages before running ads',
    ],
  },
  'app-development-system': {
    section: 'Build',
    subtitle:
      'We build app experiences that make users want to return: clear flows, useful screens, memorable interactions, and product logic tied to business growth.',
    deliverables: [
      'Product requirement mapping and engagement-flow planning',
      'UI screens, interaction states, and creative product moments',
      'Frontend, backend, and API implementation where required',
      'Testing, launch support, analytics events, and iteration roadmap',
    ],
    outcomes: [
      'A product experience that is easier to understand and keep using',
      'Better alignment between app design, marketing, and launch work',
      'A product foundation that can evolve after the first release',
    ],
    idealFor: [
      'Founders building MVPs or internal tools',
      'Companies that need dashboards, portals, or workflow apps',
      'Brands that need product development alongside go-to-market support',
    ],
  },
  workflowos: {
    section: 'Efficiency',
    subtitle:
      'We build your internal operating system so teams can execute with clarity, ownership, and fewer handoff failures.',
    deliverables: [
      'End-to-end process architecture for recurring operations',
      'Role-based workflow setup and process documentation',
      'Task governance, escalation paths, and approvals',
      'Operational dashboard for throughput and bottleneck visibility',
    ],
    outcomes: [
      'Cleaner execution with reduced coordination overhead',
      'Fewer dropped tasks and missed dependencies',
      'Higher process reliability as team size grows',
    ],
    idealFor: [
      'Operations distributed across spreadsheets and chat threads',
      'Teams experiencing ownership confusion across functions',
      'Companies preparing to scale delivery throughput',
    ],
  },
  cloudtrim: {
    section: 'Efficiency',
    subtitle:
      'We optimize cloud architecture and spend to remove waste, improve reliability, and keep infrastructure growth aligned with business goals.',
    deliverables: [
      'Cloud spend decomposition and waste identification',
      'Rightsizing and scaling policy recommendations',
      'Storage, compute, and network optimization plan',
      'Cost governance framework with monitoring baseline',
    ],
    outcomes: [
      'Meaningful reduction in monthly cloud cost',
      'Improved infrastructure stability under growth pressure',
      'Better cost predictability for budgeting and planning',
    ],
    idealFor: [
      'Teams with rising infra bills and unclear spend drivers',
      'Products scaling traffic without infra discipline',
      'Businesses needing cost control before aggressive growth',
    ],
  },
  queryboost: {
    section: 'Efficiency',
    subtitle:
      'We diagnose and fix data-layer bottlenecks so your product performs faster, scales cleaner, and avoids recurring performance incidents.',
    deliverables: [
      'Database and query path performance audit',
      'Indexing and schema optimization recommendations',
      'Query rewrite and endpoint performance tuning',
      'Load-readiness testing with remediation priorities',
    ],
    outcomes: [
      'Faster API and page response times',
      'Reduced performance incidents during peak usage',
      'Stronger confidence in scale readiness',
    ],
    idealFor: [
      'Products suffering from slow dashboards or APIs',
      'Teams firefighting recurring database bottlenecks',
      'Platforms preparing for larger user volume',
    ],
  },
  'smartlayer-ai': {
    section: 'Efficiency',
    subtitle:
      'We convert AI ambition into execution with a focused roadmap, practical prototypes, and a realistic shipping strategy tied to business impact.',
    deliverables: [
      'AI opportunity assessment by value, effort, and risk',
      'Prototype development for highest-impact use cases',
      'Model/workflow architecture recommendations',
      'Production rollout roadmap with validation checkpoints',
    ],
    outcomes: [
      'Faster path from concept to AI feature launch',
      'Reduced risk from unclear AI prioritization',
      'Stronger product differentiation and operational leverage',
    ],
    idealFor: [
      'Product teams exploring AI but lacking clear roadmap',
      'Founders seeking practical AI wins before heavy investment',
      'Companies needing validated AI direction for roadmap planning',
    ],
  },
};

export const SERVICES_CASE_STUDIES = [];

