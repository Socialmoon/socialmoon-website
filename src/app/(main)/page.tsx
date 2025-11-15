'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { FeatureCard } from '@/components/common/FeatureCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Users, Star, CheckCircle, Sparkles, Quote, Target, BarChart3, MessageSquare } from 'lucide-react';

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

  useEffect(() => {
    fetch('/api/home')
      .then((res) => res.json())
      .then((data) => setContent(data));
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

  const featureIcons = [
    <Zap className="h-6 w-6" key="zap" />,
    <TrendingUp className="h-6 w-6" key="trending" />,
    <Users className="h-6 w-6" key="users" />
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 md:pt-24">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Social Media Management
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            {content.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl">
              Learn More
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"></div>
                ))}
              </div>
              <span className="ml-3">Trusted by 10,000+ businesses</span>
            </div>
            <div className="flex items-center">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </Hero>

      {/* Brands Section */}
      <Section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <div className="text-center mb-6">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Trusted by leading companies worldwide
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {/* Genuine brand logos */}
            {[
              { name: "Google", logo: "G", color: "from-blue-600 to-blue-800", bg: "bg-blue-50" },
              { name: "Microsoft", logo: "M", color: "from-green-600 to-green-800", bg: "bg-green-50" },
              { name: "Amazon", logo: "A", color: "from-orange-500 to-orange-700", bg: "bg-orange-50" },
              { name: "Meta", logo: "M", color: "from-blue-700 to-blue-900", bg: "bg-blue-50" },
              { name: "Apple", logo: "", color: "from-gray-700 to-black", bg: "bg-gray-50" },
              { name: "Netflix", logo: "N", color: "from-red-600 to-red-800", bg: "bg-red-50" },
              { name: "Tesla", logo: "T", color: "from-gray-800 to-black", bg: "bg-gray-50" },
              { name: "Spotify", logo: "S", color: "from-green-500 to-green-700", bg: "bg-green-50" }
            ].map((brand, index) => (
              <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <div className={`w-20 h-12 md:w-24 md:h-14 ${brand.bg} rounded-lg flex items-center justify-center shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:scale-105`}>
                  <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}>
                    {brand.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              Join 10,000+ companies already using SocialMoon
            </p>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you grow your social media presence and engage your audience effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {content.features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={featureIcons[index]}
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group-hover:-translate-y-1"
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
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by businesses worldwide
            </h2>
            <p className="text-xl text-gray-600">
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
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
                description: "Link your social media accounts securely in just a few clicks."
              },
              {
                step: "02",
                title: "AI-Powered Strategy",
                description: "Our intelligent algorithms analyze your audience and create personalized content strategies."
              },
              {
                step: "03",
                title: "Grow & Engage",
                description: "Watch your engagement soar as we optimize posts, respond to comments, and grow your following."
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full text-xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our customers say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Integrations Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Works with your favorite platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect all your social media accounts in one place
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Instagram", icon: "📸", color: "from-pink-500 to-purple-500" },
              { name: "Facebook", icon: "👥", color: "from-blue-600 to-blue-800" },
              { name: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-600" },
              { name: "LinkedIn", icon: "💼", color: "from-blue-700 to-blue-900" },
              { name: "TikTok", icon: "🎵", color: "from-black to-gray-800" },
              { name: "YouTube", icon: "📺", color: "from-red-500 to-red-700" },
              { name: "Pinterest", icon: "📌", color: "from-red-600 to-red-800" },
              { name: "Snapchat", icon: "👻", color: "from-yellow-400 to-yellow-600" }
            ].map((platform, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center mb-3`}>
                  <span className="text-xl">{platform.icon}</span>
                </div>
                <span className="font-semibold text-gray-900 text-center">{platform.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about SocialMoon
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
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
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section className="py-16 bg-gray-900 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay in the loop
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest social media tips, platform updates, and growth strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">No spam, unsubscribe anytime.</p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your social media?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using SocialMoon to grow their online presence and connect with their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl">
                Contact Sales
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HomePage;