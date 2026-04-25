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
    id: 'cs-001',
    slug: 'founder-led-saas-growth-engine',
    title: 'From Inconsistent Posting to a Predictable SaaS Growth Engine',
    company: 'Northlane CRM',
    industry: 'B2B SaaS',
    service: 'Growth Systems',
    duration: '4 months',
    results: ['+214% qualified pipeline growth', '+158% SQL volume', '+143% conversion uplift'],
    challenge:
      'Northlane had a solid product but no repeatable demand engine. Marketing relied on random posting and founder-led bursts, which created uneven pipeline quality and weak attribution.',
    solution:
      'We implemented the Content & Social Growth System and Lead Generation System with a clear weekly execution cadence, audience-specific messaging, and a structured lead handoff process to sales.',
    approach: [
      'Rebuilt positioning around customer pain points by segment and buying stage.',
      'Designed a weekly content framework mapped to awareness, trust, and conversion goals.',
      'Set up a lead qualification workflow and response SLA for faster pipeline movement.',
      'Introduced channel-level attribution so leadership could see what drove SQLs and revenue.',
    ],
    execution:
      'Execution followed a weekly sprint model: content production, distribution, outreach iteration, and performance review. Each cycle focused on one acquisition bottleneck, resulting in compounding gains without increasing team size.',
    overview:
      'A full-funnel growth system that turned inconsistent marketing into a measurable pipeline engine.',
    metrics: {
      'Pipeline Growth': '+214%',
      'SQL Volume': '+158%',
      'Conversion Rate': '+143%',
      'Lead Response Time': '-71%',
    },
    testimonial: {
      quote:
        'We stopped guessing and started operating with a system. Pipeline quality improved within the first month and kept compounding.',
      author: 'Aman Khurana',
      position: 'Founder, Northlane CRM',
    },
    clientName: 'Aman Khurana',
    clientPosition: 'Founder, Northlane CRM',
    tags: ['Growth Systems', 'Lead Generation', 'SaaS'],
    featured: true,
    published: true,
    completedDate: '2026-02-18',
    images: ['/images/portfolio/4.jpg', '/images/portfolio/5.jpg', '/images/portfolio/6.jpg'],
  },
  {
    id: 'cs-002',
    slug: 'ops-automation-for-service-team',
    title: 'Ops Automation That Cut Delivery Delays by Half',
    company: 'BrightRoute Consulting',
    industry: 'Professional Services',
    service: 'Efficiency Systems',
    duration: '10 weeks',
    results: ['52% faster project execution', '60% fewer manual tasks', 'SLA improved from 68% to 93%'],
    challenge:
      'BrightRoute struggled with fragmented delivery workflows, repeated handoff mistakes, and high rework. Teams spent more time coordinating than executing client work.',
    solution:
      'We deployed OpsFlow AI and WorkflowOS to standardize operations, automate repetitive tasks, and create one shared execution layer across delivery teams.',
    approach: [
      'Audited delivery lifecycle and scored workflow friction points by impact.',
      'Automated repetitive status updates, reminders, and QA checkpoints.',
      'Built role-based operating boards with ownership and escalation rules.',
      'Created weekly operations review dashboards to track SLA and cycle time.',
    ],
    execution:
      'The rollout was phased to protect client delivery: pilot teams first, then process documentation, then full-team adoption with clear governance. This minimized disruption while improving speed immediately.',
    overview:
      'An efficiency-first transformation that replaced process chaos with reliable execution velocity.',
    metrics: {
      'Execution Speed': '+52%',
      'Manual Work': '-60%',
      'Rework Rate': '-64%',
      'SLA Compliance': '+25 pts',
    },
    testimonial: {
      quote:
        'OpsFlow AI and WorkflowOS gave us speed and control together. We now execute with confidence instead of firefighting every week.',
      author: 'Ritika Menon',
      position: 'COO, BrightRoute Consulting',
    },
    clientName: 'Ritika Menon',
    clientPosition: 'COO, BrightRoute Consulting',
    tags: ['Efficiency Systems', 'Automation', 'Operations'],
    featured: true,
    published: true,
    completedDate: '2026-03-12',
    images: ['/images/portfolio/7.jpg', '/images/portfolio/8.jpg'],
  },
  {
    id: 'cs-003',
    slug: 'cloud-and-db-performance-rebuild',
    title: 'Cloud Cost Optimization with High-Performance Database Rebuild',
    company: 'FleetNova',
    industry: 'Logistics Tech',
    service: 'CloudTrim + QueryBoost',
    duration: '8 weeks',
    results: ['41% infra cost reduction', '71% faster API responses', '100% outage-free quarter'],
    challenge:
      'FleetNova faced growing infrastructure cost and performance instability during traffic peaks. Teams were constantly firefighting slow APIs and database bottlenecks.',
    solution:
      'We combined CloudTrim and QueryBoost to optimize infrastructure spend, refactor critical query paths, and stabilize the data layer under load.',
    approach: [
      'Performed full cost and workload audit across compute, storage, and network.',
      'Prioritized top slow queries and rebuilt indexing strategy for high-traffic endpoints.',
      'Introduced load-test baseline and release gating for performance-sensitive updates.',
      'Implemented monitoring and alerting tuned to business-critical thresholds.',
    ],
    execution:
      'Work happened in tightly scoped performance sprints. Each sprint shipped measurable improvements to response time, error rate, and infrastructure efficiency without product downtime.',
    overview:
      'A dual optimization sprint that reduced cloud burn while making core APIs dramatically faster and more stable.',
    metrics: {
      'Cloud Spend': '-41%',
      'API Response': '-71%',
      'Error Rate': '-65%',
      'Quarterly Outages': '0',
    },
    testimonial: {
      quote:
        'Performance and cloud costs were both hurting us. The optimization sprint paid for itself almost immediately.',
      author: 'Nikhil Arora',
      position: 'Head of Engineering, FleetNova',
    },
    clientName: 'Nikhil Arora',
    clientPosition: 'Head of Engineering, FleetNova',
    tags: ['CloudTrim', 'QueryBoost', 'Infrastructure'],
    featured: true,
    published: true,
    completedDate: '2026-01-30',
    images: ['/images/portfolio/1.jpg', '/images/portfolio/2.jpg', '/images/portfolio/3.jpg'],
  },
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
      'Functions Covered': '10+',
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
    title: 'How Structured Field Activation Onboarded 300+ Drivers Across 4 Cities',
    company: 'Bharat Taxi',
    industry: 'Mobility & Ride-hailing',
    service: 'Field Operations & Ground Activation',
    duration: '2 months',
    results: ['500+ registrations completed', '300+ drivers onboarded', '4 cities covered', 'Faster partner activation turnaround'],
    challenge:
      'Bharat Taxi needed to rapidly scale its driver-partner network across multiple cities but lacked the ground-level infrastructure to run structured registration and onboarding at volume. Self-serve digital flows had high drop-off at the verification and activation stages.',
    solution:
      'We deployed a structured field activation team to handle end-to-end driver acquisition — from on-ground outreach and lead capture to document verification, registration support, and activation assistance across all target cities.',
    approach: [
      'Mapped the driver onboarding funnel and identified drop-off points at each stage.',
      'Deployed field teams across 4 cities with clear role assignments for each activation stage.',
      'Built a lead capture and tracking system to monitor conversion at every step.',
      'Ran daily execution reviews to resolve blockers and maintain activation velocity.',
    ],
    execution:
      'Execution followed a five-stage model: field outreach → lead capture → document verification → registration → activation. Each stage had a dedicated owner and a clear handoff protocol, ensuring no driver was lost between steps.',
    overview:
      'A ground-level partner acquisition campaign that turned interested drivers into active Bharat Taxi partners through structured field operations.',
    metrics: {
      'Registrations': '500+',
      'Drivers Onboarded': '300+',
      'Cities Covered': '4',
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
    title: 'High-Volume Data Annotation at 98%+ Accuracy for AI Model Training',
    company: 'Shaip',
    industry: 'AI Data Services',
    service: 'Data Operations & Annotation Services',
    duration: '3 months',
    results: ['10,000+ records annotated', '98%+ accuracy maintained', '5 datasets processed', 'Processing time reduced by 40%'],
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
      'Records Annotated': '10,000+',
      'Accuracy Rate': '98%+',
      'Datasets Processed': '5',
      'Processing Time': '-40%',
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
