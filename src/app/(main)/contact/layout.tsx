import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config/site';

export const metadata: Metadata = {
  title: 'Contact SocialMoon | Project Brief',
  description:
    'Share a marketing, website, app, automation, or full-scope build brief with SocialMoon. We respond with clear next steps and no fake certainty.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact SocialMoon | Project Brief',
    description:
      'Share your brief with SocialMoon for marketing, website development, app development, automation, or full-scope build work.',
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
