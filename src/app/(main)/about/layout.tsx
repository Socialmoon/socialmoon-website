import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config/site';

export const metadata: Metadata = {
  title: 'About SocialMoon | Creative Marketing Agency',
  description:
    'Learn how SocialMoon thinks about memorable campaigns, transparent proof, content systems, and truth-first marketing communication.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About SocialMoon | Creative Marketing Agency',
    description: 'A truth-first creative marketing agency focused on brand memory and clear communication.',
    url: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
