import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Hyderabad | SocialMoon — Social Media & Ads",
  description: "Top digital marketing agency for Hyderabad businesses. Instagram ads, Facebook marketing, lead generation & social media management for Hyderabad startups & SMEs. Free consultation.",
  keywords: ["digital marketing agency Hyderabad", "social media agency Hyderabad", "Instagram ads Hyderabad", "Facebook marketing Hyderabad"],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-hyderabad` },
  openGraph: { title: "Digital Marketing Agency in Hyderabad | SocialMoon", description: "Instagram ads, Facebook marketing & lead generation for Hyderabad businesses.", url: `${SITE_URL}/digital-marketing-agency-hyderabad` },
};

export default function HyderabadPage() {
  return (
    <CityLandingPage
      city="Hyderabad"
      state="Telangana"
      slug="digital-marketing-agency-hyderabad"
      headline="Digital Marketing Agency for Hyderabad's Growing Businesses"
      subheadline="Why Hyderabad Businesses Choose SocialMoon"
      description="SocialMoon helps Hyderabad startups and SMEs grow through Instagram ads, Facebook marketing, and social media management. ROI-focused campaigns for Hyderabad's competitive market."
      stats={[{ value: "100+", label: "Clients Served" }, { value: "4x", label: "Avg. Lead Growth" }, { value: "₹20K", label: "Starting Budget" }, { value: "98%", label: "Satisfaction Rate" }]}
      services={[
        { title: "Instagram Ads Hyderabad", description: "High-converting Instagram campaigns for Hyderabad businesses targeting local and regional audiences." },
        { title: "Facebook Marketing Hyderabad", description: "Targeted Facebook campaigns for Hyderabad brands. Lead generation and brand awareness." },
        { title: "Lead Generation Hyderabad", description: "Qualified leads for Hyderabad businesses in real estate, pharma, IT, and retail." },
        { title: "Social Media Management Hyderabad", description: "Full-service social media management for Hyderabad brands." },
        { title: "IT Company Marketing Hyderabad", description: "Specialized digital marketing for Hyderabad's IT and tech companies." },
        { title: "Real Estate Marketing Hyderabad", description: "Lead generation and social media marketing for Hyderabad real estate businesses." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Hyderabad?", answer: "SocialMoon's packages for Hyderabad businesses start from ₹20,000/month with custom pricing available." },
        { question: "Which is the best digital marketing agency in Hyderabad?", answer: "SocialMoon delivers ROI-focused digital marketing for Hyderabad businesses with expertise in Instagram ads, Facebook marketing, and lead generation." },
        { question: "Can you help my Hyderabad real estate business get leads?", answer: "Yes! We specialize in lead generation for real estate businesses in Hyderabad through Facebook ads, Instagram campaigns, and landing page optimization." },
        { question: "Do you offer social media management for Hyderabad businesses?", answer: "Yes, we provide full-service social media management for Hyderabad brands including content creation, posting, and community management." },
        { question: "How quickly can I see results in Hyderabad?", answer: "Paid campaigns show results within 1-2 weeks. Organic social media growth takes 60-90 days of consistent execution." },
      ]}
    />
  );
}
