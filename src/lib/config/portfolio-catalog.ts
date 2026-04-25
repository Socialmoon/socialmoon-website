// ─────────────────────────────────────────────────────────────
//  PORTFOLIO CATALOG  —  edit this file to add/update projects
// ─────────────────────────────────────────────────────────────

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
  // Extended fields for richer portfolio entries
  deliverables?: string[];
  impact?: string[];
  executionModel?: string[];
  outcome?: string;
  badge?: string; // e.g. "Flagship Build", "Beta Live"
};

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 6,
    slug: 'onhour-full-scope-build',
    title: 'OnHour — Full-Scope Gig Platform Build',
    description: 'Built OnHour from the ground up — brand, app, marketing, and field operations. An Uber-style gig marketplace where vendors post jobs and workers pick them up instantly.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    category: 'Full-Scope Build',
    client: 'OnHour',
    duration: 'Ongoing',
    badge: 'Flagship Build',
    technologies: [
      'Mobile App Development', 'UI/UX Design', 'Branding',
      'Social Media Marketing', 'Performance Ads', 'Content Creation',
      'Field Operations', 'Worker Onboarding', 'City Launch Support',
      'B2B Outreach', 'Data Operations',
    ],
    results: [
      'Full app built from zero to beta',
      'End-to-end brand identity created',
      'Multi-city worker onboarding executed',
      'Complete marketing system deployed',
    ],
    challenge: 'OnHour needed a complete product and go-to-market operation built from scratch — no existing brand, no app, no user base. The challenge was to design, build, and launch a gig marketplace that made job discovery as simple as ordering a cab, while simultaneously building the supply side (workers) and demand side (vendors) from the ground up.',
    solution: 'SocialMoon took full ownership of every layer — product design and development, brand identity, marketing systems, field worker onboarding, and city launch operations. We operated as the complete execution partner across all functions simultaneously.',
    process: [
      'Brand identity, naming strategy & visual system',
      'UI/UX design and mobile app development',
      'Social media presence and content system setup',
      'Performance ad campaigns for user and vendor acquisition',
      'Field operations for worker onboarding across cities',
      'B2B outreach to onboard vendor partners',
      'City launch support and activation',
    ],
    deliverables: [
      'Mobile app (iOS & Android) — beta live',
      'Complete brand identity & design system',
      'Social media marketing setup & content',
      'Performance ad campaigns',
      'Field worker onboarding operations',
      'Vendor (B2B) acquisition outreach',
      'City launch playbook & execution',
      'Data operations & user tracking setup',
    ],
    impact: [
      'Zero to beta in one build cycle',
      'Full brand identity created from scratch',
      'Multi-city worker onboarding completed',
      'Vendor pipeline established via B2B outreach',
      'Marketing system live across all channels',
    ],
    executionModel: ['Brand & Design', 'App Development', 'Marketing Setup', 'Field Onboarding', 'City Launch', 'Growth Operations'],
    outcome: 'OnHour is currently in beta — a fully functional gig marketplace built entirely by SocialMoon, from the first wireframe to the first worker onboarded. It stands as our most comprehensive full-scope engagement, covering every function a product company needs to go from idea to market.',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    ],
  },
  {
    id: 1,
    slug: 'bharat-taxi-social-growth',
    title: 'Bharat Taxi — Social Media Growth',
    description: 'Built a consistent social media presence for Bharat Taxi across Instagram and LinkedIn, driving brand awareness and app downloads.',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    category: 'Social Media Marketing',
    client: 'Bharat Taxi',
    duration: '3 months',
    technologies: ['Instagram', 'LinkedIn', 'Content Strategy', 'Reels'],
    results: ['+180% follower growth', '+40% engagement rate', '2x app download referrals from social'],
    challenge: 'Bharat Taxi had minimal social presence and needed to build brand trust in a competitive mobility market.',
    solution: 'We designed a content system focused on driver stories, safety features, and city-specific campaigns that resonated with local audiences.',
    process: [
      'Audience research and competitor analysis',
      'Content pillar definition and calendar setup',
      'Weekly reels and carousel production',
      'Community engagement and response management',
    ],
    images: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
  },
  {
    id: 2,
    slug: 'shaip-linkedin-b2b',
    title: 'Shaip — LinkedIn B2B Authority',
    description: 'Positioned Shaip as a thought leader in AI data services through a structured LinkedIn content and outreach system.',
    imageUrl: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80',
    category: 'LinkedIn B2B Marketing',
    client: 'Shaip',
    duration: '4 months',
    technologies: ['LinkedIn', 'Thought Leadership', 'Lead Generation', 'Content'],
    results: ['+214% profile views', '3x inbound demo requests', '+160% connection growth with target ICP'],
    challenge: 'Shaip needed to reach enterprise AI buyers on LinkedIn but lacked a consistent publishing cadence and positioning framework.',
    solution: 'We built a founder-led content system with weekly posts, case study threads, and a structured outreach sequence targeting AI/ML decision-makers.',
    process: [
      'ICP mapping and messaging framework',
      'Founder profile optimization',
      'Weekly thought leadership content calendar',
      'Outreach sequence design and execution',
    ],
    images: [
      'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    ],
  },
  {
    id: 4,
    slug: 'bharat-taxi-field-activation',
    title: 'Bharat Taxi — Driver Acquisition & Field Registration',
    description: 'Executed on-ground driver onboarding and registration campaigns, supporting partner acquisition and activation across target locations.',
    imageUrl: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
    category: 'Field Operations',
    client: 'Bharat Taxi',
    duration: '2 months',
    technologies: ['Field Deployment', 'Lead Capture', 'Document Verification', 'Partner Onboarding'],
    results: ['500+ registrations completed', '300+ drivers onboarded', '4 cities covered', 'Faster partner activation turnaround'],
    challenge: 'Bharat Taxi needed to rapidly scale its driver-partner network across multiple cities but lacked the ground-level infrastructure to run structured registration and onboarding at volume.',
    solution: 'We deployed a structured field activation team to handle end-to-end driver acquisition — from outreach and lead capture to document verification, registration, and activation support.',
    process: [
      'Field team deployment across target locations',
      'On-ground driver outreach and lead capture',
      'Document verification and registration support',
      'Partner onboarding and activation assistance',
    ],
    deliverables: [
      'On-ground driver outreach',
      'Registration support',
      'Document verification',
      'Partner onboarding',
      'Activation assistance',
    ],
    impact: [
      '500+ registrations completed',
      '300+ drivers onboarded',
      '4 cities covered',
      'Faster partner activation turnaround',
    ],
    executionModel: ['Field deployment', 'Lead capture', 'Verification', 'Registration', 'Activation'],
    outcome: 'Helped Bharat Taxi strengthen its partner network through structured field activation and registration support, enabling faster city-level expansion.',
    images: [
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    ],
  },
  {
    id: 5,
    slug: 'shaip-data-annotation',
    title: 'Shaip — Data Annotation & Dataset Structuring',
    description: 'Delivered structured data annotation and quality assurance services to support AI-ready dataset preparation and machine learning workflows.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'Data Operations',
    client: 'Shaip',
    duration: '3 months',
    technologies: ['Data Labeling', 'Quality Assurance', 'Dataset Structuring', 'AI/ML Pipelines'],
    results: ['10,000+ records annotated', '98%+ accuracy maintained', '5 datasets processed', 'Reduced processing time by 40%'],
    challenge: 'Shaip required high-volume, accurately labeled datasets to train and validate AI/ML models, but needed a reliable operations partner to handle annotation workflows at scale without compromising quality.',
    solution: 'We built structured annotation workflows with multi-layer quality assurance checks, enabling high-throughput data processing with consistent accuracy across all dataset types.',
    process: [
      'Annotation workflow design and team briefing',
      'High-volume data labeling and categorization',
      'Multi-layer quality assurance and validation',
      'Structured dataset packaging for AI/ML pipelines',
    ],
    deliverables: [
      'Data labeling and annotation',
      'Dataset categorization',
      'Quality assurance checks',
      'Data validation',
      'Structured dataset preparation',
    ],
    impact: [
      '10,000+ records annotated',
      '98%+ accuracy maintained',
      '5 datasets processed',
      'Reduced processing time by 40%',
    ],
    executionModel: ['Workflow design', 'Data labeling', 'QA checks', 'Validation', 'Dataset delivery'],
    outcome: "Supported Shaip's AI/ML model training pipeline by delivering structured, accurately labeled datasets on time and at scale — enabling faster model iteration and deployment.",
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    ],
  },
  {
    id: 3,
    slug: 'skill-india-content-campaign',
    title: 'Skill India — Digital Content Campaign',
    description: 'Created and distributed digital content for Skill India initiatives, reaching youth audiences across social platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    category: 'Content Creation',
    client: 'Skill India',
    duration: '2 months',
    technologies: ['Instagram', 'Facebook', 'Video Production', 'Infographics'],
    results: ['500K+ organic reach', '1.2M impressions across platforms', '45K+ engagements'],
    challenge: 'Communicating government skill development programs to young audiences in an engaging, non-bureaucratic way.',
    solution: 'We produced short-form video content, infographics, and story-driven posts that made program benefits tangible and relatable.',
    process: [
      'Content strategy aligned with campaign goals',
      'Script writing and visual design',
      'Multi-platform distribution plan',
      'Performance tracking and optimization',
    ],
    images: [
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    ],
  },
];

export const PORTFOLIO_CONTENT = {
  title: 'Our Portfolio',
  projects: PORTFOLIO_PROJECTS,
};

export const getProjectBySlug = (slug: string) =>
  PORTFOLIO_PROJECTS.find(p => p.slug === slug) || null;
