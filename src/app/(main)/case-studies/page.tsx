'use client';

import { useEffect, useState, useRef } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  company: string;
  industry: string;
  service: string;
  duration: string;
  results: string;
  challenge: string;
  solution: string;
  metrics: {
    before: string;
    after: string;
    improvement: string;
  }[];
  testimonial: string;
  clientName: string;
  clientPosition: string;
}

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const previousDataRef = useRef<string | null>(null);

  useEffect(() => {
    const fetchCaseStudies = async (isPolling = false) => {
      try {
        const response = await fetch('/api/case-studies');
        const data = await response.json();
        const studies = data.caseStudies || [];
        const studiesString = JSON.stringify(studies);

        // Only update if data has changed or it's the initial load
        if (!isPolling || studiesString !== previousDataRef.current) {
          setCaseStudies(studies);
          previousDataRef.current = studiesString;
        }
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        if (!isPolling) {
          setLoading(false);
        }
      }
    };

    fetchCaseStudies();

    // Poll for updates every 30 seconds
    const interval = setInterval(() => fetchCaseStudies(true), 30000);

    return () => clearInterval(interval);
  }, []);

  const categories = ['All', 'Social Media Management', 'Content Creation', 'Web Development', 'App Development'];

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.service === selectedCategory);

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

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
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
            {filteredCaseStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {study.service}
                      </Badge>
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
                        {study.results.split(',')[0]}
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

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Solution</h4>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {study.solution}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-blue-600">
                              {study.clientName.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{study.clientName}</p>
                            <p className="text-xs text-gray-600">{study.clientPosition}</p>
                          </div>
                        </div>
                        <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can help transform your business with proven strategies and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                  Start Your Project <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default CaseStudiesPage;
