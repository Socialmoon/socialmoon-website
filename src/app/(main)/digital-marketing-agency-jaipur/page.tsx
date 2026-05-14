import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Jaipur | SocialMoon — Social Media & Ads",
  description: "Digital marketing services for Jaipur businesses. Instagram ads, Facebook marketing, lead generation and social media management for Jaipur startups and SMEs.",
  keywords: ["digital marketing agency Jaipur", "social media agency Jaipur", "digital marketing Jaipur", "Instagram ads Jaipur"],
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
      services={[
        { title: "Instagram Ads Jaipur", description: "Performance Instagram campaigns for Jaipur businesses targeting local and regional audiences." },
        { title: "Facebook Marketing Jaipur", description: "Targeted Facebook campaigns for Jaipur brands. Lead generation and brand awareness." },
        { title: "Lead Generation Jaipur", description: "Qualified lead paths for Jaipur businesses in tourism, handicrafts, retail, and real estate." },
        { title: "Social Media Management Jaipur", description: "Full-service social media management for Jaipur brands." },
        { title: "Tourism & Hospitality Marketing Jaipur", description: "Specialized social media marketing for Jaipur's tourism and hospitality businesses." },
        { title: "Handicraft & Retail Marketing Jaipur", description: "Instagram and Facebook marketing for Jaipur's handicraft and retail businesses." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Jaipur?", answer: "Pricing is scoped after we understand your goals, channels, content volume, and reporting needs." },
        { question: "How should I choose a digital marketing agency in Jaipur?", answer: "SocialMoon plans transparent digital marketing campaigns for Jaipur businesses with expertise in Instagram ads, Facebook marketing, and lead generation." },
        { question: "Can you help my Jaipur tourism business grow on social media?", answer: "Yes. We can plan content, campaign angles, audience targeting, and booking or enquiry paths for tourism and hospitality brands." },
        { question: "Do you offer affordable digital marketing for Jaipur SMEs?", answer: "Absolutely. Pricing is scoped after we understand your campaign, content volume, and support needs." },
        { question: "How quickly can I see results in Jaipur?", answer: "Timelines depend on your offer, budget, creative quality, and channel mix. We set expectations after reviewing the scope." },
      ]}
    />
  );
}






