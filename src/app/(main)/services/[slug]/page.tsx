import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Target } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import {
  SERVICE_DETAIL_CONTENT,
  SERVICES_PAGE_CONTENT,
  toServiceSlug,
} from '@/lib/config/services-catalog';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const services = SERVICES_PAGE_CONTENT.services;
  const service = services.find((item) => toServiceSlug(item.title) === slug);

  if (!service) {
    return (
      <Section className="py-20 bg-white min-h-screen">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-slate-500 mb-3">Service Not Found</p>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">This service is not available.</h1>
            <Link href="/services" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to services
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const detail = SERVICE_DETAIL_CONTENT[slug] || {
    section: 'Growth' as const,
    subtitle: service.description,
    deliverables: service.features || ['Custom scope planning', 'Execution roadmap', 'Performance checkpoints'],
    outcomes: service.features || ['Clear process ownership', 'Improved execution quality', 'Measurable business progress'],
    idealFor: ['Teams that want structured execution with measurable business outcomes'],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <Section className="py-14 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
        <Container>
          <Link href="/services" className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to services
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide mb-4">
              {detail.section} System
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">{service.title}</h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">{detail.subtitle}</p>
          </div>
        </Container>
      </Section>

      <Section className="py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
              <div className="inline-flex items-center text-emerald-700 text-sm font-bold mb-4">
                <Target className="w-4 h-4 mr-2" />
                What We Implement
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Core Deliverables</h2>
              <div className="space-y-3">
                {detail.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-white p-7 shadow-sm">
              <div className="inline-flex items-center text-indigo-700 text-sm font-bold mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Business Impact
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Expected Outcomes</h2>
              <div className="space-y-3">
                {detail.outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
              <div className="inline-flex items-center text-slate-700 text-sm font-bold mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Ideal For
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {detail.idealFor.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-slate-900 text-white p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.15em] text-slate-300 uppercase mb-2">Next Step</p>
              <p className="text-xl md:text-2xl font-extrabold">Let us scope this system for your business.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">
              Talk to our team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
