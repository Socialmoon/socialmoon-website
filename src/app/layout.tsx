import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/config/site";
import { LocalBusinessSchema, SoftwareApplicationSchema, WebsiteSchema } from "@/components/common/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digital Marketing Agency India | SocialMoon — Grow. Engage. Conquer.",
    template: "%s | SocialMoon",
  },
  description:
    "SocialMoon is India's top social media marketing agency helping startups & small businesses grow with Instagram ads, Facebook marketing, lead generation & website design. Based in Lucknow. Get a free strategy call today!",
  keywords: [
    "digital marketing agency India",
    "social media marketing India",
    "Instagram ads agency India",
    "Facebook marketing agency India",
    "lead generation agency India",
    "digital marketing for startups India",
    "social media management India",
    "digital marketing company India",
    "digital marketing agency Lucknow",
    "social media agency Lucknow",
    "best digital marketing agency",
    "affordable digital marketing agency India",
    "paid ads agency India",
    "content marketing agency India",
    "ROI based digital marketing India",
  ],
  authors: [{ name: "SocialMoon", url: SITE_URL }],
  creator: "SocialMoon",
  publisher: "SocialMoon",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "SocialMoon",
    title: "Digital Marketing Agency India | SocialMoon — Grow. Engage. Conquer.",
    description:
      "SocialMoon is India's top social media marketing agency. Instagram ads, Facebook marketing, lead generation & website design for startups & small businesses.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "SocialMoon - Digital Marketing Agency India" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@socialmoonx",
    creator: "@socialmoonx",
    title: "Digital Marketing Agency India | SocialMoon",
    description: "India's top social media marketing agency for startups & small businesses. Instagram ads, Facebook marketing, lead generation.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "", // TODO: Add Google Search Console verification token
    other: {
      "msvalidate.01": "", // TODO: Add Bing Webmaster Tools verification token from https://www.bing.com/webmaster/
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <LocalBusinessSchema />
        <WebsiteSchema />
        <SoftwareApplicationSchema />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
