'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CheckCircle, Star, Zap, Users, MessageSquare, Target, BarChart3, ArrowRight,
  Lightbulb, Trophy, Award, Clock, Rocket, Code, Smartphone,
  TrendingUp, Shield, Heart, Globe
} from 'lucide-react';

type Service = {
  id: number;
  title: string;
  description: string;
  price: number;
};

type ServicesPageContent = {
  title: string;
  services: Service[];
};

const ServicesPage = () => {
  const [content, setContent] = useState<ServicesPageContent | null>(null);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [activeView, setActiveView] = useState<'overview' | 'detail'>('overview');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => setContent(data));

    // Fetch case studies for success stories
    fetch('/api/case-studies')
      .then((res) => res.json())
      .then((data) => setCaseStudies(data.caseStudies || []));
  }, []);

  if (!content) {
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

  const serviceIcons = [Zap, Users, MessageSquare, Target, BarChart3];

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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg">
              <Zap className="w-4 h-4 mr-2" />
              Comprehensive Digital Solutions
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Our Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              From social media management to custom development, we provide comprehensive digital solutions to help your business thrive in the modern world.
            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Users, label: "Expert Team" },
                { icon: TrendingUp, label: "Proven Results" },
                { icon: Shield, label: "24/7 Support" },
                { icon: Heart, label: "Client Focused" }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-gray-900 font-semibold text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Hero>

      {/* Enhanced Toggle Section */}
      <Section className="py-12 bg-white border-b border-gray-100 shadow-sm">
        <Container>
          <div className="flex justify-center">
            <div className="bg-gray-100 p-2 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setActiveView('overview');
                    setSelectedService(null);
                  }}
                  className={`flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${
                    activeView === 'overview'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105'
                  }`}
                >
                  <Zap className="w-5 h-5 mr-3" />
                  All Services
                  <span className="ml-2 text-sm opacity-75">Overview</span>
                </button>
                {selectedService && (
                  <button
                    onClick={() => setActiveView('detail')}
                    className={`flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/50 ${
                      activeView === 'detail'
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-xl transform scale-105'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50 hover:scale-105'
                    }`}
                  >
                    <Target className="w-5 h-5 mr-3" />
                    Service Details
                    <span className="ml-2 text-sm opacity-75">{selectedService.title}</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Content Type Description */}
          <div className="text-center mt-8">
            <p className={`text-lg transition-all duration-500 ${
              activeView === 'overview'
                ? 'text-blue-700 font-medium'
                : 'text-green-700 font-medium'
            }`}>
              {activeView === 'overview'
                ? 'Explore our comprehensive range of digital services and solutions'
                : `Learn more about ${selectedService?.title} and how it can benefit your business`
              }
            </p>
          </div>
        </Container>
      </Section>

      {/* Dynamic Content Section */}
      {activeView === 'overview' ? (
        <div className="overview-content">
          {/* Premium Services Grid */}
          <Section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50">
              <Target className="w-4 h-4 mr-2" />
              Service Packages
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select the service package that best fits your business needs and start your journey to digital excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {content.services.map((service, index) => {
              const serviceIcons = [Zap, Users, MessageSquare, Target, Code, Smartphone];
              const IconComponent = serviceIcons[index] || Star;
              const gradients = [
                'from-blue-500 to-purple-600',
                'from-green-500 to-teal-600',
                'from-purple-500 to-pink-600',
                'from-orange-500 to-red-600',
                'from-indigo-500 to-blue-600',
                'from-emerald-500 to-cyan-600'
              ];
              const gradient = gradients[index] || 'from-gray-500 to-gray-600';

              // Enhanced features based on service type
              const getServiceFeatures = (serviceTitle: string) => {
                switch (serviceTitle) {
                  case 'Social Media Management':
                    return [
                      { icon: Users, text: 'Community management' },
                      { icon: BarChart3, text: 'Performance analytics' },
                      { icon: TrendingUp, text: 'Growth optimization' },
                      { icon: Clock, text: 'Monthly reporting' }
                    ];
                  case 'Content Creation':
                    return [
                      { icon: Lightbulb, text: 'Creative strategy' },
                      { icon: Code, text: 'Graphic design' },
                      { icon: MessageSquare, text: 'Copywriting' },
                      { icon: Target, text: 'Brand alignment' }
                    ];
                  case 'Social Media Advertising':
                    return [
                      { icon: Target, text: 'Audience targeting' },
                      { icon: BarChart3, text: 'Campaign tracking' },
                      { icon: TrendingUp, text: 'ROI optimization' },
                      { icon: Zap, text: 'A/B testing' }
                    ];
                  case 'Web Development':
                    return [
                      { icon: Globe, text: 'Responsive design' },
                      { icon: Rocket, text: 'Performance optimized' },
                      { icon: Shield, text: 'SEO ready' },
                      { icon: Code, text: 'Modern stack' }
                    ];
                  case 'App Development':
                    return [
                      { icon: Smartphone, text: 'Cross-platform' },
                      { icon: Code, text: 'Native performance' },
                      { icon: Lightbulb, text: 'UX focused' },
                      { icon: Shield, text: 'Secure & scalable' }
                    ];
                  default:
                    return [
                      { icon: CheckCircle, text: 'Professional service' },
                      { icon: Users, text: 'Expert team' },
                      { icon: TrendingUp, text: 'Results driven' },
                      { icon: Award, text: 'Quality guaranteed' }
                    ];
                }
              };

              const features = getServiceFeatures(service.title);

              return (
                <div key={service.id} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Premium glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                    {/* Service header with gradient */}
                    <div className={`bg-gradient-to-r ${gradient} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative flex items-center justify-between mb-4">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold">${service.price}</div>
                          <div className="text-sm opacity-90">per month</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 leading-tight">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features list */}
                    <div className="p-6">
                      <div className="space-y-4 mb-8">
                        {features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3 group/feature">
                            <div className="p-2 bg-gray-100 rounded-lg group-hover/feature:bg-blue-100 transition-colors duration-300">
                              <feature.icon className="w-4 h-4 text-gray-600 group-hover/feature:text-blue-600 transition-colors duration-300" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r ${gradient} text-white border-0 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50`}
                        onClick={() => window.open('/contact', '_self')}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>

                      {/* Learn More Button */}
                      <Button
                        variant="outline"
                        className="w-full mt-3 py-3 text-base font-semibold rounded-2xl border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50 active:scale-95"
                        onClick={() => {
                          setSelectedService(service);
                          setActiveView('detail');
                        }}
                      >
                        Learn More
                        <Target className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
        </div>
      ) : selectedService && activeView === 'detail' ? (
        <Section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Service Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200/50">
                  <Target className="w-4 h-4 mr-2" />
                  Service Details
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  {selectedService.title}
                </h1>

                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                  {selectedService.description}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200/50 shadow-lg">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">${selectedService.price}</div>
                      <div className="text-gray-600">per month</div>
                    </div>
                    <div className="h-16 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                    <div className="h-16 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">30</div>
                      <div className="text-gray-600">Day Setup</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Features */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h3>
                  <div className="space-y-6">
                    {(() => {
                      const serviceIcons = [Zap, Users, MessageSquare, Target, Code, Smartphone];
                      const IconComponent = serviceIcons[selectedService.id - 1] || Star;
                      const gradients = [
                        'from-blue-500 to-purple-600',
                        'from-green-500 to-teal-600',
                        'from-purple-500 to-pink-600',
                        'from-orange-500 to-red-600',
                        'from-indigo-500 to-blue-600',
                        'from-emerald-500 to-cyan-600'
                      ];
                      const gradient = gradients[selectedService.id - 1] || 'from-gray-500 to-gray-600';
                      const features = (() => {
                        switch (selectedService.title) {
                          case 'Social Media Management':
                            return [
                              { icon: Users, title: 'Community Management', desc: '24/7 monitoring and engagement with your audience' },
                              { icon: BarChart3, title: 'Performance Analytics', desc: 'Detailed monthly reports and insights' },
                              { icon: TrendingUp, title: 'Growth Optimization', desc: 'Strategic content and posting schedules' },
                              { icon: Clock, title: 'Content Calendar', desc: 'Monthly content planning and execution' },
                              { icon: MessageSquare, title: 'Crisis Management', desc: 'Professional handling of negative feedback' },
                              { icon: Target, title: 'Competitor Analysis', desc: 'Regular competitor monitoring and insights' }
                            ];
                          case 'Content Creation':
                            return [
                              { icon: Lightbulb, title: 'Creative Strategy', desc: 'Brand-aligned content strategy development' },
                              { icon: Code, title: 'Graphic Design', desc: 'Professional visuals and graphics creation' },
                              { icon: MessageSquare, title: 'Copywriting', desc: 'Compelling copy that converts' },
                              { icon: Target, title: 'Brand Consistency', desc: 'Maintaining brand voice across platforms' },
                              { icon: Smartphone, title: 'Multi-Format Content', desc: 'Stories, reels, posts, and more' },
                              { icon: TrendingUp, title: 'Trend Research', desc: 'Staying current with platform trends' }
                            ];
                          case 'Social Media Advertising':
                            return [
                              { icon: Target, title: 'Audience Targeting', desc: 'Precise demographic and interest targeting' },
                              { icon: BarChart3, title: 'Campaign Tracking', desc: 'Real-time performance monitoring' },
                              { icon: TrendingUp, title: 'ROI Optimization', desc: 'Maximizing return on ad spend' },
                              { icon: Zap, title: 'A/B Testing', desc: 'Creative and audience testing' },
                              { icon: Users, title: 'Lookalike Audiences', desc: 'Finding similar high-value customers' },
                              { icon: Clock, title: 'Bid Management', desc: 'Dynamic bidding strategy optimization' }
                            ];
                          case 'Web Development':
                            return [
                              { icon: Globe, title: 'Responsive Design', desc: 'Perfect display on all devices' },
                              { icon: Rocket, title: 'Performance Optimization', desc: 'Fast loading and smooth experience' },
                              { icon: Shield, title: 'SEO Foundation', desc: 'Built for search engine success' },
                              { icon: Code, title: 'Modern Tech Stack', desc: 'Latest frameworks and technologies' },
                              { icon: Users, title: 'User Experience', desc: 'Intuitive and engaging interface' },
                              { icon: Target, title: 'Conversion Focused', desc: 'Designed to drive business results' }
                            ];
                          case 'App Development':
                            return [
                              { icon: Smartphone, title: 'Cross-Platform', desc: 'iOS, Android, and web compatibility' },
                              { icon: Code, title: 'Native Performance', desc: 'Optimized for each platform' },
                              { icon: Lightbulb, title: 'UX/UI Design', desc: 'Beautiful and intuitive interface' },
                              { icon: Shield, title: 'Security First', desc: 'Enterprise-grade security measures' },
                              { icon: Rocket, title: 'Scalable Architecture', desc: 'Built to grow with your business' },
                              { icon: TrendingUp, title: 'App Store Success', desc: 'Optimized for app store approval' }
                            ];
                          default:
                            return [
                              { icon: CheckCircle, title: 'Professional Service', desc: 'Expert execution and delivery' },
                              { icon: Users, title: 'Dedicated Team', desc: 'Personal account management' },
                              { icon: TrendingUp, title: 'Results Driven', desc: 'Focused on measurable outcomes' },
                              { icon: Award, title: 'Quality Guaranteed', desc: 'High standards and satisfaction' },
                              { icon: Clock, title: 'Timely Delivery', desc: 'On-time project completion' },
                              { icon: Target, title: 'Strategic Approach', desc: 'Data-informed decision making' }
                            ];
                        }
                      })();

                      return features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${gradient} text-white shadow-lg`}>
                            <feature.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      ));
                    })()}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose This Service</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-green-900 mb-2">Measurable Results</h4>
                          <p className="text-green-800">Track your success with detailed analytics and reporting that shows real business impact.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-900 mb-2">Expert Team</h4>
                          <p className="text-blue-800">Work with certified professionals who stay current with the latest digital marketing trends.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Shield className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-900 mb-2">Risk-Free Guarantee</h4>
                          <p className="text-purple-800">30-day money-back guarantee. If you're not satisfied, we'll make it right.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-orange-900 mb-2">Quick Setup</h4>
                          <p className="text-orange-800">Get started within 48 hours with our streamlined onboarding process.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Navigation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50 active:scale-95"
                  onClick={() => {
                    const currentIndex = content?.services.findIndex(s => s.id === selectedService.id) || 0;
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : content!.services.length - 1;
                    setSelectedService(content!.services[prevIndex]);
                  }}
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180 transition-transform hover:-translate-x-1" />
                  Previous Service
                </Button>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95"
                  onClick={() => window.open('/contact', '_self')}
                >
                  Get Started Today
                  <Zap className="ml-3 h-6 w-6 transition-transform hover:rotate-12" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50 active:scale-95"
                  onClick={() => {
                    const currentIndex = content?.services.findIndex(s => s.id === selectedService.id) || 0;
                    const nextIndex = currentIndex < content!.services.length - 1 ? currentIndex + 1 : 0;
                    setSelectedService(content!.services[nextIndex]);
                  }}
                >
                  Next Service
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Why Choose Us Section */}
      <Section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200/50">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Excellence You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine expertise, technology, and creativity to deliver exceptional results for your social media presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified social media professionals with years of industry experience",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Average 300% engagement increase across all our client campaigns",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: Shield,
                title: "24/7 Support",
                description: "Round-the-clock assistance and monitoring for your peace of mind",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Target,
                title: "Custom Strategy",
                description: "Tailored solutions designed specifically for your brand goals",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Instagram Showcase Section */}
      <Section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-semibold mb-6 border border-pink-200/50">
              <span className="text-lg mr-2">📸</span>
              Instagram Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Instagram Marketing Mastery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your Instagram presence with our proven strategies for growth, engagement, and conversion.
            </p>
          </div>

          {/* Instagram Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "2.5M+", label: "Followers Gained", icon: "👥" },
              { number: "85%", label: "Engagement Boost", icon: "❤️" },
              { number: "500K+", label: "Stories Views", icon: "👁️" },
              { number: "95%", label: "Client Satisfaction", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Instagram Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                service: 'Content Strategy',
                icon: '🎯',
                title: 'Strategic Content Planning',
                description: 'Data-driven content calendars that align with your brand and maximize audience engagement.',
                features: ['Audience Analysis', 'Content Calendar', 'Brand Alignment', 'Performance Tracking']
              },
              {
                service: 'Visual Design',
                icon: '🎨',
                title: 'Stunning Visual Content',
                description: 'Eye-catching graphics, stories, and reels that stop the scroll and drive interaction.',
                features: ['Custom Graphics', 'Story Design', 'Reel Production', 'Brand Aesthetics']
              },
              {
                service: 'Growth Hacking',
                icon: '🚀',
                title: 'Accelerated Growth',
                description: 'Proven tactics to rapidly increase followers, engagement, and reach organically.',
                features: ['Hashtag Strategy', 'Engagement Tactics', 'Influencer Partnerships', 'Algorithm Optimization']
              }
            ].map((item, index) => (
              <div key={item.service} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 text-white text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href="/contact?service=instagram">
                      <Button
                        className="w-full py-3 text-sm font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-lg hover:shadow-xl"
                      >
                        Get Instagram Strategy
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-200/50 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Dominate Instagram?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join hundreds of brands that have transformed their Instagram presence with our expert strategies and creative content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact?service=instagram">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    Start Instagram Growth
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    View Instagram Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Success Stories Section */}
      <Section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-100/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 text-sm font-semibold mb-6 border border-green-200/50">
              <Trophy className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-900 to-teal-900 bg-clip-text text-transparent">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our services have transformed businesses across all industries and service types.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`absolute -inset-2 bg-gradient-to-r ${
                  index === 0
                    ? 'from-blue-600 via-purple-600 to-pink-600'
                    : 'from-green-600 via-teal-600 to-blue-600'
                } rounded-3xl blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-700`}></div>

                <div className="relative bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden rounded-3xl">
                  <div className={`h-2 bg-gradient-to-r ${
                    index === 0
                      ? 'from-blue-500 via-purple-500 to-pink-500'
                      : 'from-green-500 via-teal-500 to-blue-500'
                  }`}></div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-2xl ${
                          index === 0
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-green-100 text-green-600'
                        } shadow-lg`}>
                          <BarChart3 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
                          <p className="text-gray-600">{study.industry}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        index === 0
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {study.service}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">{study.results}</div>
                      <div className="text-gray-600">in {study.duration}</div>
                    </div>

                    <p className="text-gray-700 italic text-lg leading-relaxed mb-6">"{study.testimonial}"</p>

                    <Link href={`/case-studies/${study.slug}`}>
                      <Button variant="outline" size="lg" className="w-full group/btn border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-500 py-4 rounded-2xl">
                        <span className="font-bold">View Full Case Study</span>
                        <ArrowRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="py-32 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200/50">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              How We Deliver Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven methodology ensures consistent, exceptional results across all projects and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Strategy & Audit",
                description: "We analyze your current digital presence and develop a customized strategy.",
                icon: Target,
                color: "from-blue-500 to-indigo-500"
              },
              {
                step: "02",
                title: "Content Creation",
                description: "Our team creates engaging, brand-consistent content tailored to your audience.",
                icon: Lightbulb,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute campaigns and manage all aspects of your digital presence.",
                icon: Rocket,
                color: "from-green-500 to-teal-500"
              },
              {
                step: "04",
                title: "Analytics & Growth",
                description: "Track performance, optimize strategies, and drive continuous growth.",
                icon: BarChart3,
                color: "from-orange-500 to-red-500"
              }
            ].map((process, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={`absolute -inset-1 bg-gradient-to-r ${process.color} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${process.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <process.icon className="w-10 h-10" />
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${process.color} text-white text-sm font-bold mb-4`}>
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50">
              <MessageSquare className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Service Questions Answered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Common questions about our social media services and digital solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to see results?",
                answer: "Most clients see initial improvements within 2-4 weeks. Significant growth and engagement increases typically occur within 2-3 months of consistent management."
              },
              {
                question: "Do you work with all industries?",
                answer: "Yes! We have experience across industries including technology, retail, healthcare, professional services, and more. We adapt our strategies to fit your industry and target audience."
              },
              {
                question: "What technologies do you use for web development?",
                answer: "We use modern technologies like React, Next.js, Node.js, and various CMS platforms. All websites are responsive, SEO-optimized, and built with performance in mind."
              },
              {
                question: "Do you develop both iOS and Android apps?",
                answer: "Yes, we develop native apps for both iOS and Android, as well as cross-platform solutions using React Native and Flutter for cost-effective development."
              },
              {
                question: "Can I pause or cancel my service anytime?",
                answer: "Absolutely. We offer flexible month-to-month agreements with no long-term contracts. You can pause, modify, or cancel your service at any time."
              },
              {
                question: "Do you provide maintenance and support after project completion?",
                answer: "Absolutely! We offer ongoing maintenance, updates, and support packages to ensure your website or app stays current and performs optimally."
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
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
              <Rocket className="w-4 h-4 mr-2" />
              Ready to Elevate Your Digital Presence?
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Let's Build Your
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Success Story
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Start with our professional services and see the difference expert management can make. Choose the package that fits your needs and let's get started today.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "30", label: "Day Setup" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95">
                  Book Free Consultation
                  <MessageSquare className="ml-4 h-6 w-6 transition-transform hover:scale-110" />
                </Button>
              </Link>

              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300/50 active:scale-95">
                  View Our Portfolio
                  <ArrowRight className="ml-4 h-6 w-6 transition-transform hover:translate-x-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ServicesPage;