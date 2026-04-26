import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing Case Studies India | Real Results | SocialMoon",
  description:
    "See real results from SocialMoon's digital marketing campaigns. Case studies showing lead generation, Instagram growth, Facebook ads ROI & social media success for Indian businesses.",
  alternates: { canonical: `${SITE_URL}/case-studies` },
  openGraph: {
    title: "Digital Marketing Case Studies India | SocialMoon",
    description:
      "Real results from SocialMoon's digital marketing campaigns for Indian startups & small businesses. Lead generation, Instagram growth, Facebook ads ROI.",
    url: `${SITE_URL}/case-studies`,
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
