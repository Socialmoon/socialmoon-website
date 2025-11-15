// Application constants and configuration
export const APP_CONFIG = {
  name: 'SocialMoon',
  version: '1.0.0',
  description: 'Your one-stop solution for social media management',
} as const;

// Database collection names
export const COLLECTIONS = {
  SERVICES: 'services',
  CASE_STUDIES: 'casestudies',
  PROJECTS: 'projects',
  HOME: 'homes',
  ABOUT: 'abouts',
  BLOG: 'blogs',
  CONTACT: 'contacts',
  MESSAGES: 'messages',
} as const;

// Default data for initial setup
export const DEFAULT_DATA = {
  services: {
    title: 'Our Services',
  },
  caseStudies: {
    title: 'Case Studies',
  },
  portfolio: {
    title: 'Our Portfolio',
  },
} as const;
