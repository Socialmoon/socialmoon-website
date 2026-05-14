export type CaseStudyItem = {
  id: string;
  slug: string;
  title: string;
  company: string;
  industry: string;
  service: string;
  duration: string;
  results: string | string[];
  challenge: string;
  solution: string;
  approach: string[];
  execution: string;
  overview: string;
  metrics: Record<string, string>;
  testimonial:
    | string
    | {
        quote: string;
        author: string;
        position: string;
      };
  clientName?: string;
  clientPosition?: string;
  tags?: string[];
  featured?: boolean;
  published?: boolean;
  completedDate?: string;
  images: string[];
};

export const CASE_STUDIES_TITLE = 'Case Studies';

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'cs-006',
    slug: 'onhour-full-scope-build',
    title: 'OnHour — Building a Gig Marketplace from Zero to Beta',
    company: 'OnHour',
    industry: 'Gig Economy / On-Demand Services',
    service: 'Full-Scope Build (Product + Marketing + Operations)',
    duration: 'Ongoing',
    results: [
      'Zero to beta in one build cycle',
      'Full brand identity created from scratch',
      'App live on iOS & Android (beta)',
      'Multi-city worker onboarding executed',
      'Complete marketing system deployed',
    ],
    challenge:
      'OnHour had a vision — an Uber-style gig marketplace where vendors post jobs and workers pick them up instantly — but nothing else. No brand, no app, no users, no operations. They needed a single partner who could own every layer of the build simultaneously without losing coherence across product, marketing, and field.',
    solution:
      'SocialMoon took full ownership of every function: brand identity and design system, mobile app development, social media and performance marketing, field worker onboarding, vendor B2B outreach, and city launch operations. We operated as the complete product and go-to-market team.',
    approach: [
      'Defined brand positioning, naming rationale, and visual identity from scratch.',
      'Designed and developed the mobile app (iOS & Android) with vendor and worker flows.',
      'Built social media presence and content system across all relevant platforms.',
      'Ran performance ad campaigns for both worker supply and vendor demand acquisition.',
      'Deployed field teams for worker onboarding and city-level activation.',
      'Executed B2B outreach to onboard vendor partners onto the platform.',
    ],
    execution:
      'Execution ran in parallel tracks — product, marketing, and operations simultaneously — with weekly cross-function syncs to keep all workstreams aligned. This compressed the typical build-then-launch timeline into a single integrated cycle.',
    overview:
      'A complete zero-to-beta build of a gig economy platform, covering every function from product design to city launch — executed entirely by SocialMoon.',
    metrics: {
      'Build Status': 'Beta Live',
      'Scope': 'Full-stack (Product + Marketing + Ops)',
      'Functions Covered': 'Product, marketing, and operations',
      'Platform': 'iOS & Android',
    },
    testimonial: {
      quote:
        'SocialMoon handled everything — the app, the brand, the marketing, the field work. We went from an idea to a live beta without needing any other partner.',
      author: 'OnHour Founding Team',
      position: 'Product & Operations',
    },
    clientName: 'OnHour',
    clientPosition: 'Founding Team',
    tags: ['Full-Scope Build', 'App Development', 'Gig Economy', 'Field Operations', 'Marketing'],
    featured: true,
    published: true,
    completedDate: '2026-04-01',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    ],
  },
  {
    id: 'cs-004',
    slug: 'bharat-taxi-driver-acquisition',
    title: 'Structured Field Activation for Driver Partner Onboarding',
    company: 'Bharat Taxi',
    industry: 'Mobility & Ride-hailing',
    service: 'Field Operations & Ground Activation',
    duration: '2 months',
    results: ['Driver registration support executed', 'Driver onboarding workflow supported', 'Field activation process documented', 'Partner activation turnaround improved'],
    challenge:
      'Bharat Taxi needed to rapidly scale its driver-partner network across multiple cities but lacked the ground-level infrastructure to run structured registration and onboarding at volume. Self-serve digital flows had high drop-off at the verification and activation stages.',
    solution:
      'We deployed a structured field activation team to handle end-to-end driver acquisition — from on-ground outreach and lead capture to document verification, registration support, and activation assistance across all target cities.',
    approach: [
      'Mapped the driver onboarding funnel and identified drop-off points at each stage.',
      'Deployed field coordination with clear role assignments for each activation stage.',
      'Built a lead capture and tracking system to monitor conversion at every step.',
      'Ran daily execution reviews to resolve blockers and maintain activation velocity.',
    ],
    execution:
      'Execution followed a five-stage model: field outreach → lead capture → document verification → registration → activation. Each stage had a dedicated owner and a clear handoff protocol, ensuring no driver was lost between steps.',
    overview:
      'A ground-level partner acquisition campaign that turned interested drivers into active Bharat Taxi partners through structured field operations.',
    metrics: {
      'Registration Support': 'Executed',
      'Driver Onboarding': 'Supported',
      'Field Coordination': 'Multi-location',
      'Activation Speed': 'Significantly faster',
    },
    testimonial: {
      quote:
        'The field team ran a tight operation. Every driver who came in was walked through the full process — nothing fell through the cracks.',
      author: 'Bharat Taxi Operations',
      position: 'Partner Acquisition Team',
    },
    clientName: 'Bharat Taxi',
    clientPosition: 'Operations Team',
    tags: ['Field Operations', 'Partner Onboarding', 'Ground Activation'],
    featured: true,
    published: true,
    completedDate: '2026-03-01',
    images: ['/images/portfolio/avinash.jpg'],
  },
  {
    id: 'cs-005',
    slug: 'shaip-data-annotation-operations',
    title: 'Structured Data Annotation Workflow for AI Model Training',
    company: 'Shaip',
    industry: 'AI Data Services',
    service: 'Data Operations & Annotation Services',
    duration: '3 months',
    results: ['Data annotation workflow delivered', 'QA process added across batches', 'Dataset preparation supported', 'Processing workflow improved'],
    challenge:
      'Shaip required high-volume, accurately labeled datasets to train and validate AI/ML models. The challenge was maintaining annotation quality at scale while meeting tight delivery timelines across multiple dataset types.',
    solution:
      'We built structured annotation workflows with multi-layer quality assurance — annotator-level checks, batch validation, and final dataset audits — enabling high-throughput processing without sacrificing accuracy.',
    approach: [
      'Designed annotation guidelines and edge case rules for each dataset type.',
      'Structured the workflow into labeling, QA, validation, and packaging stages.',
      'Implemented batch-level accuracy tracking to catch and correct errors early.',
      'Delivered datasets in AI-pipeline-ready formats to reduce integration friction.',
    ],
    execution:
      'Work was organized into weekly delivery sprints. Each sprint covered a defined dataset batch, went through the full QA pipeline, and was delivered with an accuracy report. This gave Shaip\'s ML team a predictable, reliable data supply.',
    overview:
      'A precision data operations engagement that delivered AI-ready datasets at scale, enabling faster model training and iteration for Shaip\'s AI products.',
    metrics: {
      'Annotation Workflow': 'Delivered',
      'QA Process': 'Added',
      'Dataset Prep': 'Supported',
      'Processing Workflow': 'Improved',
    },
    testimonial: {
      quote:
        'Consistent quality at this volume is hard to find. The structured QA process made a real difference to our model training timelines.',
      author: 'Shaip Data Team',
      position: 'AI Operations',
    },
    clientName: 'Shaip',
    clientPosition: 'Data Operations Team',
    tags: ['Data Operations', 'Annotation', 'AI/ML'],
    featured: true,
    published: true,
    completedDate: '2026-02-15',
    images: ['/images/portfolio/vaibhav.jpg'],
  },
];

export const getCaseStudyBySlug = (slug: string) => CASE_STUDIES.find((item) => item.slug === slug) || null;


