import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config/site";
import CityLandingPage from "@/components/common/CityLandingPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Lucknow | SocialMoon — #1 Social Media Agency UP",
  description:
    "SocialMoon is Lucknow's #1 digital marketing agency. We help startups & small businesses in Lucknow & UP grow with Instagram ads, Facebook marketing, lead generation & website design. Free strategy call.",
  keywords: [
    "digital marketing agency Lucknow",
    "social media agency Lucknow",
    "Instagram ads agency Lucknow",
    "Facebook marketing Lucknow",
    "lead generation Lucknow",
    "digital marketing company Lucknow",
    "best digital marketing agency Lucknow",
    "social media marketing Lucknow",
    "digital marketing UP",
    "online marketing agency Lucknow",
  ],
  alternates: { canonical: `${SITE_URL}/digital-marketing-agency-lucknow` },
  openGraph: {
    title: "Digital Marketing Agency in Lucknow | SocialMoon",
    description:
      "Lucknow's #1 digital marketing agency. Instagram ads, Facebook marketing, lead generation & website design for startups & small businesses in UP.",
    url: `${SITE_URL}/digital-marketing-agency-lucknow`,
  },
};

export default function LucknowPage() {
  return (
    <CityLandingPage
      city="Lucknow"
      state="Uttar Pradesh"
      slug="digital-marketing-agency-lucknow"
      headline="Lucknow's #1 Digital Marketing Agency for Startups & Small Businesses"
      subheadline="Why Lucknow Businesses Choose SocialMoon"
      description="SocialMoon is based in Lucknow and has helped 100+ businesses across UP grow their brand, generate leads, and scale revenue through social media marketing, Instagram ads, Facebook campaigns, and website design."
      stats={[
        { value: "100+", label: "Lucknow Clients" },
        { value: "5x", label: "Avg. Instagram Growth" },
        { value: "₹15K", label: "Starting Budget" },
        { value: "24hrs", label: "Response Time" },
      ]}
      services={[
        {
          title: "Instagram Marketing Lucknow",
          description: "Grow your Instagram following and generate real leads from Lucknow's growing digital audience. Reels, ads, and organic growth strategies tailored for UP businesses.",
        },
        {
          title: "Facebook Ads Lucknow",
          description: "Reach your ideal customers in Lucknow and across UP with targeted Facebook ad campaigns. We manage everything from creative to conversion tracking.",
        },
        {
          title: "Lead Generation Lucknow",
          description: "Get qualified leads for your Lucknow business through social media, paid ads, and content marketing. Real estate, education, retail, and more.",
        },
        {
          title: "Social Media Management Lucknow",
          description: "Full-service social media management for Lucknow businesses. We handle content creation, posting, community management, and monthly reporting.",
        },
        {
          title: "Website Design Lucknow",
          description: "Fast, mobile-first, SEO-ready websites for Lucknow startups and SMEs. Delivered in 7 days. Starting ₹12,000.",
        },
        {
          title: "Digital Strategy for UP Businesses",
          description: "Custom digital marketing strategies built for the Lucknow and UP market. We understand local consumer behavior and regional competition.",
        },
      ]}
      faqs={[
        {
          question: "How much does digital marketing cost in Lucknow?",
          answer: "SocialMoon's digital marketing packages for Lucknow businesses start from ₹15,000/month for social media management and ₹20,000/month for paid ad campaigns. We offer custom pricing based on your goals and budget.",
        },
        {
          question: "Which is the best digital marketing agency in Lucknow?",
          answer: "SocialMoon is Lucknow's top-rated digital marketing agency, trusted by 100+ businesses across UP. We specialize in Instagram ads, Facebook marketing, lead generation, and website design for startups and small businesses.",
        },
        {
          question: "Can SocialMoon help my Lucknow business get leads from Instagram?",
          answer: "Yes! We've helped dozens of Lucknow businesses generate qualified leads through Instagram ads and organic growth strategies. Our campaigns are tailored to the UP market and local consumer behavior.",
        },
        {
          question: "Do you work with small businesses in Lucknow?",
          answer: "Absolutely. SocialMoon specializes in helping small businesses and startups in Lucknow grow their digital presence. We offer affordable packages starting from ₹15,000/month with no long-term contracts.",
        },
        {
          question: "How quickly can I see results from digital marketing in Lucknow?",
          answer: "Most Lucknow clients see improved engagement and lead flow within the first 30 days. Significant growth in followers and leads typically happens within 60-90 days of consistent execution.",
        },
      ]}
    />
  );
}
