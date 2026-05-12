export type TeamMember = {
  id?: number;
  _id?: string;
  name: string;
  role?: string;
  position?: string;
  bio: string;
  imageUrl?: string;
  image?: string;
};

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Avinash Gautam',
    role: 'Founder & Chief Executive Officer',
    bio: "Visionary leader driving Social Moon's mission to transform brands through innovative social media strategies and digital excellence.",
    imageUrl: '/images/portfolio/avinash.jpg',
  },
  {
    id: 2,
    name: 'Vaibhav Kumar',
    role: 'Co-Founder & Chief Technology Officer',
    bio: 'Technology visionary building cutting-edge solutions and driving innovation in digital marketing technology.',
    imageUrl: '/images/portfolio/vaibhav.jpg',
  },
  {
    id: 3,
    name: 'Mohd Amir',
    role: 'Tech Team',
    bio: 'Backend engineer focusing on scalable APIs and systems.',
    imageUrl: '/images/portfolio/mohd-amir.jpg',
  },
  {
    id: 4,
    name: 'Aditya Vardhan',
    role: 'Tech Team',
    bio: 'Frontend engineer building delightful UIs and interactions.',
    imageUrl: '/images/portfolio/aditya-vardhan.jpg',
  },
  {
    id: 5,
    name: 'Nadeem Ansari',
    role: 'QA',
    bio: 'Quality assurance specialist focused on test automation and product reliability.',
    imageUrl: '/images/portfolio/nadeem-ansari.jpg',
  },
  {
    id: 6,
    name: 'Mohd Kaif',
    role: 'Project Manager',
    bio: 'Project manager coordinating teams, timelines, and delivery.',
    imageUrl: '/images/portfolio/mohd-kaif.jpg',
  },
  {
    id: 7,
    name: 'Abdul Hadi',
    role: 'UI Engineer',
    bio: 'UI engineer specializing in design-to-code and front-end polish.',
    imageUrl: '/images/portfolio/abdul-hadi.jpg',
  }
];

export default TEAM;
