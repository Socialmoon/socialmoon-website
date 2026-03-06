'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Users,
  BookOpen,
  Lightbulb,
  Calendar,
  ArrowRight,
  Award,
  Target,
  TrendingUp,
  Heart,
  Globe,
  Star,
  Clock,
  Trophy,
  MessageSquare,
  CheckCircle,
  Zap
} from 'lucide-react';
import Image from 'next/image';

type TeamMember = {
  id: number;
  _id?: string | number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

type BlogPost = {
  id?: number;
  title: string;
  slug?: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  excerpt?: string;
};

type AboutData = {
  title: string;
  companyDescription: string;
  team: TeamMember[];
};

type BlogData = {
  title: string;
  posts: BlogPost[];
};

const InsightsPage = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<'overview' | 'about' | 'team' | 'blog' | 'case-studies' | 'careers'>('overview');
  const [caseStudies, setCaseStudies] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutRes, blogRes] = await Promise.all([
          fetch('/api/about'),
          fetch('/api/blog')
        ]);

        const [about, blog] = await Promise.all([
          aboutRes.json(),
          blogRes.json()
        ]);

        setAboutData(about);
        setBlogData(blog);

        // Fetch case studies for success stories
        fetch('/api/case-studies')
          .then((res) => res.json())
          .then((data) => setCaseStudies(data.caseStudies || []));
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg">
              <Lightbulb className="w-4 h-4 mr-2" />
              Insights & Knowledge
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Insights Hub
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our story, meet our team, and explore the latest insights from the world of digital marketing.
            </p>

            {/* Quick Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Projects Completed", icon: Target },
                { number: "98%", label: "Client Satisfaction", icon: Heart },
                { number: "50+", label: "Industries Served", icon: Globe },
                { number: "24/7", label: "Knowledge Sharing", icon: BookOpen }
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

      {/* Enhanced Toggle Section */}
      <Section className="py-12 bg-white border-b border-gray-100 shadow-sm">
        <Container>
          <div className="flex justify-center">
            <div className="bg-gray-100 p-2 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setActiveView('overview')}
                  className={`flex items-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeView === 'overview'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Lightbulb className="w-4 h-4 mr-1.5 sm:mr-2" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveView('about')}
                  className={`flex items-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeView === 'about'
                      ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Award className="w-4 h-4 mr-1.5 sm:mr-2" />
                  About Us
                </button>
                <button
                  onClick={() => setActiveView('team')}
                  className={`flex items-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeView === 'team'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <Users className="w-4 h-4 mr-1.5 sm:mr-2" />
                  Our Team
                </button>
                <button
                  onClick={() => setActiveView('blog')}
                  className={`flex items-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeView === 'blog'
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  <BookOpen className="w-4 h-4 mr-1.5 sm:mr-2" />
                  Blog
                </button>
                <button
                  onClick={() => setActiveView('case-studies')}
                  className={`flex items-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeView === 'case-studies'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  <Award className="w-4 h-4 mr-1.5 sm:mr-2" />
                  Case Studies
                </button>
                <button
                  onClick={() => setActiveView('careers')}
                  className={`flex items-center px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    activeView === 'careers'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl transform scale-105'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <Users className="w-4 h-4 mr-1.5 sm:mr-2" />
                  Careers
                </button>
              </div>
            </div>
          </div>

          {/* Content Type Description */}
          <div className="text-center mt-8">
            <p className={`text-lg transition-all duration-500 ${
              activeView === 'overview'
                ? 'text-blue-700 font-medium'
                : activeView === 'about'
                ? 'text-green-700 font-medium'
                : activeView === 'team'
                ? 'text-purple-700 font-medium'
                : activeView === 'blog'
                ? 'text-indigo-700 font-medium'
                : activeView === 'case-studies'
                ? 'text-emerald-700 font-medium'
                : 'text-orange-700 font-medium'
            }`}>
              {activeView === 'overview'
                ? 'Explore our comprehensive insights and knowledge base'
                : activeView === 'about'
                ? 'Learn about our mission, vision, and company values'
                : activeView === 'team'
                ? 'Meet the creative minds behind our success'
                : activeView === 'blog'
                ? 'Stay updated with our latest thoughts and industry insights'
                : activeView === 'case-studies'
                ? 'Discover real results from our successful projects and campaigns'
                : 'Join our team and shape the future of digital marketing'
              }
            </p>
          </div>
        </Container>
      </Section>

      {/* Dynamic Content Section */}
      {activeView === 'overview' ? (
        <div className="overview-content">
          {/* Overview Navigation Section */}
      <Section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Explore Our Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dive deeper into our world through our comprehensive insights on company, team, and industry knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* About Card */}
            <Link href="/insights/about">
              <div className="group relative cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Award className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">About Us</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Learn about our mission, vision, and the values that drive SocialMoon's success in digital marketing.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Team Card */}
            <Link href="/insights/team">
              <div className="group relative cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
                  <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <Users className="w-16 h-16 text-green-600" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Our Team</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Meet the creative minds and strategic thinkers behind your digital success stories.
                    </p>
                    <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300">
                      Meet the Team
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog Card */}
            <Link href="/insights/blog">
              <div className="group relative cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-purple-600" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Blog & Insights</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Stay ahead with our latest thoughts on digital marketing trends, strategies, and industry insights.
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                      Read Articles
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Redesigned Conversation CTA Section */}
      <Section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-base font-semibold mb-8 border border-blue-200/50 shadow-lg">
                <MessageSquare className="w-5 h-5 mr-3" />
                Ready to Connect?
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Let's Start a
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
                Whether you need expert advice, want to discuss a project, or just want to learn more about our approach, we're here to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0">
                    Get In Touch
                    <MessageSquare className="ml-4 h-6 w-6" />
                  </Button>
                </Link>

                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                    Explore Services
                    <ArrowRight className="ml-4 h-6 w-6" />
                  </Button>
                </Link>
              </div>

              {/* Contact highlights */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0 mt-12">
                {[
                  { icon: Clock, label: "Quick Response" },
                  { icon: Users, label: "Personal Service" },
                  { icon: CheckCircle, label: "Free Consultation" },
                  { icon: Star, label: "Expert Advice" }
                ].map((item, index) => (
                  <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <item.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-gray-700 font-medium text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Conversation Preview */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
                {/* Chat bubbles */}
                <div className="space-y-6">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl rounded-br-md max-w-xs shadow-lg">
                      <p className="text-sm font-medium">Hi! I'm interested in your social media services.</p>
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-6 py-4 rounded-2xl rounded-bl-md max-w-xs shadow-lg">
                      <p className="text-sm font-medium">Great! We'd love to help. What specific goals do you have for your social media presence?</p>
                    </div>
                  </div>

                  {/* User response */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl rounded-br-md max-w-xs shadow-lg">
                      <p className="text-sm font-medium">Increase engagement and grow our following.</p>
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-6 py-4 rounded-2xl rounded-bl-md max-w-xs shadow-lg">
                      <p className="text-sm font-medium">Perfect! Let's schedule a free consultation to discuss your strategy.</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </Container>
      </Section>
        </div>
      ) : activeView === 'about' ? (
        <Section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
          <Container>
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50">
                <Award className="w-4 h-4 mr-2" />
                About SocialMoon
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Our Mission & Vision
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Learn about our journey, values, and the passionate team behind your digital success.
              </p>
            </div>

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
                      {aboutData?.companyDescription || 'SocialMoon is a leading social media agency dedicated to helping businesses transform their online presence and achieve remarkable results through strategic digital marketing.'}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                      {[
                        { icon: Target, title: "Strategic Excellence", desc: "Data-driven strategies that deliver measurable results" },
                        { icon: Heart, title: "Client-Centric", desc: "Your success is our ultimate priority and passion" },
                        { icon: Zap, title: "Innovation First", desc: "Cutting-edge solutions for modern digital challenges" }
                      ].map((value, index) => (
                        <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                          <value.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                          <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {[
                { number: "500+", label: "Projects Completed", icon: Target, color: "from-blue-500 to-indigo-500" },
                { number: "98%", label: "Client Satisfaction", icon: Heart, color: "from-green-500 to-teal-500" },
                { number: "50+", label: "Industries Served", icon: Globe, color: "from-purple-500 to-pink-500" },
                { number: "24/7", label: "Support Provided", icon: Clock, color: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <div key={index} className="group relative" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className="relative text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
                    <div className="text-gray-600 font-medium text-base group-hover:text-blue-700 transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : activeView === 'team' ? (
        <Section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-100/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          </div>

          <Container className="relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 text-sm font-semibold mb-6 border border-green-200/50">
                <Users className="w-4 h-4 mr-2" />
                Meet Our Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-900 to-teal-900 bg-clip-text text-transparent">
                The Minds Behind SocialMoon
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get to know the creative minds and strategic thinkers driving your digital success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {aboutData?.team?.map((member, index) => (
                <div key={member._id || member.id || index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${
                    index % 3 === 0 ? 'from-blue-600 via-purple-600 to-pink-600' :
                    index % 3 === 1 ? 'from-green-600 via-teal-600 to-blue-600' :
                    'from-purple-600 via-pink-600 to-red-600'
                  } rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
                    {/* Color accent bar */}
                    <div className={`h-2 bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-blue-500 to-purple-500' :
                      index % 3 === 1 ? 'from-green-500 to-teal-500' :
                      'from-purple-500 to-pink-500'
                    }`}></div>

                    <div className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-200 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {member.imageUrl ? (
                            <Image
                              src={member.imageUrl}
                              alt={member.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className={`w-full h-full flex items-center justify-center text-3xl font-bold text-white bg-gradient-to-br ${
                              index % 3 === 0 ? 'from-blue-500 to-purple-500' :
                              index % 3 === 1 ? 'from-green-500 to-teal-500' :
                              'from-purple-500 to-pink-500'
                            }`}>
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                        <p className={`text-base font-semibold mb-4 ${
                          index % 3 === 0 ? 'text-blue-600' :
                          index % 3 === 1 ? 'text-green-600' :
                          'text-purple-600'
                        }`}>{member.role}</p>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-center mb-6 group-hover:text-gray-700 transition-colors duration-300">{member.bio}</p>

                      {/* Social/Expertise badges */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {index === 0 && (
                          <>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Strategy</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Analytics</span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Creative</span>
                            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Design</span>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">Marketing</span>
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Growth</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )) || (
                <>
                  {/* Enhanced fallback team members */}
                  {[
                    {
                      name: "John Doe",
                      role: "CEO & Founder",
                      bio: "Visionary leader with a passion for social media innovation and digital transformation. 10+ years in digital marketing.",
                      color: "from-blue-500 to-purple-500",
                      badges: ["Strategy", "Analytics"]
                    },
                    {
                      name: "Jane Smith",
                      role: "Head of Strategy",
                      bio: "Strategic thinker specializing in data-driven marketing and campaign optimization. Expert in ROI maximization.",
                      color: "from-green-500 to-teal-500",
                      badges: ["Creative", "Design"]
                    },
                    {
                      name: "Mike Johnson",
                      role: "Creative Director",
                      bio: "Award-winning creative director bringing brands to life through compelling visual storytelling and content creation.",
                      color: "from-purple-500 to-pink-500",
                      badges: ["Marketing", "Growth"]
                    }
                  ].map((member, index) => (
                    <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                      <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
                        <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>

                        <div className="p-8">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-200 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                              <Users className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                            <p className={`text-base font-semibold mb-4 ${member.color.replace('from-', 'text-').replace('to-', 'to-').split('-')[1]}-600`}>{member.role}</p>
                          </div>

                          <p className="text-gray-600 leading-relaxed text-center mb-6 group-hover:text-gray-700 transition-colors duration-300">{member.bio}</p>

                          <div className="flex flex-wrap justify-center gap-2">
                            {member.badges.map((badge, badgeIndex) => (
                              <span key={badgeIndex} className={`px-3 py-1 bg-gradient-to-r ${member.color} text-white rounded-full text-xs font-medium shadow-sm`}>
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Container>
        </Section>
      ) : activeView === 'blog' ? (
        <Section className="py-32 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
          <Container>
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200/50">
                <BookOpen className="w-4 h-4 mr-2" />
                Latest Insights
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                Knowledge & Innovation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with our latest thoughts on digital marketing, social media trends, and business growth strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
              {blogData?.posts?.map((post, index) => (
                <div key={post.slug || index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Animated glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <div className={`relative h-48 ${
                        index % 3 === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                        index % 3 === 1 ? 'bg-gradient-to-br from-green-100 to-green-200' :
                        'bg-gradient-to-br from-purple-100 to-purple-200'
                      } flex items-center justify-center`}>
                        <BookOpen className={`w-16 h-16 ${
                          index % 3 === 0 ? 'text-blue-600' :
                          index % 3 === 1 ? 'text-green-600' :
                          'text-purple-600'
                        }`} />
                      </div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className={`bg-gradient-to-r ${
                          index % 3 === 0 ? 'from-blue-600 to-purple-600' :
                          index % 3 === 1 ? 'from-green-600 to-teal-600' :
                          'from-purple-600 to-pink-600'
                        } text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                          Article
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt || post.content.substring(0, 120) + '...'}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 font-medium">By {post.author}</span>
                        <Link href={`/insights/blog/${post.slug || post.id || 'post'}`}>
                          <Button variant="outline" size="sm" className="group/btn border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )) || (
                <>
                  {/* Enhanced fallback blog posts */}
                  {[
                    {
                      title: "The Future of Social Media Marketing",
                      excerpt: "Explore emerging trends and technologies shaping the future of social media marketing and digital engagement.",
                      author: "SocialMoon Team",
                      date: "2025-11-15",
                      color: "from-blue-500 to-purple-500"
                    },
                    {
                      title: "Content Creation Strategies That Convert",
                      excerpt: "Learn proven content creation strategies that drive engagement and convert followers into customers.",
                      author: "SocialMoon Team",
                      date: "2025-11-10",
                      color: "from-green-500 to-teal-500"
                    },
                    {
                      title: "ROI Measurement in Social Media Campaigns",
                      excerpt: "Discover how to effectively measure and optimize ROI in your social media marketing campaigns.",
                      author: "SocialMoon Team",
                      date: "2025-11-05",
                      color: "from-purple-500 to-pink-500"
                    }
                  ].map((post, index) => (
                    <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className={`absolute -inset-1 bg-gradient-to-r ${post.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                      <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                        <div className={`relative h-48 bg-gradient-to-br ${
                          index === 0 ? 'from-blue-100 to-blue-200' :
                          index === 1 ? 'from-green-100 to-green-200' :
                          'from-purple-100 to-purple-200'
                        } flex items-center justify-center`}>
                          <BookOpen className={`w-16 h-16 ${
                            index === 0 ? 'text-blue-600' :
                            index === 1 ? 'text-green-600' :
                            'text-purple-600'
                          }`} />
                        </div>

                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 font-medium">By {post.author}</span>
                            <Link href={`/insights/blog/${index + 1}`}>
                              <Button variant="outline" size="sm" className="group/btn border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
                                Read More
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Container>
        </Section>
      ) : activeView === 'case-studies' ? (
        <Section className="py-32 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
          <Container>
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-200/50">
                <Award className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-900 to-teal-900 bg-clip-text text-transparent">
                Real Results, Real Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover how our services have transformed businesses across all industries and service types.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => {
                const palettes = [
                  { border: 'border-blue-500', tag: 'bg-blue-50 text-blue-600 border border-blue-100', result: 'text-blue-600 bg-blue-50' },
                  { border: 'border-emerald-500', tag: 'bg-emerald-50 text-emerald-600 border border-emerald-100', result: 'text-emerald-600 bg-emerald-50' },
                  { border: 'border-violet-500', tag: 'bg-violet-50 text-violet-600 border border-violet-100', result: 'text-violet-600 bg-violet-50' },
                ];
                const p = palettes[index % palettes.length];
                return (
                  <Link
                    key={study._id || study.id || index}
                    href={`/case-studies/${study.slug}`}
                    className={`group flex flex-col bg-white rounded-2xl overflow-hidden border-t-4 ${p.border} border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="p-6 flex flex-col flex-1 gap-4">
                      {/* Top row: company + industry */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-gray-900 text-base leading-tight">{study.company}</h3>
                          <p className="text-gray-400 text-xs mt-0.5">{study.industry}</p>
                        </div>
                        <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${p.tag}`}>
                          {study.service}
                        </span>
                      </div>

                      {/* Title */}
                      <p className="text-gray-700 text-sm font-medium leading-snug line-clamp-2">{study.title}</p>

                      {/* Challenge excerpt */}
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">{study.challenge}</p>

                      {/* Result + CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">Result</p>
                          <p className={`text-sm font-bold ${p.result} px-2 py-0.5 rounded-md inline-block`}>{study.results}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-gray-400 group-hover:text-gray-700 transition-colors">
                          Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : activeView === 'careers' ? (
        <Section className="py-32 bg-gradient-to-br from-white via-orange-50/30 to-red-50/30">
          <Container>
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-sm font-semibold mb-6 border border-orange-200/50">
                <Users className="w-4 h-4 mr-2" />
                Join Our Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-orange-900 to-red-900 bg-clip-text text-transparent">
                Shape the Future of Digital Marketing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join a team of passionate innovators and help businesses transform their digital presence. We're always looking for talented individuals to join our growing family.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Job Position Cards */}
              {[
                {
                  title: "Senior Social Media Strategist",
                  type: "Full-time",
                  location: "Remote",
                  description: "Lead strategic social media campaigns for enterprise clients and mentor junior team members.",
                  requirements: ["5+ years experience", "Strategy expertise", "Team leadership"],
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Content Marketing Specialist",
                  type: "Full-time",
                  location: "Hybrid",
                  description: "Create compelling content strategies and manage content production across multiple platforms.",
                  requirements: ["3+ years experience", "Content creation", "SEO knowledge"],
                  color: "from-red-500 to-pink-500"
                },
                {
                  title: "Digital Marketing Analyst",
                  type: "Full-time",
                  location: "On-site",
                  description: "Analyze campaign performance, generate insights, and optimize strategies for better ROI.",
                  requirements: ["Analytics experience", "Data visualization", "Marketing metrics"],
                  color: "from-pink-500 to-purple-500"
                },
                {
                  title: "Social Media Manager",
                  type: "Full-time",
                  location: "Remote",
                  description: "Manage social media accounts, create content calendars, and engage with audiences.",
                  requirements: ["2+ years experience", "Social platforms", "Community management"],
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  title: "UI/UX Designer",
                  type: "Contract",
                  location: "Remote",
                  description: "Design user interfaces and experiences for web and mobile applications.",
                  requirements: ["Design portfolio", "Figma/Sketch", "User research"],
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Marketing Coordinator",
                  type: "Full-time",
                  location: "Hybrid",
                  description: "Support marketing initiatives, coordinate campaigns, and assist with project management.",
                  requirements: ["1+ years experience", "Organization skills", "Marketing tools"],
                  color: "from-blue-500 to-cyan-500"
                }
              ].map((job, index) => (
                <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${job.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${job.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                              <Users className="w-5 h-5" />
                            </div>
                            <div>
                              <span className={`px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm`}>
                                {job.type}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm opacity-90">{job.location}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <p className="text-white/90 text-sm leading-relaxed">{job.description}</p>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Requirements:</h4>
                      <div className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Button className={`w-full bg-gradient-to-r ${job.color} hover:opacity-90 text-white border-0`}>
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 md:p-12 border border-orange-200/50 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see the perfect role?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're always interested in connecting with talented individuals. Send us your resume and let's discuss opportunities.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  Send Your Resume
                  <MessageSquare className="ml-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

    </div>
  );
};

export default InsightsPage;
