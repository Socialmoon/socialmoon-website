import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Bangalore | SocialMoon — Social Media & Ads",
  description: "Top digital marketing agency for Bangalore businesses. Instagram ads, Facebook marketing, lead generation & social media management for Bangalore startups & tech companies. Free consultation.",
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
      stats={[{ value: "100+", label: "Clients Served" }, { value: "3x", label: "Avg. Lead Growth" }, { value: "₹20K", label: "Starting Budget" }, { value: "98%", label: "Satisfaction Rate" }]}
      services={[
        { title: "Instagram Ads Bangalore", description: "Performance Instagram campaigns for Bangalore businesses targeting tech-savvy audiences." },
        { title: "LinkedIn Marketing Bangalore", description: "B2B LinkedIn marketing for Bangalore's startup and tech ecosystem. Build authority and generate inbound leads." },
        { title: "Lead Generation Bangalore", description: "Qualified leads for Bangalore businesses in SaaS, EdTech, FinTech, and services." },
        { title: "Social Media Management Bangalore", description: "Full-service social media management for Bangalore brands. Content, posting, and analytics." },
        { title: "SaaS Marketing Bangalore", description: "Specialized digital marketing for Bangalore SaaS companies. Product-led growth and demand generation." },
        { title: "Startup Marketing Bangalore", description: "Affordable digital marketing for Bangalore startups. Grow fast without burning your runway." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Bangalore?", answer: "SocialMoon's packages for Bangalore businesses start from ₹20,000/month. Custom pricing for SaaS and tech companies." },
        { question: "Which digital marketing agency is best for Bangalore startups?", answer: "SocialMoon specializes in growth marketing for Bangalore startups. We focus on lead generation, LinkedIn B2B marketing, and Instagram ads." },
        { question: "Can you help my Bangalore SaaS company generate leads?", answer: "Yes! We've helped Bangalore SaaS companies generate qualified leads through LinkedIn marketing, content marketing, and paid social campaigns." },
        { question: "Do you offer B2B digital marketing for Bangalore tech companies?", answer: "Absolutely. We specialize in B2B digital marketing including LinkedIn marketing, thought leadership content, and outbound lead generation for Bangalore tech companies." },
        { question: "How quickly can I see results from digital marketing in Bangalore?", answer: "B2B campaigns typically show results in 60-90 days. Paid ad campaigns can show results within the first 2 weeks." },
      ]}
    />
  );
}
