import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const sampleServices = [
  {
    id: 1,
    title: "Social Media Strategy & Consulting",
    icon: "Strategy",
    description: "Comprehensive social media strategy development tailored to your business goals. We analyze your market, competitors, and audience to create a winning roadmap.",
    features: [
      "Complete competitor analysis",
      "Target audience research & personas",
      "Platform selection & optimization",
      "Content calendar planning",
      "KPI setting & performance tracking",
      "Monthly strategy reviews"
    ],
    price: "Starting at $2,500/month",
    popular: false
  },
  {
    id: 2,
    title: "Content Creation & Management",
    icon: "Content",
    description: "High-quality, engaging content that resonates with your audience. From graphics to videos, we create content that drives engagement and conversions.",
    features: [
      "Professional photography & videography",
      "Graphic design & animations",
      "Copywriting & storytelling",
      "Video editing & post-production",
      "Content scheduling & posting",
      "Hashtag research & optimization"
    ],
    price: "Starting at $3,000/month",
    popular: true
  },
  {
    id: 3,
    title: "Instagram Growth & Management",
    icon: "Instagram",
    description: "Explosive Instagram growth through proven strategies. We manage your entire Instagram presence to maximize reach, engagement, and follower growth.",
    features: [
      "Daily posting & story management",
      "Reels & video content creation",
      "Community engagement & DM management",
      "Profile optimization",
      "Growth analytics & reporting",
      "Instagram Shopping setup"
    ],
    price: "Starting at $2,000/month",
    popular: true
  },
  {
    id: 4,
    title: "Influencer Marketing Campaigns",
    icon: "Users",
    description: "Connect with the right influencers to amplify your brand. We manage everything from discovery to campaign execution and ROI tracking.",
    features: [
      "Influencer discovery & vetting",
      "Contract negotiation",
      "Campaign strategy & briefing",
      "Content approval & management",
      "Performance tracking & reporting",
      "Long-term partnership building"
    ],
    price: "Starting at $4,000/campaign",
    popular: false
  },
  {
    id: 5,
    title: "Paid Social Advertising",
    icon: "TrendingUp",
    description: "Data-driven paid advertising campaigns that deliver results. We create, manage, and optimize ads across all major social platforms.",
    features: [
      "Campaign strategy & planning",
      "Ad creative design & copywriting",
      "Audience targeting & segmentation",
      "A/B testing & optimization",
      "Budget management & allocation",
      "Detailed ROI reporting"
    ],
    price: "Starting at $2,500/month + ad spend",
    popular: true
  },
  {
    id: 6,
    title: "TikTok Marketing & Viral Growth",
    icon: "Video",
    description: "Tap into TikTok's massive potential with viral-worthy content. We create trends, not follow them, to make your brand a TikTok sensation.",
    features: [
      "Trend analysis & participation",
      "Viral video creation",
      "TikTok ads management",
      "Hashtag challenge campaigns",
      "Creator partnerships",
      "Analytics & growth tracking"
    ],
    price: "Starting at $3,500/month",
    popular: false
  },
  {
    id: 7,
    title: "LinkedIn B2B Marketing",
    icon: "Briefcase",
    description: "Professional LinkedIn strategies that generate leads and establish thought leadership. Perfect for B2B companies and executives.",
    features: [
      "Profile & company page optimization",
      "Thought leadership content",
      "LinkedIn articles & posts",
      "Lead generation campaigns",
      "Employee advocacy programs",
      "LinkedIn Ads management"
    ],
    price: "Starting at $3,000/month",
    popular: false
  },
  {
    id: 8,
    title: "Community Management",
    icon: "MessageCircle",
    description: "Build and nurture a loyal community around your brand. We handle all customer interactions to keep your audience engaged and satisfied.",
    features: [
      "24/7 comment & DM monitoring",
      "Crisis management & response",
      "User-generated content campaigns",
      "Community building strategies",
      "Sentiment analysis",
      "Monthly community reports"
    ],
    price: "Starting at $1,800/month",
    popular: false
  },
  {
    id: 9,
    title: "Analytics & Reporting",
    icon: "BarChart",
    description: "In-depth analytics and actionable insights to optimize your social media performance. Make data-driven decisions with confidence.",
    features: [
      "Custom dashboard setup",
      "Weekly & monthly reports",
      "Competitive benchmarking",
      "ROI tracking & attribution",
      "Audience insights analysis",
      "Strategic recommendations"
    ],
    price: "Starting at $1,500/month",
    popular: false
  }
];

async function addServices() {
  try {
    console.log('🚀 Adding services to Firestore...\n');

    const servicesRef = doc(db, 'services', 'main');
    await setDoc(servicesRef, {
      title: 'Our Services',
      description: 'Comprehensive social media marketing solutions to grow your brand',
      services: sampleServices
    });

    console.log(`✅ Successfully added ${sampleServices.length} services!\n`);
    
    console.log('Services added:');
    sampleServices.forEach(service => {
      console.log(`  • ${service.title} - ${service.price}`);
    });
    
  } catch (error) {
    console.error('❌ Error adding services:', error);
    throw error;
  }
}

// Run the script
addServices()
  .then(() => {
    console.log('\n✨ Services added successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Script failed:', error);
    process.exit(1);
  });
