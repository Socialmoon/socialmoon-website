'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  TrendingUp,
  Calendar,
  Users,
  Target,
  Award,
  ExternalLink,
  CheckCircle,
  BarChart3
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
  approach: string[];
  metrics: {
    before: string;
    after: string;
    improvement: string;
  }[];
  testimonial: string;
  clientName: string;
  clientPosition: string;
  images: string[];
}

const CaseStudyDetailPage = () => {
  const params = useParams();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params?.slug;
    if (slug) {
      try {
        // Fetch case studies from API
        const fetchCaseStudies = async () => {
          const response = await fetch('/api/case-studies');
          const data = await response.json();
          const foundCaseStudy = data.caseStudies.find((cs: CaseStudy) => cs.slug === slug);
          setCaseStudy(foundCaseStudy || null);
        };
        fetchCaseStudies();
      } catch (error) {
        console.error('Error fetching case study:', error);
      } finally {
        setLoading(false);
      }
    }
  }, [params?.slug]);

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

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link href="/case-studies">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
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

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              {caseStudy.service}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              A comprehensive case study of how we helped {caseStudy.company} achieve remarkable results through strategic digital marketing.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-medium">{caseStudy.company}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-2" />
                <span>{caseStudy.industry}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{caseStudy.duration}</span>
              </div>
            </div>
          </div>

          {/* Key Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Key Results Achieved
              </h2>
              <p className="text-lg text-gray-600">{caseStudy.results}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">{metric.improvement}</div>
                  <div className="text-sm text-gray-600 mb-2">Before: {metric.before}</div>
                  <div className="text-sm text-gray-600">After: {metric.after}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Hero>

      {/* Challenge & Solution */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Solution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Step-by-step methodology that delivered exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.approach.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonial Section */}
      <Section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Client Testimonial
            </h2>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="mb-8">
                <svg className="w-12 h-12 text-blue-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8c0 2.2-1.8 4-4 4H4c-.6 0-1-.4-1-1s.4-1 1-1h2c1.1 0 2-.9 2-2V8c0-.6.4-1 1-1s1 .4 1 1zm16 0v8c0 2.2-1.8 4-4 4h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c1.1 0 2-.9 2-2V8c0-.6.4-1 1-1s1 .4 1 1z"/>
                </svg>
                <p className="text-xl md:text-2xl leading-relaxed italic">
                  "{caseStudy.testimonial}"
                </p>
              </div>

              <div className="text-center">
                <div className="font-bold text-lg mb-1">{caseStudy.clientName}</div>
                <div className="text-blue-200">{caseStudy.clientPosition}</div>
                <div className="text-blue-200 text-sm mt-2">{caseStudy.company}</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Visuals
            </h2>
            <p className="text-xl text-gray-600">
              Behind-the-scenes and result showcases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Achieve Similar Results?
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
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default CaseStudyDetailPage;
