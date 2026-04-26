import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services India | SocialMoon Solutions",
  description:
    "Explore SocialMoon's full range of digital marketing services — Instagram ads, Facebook marketing, lead generation, social media management, AI automation & more. Trusted by 100+ Indian businesses.",
  alternates: { canonical: `${SITE_URL}/solutions` },
  openGraph: {
    title: "Digital Marketing Services India | SocialMoon Solutions",
    description:
      "Instagram ads, Facebook marketing, lead generation, social media management & AI automation for Indian startups & small businesses. Get a free quote.",
    url: `${SITE_URL}/solutions`,
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
