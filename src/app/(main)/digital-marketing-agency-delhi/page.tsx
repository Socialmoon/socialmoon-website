import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Delhi | SocialMoon — Social Media & Ads",
  description:
    "Top digital marketing agency serving Delhi businesses. SocialMoon delivers Instagram ads, Facebook marketing, lead generation & social media management for Delhi startups & SMEs. Free consultation.",
  keywords: ["digital marketing agency Delhi", "social media agency Delhi", "Instagram ads Delhi", "Facebook marketing Delhi", "lead generation Delhi"],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-delhi` },
  openGraph: {
    title: "Digital Marketing Agency in Delhi | SocialMoon",
    description: "Instagram ads, Facebook marketing & lead generation for Delhi businesses. Free strategy consultation.",
    url: `${SITE_URL}/digital-marketing-agency-delhi`,
  },
};

export default function DelhiPage() {
  return (
    <CityLandingPage
      city="Delhi"
      state="Delhi NCR"
      slug="digital-marketing-agency-delhi"
      headline="Digital Marketing Agency Trusted by Delhi Businesses"
      subheadline="Why Delhi Startups & SMEs Choose SocialMoon"
      description="SocialMoon helps Delhi businesses grow their brand and generate leads through Instagram ads, Facebook marketing, and social media management. ROI-focused campaigns built for the Delhi market."
      stats={[
        { value: "100+", label: "Clients Served" },
        { value: "3x", label: "Avg. Lead Growth" },
        { value: "₹20K", label: "Starting Budget" },
        { value: "98%", label: "Satisfaction Rate" },
      ]}
      services={[
        { title: "Instagram Ads Delhi", description: "High-converting Instagram ad campaigns targeting Delhi's growing digital audience. From creative to conversion." },
        { title: "Facebook Marketing Delhi", description: "Reach Delhi's 20M+ Facebook users with targeted campaigns. Lead generation, brand awareness, and retargeting." },
        { title: "Lead Generation Delhi", description: "Qualified leads for Delhi businesses in real estate, education, retail, and services through social media and paid ads." },
        { title: "Social Media Management Delhi", description: "Full-service social media management for Delhi brands. Content, posting, engagement, and monthly reporting." },
        { title: "Content Marketing Delhi", description: "SEO-optimized content that ranks in Delhi searches and converts visitors into customers." },
        { title: "Paid Ads Agency Delhi", description: "Google Ads, Meta Ads, and LinkedIn campaigns managed by Delhi-focused digital marketing experts." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Delhi?", answer: "SocialMoon's packages for Delhi businesses start from ₹20,000/month. We offer custom pricing based on your goals, industry, and target audience." },
        { question: "Which digital marketing agency is best for Delhi startups?", answer: "SocialMoon specializes in helping Delhi startups grow through Instagram ads, Facebook marketing, and lead generation. We focus on ROI, not vanity metrics." },
        { question: "Can you run Instagram ads targeting Delhi customers?", answer: "Yes! We run hyper-targeted Instagram ad campaigns for Delhi businesses, targeting by location, age, interests, and behavior to reach your ideal customers." },
        { question: "Do you offer social media management for Delhi businesses?", answer: "Absolutely. We provide full-service social media management for Delhi brands including content creation, posting, community management, and analytics." },
        { question: "How long does it take to see results from digital marketing in Delhi?", answer: "Most Delhi clients see measurable results within 30-60 days. Paid ad campaigns can show results within the first week, while organic growth takes 60-90 days." },
      ]}
    />
  );
}
