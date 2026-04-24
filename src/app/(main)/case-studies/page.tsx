'use client';

import { useState } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CASE_STUDIES, type CaseStudyItem } from '@/lib/config/case-studies-catalog';
import {
  ArrowLeft,
  Users,
  TrendingUp,
  Calendar,
  Award,
  Target,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage = () => {
  const caseStudies = CASE_STUDIES;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(caseStudies.map((study) => study.service))).filter(Boolean)];

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.service === selectedCategory || study.tags?.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 md:pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-200">
            <Award className="w-4 h-4 mr-2" />
            Case Studies
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Success Stories
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses. Explore our comprehensive case studies to see how we've helped companies achieve remarkable growth across all our services.
          </p>
        </div>
      </Hero>

      {/* Stats Section */}
      <Section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Successful Projects", icon: Target },
              { number: "98%", label: "Client Satisfaction", icon: Award },
              { number: "300%", label: "Average ROI Increase", icon: TrendingUp },
              { number: "24/7", label: "Ongoing Support", icon: Users }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-blue-200 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies Section */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deep into our most successful projects and discover the strategies that drove exceptional results
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study: CaseStudyItem, index) => (
              <Link key={study.slug || study.id || index} href={`/case-studies/${study.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      {study.service && (
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                          {study.service}
                        </Badge>
                      )}
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {study.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-semibold text-gray-900">{study.company}</p>
                        <p className="text-sm text-gray-600">{study.industry}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {Array.isArray(study.results) ? study.results[0] : study.results.split(',')[0]}
                      </div>
                      <div className="text-sm text-gray-600">
                        Key Result
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Challenge</h4>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {study.challenge}
                      </p>
                    </div>

                    {study.solution && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Solution</h4>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {study.solution}
                        </p>
                      </div>
                    )}

                    {(study.clientName || (typeof study.testimonial === 'object' && study.testimonial.author)) && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-blue-600">
                                {(study.clientName || (typeof study.testimonial === 'object' && study.testimonial.author) || 'C').charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {study.clientName || (typeof study.testimonial === 'object' && study.testimonial.author)}
                              </p>
                              <p className="text-xs text-gray-600">
                                {study.clientPosition || (typeof study.testimonial === 'object' && study.testimonial.position)}
                              </p>
                            </div>
                          </div>
                          <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <TrendingUp className="w-5 h-5 text-green-300" />
                <span className="text-sm font-semibold">10M+ Impressions Generated</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Award className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">100+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Users className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-semibold">50+ Happy Clients</span>
              </div>
            </div>

            {/* Main content */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-semibold backdrop-blur-sm">
                  LIMITED SPOTS AVAILABLE
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Write Your
                <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Success Story?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed max-w-3xl mx-auto">
                Join the brands that are dominating their markets with data-driven social media strategies.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto">
                Get a free strategy session and discover how we can 10x your social media ROI in 90 days.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-bold rounded-2xl shadow-2xl group min-w-[240px]"
                >
                  <span>Start Your Project</span>
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-bold rounded-2xl backdrop-blur-sm bg-white/10 min-w-[240px]"
                >
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Additional trust elements */}
            <div className="text-center">
              <p className="text-sm text-blue-200 mb-4">
                🚀 Free consultation • 💰 No long-term contracts • ⚡ Results in 30 days or less
              </p>
              <div className="flex items-center justify-center space-x-6 text-blue-200 text-sm">
                <span className="flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  Strategic Planning
                </span>
                <span className="flex items-center">
                  <BarChart3 className="w-4 h-4 mr-1" />
                  Data-Driven Results
                </span>
                <span className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  Proven Track Record
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default CaseStudiesPage;
