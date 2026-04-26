import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Contact SocialMoon | Free Digital Marketing Consultation India",
  description:
    "Get in touch with SocialMoon — India's top digital marketing agency. Free strategy consultation for startups & small businesses. Based in Lucknow. Call, WhatsApp or email us today.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact SocialMoon | Free Digital Marketing Consultation India",
    description:
      "Get a free digital marketing strategy consultation from SocialMoon. Instagram ads, Facebook marketing, lead generation & website design for Indian businesses.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
