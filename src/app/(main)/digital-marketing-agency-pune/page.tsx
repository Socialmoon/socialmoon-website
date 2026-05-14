import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Pune | SocialMoon — Social Media & Ads",
  description: "Digital marketing services for Pune businesses. Instagram ads, Facebook marketing, lead generation and social media management for Pune startups and SMEs.",
  keywords: ["digital marketing agency Pune", "social media agency Pune", "Instagram ads Pune", "Facebook marketing Pune"],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-pune` },
  openGraph: { title: "Digital Marketing Agency in Pune | SocialMoon", description: "Instagram ads, Facebook marketing & lead generation for Pune businesses.", url: `${SITE_URL}/digital-marketing-agency-pune` },
};

export default function PunePage() {
  return (
    <CityLandingPage
      city="Pune"
      state="Maharashtra"
      slug="digital-marketing-agency-pune"
      headline="Digital Marketing Agency for Pune's Ambitious Businesses"
      subheadline="Why Pune Startups & SMEs Choose SocialMoon"
      description="SocialMoon helps Pune businesses grow through Instagram ads, Facebook marketing, and social media management. We plan measurable campaigns for Pune's growing startup and SME ecosystem."
      services={[
        { title: "Instagram Ads Pune", description: "Performance Instagram campaigns for Pune businesses targeting local and regional audiences." },
        { title: "Facebook Marketing Pune", description: "Targeted Facebook campaigns for Pune brands. Lead generation and brand awareness." },
        { title: "Lead Generation Pune", description: "Qualified lead paths for Pune businesses in IT, manufacturing, education, and retail." },
        { title: "Social Media Management Pune", description: "Full-service social media management for Pune brands." },
        { title: "EdTech Marketing Pune", description: "Specialized digital marketing for Pune's education and EdTech companies." },
        { title: "Startup Marketing Pune", description: "Affordable digital marketing for Pune startups. Build a practical campaign without wasting budget." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Pune?", answer: "Pricing is scoped after we understand your goals, channels, content volume, and reporting needs." },
        { question: "How should I choose a digital marketing agency in Pune?", answer: "SocialMoon plans transparent digital marketing campaigns for Pune businesses with expertise in Instagram ads, Facebook marketing, and lead generation." },
        { question: "Can you help my Pune startup grow on social media?", answer: "Yes. We can build a social plan with Instagram content, Facebook campaigns, landing paths, and reporting around your current stage." },
        { question: "Do you offer affordable digital marketing for Pune SMEs?", answer: "Absolutely. Pricing is scoped after we understand your campaign, content volume, and support needs." },
        { question: "How quickly can I see results in Pune?", answer: "Timelines depend on your offer, budget, creative quality, and channel mix. We set expectations after reviewing the scope." },
      ]}
    />
  );
}






