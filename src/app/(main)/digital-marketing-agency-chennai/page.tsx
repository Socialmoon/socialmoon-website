import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Chennai | SocialMoon — Social Media & Ads",
  description: "Top digital marketing agency for Chennai businesses. Instagram ads, Facebook marketing, lead generation & social media management for Chennai startups & SMEs. Free consultation.",
  keywords: ["digital marketing agency Chennai", "social media agency Chennai", "Instagram ads Chennai", "Facebook marketing Chennai"],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-chennai` },
  openGraph: { title: "Digital Marketing Agency in Chennai | SocialMoon", description: "Instagram ads, Facebook marketing & lead generation for Chennai businesses.", url: `${SITE_URL}/digital-marketing-agency-chennai` },
};

export default function ChennaiPage() {
  return (
    <CityLandingPage
      city="Chennai"
      state="Tamil Nadu"
      slug="digital-marketing-agency-chennai"
      headline="Digital Marketing Agency for Chennai's Growing Businesses"
      subheadline="Why Chennai Businesses Choose SocialMoon"
      description="SocialMoon helps Chennai startups and SMEs grow through Instagram ads, Facebook marketing, and social media management. ROI-focused campaigns for Chennai's competitive market."
      stats={[{ value: "100+", label: "Clients Served" }, { value: "4x", label: "Avg. Lead Growth" }, { value: "₹20K", label: "Starting Budget" }, { value: "98%", label: "Satisfaction Rate" }]}
      services={[
        { title: "Instagram Ads Chennai", description: "High-converting Instagram campaigns for Chennai businesses targeting local and regional audiences." },
        { title: "Facebook Marketing Chennai", description: "Targeted Facebook campaigns for Chennai brands. Lead generation and brand awareness." },
        { title: "Lead Generation Chennai", description: "Qualified leads for Chennai businesses in manufacturing, IT, healthcare, and retail." },
        { title: "Social Media Management Chennai", description: "Full-service social media management for Chennai brands." },
        { title: "Manufacturing Company Marketing Chennai", description: "B2B digital marketing for Chennai's manufacturing and industrial companies." },
        { title: "Healthcare Marketing Chennai", description: "Social media marketing for Chennai hospitals, clinics, and healthcare brands." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Chennai?", answer: "SocialMoon's packages for Chennai businesses start from ₹20,000/month with custom pricing available." },
        { question: "Which is the best digital marketing agency in Chennai?", answer: "SocialMoon delivers ROI-focused digital marketing for Chennai businesses with expertise in Instagram ads, Facebook marketing, and lead generation." },
        { question: "Can you help my Chennai business generate leads from social media?", answer: "Yes! We specialize in lead generation for Chennai businesses through Facebook ads, Instagram campaigns, and content marketing." },
        { question: "Do you offer social media management for Chennai businesses?", answer: "Yes, we provide full-service social media management for Chennai brands including content creation, posting, and community management." },
        { question: "How quickly can I see results in Chennai?", answer: "Paid campaigns show results within 1-2 weeks. Organic social media growth takes 60-90 days of consistent execution." },
      ]}
    />
  );
}
