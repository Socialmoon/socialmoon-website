// ─────────────────────────────────────────────────────────────
//  PORTFOLIO CATALOG  —  edit this file to add/update projects
// ─────────────────────────────────────────────────────────────

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  image: string; // alias used by CategoryProjectsSection
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
};

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'bharat-taxi-social-growth',
    title: 'Bharat Taxi — Social Media Growth',
    description: 'Built a consistent social media presence for Bharat Taxi across Instagram and LinkedIn, driving brand awareness and app downloads.',
    imageUrl: '/images/portfolio/avinash.jpg',
    image: '/images/portfolio/avinash.jpg',
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
    images: ['/images/portfolio/avinash.jpg'],
  },
  {
    id: 2,
    slug: 'shaip-linkedin-b2b',
    title: 'Shaip — LinkedIn B2B Authority',
    description: 'Positioned Shaip as a thought leader in AI data services through a structured LinkedIn content and outreach system.',
    imageUrl: '/images/portfolio/vaibhav.jpg',
    image: '/images/portfolio/vaibhav.jpg',
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
    images: ['/images/portfolio/vaibhav.jpg'],
  },
  {
    id: 3,
    slug: 'skill-india-content-campaign',
    title: 'Skill India — Digital Content Campaign',
    description: 'Created and distributed digital content for Skill India initiatives, reaching youth audiences across social platforms.',
    imageUrl: '/images/portfolio/ai-resume-screener.jpg',
    image: '/images/portfolio/ai-resume-screener.jpg',
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
    images: ['/images/portfolio/ai-resume-screener.jpg'],
  },
];

export const PORTFOLIO_CONTENT = {
  title: 'Our Portfolio',
  projects: PORTFOLIO_PROJECTS,
};

export const getProjectBySlug = (slug: string) =>
  PORTFOLIO_PROJECTS.find(p => p.slug === slug) || null;
