import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Bangalore | SocialMoon - Social Media & Ads",
  description: "Digital marketing services for Bangalore businesses. Instagram ads, Facebook marketing, lead generation and social media management for Bangalore startups and tech companies.",
  keywords: ["digital marketing agency Bangalore", "social media agency Bangalore", "Instagram ads Bangalore", "Facebook marketing Bangalore", "lead generation Bangalore"],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-bangalore` },
  openGraph: { title: "Digital Marketing Agency in Bangalore | SocialMoon", description: "Instagram ads, Facebook marketing & lead generation for Bangalore businesses.", url: `${SITE_URL}/digital-marketing-agency-bangalore` },
};

export default function BangalorePage() {
  return (
    <CityLandingPage
      city="Bangalore"
      state="Karnataka"
      slug="digital-marketing-agency-bangalore"
      headline="Digital Marketing Agency for Bangalore's Tech-First Businesses"
      subheadline="Why Bangalore Startups & Tech Companies Choose SocialMoon"
      description="SocialMoon helps Bangalore startups and tech companies grow through Instagram ads, LinkedIn marketing, Facebook campaigns, and lead generation. We understand Bangalore's competitive startup ecosystem."
      services={[
        { title: "Instagram Ads Bangalore", description: "Performance Instagram campaigns for Bangalore businesses targeting tech-savvy audiences." },
        { title: "LinkedIn Marketing Bangalore", description: "B2B LinkedIn marketing for Bangalore's startup and tech ecosystem. Build authority and generate inbound leads." },
        { title: "Lead Generation Bangalore", description: "Qualified lead paths for Bangalore businesses in SaaS, EdTech, FinTech, and services." },
        { title: "Social Media Management Bangalore", description: "Full-service social media management for Bangalore brands. Content, posting, and analytics." },
        { title: "SaaS Marketing Bangalore", description: "Specialized digital marketing for Bangalore SaaS companies. Product-led growth and demand generation." },
        { title: "Startup Marketing Bangalore", description: "Affordable digital marketing for Bangalore startups. Build a practical campaign without wasting budget." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Bangalore?", answer: "Pricing is scoped after we understand your goals, channels, content volume, and reporting needs." },
        { question: "How should I choose a digital marketing agency for Bangalore startups?", answer: "Choose a team that can explain the lead path, creative plan, channel fit, tracking setup, and reporting method before money is spent." },
        { question: "Can you help my Bangalore SaaS company generate leads?", answer: "Yes. We can plan LinkedIn marketing, content, landing pages, paid campaigns, and follow-up paths around your ICP and sales process." },
        { question: "Do you offer B2B digital marketing for Bangalore tech companies?", answer: "Yes. We offer LinkedIn marketing, thought leadership content, lead generation planning, campaign landing pages, and reporting for B2B teams." },
        { question: "How quickly can I see results from digital marketing in Bangalore?", answer: "Timelines depend on the buying cycle, offer, creative quality, and channel mix. We set expectations after reviewing the scope." },
      ]}
    />
  );
}






