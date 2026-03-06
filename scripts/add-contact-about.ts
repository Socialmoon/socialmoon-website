import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk9tHq0pjgtdtlcoFEH9_TMpgYtO6-vgY",
  authDomain: "socialmoon-new-website.firebaseapp.com",
  projectId: "socialmoon-new-website",
  storageBucket: "socialmoon-new-website.firebasestorage.app",
  messagingSenderId: "39318295155",
  appId: "1:39318295155:web:a496e8b045b1ed2deed006",
  measurementId: "G-FXMS60V8WS"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const contactContent = {
  title: "Get in Touch",
  subtitle: "Let's discuss how we can help your business grow",
  contactInfo: {
    email: "contact@socialmoon.in",
    phone: "+91 9118439107",
    whatsapp: "+91 9118439107",
    address: "Lucknow, Uttar Pradesh, India"
  },
  officeHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM IST",
    weekends: "Saturday: 10:00 AM - 4:00 PM IST",
    closed: "Sunday: Closed"
  },
  socialMedia: {
    instagram: "https://www.instagram.com/the_social_moon_",
    linkedin: "https://www.linkedin.com/company/socialmoon1/",
    twitter: "https://x.com/the_social_moon",
    facebook: "https://www.facebook.com/profile.php?id=61580131888044"
  }
};

const aboutContent = {
  title: "About SocialMoon",
  mission: "Our mission is to empower brands to build authentic connections with their audience through innovative social media strategies and creative excellence.",
  story: `Founded in 2020, SocialMoon has grown from a small team of passionate social media enthusiasts to a full-service digital marketing agency. We've helped over 200 brands achieve remarkable growth on social media, generating over 500 million impressions and driving real business results.

Our approach combines data-driven strategy with creative storytelling to create campaigns that not only look great but deliver measurable ROI. We believe in building long-term partnerships with our clients, understanding their unique challenges, and developing customized solutions that drive sustained growth.`,
  
  values: [
    {
      title: "Creativity First",
      description: "We believe great creative work is the foundation of successful social media marketing."
    },
    {
      title: "Data-Driven",
      description: "Every decision we make is backed by data and insights to ensure optimal results."
    },
    {
      title: "Client-Focused",
      description: "Your success is our success. We're committed to delivering exceptional results for every client."
    },
    {
      title: "Innovation",
      description: "We stay ahead of trends and continuously evolve our strategies to maintain competitive advantage."
    }
  ],
  
  team: [
    {
      name: "Shashikant",
      position: "Founder & Chief Executive Officer",
      bio: "Visionary leader driving Social Moon's mission to transform brands through innovative social media strategies and digital excellence.",
      image: ""
    },
    {
      name: "Avinash Gautam",
      position: "Co-Founder & Chief Operating Officer",
      bio: "Strategic operations expert ensuring seamless execution and delivery of exceptional results for every client partnership.",
      image: ""
    },
    {
      name: "Vaibhav Kumar",
      position: "Co-Founder & Chief Technology Officer",
      bio: "Technology visionary building cutting-edge solutions and driving innovation in digital marketing technology.",
      image: ""
    }
  ],
  
  stats: [
    { value: "200+", label: "Clients Served" },
    { value: "500M+", label: "Impressions Generated" },
    { value: "98%", label: "Client Retention" },
    { value: "15x", label: "Average ROI" }
  ]
};

async function addContactAndAbout() {
  try {
    console.log('🚀 Adding contact and about page content...\n');

    // Add contact page content
    console.log('📧 Adding contact page content...');
    const contactRef = doc(db, 'contact', 'main');
    await setDoc(contactRef, contactContent);
    console.log('✅ Contact page content added\n');

    // Add about page content
    console.log('👥 Adding about page content...');
    const aboutRef = doc(db, 'about', 'main');
    await setDoc(aboutRef, aboutContent);
    console.log('✅ About page content added\n');

    console.log('Summary:');
    console.log(`  • Contact info with email, phone, and address`);
    console.log(`  • Office hours information`);
    console.log(`  • Social media links`);
    console.log(`  • Company mission and story`);
    console.log(`  • ${aboutContent.values.length} core values`);
    console.log(`  • ${aboutContent.team.length} team members`);
    console.log(`  • ${aboutContent.stats.length} key statistics`);
    
  } catch (error) {
    console.error('❌ Error adding content:', error);
    throw error;
  }
}

// Run the script
addContactAndAbout()
  .then(() => {
    console.log('\n✨ Contact and About content added successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Script failed:', error);
    process.exit(1);
  });
