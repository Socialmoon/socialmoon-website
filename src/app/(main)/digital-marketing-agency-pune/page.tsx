import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Pune | SocialMoon — Social Media & Ads",
  description: "Top digital marketing agency for Pune businesses. Instagram ads, Facebook marketing, lead generation & social media management for Pune startups & SMEs. Free consultation.",
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
      description="SocialMoon helps Pune businesses grow through Instagram ads, Facebook marketing, and social media management. We deliver measurable results for Pune's growing startup and SME ecosystem."
      stats={[{ value: "100+", label: "Clients Served" }, { value: "4x", label: "Avg. Lead Growth" }, { value: "₹20K", label: "Starting Budget" }, { value: "98%", label: "Satisfaction Rate" }]}
      services={[
        { title: "Instagram Ads Pune", description: "Performance Instagram campaigns for Pune businesses targeting local and regional audiences." },
        { title: "Facebook Marketing Pune", description: "Targeted Facebook campaigns for Pune brands. Lead generation and brand awareness." },
        { title: "Lead Generation Pune", description: "Qualified leads for Pune businesses in IT, manufacturing, education, and retail." },
        { title: "Social Media Management Pune", description: "Full-service social media management for Pune brands." },
        { title: "EdTech Marketing Pune", description: "Specialized digital marketing for Pune's education and EdTech companies." },
        { title: "Startup Marketing Pune", description: "Affordable digital marketing for Pune startups. Grow fast without burning your runway." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Pune?", answer: "SocialMoon's packages for Pune businesses start from ₹20,000/month with custom pricing available." },
        { question: "Which is the best digital marketing agency in Pune?", answer: "SocialMoon delivers ROI-focused digital marketing for Pune businesses with expertise in Instagram ads, Facebook marketing, and lead generation." },
        { question: "Can you help my Pune startup grow on social media?", answer: "Yes! We specialize in helping Pune startups build their social media presence and generate leads through Instagram and Facebook campaigns." },
        { question: "Do you offer affordable digital marketing for Pune SMEs?", answer: "Absolutely. Our packages start from ₹20,000/month with no long-term contracts, making us accessible for Pune's small businesses." },
        { question: "How quickly can I see results in Pune?", answer: "Paid campaigns show results within 1-2 weeks. Organic social media growth takes 60-90 days." },
      ]}
    />
  );
}
