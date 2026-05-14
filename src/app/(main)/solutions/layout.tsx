import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config/site';

export const metadata: Metadata = {
  title: 'Marketing, SEO, Website & App Development Services | SocialMoon',
  description:
    "Explore SocialMoon's creative marketing, SEO, AEO, local SEO, website development, app development, AI automation, workflow systems, and technical support.",
  alternates: { canonical: `${SITE_URL}/solutions` },
  openGraph: {
    title: 'Marketing, SEO, Website & App Development Services | SocialMoon',
    description: 'Creative marketing first, with SEO, AEO, website, app, automation, and technical systems available when growth needs them.',
    url: `${SITE_URL}/solutions`,
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
