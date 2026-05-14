import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SITE_URL } from '@/lib/config/site';
import { LocalBusinessSchema, WebsiteSchema } from '@/components/common/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SocialMoon | Creative Marketing Agency',
    template: '%s | SocialMoon',
  },
  description:
    'SocialMoon is a creative marketing agency based in Lucknow, India. We help brands plan memorable campaigns, content systems, lead generation, and honest digital communication.',
  keywords: [
    'creative marketing agency India',
    'digital marketing agency India',
    'social media marketing India',
    'Instagram ads agency India',
    'Facebook marketing agency India',
    'lead generation agency India',
    'content marketing agency India',
    'digital marketing agency Lucknow',
    'SEO agency Lucknow',
    'local SEO services Lucknow',
    'AEO services India',
    'website development agency Lucknow',
  ],
  authors: [{ name: 'SocialMoon', url: SITE_URL }],
  creator: 'SocialMoon',
  publisher: 'SocialMoon',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'SocialMoon',
    title: 'SocialMoon | Creative Marketing Agency',
    description: 'Creative marketing, content systems, and lead generation with a truth-first approach.',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'SocialMoon logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@socialmoonx',
    creator: '@socialmoonx',
    title: 'SocialMoon | Creative Marketing Agency',
    description: 'Creative marketing, content systems, and lead generation with a truth-first approach.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-8HNQJ7RW4M';

  return (
    <html lang="en-IN">
      <head>
        <LocalBusinessSchema />
        <WebsiteSchema />
      </head>
      <body className={inter.className}>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
