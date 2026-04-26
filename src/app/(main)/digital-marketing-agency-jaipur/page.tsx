import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Jaipur | SocialMoon — Social Media & Ads",
  description: "Top digital marketing agency for Jaipur businesses. Instagram ads, Facebook marketing, lead generation & social media management for Jaipur startups & SMEs. Free consultation.",
  keywords: ["digital marketing agency Jaipur", "social media agency Jaipur", "best digital marketing Jaipur", "Instagram ads Jaipur"],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-jaipur` },
  openGraph: { title: "Digital Marketing Agency in Jaipur | SocialMoon", description: "Instagram ads, Facebook marketing & lead generation for Jaipur businesses.", url: `${SITE_URL}/digital-marketing-agency-jaipur` },
};

export default function JaipurPage() {
  return (
    <CityLandingPage
      city="Jaipur"
      state="Rajasthan"
      slug="digital-marketing-agency-jaipur"
      headline="Digital Marketing Agency for Jaipur's Thriving Businesses"
      subheadline="Why Jaipur Businesses Choose SocialMoon"
      description="SocialMoon helps Jaipur businesses grow through Instagram ads, Facebook marketing, and social media management. We understand Rajasthan's market and deliver real results for Jaipur's SMEs and startups."
      stats={[{ value: "100+", label: "Clients Served" }, { value: "4x", label: "Avg. Lead Growth" }, { value: "₹15K", label: "Starting Budget" }, { value: "98%", label: "Satisfaction Rate" }]}
      services={[
        { title: "Instagram Ads Jaipur", description: "Performance Instagram campaigns for Jaipur businesses targeting local and regional audiences." },
        { title: "Facebook Marketing Jaipur", description: "Targeted Facebook campaigns for Jaipur brands. Lead generation and brand awareness." },
        { title: "Lead Generation Jaipur", description: "Qualified leads for Jaipur businesses in tourism, handicrafts, retail, and real estate." },
        { title: "Social Media Management Jaipur", description: "Full-service social media management for Jaipur brands." },
        { title: "Tourism & Hospitality Marketing Jaipur", description: "Specialized social media marketing for Jaipur's tourism and hospitality businesses." },
        { title: "Handicraft & Retail Marketing Jaipur", description: "Instagram and Facebook marketing for Jaipur's handicraft and retail businesses." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Jaipur?", answer: "SocialMoon's packages for Jaipur businesses start from ₹15,000/month — one of the most affordable rates in Rajasthan." },
        { question: "Which is the best digital marketing agency in Jaipur?", answer: "SocialMoon delivers ROI-focused digital marketing for Jaipur businesses with expertise in Instagram ads, Facebook marketing, and lead generation." },
        { question: "Can you help my Jaipur tourism business grow on social media?", answer: "Yes! We specialize in social media marketing for Jaipur's tourism and hospitality businesses, helping them reach domestic and international travelers." },
        { question: "Do you offer affordable digital marketing for Jaipur SMEs?", answer: "Absolutely. Our packages start from ₹15,000/month with no long-term contracts, making us accessible for Jaipur's small businesses." },
        { question: "How quickly can I see results in Jaipur?", answer: "Paid campaigns show results within 1-2 weeks. Organic social media growth takes 60-90 days of consistent execution." },
      ]}
    />
  );
}
