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
    title: "Content & Social Growth System",
    icon: "Growth",
    description: "A consistent content engine that builds your audience and keeps your brand visible without manual chaos.",
    features: [
      "Consistent multi-platform presence without burning team time",
      "Content designed for the right audience, not vanity followers",
      "A repeatable process your team can run or fully outsource"
    ],
    price: "Custom",
    popular: true
  },
  {
    id: 2,
    title: "Lead Generation System",
    icon: "Growth",
    description: "A targeted outreach and nurture flow that creates a predictable pipeline without relying on ads alone.",
    features: [
      "Steady flow of warm and qualified leads each month",
      "Shorter sales cycles with better-prepared prospects",
      "Clear attribution so you know exactly where leads come from"
    ],
    price: "Custom",
    popular: true
  },
  {
    id: 3,
    title: "Personal Brand System",
    icon: "Growth",
    description: "A LinkedIn-first system that turns founder visibility into trust, inbound demand, and deals.",
    features: [
      "Founder profile becomes a sales asset that works daily",
      "Category authority that shortens sales conversations",
      "Inbound opportunities from the right people in your market"
    ],
    price: "Custom",
    popular: false
  },
  {
    id: 4,
    title: "OpsFlow AI",
    icon: "Efficiency",
    description: "We audit expensive manual workflows and automate high-impact operations so teams focus on meaningful work.",
    features: [
      "Reduce repetitive manual work by 40-70%",
      "Lower operational cost without abrupt team disruption",
      "Faster execution across sales, support, onboarding, and ops"
    ],
    price: "Custom",
    popular: false
  },
  {
    id: 5,
    title: "WorkflowOS",
    icon: "Efficiency",
    description: "We replace scattered docs, sheets, and handoffs with one structured operating system your team can trust.",
    features: [
      "Replace 5-10 fragmented workflows with one clean system",
      "Less coordination overhead and more execution time",
      "Reduced handoff errors and stronger process accountability"
    ],
    price: "Custom",
    popular: false
  },
  {
    id: 6,
    title: "CloudTrim",
    icon: "Efficiency",
    description: "We optimize cloud spending and architecture so you pay for what you use and scale without infrastructure panic.",
    features: [
      "Cut cloud cost by 40-60% with low migration risk",
      "Infrastructure prepared for 5x scale growth",
      "Clear documented setup that is not person-dependent"
    ],
    price: "Custom",
    popular: false
  },
  {
    id: 7,
    title: "QueryBoost",
    icon: "Efficiency",
    description: "We remove data-layer bottlenecks and improve database performance to speed up app and API response times.",
    features: [
      "5-10x faster load time and API performance",
      "Database readiness for 3-5x current traffic",
      "Fewer production slowdowns and firefighting cycles"
    ],
    price: "Custom",
    popular: false
  },
  {
    id: 8,
    title: "SmartLayer AI",
    icon: "Efficiency",
    description: "We identify high-impact AI opportunities, build testable prototypes, and deliver a fast shipping roadmap.",
    features: [
      "Clarity on AI features that actually move product metrics",
      "Working proofs you can test with real users quickly",
      "Cut AI feature timeline from months to weeks"
    ],
    price: "Custom",
    popular: false
  }
];

async function addServices() {
  try {
    console.log('🚀 Adding services to Firestore...\n');

    const servicesRef = doc(db, 'services', 'main');
    await setDoc(servicesRef, {
      title: 'Growth & Efficiency Systems',
      description: 'Structured systems to improve growth velocity and operational efficiency',
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
