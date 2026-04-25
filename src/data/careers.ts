export type Job = {
  slug: string;
  title: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  department: string;
  description: string;
  requirements: string[];
  formLink: string; // paste your Google Form link here
};

const JOBS: Job[] = [
  {
    slug: 'senior-social-media-strategist',
    title: 'Senior Social Media Strategist',
    type: 'Full-time',
    location: 'Remote',
    department: 'Growth',
    description: 'Lead strategic social media campaigns for clients and mentor junior team members.',
    requirements: ['5+ years experience', 'Strategy expertise', 'Team leadership'],
    formLink: '', // add Google Form link here
  },
  {
    slug: 'ai-automation-engineer',
    title: 'AI Automation Engineer',
    type: 'Full-time',
    location: 'Hybrid',
    department: 'Engineering',
    description: 'Build AI-powered workflows and automation systems that reduce operational drag for clients.',
    requirements: ['Python / Node.js', 'LLM integration experience', 'Workflow automation tools'],
    formLink: '', // add Google Form link here
  },
  {
    slug: 'content-marketing-specialist',
    title: 'Content Marketing Specialist',
    type: 'Full-time',
    location: 'Remote',
    department: 'Growth',
    description: 'Create compelling content strategies and manage production across multiple platforms.',
    requirements: ['3+ years experience', 'Content creation', 'SEO knowledge'],
    formLink: '', // add Google Form link here
  },
  {
    slug: 'cloud-infrastructure-engineer',
    title: 'Cloud Infrastructure Engineer',
    type: 'Contract',
    location: 'Remote',
    department: 'Engineering',
    description: 'Optimize cloud architecture and reduce infrastructure costs for our clients.',
    requirements: ['AWS / GCP experience', 'Cost optimization', 'Infrastructure as code'],
    formLink: '', // add Google Form link here
  },
  {
    slug: 'business-development-manager',
    title: 'Business Development Manager',
    type: 'Full-time',
    location: 'Lucknow / Remote',
    department: 'Sales',
    description: 'Drive new client acquisition and manage relationships with key accounts.',
    requirements: ['B2B sales experience', 'Strong communication', 'CRM proficiency'],
    formLink: '', // add Google Form link here
  },
  {
    slug: 'marketing-coordinator',
    title: 'Marketing Coordinator',
    type: 'Full-time',
    location: 'Hybrid',
    department: 'Growth',
    description: 'Support marketing initiatives, coordinate campaigns, and assist with project management.',
    requirements: ['1+ years experience', 'Organization skills', 'Marketing tools'],
    formLink: '', // add Google Form link here
  },
];

export default JOBS;
