import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config/site';

export const metadata: Metadata = {
  title: 'Case Studies | SocialMoon',
  description:
    'Read SocialMoon case notes with documented challenges, processes, deliverables, and outcomes we can explain clearly.',
  alternates: { canonical: `${SITE_URL}/case-studies` },
  openGraph: {
    title: 'Case Studies | SocialMoon',
    description: 'Documented SocialMoon project notes without inflated claims.',
    url: `${SITE_URL}/case-studies`,
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
