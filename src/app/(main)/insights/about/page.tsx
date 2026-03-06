'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import Link from 'next/link';
import {
  Award,
  Target,
  Heart,
  Zap,
  ArrowLeft,
  Globe,
  Clock
} from 'lucide-react';

type AboutData = {
  title: string;
  mission?: string;
  story?: string;
  companyDescription?: string;
  values?: Array<{ title: string; description: string }>;
  stats?: Array<{ value: string; label: string }>;
};

const AboutPage = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutRes = await fetch('/api/about');
        const about = await aboutRes.json();
        setAboutData(about);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
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
      {/* Enhanced Hero Section */}
      <Hero className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 md:pt-24 pb-16">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100/60 to-pink-100/60 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-12">
            <Link href="/insights" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg">
              <Award className="w-4 h-4 mr-2" />
              About SocialMoon
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Our Mission & Vision
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Learn about our journey, values, and the passionate team behind your digital success.
            </p>
          </div>
        </Container>
      </Hero>

      {/* Enhanced About Section */}
      <Section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
        <Container>
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-10"></div>

              <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200/50 shadow-2xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-8 shadow-lg">
                    <Award className="w-10 h-10" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    {aboutData?.mission || aboutData?.companyDescription || 'Our mission is to empower brands to build authentic connections with their audience through innovative social media strategies and creative excellence.'}
                  </p>

                  {aboutData?.story && (
                    <div className="mt-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
                        {aboutData.story}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {(aboutData?.values || [
                      { title: "Strategic Excellence", description: "Data-driven strategies that deliver measurable results" },
                      { title: "Client-Centric", description: "Your success is our ultimate priority and passion" },
                      { title: "Innovation First", description: "Cutting-edge solutions for modern digital challenges" },
                      { title: "Creative Excellence", description: "Beautiful designs that capture attention and drive engagement" }
                    ]).map((value, index) => (
                      <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                          {index === 0 && <Target className="w-6 h-6" />}
                          {index === 1 && <Heart className="w-6 h-6" />}
                          {index === 2 && <Zap className="w-6 h-6" />}
                          {index === 3 && <Award className="w-6 h-6" />}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {(aboutData?.stats || [
              { value: "500+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Industries Served" },
              { value: "24/7", label: "Support Provided" }
            ]).map((stat, index) => {
              const icons = [Target, Heart, Globe, Clock];
              const colors = [
                "from-blue-500 to-indigo-500",
                "from-green-500 to-teal-500",
                "from-purple-500 to-pink-500",
                "from-orange-500 to-red-500"
              ];
              const StatIcon = icons[index % icons.length];
              const color = colors[index % colors.length];

              return (
                <div key={index} className="group relative" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className="relative text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <StatIcon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</div>
                    <div className="text-gray-600 font-medium text-base group-hover:text-blue-700 transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutPage;