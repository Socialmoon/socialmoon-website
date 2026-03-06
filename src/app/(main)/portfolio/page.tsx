'use client';

import { useEffect, useState, useRef } from 'react';
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
  CheckCircle,
  Play,
} from 'lucide-react';
import { PortfolioClient } from './PortfolioClient';
import { CategoryProjectsSection } from './CategoryProjectsSection';
import { PlatformExpertiseSection } from './PlatformExpertiseSection';
import { InstagramProjectsSection } from './InstagramProjectsSection';

const PortfolioPage = () => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const previousDataRef = useRef<string | null>(null);

  useEffect(() => {
    const fetchData = async (isPolling = false) => {
      try {
        const response = await fetch('/api/portfolio');
        const portfolioData = await response.json();

        // Use real data from database
        const enhancedContent = portfolioData;
        const contentString = JSON.stringify(enhancedContent);

        // Only update if data has changed or it's the initial load
        if (!isPolling || contentString !== previousDataRef.current) {
          setContent(enhancedContent);
          previousDataRef.current = contentString;
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        if (!isPolling) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Poll for updates every 30 seconds
    const interval = setInterval(() => fetchData(true), 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

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

      {/* Projects by Category Section */}
      <CategoryProjectsSection projects={content.projects || []} />

      {/* Platform Expertise Section */}
      <PlatformExpertiseSection />

      {/* Instagram Portfolio Section */}
      <Section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-semibold mb-6 border border-pink-200/50">
              <span className="text-lg mr-2">📸</span>
              Instagram Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Instagram Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our Instagram marketing campaigns that have delivered exceptional results for brands across industries.
            </p>
          </div>

          {/* Instagram Projects Showcase - Phone Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.projects
              ?.filter((project: any) => project.category === 'Social Media Marketing' || project.category === 'Content Creation')
              .slice(0, 6) // Show first 6 Instagram projects
              .map((project: any) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                  <div className="group cursor-pointer h-full flex justify-center">
                    {/* Phone Frame Container */}
                    <div className="relative">
                      {/* Phone Frame - Clean White Design */}
                      <div className="w-64 h-[32rem] bg-white rounded-[2.5rem] p-2 shadow-2xl border border-gray-200 relative overflow-hidden">
                        {/* Subtle Frame Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/30 rounded-[2.5rem]"></div>

                        {/* Side Buttons */}
                        <div className="absolute left-0 top-24 w-1 h-12 bg-gray-400 rounded-r-md"></div>
                        <div className="absolute left-0 top-40 w-1 h-8 bg-gray-400 rounded-r-md"></div>
                        <div className="absolute right-0 top-32 w-1 h-16 bg-gray-400 rounded-l-md"></div>

                        {/* Camera Module */}
                        <div className="absolute top-8 right-8 w-16 h-16 bg-gray-200 rounded-2xl border border-gray-300">
                          <div className="absolute top-2 left-2 w-6 h-6 bg-gray-300 rounded-full border-2 border-gray-400"></div>
                          <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 rounded-full"></div>
                          <div className="absolute bottom-2 left-2 w-3 h-3 bg-gray-500 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                        </div>

                        {/* Phone Screen */}
                        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative border border-gray-200">
                          {/* Screen Reflection */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-transparent to-transparent rounded-[2rem]"></div>

                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-white rounded-b-xl z-20 border-x border-gray-200"></div>

                          {/* Content Area */}
                          <div className="relative h-full overflow-hidden">
                            {/* Video Preview */}
                            {project.videoUrl && (
                              <video
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                muted
                                loop
                                playsInline
                                autoPlay
                              >
                                <source src={project.videoUrl} type="video/mp4" />
                              </video>
                            )}

                            {/* Fallback Image */}
                            {(!project.videoUrl && project.image) && (
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            )}

                            {/* Instagram-style Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                                      <span className="text-white text-xs">📸</span>
                                    </div>
                                    <span className="text-white font-semibold text-xs">{project.client}</span>
                                  </div>
                                  <div className="text-white/80 text-xs">
                                    ❤️ {Array.isArray(project.results) 
                                      ? project.results[0]?.split(' ').slice(0, 2).join(' ')
                                      : project.results?.split(' ').slice(0, 2).join(' ')}
                                  </div>
                                </div>

                                <h4 className="text-white font-bold text-sm mb-1">{project.title}</h4>
                                <p className="text-gray-200 text-xs line-clamp-2">{project.description}</p>

                                <div className="flex items-center justify-between mt-2">
                                  <div className="flex items-center space-x-1">
                                    <span className="text-pink-400 text-xs">#{project.category.replace(' ', '').toLowerCase()}</span>
                                  </div>
                                  <div className="text-white/60 text-xs">{project.duration}</div>
                                </div>
                              </div>
                            </div>

                            {/* Play Button for Videos */}
                            {project.videoUrl && (
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-pink-500/90 backdrop-blur-sm rounded-full p-3 border border-white/40 shadow-lg">
                                  <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Clean Phone Stand */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full opacity-60 shadow-lg"></div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-400 rounded-full opacity-40"></div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

        </Container>
      </Section>


      {/* Success Story CTA Section */}
      <Section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/60 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-8 border border-indigo-200/50">
              <Star className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Let's Start a
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Conversation
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Start with our professional services and see the difference expert management can make. Choose the package that fits your needs and let's get started today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95">
                  Book Free Consultation
                  <ArrowRight className="ml-4 h-6 w-6 transition-transform hover:scale-110" />
                </Button>
              </Link>

              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300/50 active:scale-95">
                  View Our Services
                  <Target className="ml-4 h-6 w-6 transition-transform hover:rotate-12" />
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