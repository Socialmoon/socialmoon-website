import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config/site';

export const metadata: Metadata = {
  title: 'Marketing Blog | SocialMoon',
  description:
    'Read SocialMoon notes on creative campaigns, content systems, lead generation, brand memory, and transparent marketing operations.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Marketing Blog | SocialMoon',
    description: 'Thinking notes on creative campaigns, content systems, and truth-first marketing.',
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
