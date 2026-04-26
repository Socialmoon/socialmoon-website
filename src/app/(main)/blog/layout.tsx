import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Digital Marketing Blog India | Tips, Trends & Case Studies | SocialMoon",
  description:
    "Read SocialMoon's blog for actionable digital marketing tips, social media trends in India, Instagram & Facebook ad strategies, and real case studies from Indian businesses.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Digital Marketing Blog India | SocialMoon",
    description:
      "Actionable digital marketing tips, social media trends in India, Instagram & Facebook ad strategies, and real case studies from Indian businesses.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
