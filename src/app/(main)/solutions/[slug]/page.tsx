import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Target, Zap, Globe, TrendingUp, Users, Video, BarChart3, Mail, BrainCircuit, Code, Shield, BookOpen, Rocket } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { SERVICE_DETAIL_CONTENT, SERVICES_PAGE_CONTENT, toServiceSlug } from '@/lib/config/services-catalog';
import { getSolutionSubServices, SOLUTION_SUB_SERVICES } from '@/lib/config/sub-services-catalog';
import { notFound } from 'next/navigation';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe, TrendingUp, Users, Video, Target, BarChart3, Mail, BrainCircuit, Code, Shield, BookOpen, Rocket, Zap,
};

const COLOR_MAP: Record<string, { gradient: string; light: string; text: string; border: string; badge: string }> = {
  emerald: { gradient: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', badge: 'bg-emerald-100 text-emerald-700' },
  blue: { gradient: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100', badge: 'bg-blue-100 text-blue-700' },
  purple: { gradient: 'from-purple-500 to-violet-600', light: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100', badge: 'bg-purple-100 text-purple-700' },
  orange: { gradient: 'from-orange-500 to-amber-600', light: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100', badge: 'bg-orange-100 text-orange-700' },
  indigo: { gradient: 'from-indigo-500 to-violet-600', light: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-700' },
  cyan: { gradient: 'from-cyan-500 to-blue-600', light: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-100', badge: 'bg-cyan-100 text-cyan-700' },
  teal: { gradient: 'from-teal-500 to-green-600', light: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-100', badge: 'bg-teal-100 text-teal-700' },
  violet: { gradient: 'from-violet-500 to-purple-600', light: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-100', badge: 'bg-violet-100 text-violet-700' },
};

export function generateStaticParams() {
  return SOLUTION_SUB_SERVICES.map(s => ({ slug: s.solutionSlug }));
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const services = SERVICES_PAGE_CONTENT.services;
  const service = services.find(item => toServiceSlug(item.title) === slug);
  const solutionData = getSolutionSubServices(slug);

  if (!service) notFound();

  const detail = SERVICE_DETAIL_CONTENT[slug] || {
    section: 'Growth' as const,
    subtitle: service.description,
    deliverables: service.features || [],
    outcomes: [],
    idealFor: [],
  };

  const isGrowth = detail.section === 'Growth';
  const color = solutionData?.color || (isGrowth ? 'emerald' : 'indigo');
  const c = COLOR_MAP[color] || COLOR_MAP.blue;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className={`relative overflow-hidden pt-16 pb-20 ${isGrowth ? 'bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-950' : 'bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950'}`}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `radial-gradient(circle at 25% 50%, ${isGrowth ? '#10b981' : '#6366f1'} 0%, transparent 50%)` }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <Container className="relative z-10">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Solutions
          </Link>
          <div className="max-w-3xl">
            <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 ${c.badge}`}>
              {detail.section} System
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">{service.title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">{detail.subtitle}</p>
          </div>
        </Container>
      </div>

      {/* Sub-services — the main section */}
      {solutionData && solutionData.subServices.length > 0 && (
        <Section className="py-16 bg-white">
          <Container>
            <div className="mb-10">
              <p className={`text-xs font-bold uppercase tracking-widest ${c.text} mb-2`}>Services Included</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">What's inside this system</h2>
              <p className="text-gray-500 max-w-2xl">Each service below is a standalone capability within the {service.title}. Click any to see full details, deliverables, and process.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {solutionData.subServices.map((sub, i) => {
                const Icon = ICON_MAP[sub.icon] || Rocket;
                return (
                  <Link key={sub.slug} href={`/solutions/${slug}/${sub.slug}`} className="group block">
                    <div className={`h-full bg-white rounded-2xl border ${c.border} hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
                      <div className={`h-1 bg-gradient-to-r ${c.gradient}`} />
                      <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.gradient} text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-blue-700 transition-colors">{sub.title}</h3>
                            <p className={`text-xs font-semibold ${c.text} mt-0.5`}>{sub.tagline}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{sub.description}</p>
                        <div className="space-y-1.5">
                          {sub.deliverables.slice(0, 3).map((d, di) => (
                            <div key={di} className="flex items-center gap-2">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${c.text} flex-shrink-0`} />
                              <span className="text-xs text-gray-600">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* System details */}
      <Section className="py-14 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {detail.deliverables.length > 0 && (
              <div className={`rounded-2xl border ${c.border} bg-white p-7 shadow-sm`}>
                <div className={`flex items-center ${c.text} text-sm font-bold mb-4`}>
                  <Target className="w-4 h-4 mr-2" /> Core Deliverables
                </div>
                <div className="space-y-3">
                  {detail.deliverables.map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 ${c.text} mt-0.5 flex-shrink-0`} />
                      <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {detail.outcomes.length > 0 && (
              <div className="rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm">
                <div className="flex items-center text-indigo-700 text-sm font-bold mb-4">
                  <Sparkles className="w-4 h-4 mr-2" /> Expected Outcomes
                </div>
                <div className="space-y-3">
                  {detail.outcomes.map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {detail.idealFor.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
                <div className="flex items-center text-slate-700 text-sm font-bold mb-4">
                  <Sparkles className="w-4 h-4 mr-2" /> Ideal For
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {detail.idealFor.map(item => (
                    <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 rounded-2xl bg-gray-950 text-white p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.15em] text-slate-400 uppercase mb-2">Next Step</p>
              <p className="text-xl md:text-2xl font-extrabold">Let us scope this system for your business.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors flex-shrink-0">
              Talk to our team <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
