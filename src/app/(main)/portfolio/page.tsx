import { PortfolioService } from '@/services/portfolio';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Award,
  Target,
  Star,
  Users,
  ArrowRight,
} from 'lucide-react';
import { PortfolioClient } from './PortfolioClient';

const PortfolioPage = async () => {
  // Fetch portfolio data on server
  const portfolioData = await PortfolioService.getPortfolio();

  // Add additional data to projects for enhanced display
  const enhancedProjects = portfolioData.projects.map((project: any, index: number) => ({
    ...project,
    slug: ['techcorp-social-media-transformation', 'fashion-forward-content-creation', 'startup-xyz-advertising-campaign', 'ecommerce-web-development', 'fitness-app-development', 'restaurant-brand-strategy'][index % 6],
    category: ['Social Media Marketing', 'Content Creation', 'Brand Strategy', 'Web Development', 'App Development', 'Social Media Marketing'][index % 6],
    client: ['TechCorp', 'FashionForward', 'StartupXYZ', 'ECommerce Plus', 'FitLife App', 'Restaurant Chain'][index % 6],
    results: ['300% engagement increase', '200% follower growth', '150% lead generation', '400% website traffic boost', '100,000+ app downloads', '250% brand awareness'][index % 6],
    duration: ['6 months', '4 months', '3 months', '8 months', '12 months', '5 months'][index % 6]
  }));

  const content = { ...portfolioData, projects: enhancedProjects };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <Hero className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 md:pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100/60 to-pink-100/60 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              Showcase & Success Stories
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Our Work
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our portfolio of successful digital marketing campaigns and development projects
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Projects Delivered", icon: Target },
                { number: "98%", label: "Client Satisfaction", icon: Star },
                { number: "50+", label: "Industries Served", icon: Award },
                { number: "24/7", label: "Ongoing Support", icon: Users }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Hero>

      {/* Portfolio Section */}
      <PortfolioClient content={content} />

      {/* CTA Section */}
      <Section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Let's Create Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Success Story
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Join hundreds of businesses that have transformed their digital presence with SocialMoon.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0">
                  Start Your Project
                  <ArrowRight className="ml-4 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default PortfolioPage;