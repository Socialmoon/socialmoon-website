'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { FeatureCard } from '@/components/common/FeatureCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Users, Star, CheckCircle, Sparkles, Quote, Target, BarChart3, MessageSquare, Globe, Shield, Clock, Award, Mail } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
};

type HomePageContent = {
  title: string;
  description: string;
  features: Feature[];
};

const HomePage = () => {
  const [content, setContent] = useState<HomePageContent | null>(null);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  useEffect(() => {
    fetch('/api/home')
      .then((res) => res.json())
      .then((data) => {
        // Only set content if we have valid data with a title
        if (data && data.title) {
          setContent(data);
        } else {
          console.error('Invalid home data received:', data);
          // Set default content if API fails
          setContent({
            title: 'Welcome to SocialMoon',
            description: 'Your one-stop solution for social media management.',
            features: []
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching home content:', error);
        // Set default content on error
        setContent({
          title: 'Welcome to SocialMoon',
          description: 'Your one-stop solution for social media management.',
          features: []
        });
      });
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-blue-100">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  const featureIcons = [
    <Globe className="h-6 w-6" key="globe" />,
    <Shield className="h-6 w-6" key="shield" />,
    <Clock className="h-6 w-6" key="clock" />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-100">
      {/* Hero Section */}
      <Hero className="relative overflow-hidden bg-white pt-24 md:pt-32 pb-8">
        {/* Color splatters */}
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-60 animate-pulse z-20"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-blue-300 rounded-full blur-xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-5 left-32 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-40 animate-pulse z-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-15 left-5 w-12 h-12 bg-green-300 rounded-full blur-xl opacity-70 animate-pulse z-20" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-25 left-40 w-18 h-18 bg-purple-300 rounded-full blur-2xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-30 left-15 w-14 h-14 bg-cyan-300 rounded-full blur-xl opacity-55 animate-pulse z-20" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-8 left-50 w-22 h-22 bg-orange-300 rounded-full blur-2xl opacity-45 animate-pulse z-20" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-35 left-25 w-10 h-10 bg-lime-300 rounded-full blur-xl opacity-65 animate-pulse z-20" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-12 left-60 w-16 h-16 bg-indigo-300 rounded-full blur-xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-40 left-35 w-12 h-12 bg-rose-300 rounded-full blur-xl opacity-60 animate-pulse z-20" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-18 left-45 w-15 h-15 bg-teal-300 rounded-full blur-xl opacity-55 animate-pulse z-20" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute bottom-28 left-8 w-18 h-18 bg-violet-300 rounded-full blur-2xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute bottom-2 left-55 w-20 h-20 bg-amber-300 rounded-full blur-2xl opacity-45 animate-pulse z-20" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute bottom-32 left-50 w-14 h-14 bg-emerald-300 rounded-full blur-xl opacity-60 animate-pulse z-20" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-22 left-12 w-16 h-16 bg-sky-300 rounded-full blur-xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute bottom-38 left-42 w-10 h-10 bg-fuchsia-300 rounded-full blur-xl opacity-65 animate-pulse z-20" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-6 left-65 w-18 h-18 bg-slate-300 rounded-full blur-2xl opacity-40 animate-pulse z-20" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute bottom-26 left-55 w-12 h-12 bg-red-300 rounded-full blur-xl opacity-55 animate-pulse z-20" style={{ animationDelay: '1.9s' }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-60 animate-pulse z-20"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-300 rounded-full blur-xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-5 right-32 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-40 animate-pulse z-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-15 right-5 w-12 h-12 bg-green-300 rounded-full blur-xl opacity-70 animate-pulse z-20" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-25 right-40 w-18 h-18 bg-purple-300 rounded-full blur-2xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-30 right-15 w-14 h-14 bg-cyan-300 rounded-full blur-xl opacity-55 animate-pulse z-20" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-8 right-50 w-22 h-22 bg-orange-300 rounded-full blur-2xl opacity-45 animate-pulse z-20" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-35 right-25 w-10 h-10 bg-lime-300 rounded-full blur-xl opacity-65 animate-pulse z-20" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-12 right-60 w-16 h-16 bg-indigo-300 rounded-full blur-xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-40 right-35 w-12 h-12 bg-rose-300 rounded-full blur-xl opacity-60 animate-pulse z-20" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-18 right-45 w-15 h-15 bg-teal-300 rounded-full blur-xl opacity-55 animate-pulse z-20" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute bottom-28 right-8 w-18 h-18 bg-violet-300 rounded-full blur-2xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute bottom-2 right-55 w-20 h-20 bg-amber-300 rounded-full blur-2xl opacity-45 animate-pulse z-20" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute bottom-32 right-50 w-14 h-14 bg-emerald-300 rounded-full blur-xl opacity-60 animate-pulse z-20" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-22 right-12 w-16 h-16 bg-sky-300 rounded-full blur-xl opacity-50 animate-pulse z-20" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute bottom-38 right-42 w-10 h-10 bg-fuchsia-300 rounded-full blur-xl opacity-65 animate-pulse z-20" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-6 right-65 w-18 h-18 bg-slate-300 rounded-full blur-2xl opacity-40 animate-pulse z-20" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute bottom-26 right-55 w-12 h-12 bg-red-300 rounded-full blur-xl opacity-55 animate-pulse z-20" style={{ animationDelay: '1.9s' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-200/50 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Social Media Management
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            {content.title?.split('SocialMoon')[0] || 'Welcome to '}
            <Image
              src="/1.png"
              alt="SocialMoon Logo"
              width={1000}
              height={400}
              className="inline-block align-middle mx-2 w-auto h-auto max-h-24 md:max-h-32 lg:max-h-36"
              priority
            />
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-sky-500 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            CONNECT | CREATE | CONQUER
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-500/50 active:scale-95"
              onClick={() => window.open('/contact', '_self')}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-10 py-5 text-lg font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300/50 active:scale-95"
              onClick={() => window.open('/services', '_self')}
            >
              Learn More
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[
                  'https://logo.clearbit.com/google.com',
                  'https://logo.clearbit.com/x.com',
                  'https://logo.clearbit.com/amazon.com',
                  'https://logo.clearbit.com/meta.com'
                ].map((logo, i) => (
                  <Image
                    key={i}
                    src={logo}
                    alt="Company logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md object-contain"
                  />
                ))}
              </div>
              <span className="ml-4 font-medium">Trusted by 10,000+ businesses</span>
            </div>
            <div className="flex items-center">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-3 font-medium">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </Hero>

      {/* Brands Section */}
      <Section className="py-16 bg-gradient-to-r from-white to-blue-100 border-b border-blue-200">
        <Container>
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-gray-600 uppercase tracking-wider">
              Trusted by leading companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
            {/* Genuine brand logos */}
            {[
              { name: "Google", url: "https://logo.clearbit.com/google.com" },
              { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
              { name: "Amazon", url: "https://logo.clearbit.com/amazon.com" },
              { name: "Meta", url: "https://logo.clearbit.com/meta.com" },
              { name: "Apple", url: "https://logo.clearbit.com/apple.com" },
              { name: "Netflix", url: "https://logo.clearbit.com/netflix.com" },
              { name: "Tesla", url: "https://logo.clearbit.com/tesla.com" },
              { name: "Spotify", url: "https://logo.clearbit.com/spotify.com" },
              { name: "LinkedIn", url: "https://logo.clearbit.com/linkedin.com" },
              { name: "Salesforce", url: "https://logo.clearbit.com/salesforce.com" },
              { name: "Uber", url: "https://logo.clearbit.com/uber.com" },
              { name: "Airbnb", url: "https://logo.clearbit.com/airbnb.com" },
              { name: "Slack", url: "https://logo.clearbit.com/slack.com" },
              { name: "Twitter", url: "https://logo.clearbit.com/twitter.com" },
              { name: "Shopify", url: "https://logo.clearbit.com/shopify.com" },
              { name: "Stripe", url: "https://logo.clearbit.com/stripe.com" }
            ].map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={brand.url}
                  alt={`${brand.name} logo`}
                  width={60}
                  height={30}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 font-medium">
              Join 10,000+ companies already using SocialMoon
            </p>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Powerful Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powerful features designed to help you grow your social media presence and engage your audience effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {content.features?.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={featureIcons[index]}
                  className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group-hover:-translate-y-2 group-hover:bg-white"
                />
              </div>
            ))}
          </div>

          {/* Additional features grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: "24/7 Support", desc: "Round-the-clock assistance" },
              { icon: TrendingUp, title: "Analytics", desc: "Detailed performance insights" },
              { icon: Users, title: "Team Collaboration", desc: "Work together seamlessly" },
              { icon: Zap, title: "Automation", desc: "Save time with smart tools" }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-300 shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 group">
                <item.icon className="h-10 w-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-36 h-36 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold mb-6 border border-purple-200/50 shadow-sm">
              <Award className="w-4 h-4 mr-2" />
              Global Trust
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
              Trusted by businesses worldwide
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies already growing with SocialMoon
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Users", icon: Users },
              { number: "500K+", label: "Posts Managed", icon: MessageSquare },
              { number: "98%", label: "Satisfaction Rate", icon: Star },
              { number: "24/7", label: "Support Available", icon: CheckCircle }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-gray-200">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="py-16 bg-gradient-to-br from-green-50 via-white to-teal-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-green-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 text-sm font-semibold mb-6 border border-green-200/50 shadow-sm">
              <Target className="w-4 h-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-teal-800 bg-clip-text text-transparent mb-4">
              How SocialMoon works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and see results within days, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Accounts",
                description: "Link your social media accounts securely in just a few clicks.",
                icon: Globe,
                color: "from-green-500 to-green-600"
              },
              {
                step: "02",
                title: "AI-Powered Strategy",
                description: "Our intelligent algorithms analyze your audience and create personalized content strategies.",
                icon: Zap,
                color: "from-teal-500 to-teal-600"
              },
              {
                step: "03",
                title: "Grow & Engage",
                description: "Watch your engagement soar as we optimize posts, and grow your following.",
                icon: TrendingUp,
                color: "from-blue-500 to-blue-600"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-full mb-6 shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 group-hover:shadow-lg transition-shadow duration-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-12 right-12 w-28 h-28 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-12 left-12 w-36 h-36 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 text-sm font-semibold mb-6 border border-yellow-200/50 shadow-sm">
              <Quote className="w-4 h-4 mr-2" />
              Customer Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-yellow-800 to-orange-800 bg-clip-text text-transparent mb-6">
              What our customers say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from real businesses
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {[
                {
                  quote: "SocialMoon transformed our social media presence completely. Our engagement increased by 300% in just 3 months.",
                  author: "Sarah Johnson",
                  role: "Marketing Director",
                  company: "TechCorp",
                  avatar: "SJ"
                },
                {
                  quote: "The analytics and insights we get are incredible. We've never had this level of understanding about our audience.",
                  author: "Mike Chen",
                  role: "CEO",
                  company: "StartupXYZ",
                  avatar: "MC"
                },
                {
                  quote: "Finally, a social media tool that actually works. The AI suggestions are spot-on and save us hours every week.",
                  author: "Emily Rodriguez",
                  role: "Social Media Manager",
                  company: "FashionForward",
                  avatar: "ER"
                },
                {
                  quote: "SocialMoon has revolutionized how we connect with our customers. The automated responses are intelligent and save us countless hours.",
                  author: "David Park",
                  role: "Customer Success Manager",
                  company: "EcomGiant",
                  avatar: "DP"
                },
                {
                  quote: "Our ROI on social media advertising doubled after implementing SocialMoon's strategies. Highly recommend!",
                  author: "Lisa Wong",
                  role: "Digital Marketing Lead",
                  company: "RetailPlus",
                  avatar: "LW"
                },
                {
                  quote: "The content scheduling feature is a game-changer. We maintain consistent posting without the hassle.",
                  author: "James Taylor",
                  role: "Content Creator",
                  company: "CreativeStudio",
                  avatar: "JT"
                },
                {
                  quote: "SocialMoon's AI understands our brand voice perfectly. The generated content feels authentic and engaging.",
                  author: "Anna Martinez",
                  role: "Brand Manager",
                  company: "LuxuryBrands",
                  avatar: "AM"
                },
                {
                  quote: "We've seen a 250% increase in follower growth since using SocialMoon. The targeting is spot-on.",
                  author: "Robert Kim",
                  role: "Growth Hacker",
                  company: "ScaleUp Inc",
                  avatar: "RK"
                },
                {
                  quote: "The customer support is exceptional. They helped us customize the platform to our specific needs.",
                  author: "Maria Garcia",
                  role: "Operations Director",
                  company: "ServicePro",
                  avatar: "MG"
                },
                {
                  quote: "SocialMoon integrates seamlessly with all our existing tools. Setup was incredibly smooth.",
                  author: "Thomas Brown",
                  role: "IT Manager",
                  company: "TechSolutions",
                  avatar: "TB"
                },
                {
                  quote: "Our conversion rates from social media have improved dramatically. SocialMoon delivers real results.",
                  author: "Jennifer Lee",
                  role: "Conversion Specialist",
                  company: "ConvertMasters",
                  avatar: "JL"
                },
                {
                  quote: "The reporting dashboard gives us all the insights we need to make data-driven decisions.",
                  author: "Kevin Wright",
                  role: "Data Analyst",
                  company: "InsightCorp",
                  avatar: "KW"
                }
              ].concat([
                {
                  quote: "SocialMoon transformed our social media presence completely. Our engagement increased by 300% in just 3 months.",
                  author: "Sarah Johnson",
                  role: "Marketing Director",
                  company: "TechCorp",
                  avatar: "SJ"
                },
                {
                  quote: "The analytics and insights we get are incredible. We've never had this level of understanding about our audience.",
                  author: "Mike Chen",
                  role: "CEO",
                  company: "StartupXYZ",
                  avatar: "MC"
                },
                {
                  quote: "Finally, a social media tool that actually works. The AI suggestions are spot-on and save us hours every week.",
                  author: "Emily Rodriguez",
                  role: "Social Media Manager",
                  company: "FashionForward",
                  avatar: "ER"
                },
                {
                  quote: "SocialMoon has revolutionized how we connect with our customers. The automated responses are intelligent and save us countless hours.",
                  author: "David Park",
                  role: "Customer Success Manager",
                  company: "EcomGiant",
                  avatar: "DP"
                },
                {
                  quote: "Our ROI on social media advertising doubled after implementing SocialMoon's strategies. Highly recommend!",
                  author: "Lisa Wong",
                  role: "Digital Marketing Lead",
                  company: "RetailPlus",
                  avatar: "LW"
                },
                {
                  quote: "The content scheduling feature is a game-changer. We maintain consistent posting without the hassle.",
                  author: "James Taylor",
                  role: "Content Creator",
                  company: "CreativeStudio",
                  avatar: "JT"
                }
              ]).map((testimonial, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 flex-shrink-0 w-96 z-10">
                  <Quote className="h-10 w-10 text-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                      <div className="text-sm text-gray-600 font-medium">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Integrations Section */}
      <Section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-8 left-8 w-20 h-20 bg-indigo-200 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 bg-cyan-200 rounded-full blur-2xl opacity-40"></div>
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200/50 shadow-sm">
              <Globe className="w-4 h-4 mr-2" />
              Integrations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-cyan-800 bg-clip-text text-transparent mb-4">
              Works with your favorite platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect all your social media accounts in one place
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: "Instagram", logo: "https://logo.clearbit.com/instagram.com" },
              { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com" },
              { name: "Twitter", logo: "https://logo.clearbit.com/twitter.com" },
              { name: "LinkedIn", logo: "https://logo.clearbit.com/linkedin.com" },
              { name: "TikTok", logo: "https://logo.clearbit.com/tiktok.com" },
              { name: "YouTube", logo: "https://logo.clearbit.com/youtube.com" },
              { name: "Pinterest", logo: "https://logo.clearbit.com/pinterest.com" },
              { name: "Snapchat", logo: "https://logo.clearbit.com/snapchat.com" }
            ].map((platform, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/30 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md border border-gray-200">
                  <Image
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    width={32}
                    height={32}
                    className="rounded"
                  />
                </div>
                <span className="font-semibold text-gray-900 text-center text-sm group-hover:text-indigo-700 transition-colors">{platform.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-28 h-28 bg-slate-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gray-200 rounded-full blur-3xl opacity-30"></div>
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 text-sm font-semibold mb-6 border border-slate-200/50 shadow-sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-slate-800 to-gray-800 bg-clip-text text-transparent mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about SocialMoon
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How quickly can I see results?",
                answer: "Most customers see improved engagement within the first 2 weeks. Full optimization and growth typically takes 4-6 weeks depending on your current social media presence."
              },
              {
                question: "Can I connect multiple social media accounts?",
                answer: "Yes! Depending on your plan, you can connect anywhere from 5 to unlimited social media accounts across all major platforms."
              },
              {
                question: "Do you provide content creation services?",
                answer: "Absolutely. Our AI-powered content assistant helps generate ideas, and our professional team can create custom content for your brand."
              },
              {
                question: "What kind of analytics do you provide?",
                answer: "We provide comprehensive analytics including engagement rates, reach, follower growth, best posting times, and detailed performance reports."
              },
              {
                question: "Is my data secure?",
                answer: "Yes, security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA, and never share your data with third parties."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden text-gray-800">
        {/* Background decorative elements */}
        <div className="absolute top-8 left-8 w-20 h-20 bg-emerald-200 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-40"></div>
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-200/50 shadow-sm">
              <Mail className="w-4 h-4 mr-2" />
              Newsletter
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent mb-4">
              Stay in the loop
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest social media tips, platform updates, and growth strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/80 backdrop-blur-sm border border-gray-200"
              />
              <Button
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 active:scale-95"
                onClick={async () => {
                  const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                  const email = emailInput?.value;
                  if (!email) {
                    return;
                  }
                  try {
                    const res = await fetch('/api/subscribers', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email }),
                    });
                    if (res.ok) {
                      emailInput.value = '';
                      setSubscribeSuccess(true);
                      setTimeout(() => setSubscribeSuccess(false), 3000);
                    }
                  } catch (error) {
                    // Silent fail
                  }
                }}
              >
                Subscribe
              </Button>
            </div>
            {subscribeSuccess && (
              <p className="text-sm text-green-600 mt-2 text-center">Thank you for subscribing!</p>
            )}
            <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe anytime.</p>
          </div>
        </Container>
      </Section>

    </div>
  );
};

export default HomePage;