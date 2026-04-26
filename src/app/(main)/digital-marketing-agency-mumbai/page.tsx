import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Mumbai | SocialMoon — Social Media & Ads",
  description: "Top digital marketing agency for Mumbai businesses. Instagram ads, Facebook marketing, lead generation & social media management for Mumbai startups & SMEs. Free consultation.",
  keywords: ["digital marketing agency Mumbai", "social media agency Mumbai", "Instagram ads Mumbai", "Facebook marketing Mumbai", "lead generation Mumbai"],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-mumbai` },
  openGraph: { title: "Digital Marketing Agency in Mumbai | SocialMoon", description: "Instagram ads, Facebook marketing & lead generation for Mumbai businesses.", url: `${SITE_URL}/digital-marketing-agency-mumbai` },
};

export default function MumbaiPage() {
  return (
    <CityLandingPage
      city="Mumbai"
      state="Maharashtra"
      slug="digital-marketing-agency-mumbai"
      headline="Digital Marketing Agency for Mumbai's Fastest-Growing Businesses"
      subheadline="Why Mumbai Businesses Choose SocialMoon"
      description="SocialMoon helps Mumbai startups and SMEs grow through Instagram ads, Facebook marketing, and social media management. We deliver measurable ROI for Mumbai's competitive market."
      stats={[{ value: "100+", label: "Clients Served" }, { value: "5x", label: "Avg. ROAS" }, { value: "₹20K", label: "Starting Budget" }, { value: "98%", label: "Satisfaction Rate" }]}
      services={[
        { title: "Instagram Ads Mumbai", description: "Performance Instagram ad campaigns for Mumbai businesses. Reach your ideal customers in Mumbai's massive digital audience." },
        { title: "Facebook Marketing Mumbai", description: "Targeted Facebook campaigns for Mumbai brands. Lead generation, brand awareness, and retargeting for maximum ROI." },
        { title: "Lead Generation Mumbai", description: "Qualified leads for Mumbai businesses in real estate, finance, retail, and services through social media and paid ads." },
        { title: "Social Media Management Mumbai", description: "Full-service social media management for Mumbai brands. Content, posting, engagement, and monthly reporting." },
        { title: "D2C Brand Marketing Mumbai", description: "Specialized social media marketing for Mumbai's growing D2C brands. Instagram, Facebook, and influencer strategies." },
        { title: "Startup Marketing Mumbai", description: "Affordable digital marketing packages for Mumbai startups. Grow fast without burning your runway." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Mumbai?", answer: "SocialMoon's packages for Mumbai businesses start from ₹20,000/month. Custom pricing available based on your goals and industry." },
        { question: "Which is the best digital marketing agency for Mumbai startups?", answer: "SocialMoon specializes in ROI-focused digital marketing for Mumbai startups. We focus on Instagram ads, Facebook marketing, and lead generation." },
        { question: "Can you help my Mumbai D2C brand grow on Instagram?", answer: "Yes! We've helped multiple D2C brands in Mumbai grow their Instagram following and sales through targeted ads and organic content strategies." },
        { question: "Do you offer affordable digital marketing for small businesses in Mumbai?", answer: "Absolutely. Our packages start from ₹20,000/month with no long-term contracts. We offer flexible plans for Mumbai's small businesses and startups." },
        { question: "How quickly can I see results from digital marketing in Mumbai?", answer: "Paid ad campaigns show results within the first week. Organic social media growth typically takes 60-90 days of consistent execution." },
      ]}
    />
  );
}
