import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { CASE_STUDIES, getCaseStudyBySlug } from '@/lib/config/case-studies-catalog';
import {
  ArrowLeft,
  TrendingUp,
  Calendar,
  Users,
  CheckCircle,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

const normalizeResults = (results: string | string[]) =>
  Array.isArray(results) ? results : [results];

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative bg-gray-950 text-white pt-20 pb-16 px-4 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 overflow-hidden">
        {caseStudy.images && caseStudy.images.length > 0 && (
          <div className="absolute inset-0 opacity-20 transition-opacity duration-1000">
            <Image
              src={caseStudy.images[0]}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/80 to-gray-950"></div>
          </div>
        )}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-4xl mx-auto z-10">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            {caseStudy.service && (
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20">
                {caseStudy.service}
              </span>
            )}
            <span className="text-xs font-medium text-gray-500 bg-gray-800 px-3 py-1.5 rounded-full">
              {caseStudy.industry}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
            {caseStudy.title}
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-10">
            {caseStudy.overview || `How we helped ${caseStudy.company} achieve measurable business outcomes through focused systems execution.`}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400 border-t border-gray-800 pt-8">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-600" />
              <span className="text-white font-medium">{caseStudy.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span>{caseStudy.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gray-600" />
              <span className="text-green-400 font-medium">{normalizeResults(caseStudy.results)[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics bar */}
      {caseStudy.metrics && Object.keys(caseStudy.metrics).length > 0 && (
        <div className="relative -mt-12 z-20 max-w-5xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {Object.entries(caseStudy.metrics).slice(0, 4).map(([key, value], i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</p>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-red-500 rounded-full"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">The Challenge</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
          </div>
          {caseStudy.solution && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Our Solution</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
            </div>
          )}
        </div>

        {/* Approach */}
        {caseStudy.approach && (Array.isArray(caseStudy.approach) ? caseStudy.approach.length > 0 : true) && (
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Strategic Approach</h2>
            </div>
            {Array.isArray(caseStudy.approach) ? (
              <div className="space-y-4">
                {caseStudy.approach.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors text-sm font-bold flex items-center justify-center mt-0.5 shadow-sm">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 leading-relaxed">{caseStudy.approach}</p>
            )}
          </div>
        )}

        {/* Execution */}
        {caseStudy.execution && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-violet-500 rounded-full"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Execution</h2>
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{caseStudy.execution}</p>
          </div>
        )}

        {/* Results list */}
        {normalizeResults(caseStudy.results).length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Results Achieved</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {normalizeResults(caseStudy.results).map((result, i) => (
                <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  </div>
                  <p className="text-gray-800 text-[15px] font-medium leading-relaxed mt-1">{result}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <div className="bg-gray-950 rounded-2xl p-8 md:p-10">
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "{typeof caseStudy.testimonial === 'string' ? caseStudy.testimonial : caseStudy.testimonial?.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {(typeof caseStudy.testimonial === 'object' ? caseStudy.testimonial.author : caseStudy.clientName || '?').charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold">
                  {typeof caseStudy.testimonial === 'object' ? caseStudy.testimonial.author : caseStudy.clientName}
                </p>
                <p className="text-gray-400 text-sm">
                  {typeof caseStudy.testimonial === 'object' ? caseStudy.testimonial.position : caseStudy.clientPosition}
                  {caseStudy.company && ` · ${caseStudy.company}`}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Gallery */}
        {caseStudy.images && caseStudy.images.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-pink-500 rounded-full"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.images.map((image, index) => (
                <div key={index} className={`overflow-hidden rounded-xl ${index === 0 && caseStudy.images.length > 2 ? 'md:col-span-2' : ''}`}>
                  <img
                    src={image}
                    alt={`${caseStudy.title} - ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Ready for similar results?</h3>
            <p className="text-gray-500 text-sm">Let's talk about what we can do for your brand.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:flex-shrink-0">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-6">
                Get in touch
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </Link>
            <Link href="/case-studies" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto px-6">
                More stories
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
