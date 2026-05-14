import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Mumbai | SocialMoon - Social Media & Ads",
  description: "Digital marketing services for Mumbai businesses. Instagram ads, Facebook marketing, lead generation and social media management for Mumbai startups and SMEs.",
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
      description="SocialMoon helps Mumbai startups and SMEs grow through Instagram ads, Facebook marketing, and social media management. We plan measurable campaigns for Mumbai's competitive market."
      services={[
        { title: "Instagram Ads Mumbai", description: "Performance Instagram ad campaigns for Mumbai businesses. Reach your ideal customers in Mumbai's massive digital audience." },
        { title: "Facebook Marketing Mumbai", description: "Targeted Facebook campaigns for Mumbai brands. Lead generation, brand awareness, and retargeting with clear reporting." },
        { title: "Lead Generation Mumbai", description: "qualified lead paths for Mumbai businesses in real estate, finance, retail, and services through social media and paid ads." },
        { title: "Social Media Management Mumbai", description: "Full-service social media management for Mumbai brands. Content, posting, engagement, and monthly reporting." },
        { title: "D2C Brand Marketing Mumbai", description: "Specialized social media marketing for Mumbai's growing D2C brands. Instagram, Facebook, and influencer strategies." },
        { title: "Startup Marketing Mumbai", description: "Affordable digital marketing packages for Mumbai startups. Build a practical campaign without wasting budget." },
      ]}
      faqs={[
        { question: "How much does digital marketing cost in Mumbai?", answer: "Pricing is scoped after we understand your goals, channels, content volume, and reporting needs." },
        { question: "How should I choose a digital marketing agency for Mumbai startups?", answer: "Choose an agency that can explain the campaign plan, targeting, creative direction, reporting method, and budget use before launch." },
        { question: "Can you help my Mumbai D2C brand grow on Instagram?", answer: "Yes. We can plan Instagram content, paid campaigns, landing paths, and reporting around your product, offer, and audience." },
        { question: "Do you offer affordable digital marketing for small businesses in Mumbai?", answer: "Absolutely. Pricing is scoped after we understand your campaign, content volume, and support needs." },
        { question: "How quickly can I see results from digital marketing in Mumbai?", answer: "Paid campaigns can begin producing signals after launch, but reliable decisions depend on spend, audience size, tracking quality, offer strength, and creative testing." },
      ]}
    />
  );
}






