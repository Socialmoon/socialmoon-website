import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Delhi | SocialMoon — Social Media & Ads",
  description:
    "Digital marketing services for Delhi businesses. SocialMoon offers Instagram ads, Facebook marketing, lead generation and social media management for Delhi startups and SMEs.",
  keywords: ["digital marketing agency Delhi", "social media agency Delhi", "Instagram ads Delhi", "Facebook marketing Delhi", "lead generation Delhi"],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-delhi` },
  openGraph: {
    title: "Digital Marketing Agency in Delhi | SocialMoon",
    description: "Instagram ads, Facebook marketing and lead generation for Delhi businesses.",
    url: `${SITE_URL}/digital-marketing-agency-delhi`,
  },
};

export default function DelhiPage() {
  return (
    <CityLandingPage
      city="Delhi"
      state="Delhi NCR"
      slug="digital-marketing-agency-delhi"
      headline="Digital Marketing Agency used by Delhi Businesses"
      subheadline="Why Delhi Startups & SMEs Choose SocialMoon"
      description="SocialMoon helps Delhi businesses grow their brand and generate leads through Instagram ads, Facebook marketing, and social media management. ROI-focused campaigns built for the Delhi market."
      services={[
        { title: "Instagram Ads Delhi", description: "Audience-focused Instagram ad campaigns targeting Delhi's growing digital audience. From creative to conversion." },
        { title: "Facebook Marketing Delhi", description: "Targeted Facebook campaigns for Delhi brands. Lead generation, brand awareness, and retargeting." },
        { title: "Lead Generation Delhi", description: "Qualified lead paths for Delhi businesses in real estate, education, retail, and services through social media and paid ads." },
        { title: "Social Media Management Delhi", description: "Full-service social media management for Delhi brands. Content, posting, engagement, and monthly reporting." },
        { title: "Content Marketing Delhi", description: "Search-aware content planned around Delhi audiences, service intent, and clearer enquiry paths." },
        { title: "Paid Ads Agency Delhi", description: "Google Ads, Meta Ads, and LinkedIn campaigns managed by Delhi-focused digital marketing experts." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Delhi?", answer: "Pricing is scoped after we understand your goals, channels, content volume, and reporting needs." },
        { question: "How should I choose a digital marketing agency for Delhi startups?", answer: "SocialMoon specializes in helping Delhi startups grow through Instagram ads, Facebook marketing, and lead generation. We focus on clear goals, honest reporting, and practical execution." },
        { question: "Can you run Instagram ads targeting Delhi customers?", answer: "Yes! We run hyper-targeted Instagram ad campaigns for Delhi businesses, targeting by location, age, interests, and behavior to reach your ideal customers." },
        { question: "Do you offer social media management for Delhi businesses?", answer: "Absolutely. We provide full-service social media management for Delhi brands including content creation, posting, community management, and analytics." },
        { question: "How long does it take to see results from digital marketing in Delhi?", answer: "Timelines depend on the channel, offer, creative quality, and budget. We set expectations after reviewing the campaign scope." },
      ]}
    />
  );
}






