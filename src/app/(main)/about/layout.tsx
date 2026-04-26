import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "About SocialMoon | Digital Marketing Agency Lucknow, India",
  description:
    "Learn about SocialMoon — India's growth & automation agency based in Lucknow. We build systems that help startups & small businesses scale with social media marketing, AI automation & lead generation.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About SocialMoon | Digital Marketing Agency Lucknow, India",
    description:
      "SocialMoon is a growth and automation agency based in Lucknow, India. We design structured systems that help businesses scale demand, improve operations, and grow with control.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
