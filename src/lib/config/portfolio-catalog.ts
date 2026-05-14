export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  image: string;
  category: string;
  client: string;
  duration: string;
  technologies: string[];
  results: string | string[];
  challenge: string;
  solution: string;
  process: string[];
  images: string[];
  videoUrl?: string;
  link?: string;
  deliverables?: string[];
  impact?: string[];
  executionModel?: string[];
  outcome?: string;
  badge?: string;
};

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 6,
    slug: 'onhour-full-scope-build',
    title: 'OnHour - Full-Scope Gig Platform Build',
    description:
      'Built OnHour from the ground up: brand, app, marketing, and field operations. A gig marketplace where vendors post jobs and workers can pick them up.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    category: 'Full-Scope Build',
    client: 'OnHour',
    duration: 'Ongoing',
    badge: 'Flagship Build',
    technologies: [
      'Mobile App Development',
      'UI/UX Design',
      'Branding',
      'Social Media Marketing',
      'Performance Ads',
      'Content Creation',
      'Field Operations',
      'Worker Onboarding',
      'City Launch Support',
      'B2B Outreach',
      'Data Operations',
    ],
    results: [
      'Full app built from zero to beta',
      'End-to-end brand identity created',
      'Worker onboarding operations supported',
      'Marketing system prepared across key channels',
    ],
    challenge:
      'OnHour needed a complete product and go-to-market operation built from scratch: no existing brand, no app, and no established user base. The challenge was to design, build, and launch a gig marketplace while also supporting worker onboarding and vendor outreach.',
    solution:
      'SocialMoon worked across product design and development, brand identity, marketing systems, field worker onboarding, and launch operations so the product and campaign could move together.',
    process: [
      'Brand identity, naming strategy, and visual system',
      'UI/UX design and mobile app development',
      'Social media presence and content system setup',
      'Performance ad campaigns for user and vendor acquisition',
      'Field operations for worker onboarding',
      'B2B outreach to onboard vendor partners',
      'Launch support and activation',
    ],
    deliverables: [
      'Mobile app beta',
      'Brand identity and design system',
      'Social media marketing setup and content',
      'Performance ad campaign setup',
      'Field worker onboarding operations',
      'Vendor acquisition outreach',
      'Launch playbook and execution support',
      'Data operations and user tracking setup',
    ],
    impact: [
      'Zero to beta product build',
      'Brand identity created from scratch',
      'Worker onboarding operations supported',
      'Vendor outreach pipeline prepared',
      'Marketing system prepared across key channels',
    ],
    executionModel: ['Brand & Design', 'App Development', 'Marketing Setup', 'Field Onboarding', 'Launch Support', 'Growth Operations'],
    outcome:
      'OnHour is currently in beta. The engagement covered product, brand, marketing, and field operations as one full-scope build instead of separate disconnected tasks.',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    ],
  },
  {
    id: 4,
    slug: 'bharat-taxi-field-activation',
    title: 'Bharat Taxi - Driver Acquisition & Field Registration',
    description:
      'Executed on-ground driver onboarding and registration campaigns, supporting partner acquisition and activation across target locations.',
    imageUrl: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
    category: 'Field Operations',
    client: 'Bharat Taxi',
    duration: '2 months',
    technologies: ['Field Deployment', 'Lead Capture', 'Document Verification', 'Partner Onboarding'],
    results: ['Driver registration support executed', 'Driver onboarding workflow supported', 'Field activation process documented', 'Partner activation turnaround improved'],
    challenge:
      'Bharat Taxi needed to scale its driver-partner network across multiple cities but needed ground-level support to run structured registration and onboarding.',
    solution:
      'We deployed a structured field activation team to support driver acquisition from outreach and lead capture to document verification, registration, and activation support.',
    process: [
      'Field team deployment across target locations',
      'On-ground driver outreach and lead capture',
      'Document verification and registration support',
      'Partner onboarding and activation assistance',
    ],
    deliverables: ['On-ground driver outreach', 'Registration support', 'Document verification', 'Partner onboarding', 'Activation assistance'],
    impact: [
      'Driver registration support executed',
      'Driver onboarding workflow supported',
      'Multi-location field coordination supported',
      'Faster partner activation turnaround',
    ],
    executionModel: ['Field deployment', 'Lead capture', 'Verification', 'Registration', 'Activation'],
    outcome:
      'Helped Bharat Taxi strengthen its partner network through structured field activation and registration support.',
    images: [
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    ],
  },
  {
    id: 5,
    slug: 'shaip-data-annotation',
    title: 'Shaip - Data Annotation & Dataset Structuring',
    description:
      'Delivered structured data annotation and quality assurance services to support AI-ready dataset preparation and machine learning workflows.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Data Operations',
    client: 'Shaip',
    duration: '3 months',
    technologies: ['Data Labeling', 'Quality Assurance', 'Dataset Structuring', 'AI/ML Pipelines'],
    results: ['Data annotation workflow delivered', 'QA process added across batches', 'Dataset preparation supported', 'Processing workflow improved'],
    challenge:
      'Shaip required structured datasets to support AI/ML workflows and needed an operations partner to handle annotation work with consistent quality control.',
    solution:
      'We built annotation workflows with multi-layer quality assurance checks so data processing could remain structured and reviewable.',
    process: [
      'Annotation workflow design and team briefing',
      'High-volume data labeling and categorization',
      'Multi-layer quality assurance and validation',
      'Structured dataset packaging for AI/ML pipelines',
    ],
    deliverables: ['Data labeling and annotation', 'Dataset categorization', 'Quality assurance checks', 'Data validation', 'Structured dataset preparation'],
    impact: ['Data annotation workflow delivered', 'QA process added across batches', 'Dataset preparation supported', 'Processing workflow improved'],
    executionModel: ['Workflow design', 'Data labeling', 'QA checks', 'Validation', 'Dataset delivery'],
    outcome:
      "Supported Shaip's AI/ML data operations with structured annotation workflows and quality assurance checks.",
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    ],
  },
];

export const PORTFOLIO_CONTENT = {
  title: 'Our Portfolio',
  projects: PORTFOLIO_PROJECTS,
};

export const getProjectBySlug = (slug: string) => PORTFOLIO_PROJECTS.find((project) => project.slug === slug) || null;
