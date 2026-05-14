import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Lucknow | SocialMoon",
  description:
    "SocialMoon is a Lucknow-based creative marketing agency for social media, ads, SEO, AEO, lead generation, website development, and app development.",
  keywords: [
    "digital marketing agency Lucknow",
    "social media agency Lucknow",
    "SEO agency Lucknow",
    "local SEO services Lucknow",
    "AEO services Lucknow",
    "Instagram ads agency Lucknow",
    "Facebook marketing Lucknow",
    "lead generation Lucknow",
    "digital marketing company Lucknow",
    "social media marketing Lucknow",
    "website development Lucknow",
    "app development Lucknow",
    "digital marketing UP",
    "online marketing agency Lucknow",
  ],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-lucknow` },
  openGraph: {
    title: "Digital Marketing Agency in Lucknow | SocialMoon",
    description:
      "Lucknow-based creative marketing, SEO, AEO, social media, ads, lead generation, website development, and app development.",
    url: `${SITE_URL}/digital-marketing-agency-lucknow`,
  },
};

export default function LucknowPage() {
  return (
    <CityLandingPage
      city="Lucknow"
      state="Uttar Pradesh"
      slug="digital-marketing-agency-lucknow"
      headline="Lucknow-based marketing for brands that want to be remembered."
      subheadline="Marketing services for Lucknow businesses"
      description="SocialMoon is based in Lucknow and helps businesses plan brand recall, content, lead generation, SEO, AEO, ads, websites, and app experiences with clear scope and honest expectations."
      services={[
        {
          title: "Instagram Marketing Lucknow",
          description: "Reels, posts, content hooks, profile clarity, and ad paths planned around the audience your Lucknow business wants to reach.",
        },
        {
          title: "Facebook Ads Lucknow",
          description: "Meta campaign planning for Lucknow and UP audiences, including creative direction, targeting, landing path, and reporting setup.",
        },
        {
          title: "Lead Generation Lucknow",
          description: "Lead paths built through content, ads, landing pages, forms, and follow-up flows after we understand the offer and sales process.",
        },
        {
          title: "Social Media Management Lucknow",
          description: "Content planning, posting rhythm, community response support, and reporting for Lucknow businesses that need consistency.",
        },
        {
          title: "SEO & AEO Lucknow",
          description: "Keyword strategy, local SEO, FAQ structure, schema, and answer-focused content for Lucknow service discovery.",
        },
        {
          title: "Website Design Lucknow",
          description: "Mobile-first, SEO-ready websites and campaign pages scoped after we understand the pages, content, proof, and launch timeline.",
        },
        {
          title: "App Development Lucknow",
          description: "App flows, dashboards, MVP screens, portals, and product foundations that support campaigns and customer engagement.",
        },
        {
          title: "Digital Strategy for UP Businesses",
          description: "A practical marketing plan for Lucknow and UP audiences based on offer clarity, channels, proof, budget, and execution capacity.",
        },
      ]}
      faqs={[
        {
          question: "How much does digital marketing cost in Lucknow?",
          answer: "Pricing is scoped after we understand your goals, channels, content volume, and reporting needs.",
        },
        {
          question: "How should I choose a digital marketing agency in Lucknow?",
          answer: "Look for clear services, honest reporting, explainable strategy, real portfolio context, and no fake ranking or result claims. SocialMoon focuses on transparent marketing, SEO, social media, ads, lead generation, websites, and app support.",
        },
        {
          question: "Can SocialMoon help my Lucknow business build leads from Instagram?",
          answer: "We can build lead paths through Instagram content, ads, forms, landing pages, and follow-up workflows. We do not promise a fixed number of leads before auditing the offer, audience, budget, and current assets.",
        },
        {
          question: "Do you offer SEO and AEO in Lucknow?",
          answer: "Yes. We offer keyword strategy, on-page SEO, local SEO, FAQ and schema planning, AEO-ready answer sections, and ethical backlink outreach planning for Lucknow businesses.",
        },
        {
          question: "Can you generate backlinks for my business?",
          answer: "We do not create spam links or fake placements. We plan earned backlink opportunities through real directories, citations, partner mentions, local publications, and outreach targets that can be verified.",
        },
        {
          question: "Do you work with small businesses in Lucknow?",
          answer: "Yes. We scope a practical plan around the business goal, available proof, budget, and channels that make sense.",
        },
        {
          question: "How quickly can I see results from digital marketing in Lucknow?",
          answer: "Timelines depend on the channel, offer, creative quality, and budget. We set expectations after reviewing the campaign scope.",
        },
      ]}
    />
  );
}
