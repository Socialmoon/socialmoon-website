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

const homePageContent = {
  hero: {
    title: "Transform Your Social Media Presence",
    subtitle: "We create viral content and build engaged communities that drive real business results.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    stats: [
      { value: "500M+", label: "Impressions Generated" },
      { value: "200+", label: "Brands Served" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "15x", label: "Average ROI" }
    ]
  },
  features: [
    {
      title: "Data-Driven Strategy",
      description: "We use advanced analytics and market research to create strategies that deliver measurable results.",
      icon: "TrendingUp"
    },
    {
      title: "Creative Excellence",
      description: "Our award-winning creative team produces content that stops scrolls and drives engagement.",
      icon: "Sparkles"
    },
    {
      title: "Full-Service Management",
      description: "From strategy to execution, we handle every aspect of your social media presence.",
      icon: "Settings"
    },
    {
      title: "Proven Results",
      description: "Our clients see an average of 300% growth in engagement and 15x ROI on their investment.",
      icon: "Award"
    }
  ],
  services: [
    {
      id: 1,
      title: "Instagram Marketing",
      description: "Grow your Instagram following and engagement with proven strategies.",
      icon: "Instagram"
    },
    {
      id: 2,
      title: "Content Creation",
      description: "High-quality photos, videos, and graphics that capture attention.",
      icon: "Camera"
    },
    {
      id: 3,
      title: "Influencer Campaigns",
      description: "Connect with the right influencers to amplify your brand message.",
      icon: "Users"
    },
    {
      id: 4,
      title: "Paid Advertising",
      description: "Maximize ROI with targeted social media advertising campaigns.",
      icon: "Target"
    }
  ],
  testimonials: [
    {
      quote: "SocialMoon transformed our social media presence. We've seen a 450% increase in engagement and our sales have tripled!",
      author: "Sarah Johnson",
      position: "CEO, TechStartup Inc.",
      rating: 5
    },
    {
      quote: "The team at SocialMoon is exceptional. They understand our brand and consistently deliver content that resonates with our audience.",
      author: "Mike Chen",
      position: "Marketing Director, FashionBrand",
      rating: 5
    },
    {
      quote: "Best decision we made was partnering with SocialMoon. They're true experts in social media marketing.",
      author: "Jessica Martinez",
      position: "Founder, FitLife App",
      rating: 5
    }
  ],
  cta: {
    title: "Ready to Transform Your Social Media?",
    description: "Let's discuss how we can help your business thrive on social media.",
    buttonText: "Schedule Free Consultation",
    buttonLink: "/contact"
  }
};

async function addHomeContent() {
  try {
    console.log('🚀 Adding home page content to Firestore...\n');

    const homeRef = doc(db, 'home', 'main');
    await setDoc(homeRef, homePageContent);

    console.log('✅ Successfully added home page content!\n');
    
    console.log('Content added:');
    console.log(`  • Hero section with ${homePageContent.hero.stats.length} stats`);
    console.log(`  • ${homePageContent.features.length} feature highlights`);
    console.log(`  • ${homePageContent.services.length} service previews`);
    console.log(`  • ${homePageContent.testimonials.length} testimonials`);
    console.log(`  • Call-to-action section`);
    
  } catch (error) {
    console.error('❌ Error adding home content:', error);
    throw error;
  }
}

// Run the script
addHomeContent()
  .then(() => {
    console.log('\n✨ Home page content added successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Script failed:', error);
    process.exit(1);
  });
