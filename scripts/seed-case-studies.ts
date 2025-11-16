import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { CaseStudiesService } from '../src/services/case-studies';

const seedCaseStudies = async () => {
  const caseStudiesData = [
    {
      id: '1',
      slug: 'e-commerce-platform-optimization',
      title: 'E-Commerce Platform Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-Commerce',
      service: 'Web Development',
      duration: '3 months',
      results: 'Increased conversion rate by 45% and reduced page load time by 60%',
      challenge: 'The client\'s e-commerce platform was experiencing slow load times and low conversion rates, leading to lost sales and frustrated customers.',
      solution: 'Implemented performance optimizations including image compression, lazy loading, and database query improvements. Redesigned the checkout flow for better user experience.',
      approach: [
        'Conducted comprehensive performance audit',
        'Implemented caching strategies and CDN',
        'Optimized database queries and indexing',
        'Redesigned user interface for better conversion'
      ],
      metrics: [
        {
          before: '2.5% conversion rate',
          after: '3.625% conversion rate',
          improvement: '+45% increase'
        },
        {
          before: '4.2 seconds load time',
          after: '1.68 seconds load time',
          improvement: '-60% faster'
        }
      ],
      testimonial: 'The optimization work transformed our online presence. Sales have increased significantly and our customers are much happier with the faster experience.',
      clientName: 'Sarah Johnson',
      clientPosition: 'CEO',
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
      ]
    },
    {
      id: '2',
      slug: 'mobile-app-development-startup',
      title: 'Mobile App Development for Startup',
      company: 'FitLife Apps',
      industry: 'Health & Fitness',
      service: 'Mobile Development',
      duration: '4 months',
      results: 'Launched successful fitness tracking app with 10,000+ downloads in first month',
      challenge: 'A fitness startup needed a comprehensive mobile app to track workouts, nutrition, and provide personalized coaching.',
      solution: 'Developed a cross-platform mobile app using React Native with integrated AI-powered workout recommendations and nutrition tracking.',
      approach: [
        'Requirements gathering and user research',
        'UI/UX design with focus on user engagement',
        'Backend API development with Node.js',
        'Mobile app development with React Native',
        'Integration with wearables and health APIs'
      ],
      metrics: [
        {
          before: 'No mobile presence',
          after: '10,000+ app downloads',
          improvement: 'New market entry'
        },
        {
          before: 'N/A',
          after: '4.8 star rating',
          improvement: 'High user satisfaction'
        }
      ],
      testimonial: 'The app exceeded our expectations. Our users love the intuitive interface and the AI recommendations have been a game-changer for user engagement.',
      clientName: 'Mike Chen',
      clientPosition: 'Founder',
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
      ]
    },
    {
      id: '3',
      slug: 'digital-marketing-campaign-agency',
      title: 'Digital Marketing Campaign for Agency',
      company: 'BrandBoost Marketing',
      industry: 'Marketing',
      service: 'Digital Marketing',
      duration: '6 months',
      results: 'Achieved 300% increase in qualified leads and 150% growth in revenue',
      challenge: 'A marketing agency needed to establish their online presence and generate high-quality leads in a competitive market.',
      solution: 'Developed comprehensive digital marketing strategy including SEO, content marketing, social media campaigns, and paid advertising.',
      approach: [
        'Market research and competitor analysis',
        'SEO audit and optimization',
        'Content strategy development',
        'Social media campaign planning',
        'PPC campaign setup and management',
        'Analytics and reporting system implementation'
      ],
      metrics: [
        {
          before: '50 qualified leads/month',
          after: '200 qualified leads/month',
          improvement: '+300% increase'
        },
        {
          before: '$50K monthly revenue',
          after: '$125K monthly revenue',
          improvement: '+150% growth'
        }
      ],
      testimonial: 'The digital marketing campaign completely transformed our business. We\'re now generating more leads than we can handle and our revenue has skyrocketed.',
      clientName: 'Emily Rodriguez',
      clientPosition: 'Marketing Director',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800'
      ]
    }
  ];

  try {
    console.log('🌱 Starting case studies seeding...');

    for (const caseStudy of caseStudiesData) {
      console.log(`Creating case study: ${caseStudy.title}`);
      await CaseStudiesService.createCaseStudy(caseStudy as any);
    }

    console.log('✅ Case studies seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding case studies:', error);
    process.exit(1);
  }
};

// Run the seeding function
seedCaseStudies().then(() => {
  console.log('🎉 Seeding process finished.');
  process.exit(0);
}).catch((error) => {
  console.error('💥 Seeding failed:', error);
  process.exit(1);
});