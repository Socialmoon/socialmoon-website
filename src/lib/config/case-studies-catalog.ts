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
];

export const getCaseStudyBySlug = (slug: string) => CASE_STUDIES.find((item) => item.slug === slug) || null;
