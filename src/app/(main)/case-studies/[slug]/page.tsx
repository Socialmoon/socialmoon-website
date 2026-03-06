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
  company?: string;
  client?: string;
  industry: string;
  service?: string;
  duration: string;
  overview?: string;
  results: string | string[];
  challenge: string;
  solution?: string;
  approach: string | string[];
  execution?: string;
  metrics: {
    [key: string]: string;
  };
  testimonial: string | {
    quote: string;
    author: string;
    position: string;
  };
  clientName?: string;
  clientPosition?: string;
  images: string[];
  tags?: string[];
  featured?: boolean;
  published?: boolean;
  completedDate?: string;
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
      <Hero className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20 md:pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-semibold transition-all hover:gap-3 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {caseStudy.service && (
                <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1.5 text-sm font-semibold">
                  {caseStudy.service}
                </Badge>
              )}
              {caseStudy.tags && caseStudy.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} className="bg-white/80 text-gray-700 border border-gray-200 hover:bg-white px-4 py-1.5 text-sm font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              {caseStudy.title}
            </h1>
            {caseStudy.overview ? (
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
                {caseStudy.overview}
              </p>
            ) : (
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
                A comprehensive case study of how we helped {caseStudy.company || caseStudy.client} achieve remarkable results through strategic digital marketing.
              </p>
            )}

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-gray-100">
                <Users className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-semibold text-gray-900">{caseStudy.company || caseStudy.client}</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-gray-100">
                <Award className="w-5 h-5 mr-3 text-purple-600" />
                <span className="font-medium text-gray-700">{caseStudy.industry}</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-gray-100">
                <Calendar className="w-5 h-5 mr-3 text-pink-600" />
                <span className="font-medium text-gray-700">{caseStudy.duration}</span>
              </div>
            </div>
          </div>

          {/* Key Results - Enhanced */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <Badge className="bg-green-100 text-green-700 mb-4 px-4 py-1.5 font-semibold">
                  🎯 BUSINESS IMPACT
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Key Results Achieved
                </h2>
                {Array.isArray(caseStudy.results) && (
                  <div className="space-y-3 max-w-3xl mx-auto">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-start justify-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-lg text-gray-700 font-medium text-left">{result}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {caseStudy.metrics && Object.entries(caseStudy.metrics).map(([key, value], index) => {
                  const gradients = [
                    'from-blue-500 to-cyan-500',
                    'from-purple-500 to-pink-500',
                    'from-green-500 to-emerald-500',
                    'from-orange-500 to-red-500'
                  ];
                  const gradient = gradients[index % gradients.length];
                  
                  return (
                    <div key={index} className="relative group">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-75 group-hover:opacity-100 blur transition-all duration-300`}></div>
                      <div className="relative bg-white p-8 rounded-2xl text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>{value}</div>
                        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Hero>

      {/* Challenge & Solution */}
      <Section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-100 rounded-full opacity-50"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    The Challenge
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            {caseStudy.solution && (
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-100 rounded-full opacity-50"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Our Solution
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Approach Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4 px-4 py-1.5 font-semibold">
              📋 OUR STRATEGY
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step methodology that delivered exceptional results
            </p>
          </div>

          {Array.isArray(caseStudy.approach) ? (
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              
              <div className="space-y-8">
                {caseStudy.approach.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-6 group">
                    {/* Timeline node */}
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl items-center justify-center text-xl font-bold shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    
                    {/* Content card */}
                    <div className="flex-1 bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="md:hidden w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">{caseStudy.approach}</div>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* Execution Section (if available) */}
      {caseStudy.execution && (
        <Section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <div className="text-center mb-12">
              <Badge className="bg-purple-100 text-purple-700 mb-4 px-4 py-1.5 font-semibold">
                ⚡ EXECUTION
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Execution Strategy
              </h2>
            </div>
            <div className="bg-gradient-to-br from-white to-purple-50 p-8 md:p-12 rounded-3xl shadow-2xl border border-purple-100 max-w-5xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">{caseStudy.execution}</div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Testimonial Section */}
      <Section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-1.5 font-semibold backdrop-blur-sm">
              💬 CLIENT TESTIMONIAL
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              What Our Client Says
            </h2>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl">
                <div className="mb-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8v8c0 2.2-1.8 4-4 4H4c-.6 0-1-.4-1-1s.4-1 1-1h2c1.1 0 2-.9 2-2V8c0-.6.4-1 1-1s1 .4 1 1zm16 0v8c0 2.2-1.8 4-4 4h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c1.1 0 2-.9 2-2V8c0-.6.4-1 1-1s1 .4 1 1z"/>
                    </svg>
                  </div>
                  <p className="text-2xl md:text-3xl leading-relaxed font-medium">
                    "{typeof caseStudy.testimonial === 'string' ? caseStudy.testimonial : caseStudy.testimonial?.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {(typeof caseStudy.testimonial === 'object' ? caseStudy.testimonial.author : caseStudy.clientName || 'C').charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-xl text-white mb-1">
                      {typeof caseStudy.testimonial === 'object' ? caseStudy.testimonial.author : caseStudy.clientName}
                    </div>
                    <div className="text-blue-100 font-medium">
                      {typeof caseStudy.testimonial === 'object' ? caseStudy.testimonial.position : caseStudy.clientPosition}
                    </div>
                    <div className="text-blue-200 text-sm mt-1">{caseStudy.company || caseStudy.client}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16">
            <Badge className="bg-pink-100 text-pink-700 mb-4 px-4 py-1.5 font-semibold">
              📸 VISUAL SHOWCASE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Behind-the-scenes and result showcases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={image}
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">View {index + 1} of {caseStudy.images.length}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 font-semibold backdrop-blur-sm">
              🚀 GET STARTED TODAY
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Achieve
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Similar Results?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed">
              Let's discuss how we can help transform your business with proven strategies.
            </p>
            <p className="text-lg text-blue-200 mb-12">
              🎯 Free Strategy Session • 💰 No Long-term Contracts • ⚡ Results in 30 Days
            </p>
            
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
              <Link href="/case-studies">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-bold rounded-2xl backdrop-blur-sm bg-white/10 min-w-[240px]"
                >
                  More Success Stories
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 mr-2" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-4 h-4 mr-2" />
                <span>50+ Happy Clients</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default CaseStudyDetailPage;
