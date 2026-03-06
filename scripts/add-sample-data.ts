import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';

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

// Sample Blog Posts
const sampleBlogs = [
  {
    title: "The Future of Social Media Marketing in 2026",
    slug: "future-of-social-media-marketing-2026",
    excerpt: "Discover the latest trends and strategies that will shape social media marketing in the coming years.",
    content: `
# The Future of Social Media Marketing in 2026

Social media marketing continues to evolve at a rapid pace. In 2026, we're seeing unprecedented changes in how brands connect with their audiences.

## Key Trends

### 1. AI-Powered Content Creation
Artificial intelligence is revolutionizing how we create and distribute content across social platforms.

### 2. Video-First Strategy
Short-form video content continues to dominate, with platforms prioritizing video in their algorithms.

### 3. Authentic Engagement
Users are demanding more authentic, genuine interactions from brands rather than polished advertising.

## Conclusion
Staying ahead of these trends is crucial for business success in the digital age.
    `,
    author: "SocialMoon Team",
    date: "2026-03-06",
    category: "Social Media",
    tags: ["marketing", "trends", "2026", "social media"],
    imageUrl: "/images/blog/social-media-trends.jpg",
    featured: true,
    published: true
  },
  {
    title: "Instagram Growth Strategies That Actually Work",
    slug: "instagram-growth-strategies-2026",
    excerpt: "Proven tactics to grow your Instagram following and increase engagement organically.",
    content: `
# Instagram Growth Strategies That Actually Work

Growing an authentic Instagram following requires strategy, consistency, and quality content.

## Proven Strategies

### Content Quality Matters
High-quality visuals and engaging captions are the foundation of Instagram success.

### Consistent Posting Schedule
Regular posting keeps your audience engaged and helps the algorithm favor your content.

### Engaging with Your Community
Responding to comments and engaging with followers builds loyalty and trust.

### Using Reels Effectively
Instagram Reels continue to receive preferential treatment in the algorithm.

## Results
Our clients have seen 300% growth using these strategies consistently over 6 months.
    `,
    author: "Sarah Johnson",
    date: "2026-03-05",
    category: "Instagram Marketing",
    tags: ["instagram", "growth", "engagement", "strategy"],
    imageUrl: "/images/blog/instagram-growth.jpg",
    featured: false,
    published: true
  },
  {
    title: "Creating Viral Content: A Scientific Approach",
    slug: "creating-viral-content-guide",
    excerpt: "Learn the psychology and strategy behind content that spreads like wildfire on social media.",
    content: `
# Creating Viral Content: A Scientific Approach

Viral content isn't just luck—there's science and strategy behind what makes content shareable.

## The Viral Formula

### Emotional Triggers
Content that evokes strong emotions (joy, surprise, anger) is more likely to be shared.

### Timing is Everything
Publishing when your audience is most active increases initial engagement.

### Value-Driven Content
People share content that makes them look informed, funny, or helpful to their network.

### Clear Call-to-Action
Making it easy and obvious to share increases the likelihood of virality.

## Case Studies
We've helped 50+ brands create viral campaigns with millions of impressions.
    `,
    author: "Mike Chen",
    date: "2026-03-04",
    category: "Content Strategy",
    tags: ["viral", "content creation", "strategy", "engagement"],
    imageUrl: "/images/blog/viral-content.jpg",
    featured: true,
    published: true
  }
];

// Sample Portfolio Projects
const samplePortfolio = [
  {
    title: "TechStartup Inc. - Complete Brand Transformation",
    slug: "techstartup-brand-transformation",
    client: "TechStartup Inc.",
    category: "Branding",
    platform: "Instagram",
    description: "A complete social media rebrand that increased engagement by 450% in 3 months.",
    challenge: "TechStartup had minimal social presence and struggled to connect with their target audience of young professionals.",
    solution: "We developed a comprehensive content strategy, redesigned their visual identity, and implemented a consistent posting schedule across all platforms.",
    results: [
      "450% increase in engagement rate",
      "200K+ new followers in 3 months",
      "Generated $500K in sales through social channels",
      "Featured in top tech publications"
    ],
    metrics: {
      engagement: "+450%",
      followers: "200K+",
      revenue: "$500K"
    },
    imageUrl: "/images/portfolio/techstartup.jpg",
    images: [
      "/images/portfolio/techstartup-1.jpg",
      "/images/portfolio/techstartup-2.jpg",
      "/images/portfolio/techstartup-3.jpg"
    ],
    tags: ["Instagram", "Branding", "Content Strategy", "B2B"],
    featured: true,
    published: true,
    completedDate: "2026-02-15"
  },
  {
    title: "FashionBrand - Instagram Influencer Campaign",
    slug: "fashionbrand-influencer-campaign",
    client: "FashionBrand",
    category: "Influencer Marketing",
    platform: "Instagram",
    description: "Multi-influencer campaign that drove massive brand awareness and sales for a fashion retailer.",
    challenge: "FashionBrand needed to reach Gen-Z audience and compete with established fashion brands.",
    solution: "Partnered with 50+ micro-influencers for authentic content creation and product placement.",
    results: [
      "15M+ impressions across campaign",
      "80K+ new customers acquired",
      "ROI of 12:1 on influencer spend",
      "Sold out 3 product lines"
    ],
    metrics: {
      impressions: "15M+",
      customers: "80K+",
      roi: "12:1"
    },
    imageUrl: "/images/portfolio/fashionbrand.jpg",
    images: [
      "/images/portfolio/fashionbrand-1.jpg",
      "/images/portfolio/fashionbrand-2.jpg"
    ],
    tags: ["Instagram", "Influencer Marketing", "Fashion", "E-commerce"],
    featured: true,
    published: true,
    completedDate: "2026-01-20"
  },
  {
    title: "FitLife App - TikTok Growth Strategy",
    slug: "fitlife-tiktok-growth",
    client: "FitLife App",
    category: "Content Creation",
    platform: "TikTok",
    description: "Explosive TikTok growth that made FitLife a household name in fitness apps.",
    challenge: "Launching in a crowded fitness app market with limited brand recognition.",
    solution: "Created viral fitness challenges and leveraged TikTok trends to build community.",
    results: [
      "500K+ followers in 2 months",
      "50M+ video views",
      "100K+ app downloads",
      "#1 trending fitness app"
    ],
    metrics: {
      followers: "500K+",
      views: "50M+",
      downloads: "100K+"
    },
    imageUrl: "/images/portfolio/fitlife.jpg",
    images: [
      "/images/portfolio/fitlife-1.jpg",
      "/images/portfolio/fitlife-2.jpg"
    ],
    tags: ["TikTok", "Fitness", "Viral Marketing", "App Launch"],
    featured: false,
    published: true,
    completedDate: "2026-02-28"
  },
  {
    title: "LocalCafe - Community Building Campaign",
    slug: "localcafe-community-building",
    client: "LocalCafe",
    category: "Community Management",
    platform: "Instagram",
    description: "Transformed a local cafe into a community hub with engaged social following.",
    challenge: "Small local business competing with chain cafes, needed to build local loyalty.",
    solution: "User-generated content campaigns, local partnerships, and community events promoted on social.",
    results: [
      "5000+ loyal local followers",
      "Daily lines out the door",
      "Featured in local media",
      "40% increase in revenue"
    ],
    metrics: {
      followers: "5K+",
      engagement: "+320%",
      revenue: "+40%"
    },
    imageUrl: "/images/portfolio/localcafe.jpg",
    images: [
      "/images/portfolio/localcafe-1.jpg"
    ],
    tags: ["Instagram", "Local Business", "Community", "Food & Beverage"],
    featured: false,
    published: true,
    completedDate: "2025-12-10"
  }
];

// Sample Case Studies
const sampleCaseStudies = [
  {
    title: "How We Generated 10M Impressions for an E-commerce Brand",
    slug: "10m-impressions-ecommerce",
    client: "ShopElite",
    industry: "E-commerce",
    duration: "3 months",
    overview: "A comprehensive social media campaign that transformed an unknown e-commerce store into a viral sensation.",
    challenge: "ShopElite was a new e-commerce brand struggling to gain traction in a saturated market. They had minimal brand awareness and a limited marketing budget.",
    approach: `
Our strategy focused on three key areas:

1. **Content Excellence**: Created high-quality, shoppable content that showcased products in lifestyle contexts
2. **Strategic Partnerships**: Collaborated with micro and macro influencers across multiple niches
3. **Data-Driven Optimization**: Continuously analyzed performance and adjusted strategy based on insights
    `,
    execution: `
### Phase 1: Foundation (Month 1)
- Developed brand visual identity
- Created content templates and guidelines
- Launched initial influencer partnerships

### Phase 2: Scale (Month 2)
- Increased posting frequency
- Expanded influencer network
- Implemented paid social advertising

### Phase 3: Optimization (Month 3)
- Refined targeting based on performance data
- Focused on highest-performing content types
- Implemented retargeting campaigns
    `,
    results: [
      "10M+ total impressions",
      "250K+ new followers across platforms",
      "$2M+ in attributed revenue",
      "15x return on ad spend",
      "Became top 3 in product category"
    ],
    metrics: {
      impressions: "10M+",
      followers: "250K+",
      revenue: "$2M+",
      roas: "15x"
    },
    testimonial: {
      quote: "SocialMoon transformed our business. We went from unknown to industry leader in just 3 months. The ROI has been incredible.",
      author: "Jessica Martinez",
      position: "CEO, ShopElite"
    },
    imageUrl: "/images/case-studies/shopelite.jpg",
    images: [
      "/images/case-studies/shopelite-1.jpg",
      "/images/case-studies/shopelite-2.jpg",
      "/images/case-studies/shopelite-3.jpg"
    ],
    tags: ["E-commerce", "Instagram", "Influencer Marketing", "Paid Ads"],
    featured: true,
    published: true,
    completedDate: "2026-02-01"
  },
  {
    title: "SaaS Company: From Zero to 100K LinkedIn Followers",
    slug: "saas-linkedin-growth",
    client: "CloudTech Solutions",
    industry: "SaaS / B2B",
    duration: "6 months",
    overview: "Built a powerful LinkedIn presence that established CloudTech as a thought leader and generated qualified leads.",
    challenge: "CloudTech had no LinkedIn presence and struggled to reach decision-makers in their target market. Their content was too sales-focused and failed to engage.",
    approach: `
Our LinkedIn strategy emphasized:

1. **Thought Leadership**: Positioned executives as industry experts through insightful content
2. **Educational Content**: Shifted from sales to value-driven content that solved real problems
3. **Community Engagement**: Built relationships through meaningful interactions and discussions
4. **Employee Advocacy**: Empowered employees to share and amplify content
    `,
    execution: `
### Content Pillars Developed:
- Industry insights and trends analysis
- Customer success stories
- Product innovation updates
- Employee spotlights and culture
- Educational tips and best practices

### Growth Tactics:
- Daily engagement with industry leaders
- Strategic use of LinkedIn articles
- Webinar promotion and follow-up
- Consistent posting schedule (3x daily)
    `,
    results: [
      "100K+ LinkedIn followers",
      "500+ qualified leads per month",
      "5M+ content impressions",
      "40% increase in demo requests",
      "Recognized as LinkedIn Top Voice in industry"
    ],
    metrics: {
      followers: "100K+",
      leads: "500+/mo",
      impressions: "5M+",
      demos: "+40%"
    },
    testimonial: {
      quote: "The LinkedIn strategy SocialMoon developed has been a game-changer for our lead generation. We're now seen as the go-to experts in our field.",
      author: "David Park",
      position: "CMO, CloudTech Solutions"
    },
    imageUrl: "/images/case-studies/cloudtech.jpg",
    images: [
      "/images/case-studies/cloudtech-1.jpg",
      "/images/case-studies/cloudtech-2.jpg"
    ],
    tags: ["LinkedIn", "SaaS", "B2B", "Thought Leadership", "Lead Generation"],
    featured: true,
    published: true,
    completedDate: "2026-01-15"
  },
  {
    title: "Restaurant Chain: TikTok Viral Success Story",
    slug: "restaurant-tiktok-viral",
    client: "TasteBuds Grill",
    industry: "Food & Beverage",
    duration: "4 months",
    overview: "Transformed a regional restaurant chain into a viral TikTok sensation, driving massive foot traffic and sales.",
    challenge: "TasteBuds had 12 locations but struggled with declining foot traffic and fierce competition. They needed to reach younger demographics and create buzz.",
    approach: `
Our TikTok-first strategy included:

1. **Behind-the-Scenes Content**: Showcased food preparation, staff personalities, and restaurant culture
2. **Trend Participation**: Jumped on relevant TikTok trends and challenges
3. **User-Generated Content**: Encouraged customers to create content with branded hashtag
4. **Employee Advocacy**: Trained staff to create authentic TikTok content
    `,
    execution: `
### Viral Campaigns Created:
- #TasteBudsChallenge - food challenge that got 50M views
- Secret menu items revealed through TikTok
- Behind-the-scenes cooking series
- Customer reaction videos
- Staff talent showcase

### Platform Integration:
- Cross-posted to Instagram Reels
- Created YouTube Shorts compilation
- Email campaigns highlighting viral content
    `,
    results: [
      "80M+ video views",
      "300K+ TikTok followers",
      "45% increase in foot traffic",
      "60% increase in sales",
      "Expanded to 5 new locations due to demand"
    ],
    metrics: {
      views: "80M+",
      followers: "300K+",
      traffic: "+45%",
      sales: "+60%"
    },
    testimonial: {
      quote: "We couldn't believe how fast things changed. Our TikTok went viral and suddenly all our locations had lines. SocialMoon made us relevant again.",
      author: "Maria Rodriguez",
      position: "Owner, TasteBuds Grill"
    },
    imageUrl: "/images/case-studies/tastebuds.jpg",
    images: [
      "/images/case-studies/tastebuds-1.jpg",
      "/images/case-studies/tastebuds-2.jpg"
    ],
    tags: ["TikTok", "Restaurant", "Viral Marketing", "Food & Beverage"],
    featured: false,
    published: true,
    completedDate: "2025-11-30"
  }
];

async function addSampleData() {
  try {
    console.log('🚀 Starting to add sample data...\n');

    // Add Blog Posts
    console.log('📝 Adding blog posts...');
    const blogRef = doc(db, 'blog', 'main');
    await setDoc(blogRef, {
      title: 'Our Blog',
      description: 'Latest insights and trends in social media marketing',
      posts: sampleBlogs
    });
    console.log(`✅ Added ${sampleBlogs.length} blog posts\n`);

    // Add Portfolio Projects
    console.log('💼 Adding portfolio projects...');
    const portfolioRef = doc(db, 'portfolio', 'main');
    await setDoc(portfolioRef, {
      title: 'Our Portfolio',
      description: 'Showcasing our best work and client success stories',
      projects: samplePortfolio
    });
    console.log(`✅ Added ${samplePortfolio.length} portfolio projects\n`);

    // Add Case Studies
    console.log('📊 Adding case studies...');
    const caseStudiesRef = doc(db, 'caseStudies', 'main');
    await setDoc(caseStudiesRef, {
      title: 'Case Studies',
      description: 'In-depth analysis of our most successful campaigns',
      caseStudies: sampleCaseStudies
    });
    console.log(`✅ Added ${sampleCaseStudies.length} case studies\n`);

    console.log('🎉 All sample data added successfully!');
    console.log('\nSummary:');
    console.log(`- ${sampleBlogs.length} blog posts`);
    console.log(`- ${samplePortfolio.length} portfolio projects`);
    console.log(`- ${sampleCaseStudies.length} case studies`);
    
  } catch (error) {
    console.error('❌ Error adding sample data:', error);
    throw error;
  }
}

// Run the script
addSampleData()
  .then(() => {
    console.log('\n✨ Script completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Script failed:', error);
    process.exit(1);
  });
