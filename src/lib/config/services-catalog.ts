export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
};

export type ServiceDetail = {
  section: 'Growth' | 'Efficiency';
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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

export const SERVICES_CASE_STUDIES = [
  {
    slug: 'founder-led-saas-growth-engine',
    company: 'Northlane CRM',
    industry: 'B2B SaaS',
    service: 'Growth Systems',
    results: '+214% qualified pipeline growth',
    duration: '4 months',
    metrics: [
      { before: '18 leads/mo', after: '57 leads/mo', improvement: '+216%' },
      { before: '1.6% CVR', after: '3.9% CVR', improvement: '+143%' },
      { before: '12 SQL/mo', after: '31 SQL/mo', improvement: '+158%' },
      { before: '7-day lag', after: '2-day lag', improvement: '-71%' },
    ],
    testimonial: {
      quote:
        'We stopped posting randomly and started operating with a real growth system. Pipeline quality improved within the first month.',
      author: 'Aman Khurana',
      position: 'Founder, Northlane CRM',
    },
  },
  {
    slug: 'ops-automation-for-service-team',
    company: 'BrightRoute Consulting',
    industry: 'Professional Services',
    service: 'Efficiency Systems',
    results: '52% faster project execution',
    duration: '10 weeks',
    metrics: [
      { before: '21 days', after: '10 days', improvement: '-52%' },
      { before: '43 manual tasks', after: '17 tasks', improvement: '-60%' },
      { before: '14% rework', after: '5% rework', improvement: '-64%' },
      { before: '68% SLA', after: '93% SLA', improvement: '+25 pts' },
    ],
    testimonial: {
      quote:
        'OpsFlow AI and WorkflowOS gave us speed and control together. We finally have clean execution across teams.',
      author: 'Ritika Menon',
      position: 'COO, BrightRoute Consulting',
    },
  },
  {
    slug: 'cloud-and-db-performance-rebuild',
    company: 'FleetNova',
    industry: 'Logistics Tech',
    service: 'CloudTrim + QueryBoost',
    results: '41% infra cost reduction',
    duration: '8 weeks',
    metrics: [
      { before: '620ms API', after: '180ms API', improvement: '-71%' },
      { before: '$21k/mo', after: '$12.4k/mo', improvement: '-41%' },
      { before: '2.3% errors', after: '0.8% errors', improvement: '-65%' },
      { before: '3 outages/qtr', after: '0 outages/qtr', improvement: '100% stable' },
    ],
    testimonial: {
      quote:
        'Performance and cloud costs were both hurting us. The optimization sprint paid for itself almost immediately.',
      author: 'Nikhil Arora',
      position: 'Head of Engineering, FleetNova',
    },
  },
];
