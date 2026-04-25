import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Target, Zap, Globe, TrendingUp, Users, Video, BarChart3, Mail, BrainCircuit, Code, Shield, BookOpen, Rocket } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { SOLUTION_SUB_SERVICES, getSolutionSubServices, getSubService } from '@/lib/config/sub-services-catalog';
import { SERVICE_DETAIL_CONTENT, SERVICES_PAGE_CONTENT, toServiceSlug } from '@/lib/config/services-catalog';
import { notFound } from 'next/navigation';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe, TrendingUp, Users, Video, Target, BarChart3, Mail, BrainCircuit, Code, Shield, BookOpen, Rocket, Zap,
};

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; badge: string; bar: string }> = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', badge: 'bg-emerald-100 text-emerald-700', bar: 'from-emerald-500 to-teal-500' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100', badge: 'bg-blue-100 text-blue-700', bar: 'from-blue-500 to-indigo-500' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100', badge: 'bg-purple-100 text-purple-700', bar: 'from-purple-500 to-violet-500' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100', badge: 'bg-orange-100 text-orange-700', bar: 'from-orange-500 to-amber-500' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-700', bar: 'from-indigo-500 to-violet-500' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-100', badge: 'bg-cyan-100 text-cyan-700', bar: 'from-cyan-500 to-blue-500' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-100', badge: 'bg-teal-100 text-teal-700', bar: 'from-teal-500 to-green-500' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-100', badge: 'bg-violet-100 text-violet-700', bar: 'from-violet-500 to-purple-500' },
};

export function generateStaticParams() {
  const params: { slug: string; subSlug: string }[] = [];
  for (const solution of SOLUTION_SUB_SERVICES) {
    for (const sub of solution.subServices) {
      params.push({ slug: solution.solutionSlug, subSlug: sub.slug });
    }
  }
  return params;
}

export default async function SubServicePage({ params }: { params: Promise<{ slug: string; subSlug: string }> }) {
  const { slug, subSlug } = await params;
  const solution = getSolutionSubServices(slug);
  const sub = getSubService(slug, subSlug);

  if (!solution || !sub) notFound();

  const c = COLOR_MAP[solution.color] || COLOR_MAP.blue;
  const Icon = ICON_MAP[sub.icon] || Rocket;
  const otherSubs = solution.subServices.filter(s => s.slug !== subSlug);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-950 pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 30%, #8b5cf6 0%, transparent 50%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <Container className="relative z-10">
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href="/solutions" className="text-gray-500 hover:text-white transition-colors">Solutions</Link>
            <span className="text-gray-700">/</span>
            <Link href={`/solutions/${slug}`} className="text-gray-500 hover:text-white transition-colors">{solution.solutionTitle}</Link>
            <span className="text-gray-700">/</span>
            <span className="text-gray-300">{sub.title}</span>
          </div>
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 ${c.badge}`}>
              <Icon className="w-3.5 h-3.5" /> {solution.section} System
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">{sub.title}</h1>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">{sub.tagline}</p>
            <p className="text-gray-500 leading-relaxed max-w-2xl">{sub.description}</p>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* Deliverables */}
              <div className={`bg-white rounded-2xl border ${c.border} p-7 shadow-sm`}>
                <div className={`flex items-center gap-2 ${c.text} text-sm font-bold mb-5`}>
                  <CheckCircle2 className="w-4 h-4" /> What's Included
                </div>
                <div className="space-y-3">
                  {sub.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${c.badge} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <CheckCircle2 className={`w-3 h-3 ${c.text}`} />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                <div className="flex items-center gap-2 text-gray-700 text-sm font-bold mb-6">
                  <Zap className="w-4 h-4 text-gray-500" /> How It Works
                </div>
                <div className="space-y-4">
                  {sub.process.map((p, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className={`w-9 h-9 rounded-xl ${c.badge} flex items-center justify-center flex-shrink-0 text-xs font-black ${c.text}`}>
                        {p.step}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm mb-0.5">{p.title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="bg-gray-950 rounded-2xl p-7">
                <div className="flex items-center gap-2 text-white text-sm font-bold mb-5">
                  <TrendingUp className="w-4 h-4 text-green-400" /> Expected Outcomes
                </div>
                <div className="space-y-3">
                  {sub.outcomes.map((o, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{o}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Ideal For */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="text-sm font-bold text-gray-700 mb-4">Ideal For</div>
                <div className="space-y-3">
                  {sub.idealFor.map((item, i) => (
                    <div key={i} className={`p-3 rounded-xl ${c.bg} border ${c.border}`}>
                      <p className={`text-xs font-medium ${c.text} leading-relaxed`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-950 rounded-2xl p-6">
                <div className="text-white font-bold mb-2">Ready to get started?</div>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">Let's scope this for your business — no commitment required.</p>
                <Link href="/contact" className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r ${c.bar} text-white text-sm font-semibold hover:opacity-90 transition-all`}>
                  Book a free call <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Other services in this solution */}
              {otherSubs.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="text-sm font-bold text-gray-700 mb-4">Also in {solution.solutionTitle}</div>
                  <div className="space-y-2">
                    {otherSubs.map(s => {
                      const OtherIcon = ICON_MAP[s.icon] || Rocket;
                      return (
                        <Link key={s.slug} href={`/solutions/${slug}/${s.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all group">
                          <div className={`w-8 h-8 rounded-lg ${c.badge} flex items-center justify-center flex-shrink-0`}>
                            <OtherIcon className={`w-4 h-4 ${c.text}`} />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{s.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-gray-500 transition-colors" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
