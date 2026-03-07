'use client';

import { useEffect, useState, useRef } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CheckCircle, Star, Zap, Users, MessageSquare, Target, BarChart3, ArrowRight,
  Lightbulb, Trophy, Award, Clock, Rocket, Code, Smartphone,
  TrendingUp, Shield, Heart, Globe,
  Video, Megaphone, PieChart, UserCheck, BrainCircuit, Search, Mail
} from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const getServiceIcon = (title: string): { type: 'lucide' | 'brand'; icon: any } => {
  const t = title.toLowerCase();
  if (t.includes('instagram')) return { type: 'brand', icon: FaInstagram };
  if (t.includes('linkedin')) return { type: 'brand', icon: FaLinkedin };
  if (t.includes('tiktok')) return { type: 'brand', icon: FaTiktok };
  if (t.includes('youtube')) return { type: 'brand', icon: FaYoutube };
  if (t.includes('facebook')) return { type: 'brand', icon: FaFacebook };
  if (t.includes('twitter') || t.includes('x ')) return { type: 'brand', icon: FaTwitter };
  if (t.includes('whatsapp')) return { type: 'brand', icon: FaWhatsapp };
  if (t.includes('influencer')) return { type: 'lucide', icon: UserCheck };
  if (t.includes('paid') || t.includes('ads') || t.includes('advertising')) return { type: 'lucide', icon: Megaphone };
  if (t.includes('content') || t.includes('creation')) return { type: 'lucide', icon: Zap };
  if (t.includes('community') || t.includes('management')) return { type: 'lucide', icon: Users };
  if (t.includes('analytics') || t.includes('reporting')) return { type: 'lucide', icon: PieChart };
  if (t.includes('strategy') || t.includes('consulting')) return { type: 'lucide', icon: BrainCircuit };
  if (t.includes('seo') || t.includes('search')) return { type: 'lucide', icon: Search };
  if (t.includes('email')) return { type: 'lucide', icon: Mail };
  if (t.includes('growth')) return { type: 'lucide', icon: TrendingUp };
  if (t.includes('brand')) return { type: 'lucide', icon: Globe };
  if (t.includes('video') || t.includes('reel') || t.includes('viral')) return { type: 'lucide', icon: Video };
  return { type: 'lucide', icon: Rocket };
};

const ServiceIcon = ({ title, className }: { title: string; className?: string }) => {
  const { type, icon: Icon } = getServiceIcon(title);
  return <Icon className={className} />;
};

type Service = {
  id: number;
  title: string;
  description: string;
  price: string | number;
  icon?: string;
  popular?: boolean;
  features?: string[];
};

type ServicesPageContent = {
  title: string;
  services: Service[];
};

const ServicesPage = () => {
  const [content, setContent] = useState<ServicesPageContent | null>(null);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<'overview' | 'detail' | 'pricing'>('overview');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const previousDataRef = useRef<string | null>(null);

  useEffect(() => {
    const fetchData = async (isPolling = false) => {
      try {
        const servicesRes = await fetch('/api/services');
        const services = await servicesRes.json();
        
        // Even if status is not OK, the API returns valid structure with default data
        // Only update if data has changed or it's the initial load
        if (!isPolling || JSON.stringify(services) !== previousDataRef.current) {
          // Validate that we have valid services data
          if (services && services.title && Array.isArray(services.services)) {
            setContent(services);
            previousDataRef.current = JSON.stringify(services);
          } else if (!isPolling) {
            // Set default content if data structure is invalid
            setContent({
              title: 'Our Services',
              services: []
            });
          }
        }

        // Also fetch case studies if not polling or if we need to refresh
        if (!isPolling) {
          try {
            const caseStudiesRes = await fetch('/api/case-studies');
            const caseStudiesData = await caseStudiesRes.json();
            setCaseStudies(caseStudiesData.caseStudies || []);
          } catch (error) {
            console.error('Error fetching case studies:', error);
            setCaseStudies([]);
          }
        }
      } catch (error) {
        console.error('Error fetching services data:', error);
        if (!isPolling) {
          // Set default content on error
          setContent({
            title: 'Our Services',
            services: []
          });
        }
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

  // serviceIcons resolved per service title via getServiceIcon()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <Hero className="relative overflow-hidden bg-white pt-10 pb-12 md:pt-16 md:pb-16">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left — Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                <Zap className="w-4 h-4" />
                Comprehensive Digital Solutions
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Services that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 pb-1 inline-block">
                  drive growth.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                From social media management to content creation and paid ads — we deliver end-to-end digital marketing that gets real results for your brand.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                {[
                  { value: '50+', label: 'Clients Served' },
                  { value: '3x', label: 'Avg. Engagement Growth' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-5 text-base font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
                  onClick={() => window.open('/contact', '_self')}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-50 px-7 py-5 text-base font-semibold rounded-xl transition-all"
                  onClick={() => window.open('/portfolio', '_self')}
                >
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Right — Service cards grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, title: 'Social Media Management', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
                { icon: Target, title: 'Paid Ads & Campaigns', color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50' },
                { icon: MessageSquare, title: 'Content Creation', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50' },
                { icon: BarChart3, title: 'Analytics & Strategy', color: 'from-green-500 to-teal-500', bg: 'bg-green-50' },
                { icon: Globe, title: 'Brand Building', color: 'from-orange-500 to-amber-500', bg: 'bg-orange-50' },
                { icon: Rocket, title: 'Growth Marketing', color: 'from-indigo-500 to-violet-500', bg: 'bg-indigo-50' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group ${i === 4 ? 'col-span-1' : ''} ${item.bg} rounded-2xl p-5 border border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default`}
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 leading-snug">{item.title}</p>
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
            <div className="bg-gray-100 p-2 rounded-2xl shadow-lg border border-gray-200 w-full max-w-fit">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => {
                    setActiveView('overview');
                    setSelectedService(null);
                  }}
                  className={`flex items-center px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${
                    activeView === 'overview'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105'
                  }`}
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  All Services
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm opacity-75">Overview</span>
                </button>
                {/* Pricing tab — temporarily hidden
                <button
                  onClick={() => setActiveView('pricing')}
                  className={`flex items-center px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-500/50 ${
                    activeView === 'pricing'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50 hover:scale-105'
                  }`}
                >
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Pricing
                </button>
                */}
                {selectedService && (
                  <button
                    onClick={() => setActiveView('detail')}
                    className={`flex items-center px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/50 ${
                      activeView === 'detail'
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-xl transform scale-105'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50 hover:scale-105'
                    }`}
                  >
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Service Details
                    <span className="ml-1 sm:ml-2 text-xs sm:text-sm opacity-75 max-w-[120px] sm:max-w-none truncate">{selectedService.title}</span>
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
                : activeView === 'pricing'
                ? 'text-amber-600 font-medium'
                : 'text-green-700 font-medium'
            }`}>
              {activeView === 'overview'
                ? 'Explore our comprehensive range of digital services and solutions'
                : activeView === 'pricing'
                ? 'Choose a plan that fits your goals — start free, scale anytime'
                : `Learn more about ${selectedService?.title} and how it can benefit your business`
              }
            </p>
          </div>
        </Container>
      </Section>

      {/* Dynamic Content Section */}
      {activeView === 'overview' ? (
        <div className="overview-content">
          {/* Services Grid */}
          <Section className="py-16 md:py-20 bg-white">
            <Container>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
                  <Target className="w-4 h-4" />
                  Service Packages
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 pb-1">
                  Choose Your Perfect{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Package</span>
                </h2>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                  Flexible plans designed to grow with you — from startups to established brands.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {content.services?.map((service, index) => {
                  const palettes = [
                    { gradient: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', border: 'border-blue-100', ring: 'ring-blue-500' },
                    { gradient: 'from-purple-500 to-pink-600', light: 'bg-purple-50', border: 'border-purple-100', ring: 'ring-purple-500' },
                    { gradient: 'from-green-500 to-teal-600', light: 'bg-green-50', border: 'border-green-100', ring: 'ring-green-500' },
                    { gradient: 'from-orange-500 to-amber-600', light: 'bg-orange-50', border: 'border-orange-100', ring: 'ring-orange-500' },
                    { gradient: 'from-indigo-500 to-violet-600', light: 'bg-indigo-50', border: 'border-indigo-100', ring: 'ring-indigo-500' },
                    { gradient: 'from-cyan-500 to-blue-600', light: 'bg-cyan-50', border: 'border-cyan-100', ring: 'ring-cyan-500' },
                  ];
                  const palette = palettes[index % 6];
                  const isPopular = service.popular || index === 1;

                  const serviceFeatures = service.features || [
                    'Professional service delivery',
                    'Dedicated account manager',
                    'Monthly progress reports',
                    'Priority support',
                    'Flexible scheduling',
                  ];

                  return (
                    <div key={service.id} className={`group relative flex flex-col bg-white rounded-3xl border ${palette.border} shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden`}>

                      {/* Popular badge */}
                      {isPopular && (
                        <div className={`absolute top-4 right-4 z-10 bg-gradient-to-r ${palette.gradient} text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg`}>
                          <Star className="w-3 h-3 fill-white" />
                          POPULAR
                        </div>
                      )}

                      {/* Card top — icon + title */}
                      <div className={`p-6 ${palette.light} border-b ${palette.border}`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${palette.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <ServiceIcon title={service.title} className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">{service.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                      </div>

                      {/* Price */}
                      <div className="px-6 py-4 border-b border-gray-100 flex items-baseline gap-1">
                        <span className="text-gray-400 text-sm">Starting from</span>
                        <span className={`text-2xl font-extrabold bg-gradient-to-r ${palette.gradient} bg-clip-text text-transparent ml-1`}>
                          {service.price}
                        </span>
                        {service.price && !(typeof service.price === 'string' && service.price.includes('$')) && (
                          <span className="text-gray-400 text-sm">/mo</span>
                        )}
                      </div>

                      {/* Features */}
                      <div className="px-6 py-5 flex-grow space-y-3">
                        {serviceFeatures.slice(0, 5).map((feature: string, fi: number) => (
                          <div key={fi} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${palette.gradient} flex items-center justify-center mt-0.5`}>
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="px-6 pb-6 pt-2 space-y-2 mt-auto">
                        <Button
                          className={`w-full py-5 text-sm font-bold rounded-xl bg-gradient-to-r ${palette.gradient} text-white border-0 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200`}
                          onClick={() => window.open('/contact', '_self')}
                        >
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className={`w-full py-4 text-sm font-semibold rounded-xl border ${palette.border} text-gray-600 hover:${palette.light} transition-all duration-200`}
                          onClick={() => {
                            setSelectedService(service);
                            setActiveView('detail');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          View Details
                        </Button>
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

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  {selectedService.title}
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                  {selectedService.description}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 border border-blue-200/50 shadow-lg">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">Starting from ${selectedService.price}/month</div>
                    </div>
                    <div className="hidden sm:block h-16 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                    <div className="hidden sm:block h-16 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">30</div>
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
      ) : activeView === 'pricing' ? (
        <Section className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-6 border border-amber-200">
                  <Award className="w-4 h-4 mr-2" />
                  Simple Pricing
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-amber-800 to-orange-800 bg-clip-text text-transparent">
                  Plans for every stage
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Start free with any one basic service — no credit card needed. See real results before you commit.
                </p>
              </div>

              {/* Free trial banner */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 sm:p-8 text-white mb-10 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-9 h-9 text-white" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xl font-bold mb-1">Try one basic service for free</p>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Pick any single service from our catalogue and run it at no cost. Experience the quality of our work firsthand — upgrade anytime.
                  </p>
                </div>
                <button
                  onClick={() => window.open('/contact', '_self')}
                  className="flex-shrink-0 px-8 py-3 rounded-xl bg-white text-green-700 font-bold text-sm hover:bg-green-50 transition shadow-lg whitespace-nowrap"
                >
                  Claim Free Trial
                </button>
              </div>

              {/* Plan cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Basic',
                    price: 'Free',
                    sub: '14-day trial · 1 service',
                    gradient: 'from-gray-500 to-gray-600',
                    bg: 'bg-white',
                    border: 'border-gray-200',
                    badge: null,
                    perks: [
                      '1 social media platform',
                      '4 posts per month',
                      'Basic performance report',
                      'Email support',
                    ],
                    missing: ['Dedicated account manager', 'Custom strategy', 'Priority support'],
                    cta: 'Start Free',
                    ctaStyle: 'border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50',
                  },
                  {
                    name: 'Standard',
                    price: 'From $10',
                    sub: 'per month',
                    gradient: 'from-blue-600 to-indigo-600',
                    bg: 'bg-gradient-to-b from-blue-600 to-indigo-700',
                    border: 'border-blue-500',
                    badge: 'MOST POPULAR',
                    perks: [
                      '3 social media platforms',
                      'Up to 20 posts per month',
                      'Monthly analytics report',
                      'Dedicated account manager',
                      'Content calendar',
                      'Chat & email support',
                    ],
                    missing: [],
                    cta: 'Get Started',
                    ctaStyle: 'bg-white text-blue-700 hover:bg-blue-50 font-bold shadow-lg',
                  },
                  {
                    name: 'Pro',
                    price: 'Custom',
                    sub: 'tailored quote',
                    gradient: 'from-purple-500 to-pink-600',
                    bg: 'bg-white',
                    border: 'border-purple-200',
                    badge: null,
                    perks: [
                      'Unlimited platforms',
                      'Unlimited posts per month',
                      'Advanced ROI analytics',
                      'Dedicated strategy team',
                      'A/B testing & optimisation',
                      'Priority 24/7 support',
                      'Custom integrations',
                    ],
                    missing: [],
                    cta: 'Contact Us',
                    ctaStyle: 'border-2 border-purple-400 text-purple-700 hover:bg-purple-50',
                  },
                ].map((plan) => {
                  const isBlue = plan.name === 'Standard';
                  return (
                    <div
                      key={plan.name}
                      className={`relative flex flex-col rounded-3xl ${plan.bg} border ${plan.border} shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                    >
                      {plan.badge && (
                        <div className="absolute top-4 right-4 bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                          {plan.badge}
                        </div>
                      )}
                      <div className="p-7 flex-1">
                        <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${isBlue ? 'text-blue-200' : 'text-gray-400'}`}>{plan.name}</p>
                        <div className="mb-5">
                          <span className={`text-4xl font-extrabold ${isBlue ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                          <span className={`text-sm ml-2 ${isBlue ? 'text-blue-200' : 'text-gray-400'}`}>{plan.sub}</span>
                        </div>
                        <ul className="space-y-2.5 mb-4">
                          {plan.perks.map((p) => (
                            <li key={p} className={`flex items-center gap-2 text-sm ${isBlue ? 'text-blue-50' : 'text-gray-600'}`}>
                              <CheckCircle className={`w-4 h-4 flex-shrink-0 ${isBlue ? 'text-blue-300' : 'text-green-400'}`} />
                              {p}
                            </li>
                          ))}
                          {plan.missing.map((p) => (
                            <li key={p} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-7 pb-7">
                        <button
                          onClick={() => window.open('/contact', '_self')}
                          className={`w-full py-3 rounded-xl text-sm transition-all duration-200 ${plan.ctaStyle}`}
                        >
                          {plan.cta}
                        </button>
                      </div>
                    </div>
                  );
                })}
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full max-w-xl mx-auto sm:max-w-none">
                <Link href="/contact?service=instagram" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    Start Instagram Growth
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const palettes = [
                {
                  bar: 'from-blue-500 via-indigo-500 to-violet-500',
                  iconBg: 'bg-blue-100',
                  iconText: 'text-blue-600',
                  badge: 'bg-blue-50 text-blue-700 border-blue-200',
                  stat: 'text-blue-600',
                  glow: 'from-blue-400/20 to-indigo-400/20',
                  btn: 'hover:border-blue-500 hover:bg-blue-50',
                  duration: 'bg-blue-50 text-blue-700',
                },
                {
                  bar: 'from-purple-500 via-pink-500 to-rose-500',
                  iconBg: 'bg-purple-100',
                  iconText: 'text-purple-600',
                  badge: 'bg-purple-50 text-purple-700 border-purple-200',
                  stat: 'text-purple-600',
                  glow: 'from-purple-400/20 to-pink-400/20',
                  btn: 'hover:border-purple-500 hover:bg-purple-50',
                  duration: 'bg-purple-50 text-purple-700',
                },
                {
                  bar: 'from-green-500 via-teal-500 to-cyan-500',
                  iconBg: 'bg-green-100',
                  iconText: 'text-green-600',
                  badge: 'bg-green-50 text-green-700 border-green-200',
                  stat: 'text-green-600',
                  glow: 'from-green-400/20 to-teal-400/20',
                  btn: 'hover:border-green-500 hover:bg-green-50',
                  duration: 'bg-green-50 text-green-700',
                },
              ];
              const p = palettes[index % 3];
              const initials = study.company
                ? study.company.split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase()
                : '??';

              return (
                <div key={study.slug || index} className="group relative flex flex-col bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {/* Colour bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${p.bar}`} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Header: avatar + company + industry tag */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl ${p.iconBg} ${p.iconText} flex items-center justify-center text-sm font-extrabold shadow-sm flex-shrink-0`}>
                          {initials}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 leading-tight">{study.company}</h3>
                          <p className="text-gray-400 text-xs mt-0.5">{study.industry}</p>
                        </div>
                      </div>
                      <div className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${p.badge}`}>
                        {study.service}
                      </div>
                    </div>

                    {/* Key result headline */}
                    <div className="mb-4">
                      <p className={`text-2xl font-extrabold ${p.stat} leading-tight`}>{study.results}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-gray-400 text-xs">achieved in {study.duration}</span>
                      </div>
                    </div>

                    {/* Metrics grid */}
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {study.metrics.slice(0, 4).map((m: { before: string; after: string; improvement: string }, i: number) => (
                          <div key={i} className="bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                            <p className={`text-sm font-extrabold ${p.stat}`}>{m.improvement}</p>
                            <p className="text-gray-400 text-[11px] mt-0.5 leading-tight">{m.before} → {m.after}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Testimonial */}
                    {study.testimonial && (
                      <div className="flex-1 mb-5">
                        {(() => {
                          const t = study.testimonial;
                          const isObj = typeof t === 'object' && t !== null;
                          const quote = isObj ? t.quote : t;
                          const authorName = isObj ? t.author : study.clientName;
                          const authorPos = isObj ? t.position : study.clientPosition;
                          const initials2 = authorName
                            ? authorName.split(' ').map((w: string) => w[0]).join('').slice(0, 2)
                            : '?';
                          return (
                            <div className={`${p.iconBg.replace('100', '50')} rounded-2xl p-4 border ${p.badge.split(' ')[2]}`}>
                              <p className="text-gray-600 italic text-sm leading-relaxed mb-3">
                                &ldquo;{quote}&rdquo;
                              </p>
                              <div className="flex items-center gap-2.5">
                                <div className={`w-8 h-8 rounded-full ${p.iconBg} ${p.iconText} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                  {initials2}
                                </div>
                                <div>
                                  <p className="text-gray-900 text-xs font-bold leading-tight">{authorName}</p>
                                  <p className="text-gray-400 text-[11px]">{authorPos}</p>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    {/* CTA */}
                    <Link href={`/case-studies/${study.slug}`} className="mt-auto">
                      <Button variant="outline" className={`w-full py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-semibold text-sm transition-all duration-300 group/btn ${p.btn}`}>
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full max-w-xl mx-auto sm:max-w-none">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-5 sm:px-12 sm:py-6 text-base sm:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95">
                  Book Free Consultation
                  <MessageSquare className="ml-3 h-5 w-5 sm:ml-4 sm:h-6 sm:w-6 transition-transform hover:scale-110" />
                </Button>
              </Link>

              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-8 py-5 sm:px-12 sm:py-6 text-base sm:text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300/50 active:scale-95">
                  View Our Portfolio
                  <ArrowRight className="ml-3 h-5 w-5 sm:ml-4 sm:h-6 sm:w-6 transition-transform hover:translate-x-2" />
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