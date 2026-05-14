export type TeamSocials = {
  github?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
  x?: string;
};

export type TeamMember = {
  id?: number;
  _id?: string;
  name: string;
  designation: string;
  role?: string;
  position?: string;
  focus: string;
  bio: string;
  imageUrl?: string;
  image?: string;
  socials?: TeamSocials;
};

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Avinash Gautam',
    designation: 'CEO',
    role: 'Chief Executive Officer',
    focus: 'Brand memory, campaign direction, client communication',
    bio: "Leads SocialMoon's vision, marketing direction, client communication, and the truth-first standard behind every campaign and website claim.",
    imageUrl: '/images/portfolio/avinash.jpg',
    socials: {},
  },
  {
    id: 2,
    name: 'Vaibhav Kumar',
    designation: 'CTO',
    role: 'Chief Technology Officer',
    focus: 'Websites, apps, dashboards, technical systems',
    bio: 'Leads technology at SocialMoon, turning creative ideas into websites, apps, dashboards, automations, and product systems that can be shipped.',
    imageUrl: '/images/portfolio/vaibhav.jpg',
    socials: {},
  },
  {
    id: 3,
    name: 'Mohd Kaif',
    designation: 'Project Manager',
    role: 'Project Manager',
    focus: 'Timelines, coordination, delivery movement',
    bio: 'Keeps moving parts aligned across campaigns, builds, timelines, and client communication so ideas keep moving toward delivery.',
    imageUrl: '/images/portfolio/kaif.png',
    socials: {},
  },
  {
    id: 4,
    name: 'Aditya Vardhan',
    designation: 'Marketing',
    role: 'Marketing Strategist',
    focus: 'Campaign ideas, content direction, audience hooks',
    bio: 'Works on marketing direction, content angles, audience understanding, and campaign ideas that make brands easier to notice and remember.',
    imageUrl: '/images/portfolio/aditya.jpg',
    socials: {},
  },
  {
    id: 5,
    name: 'Nadeem Ansari',
    designation: 'Backend Support',
    role: 'Backend Support',
    focus: 'Backend support, system reliability, technical assistance',
    bio: 'Supports backend workflows, data handling, technical checks, and system reliability so client websites and apps have a stronger foundation.',
    imageUrl: '/images/portfolio/nadeem.jpg',
    socials: {},
  },
  {
    id: 6,
    name: 'Abdul Hadi',
    designation: 'UI Engineer',
    role: 'UI Engineer',
    focus: 'UI components, page polish, design implementation',
    bio: 'Turns design direction into sharp UI, clean components, and front-end details that make pages feel finished across devices.',
    imageUrl: '/images/portfolio/abdulhadi.jpg',
    socials: {},
  },
];

export default TEAM;
