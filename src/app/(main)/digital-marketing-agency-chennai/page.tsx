import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Chennai | SocialMoon — Social Media & Ads",
  description: "Digital marketing services for Chennai businesses. Instagram ads, Facebook marketing, lead generation and social media management for Chennai startups and SMEs.",
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
      services={[
        { title: "Instagram Ads Chennai", description: "Audience-focused Instagram campaigns for Chennai businesses targeting local and regional audiences." },
        { title: "Facebook Marketing Chennai", description: "Targeted Facebook campaigns for Chennai brands. Lead generation and brand awareness." },
        { title: "Lead Generation Chennai", description: "Qualified lead paths for Chennai businesses in manufacturing, IT, healthcare, and retail." },
        { title: "Social Media Management Chennai", description: "Full-service social media management for Chennai brands." },
        { title: "Manufacturing Company Marketing Chennai", description: "B2B digital marketing for Chennai's manufacturing and industrial companies." },
        { title: "Healthcare Marketing Chennai", description: "Social media marketing for Chennai hospitals, clinics, and healthcare brands." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Chennai?", answer: "Pricing is scoped after we understand your goals, channels, content volume, and reporting needs." },
        { question: "How should I choose a digital marketing agency in Chennai?", answer: "SocialMoon plans transparent digital marketing campaigns for Chennai businesses with expertise in Instagram ads, Facebook marketing, and lead generation." },
        { question: "Can you help my Chennai business generate leads from social media?", answer: "Yes. We can plan Facebook ads, Instagram campaigns, landing paths, and content around your offer and audience." },
        { question: "Do you offer social media management for Chennai businesses?", answer: "Yes, we provide full-service social media management for Chennai brands including content creation, posting, and community management." },
        { question: "How quickly can I see results in Chennai?", answer: "Timelines depend on your offer, budget, creative quality, and channel mix. We set expectations after reviewing the scope." },
      ]}
    />
  );
}






