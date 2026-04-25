'use client';

import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SERVICES_CASE_STUDIES, SERVICES_PAGE_CONTENT } from '@/lib/config/services-catalog';
import {
  CheckCircle, Star, Zap, Users, Target, BarChart3, ArrowRight,
  Trophy, Award, Clock, Rocket, Code, TrendingUp, Shield, Globe,
  BrainCircuit, MessageSquare, Lightbulb
} from 'lucide-react';

const toSlug = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');

const ICON_MAP: Record<string, React.ElementType> = {
  lead: Target, personal: Users, opsflow: BrainCircuit, smartlayer: BrainCircuit,
  workflow: Code, cloud: Shield, query: BarChart3, growth: TrendingUp, content: TrendingUp,
};
const getIcon = (title: string): React.ElementType => {
  const t = title.toLowerCase();
  for (const [k, v] of Object.entries(ICON_MAP)) { if (t.includes(k)) return v; }
  return Rocket;
};

const GROWTH_SYSTEMS = [
  { title: 'Content & Social Growth System', description: 'A consistent content engine that builds your audience and keeps your brand visible without manual chaos.', outcomes: ['Consistent multi-platform presence without burning team time', 'Content designed for the right audience, not vanity followers', 'A repeatable process your team can run or fully outsource'], tag: 'Ongoing system', icon: Globe },
  { title: 'Lead Generation System', description: 'A targeted outreach and nurture flow that creates a predictable pipeline without relying on ads alone.', outcomes: ['Steady flow of warm and qualified leads each month', 'Shorter sales cycles with better-prepared prospects', 'Clear attribution so you know exactly where leads come from'], tag: 'Ongoing system', icon: TrendingUp },
  { title: 'Personal Brand System', description: 'A LinkedIn-first system that turns founder visibility into trust, inbound demand, and deals.', outcomes: ['Founder profile becomes a sales asset that works daily', 'Category authority that shortens sales conversations', 'Inbound opportunities from the right people in your market'], tag: 'LinkedIn-focused', icon: Users },
];

const EFFICIENCY_SYSTEMS = [
  { title: 'OpsFlow AI', description: 'We audit expensive manual workflows and automate high-impact operations so teams focus on meaningful work.', outcomes: ['Reduce repetitive manual work by 40-70%', 'Lower operational cost without abrupt team disruption', 'Faster execution across sales, support, onboarding, and ops'], tag: 'AI automation audit', icon: BrainCircuit },
  { title: 'WorkflowOS', description: 'We replace scattered docs, sheets, and handoffs with one structured operating system your team can trust.', outcomes: ['Replace 5-10 fragmented workflows with one clean system', 'Less coordination overhead and more execution time', 'Reduced handoff errors and stronger process accountability'], tag: 'Internal tools sprint', icon: Code },
  { title: 'CloudTrim', description: 'We optimize cloud spending and architecture so you pay for what you use and scale without infrastructure panic.', outcomes: ['Cut cloud cost by 40-60% with low migration risk', 'Infrastructure prepared for 5x scale growth', 'Clear documented setup that is not person-dependent'], tag: 'Infrastructure optimization', icon: Shield },
  { title: 'QueryBoost', description: 'We remove data-layer bottlenecks and improve database performance to speed up app and API response times.', outcomes: ['5-10x faster load time and API performance', 'Database readiness for 3-5x current traffic', 'Fewer production slowdowns and firefighting cycles'], tag: 'Database performance', icon: BarChart3 },
  { title: 'SmartLayer AI', description: 'We identify high-impact AI opportunities, build testable prototypes, and deliver a fast shipping roadmap.', outcomes: ['Clarity on AI features that actually move product metrics', 'Working proofs you can test with real users quickly', 'Cut AI feature timeline from months to weeks'], tag: 'AI integration strategy', icon: Rocket },
];

export default function SolutionsPage() {
  const content = SERVICES_PAGE_CONTENT;
  const caseStudies = SERVICES_CASE_STUDIES;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Hero className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 pb-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)' }} />
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-5">
                <Zap className="w-3.5 h-3.5" /> Growth & Efficiency Systems
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
                Systems that<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">drive results.</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                We design structured Growth and Efficiency systems that help businesses scale demand, improve speed, and operate with less friction.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {[{ value: '50+', label: 'Clients' }, { value: '3x', label: 'Avg. Growth' }, { value: '24/7', label: 'Support' }].map(s => (
                  <div key={s.label} className="text-center px-4 py-2 rounded-xl bg-white/10 border border-white/20">
                    <div className="text-xl font-extrabold text-white">{s.value}</div>
                    <div className="text-xs text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3">
              {[
                { icon: TrendingUp, title: 'Content & Social Growth', color: 'from-emerald-500 to-teal-600' },
                { icon: Target, title: 'Lead Generation System', color: 'from-blue-500 to-indigo-600' },
                { icon: Users, title: 'Personal Brand System', color: 'from-purple-500 to-violet-600' },
                { icon: BrainCircuit, title: 'OpsFlow AI', color: 'from-orange-500 to-amber-600' },
                { icon: Shield, title: 'CloudTrim', color: 'from-cyan-500 to-blue-600' },
                { icon: Rocket, title: 'SmartLayer AI', color: 'from-pink-500 to-rose-600' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-all">
                  <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} text-white mb-2.5`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-semibold text-white leading-snug">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Hero>

      {/* Quick nav */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <Container>
          <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
            {[
              { href: '#growth', label: 'Growth Systems' },
              { href: '#efficiency', label: 'Efficiency Systems' },
              { href: '#packages', label: 'All Packages' },
              { href: '#results', label: 'Results' },
            ].map(item => (
              <a key={item.href} href={item.href} className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all">
                {item.label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Systems Framework */}
      <Section id="growth" className="py-16 bg-gray-50 scroll-mt-28">
        <Container>
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-2">Section 01</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Growth Systems</h2>
              <p className="text-slate-600 md:max-w-xl">For companies that want a repeatable demand and revenue engine, not random posting and one-time campaigns.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {GROWTH_SYSTEMS.map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">Growth</span>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="space-y-2 mb-4">
                  {item.outcomes.map(o => (
                    <div key={o} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-slate-600 leading-relaxed">{o}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 rounded bg-slate-100 text-slate-500 text-xs">{item.tag}</span>
                  <Link href={`/solutions/${toSlug(item.title)}`} className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800">
                    Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="efficiency" className="py-16 bg-white scroll-mt-28">
        <Container>
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-2">Section 02</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Efficiency Systems</h2>
              <p className="text-slate-600 md:max-w-xl">For companies losing speed and margin due to manual workflows, broken handoffs, and technical debt.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {EFFICIENCY_SYSTEMS.map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl border border-indigo-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">Efficiency</span>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="space-y-2 mb-4">
                  {item.outcomes.map(o => (
                    <div key={o} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-slate-600 leading-relaxed">{o}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 rounded bg-slate-100 text-slate-500 text-xs">{item.tag}</span>
                  <Link href={`/solutions/${toSlug(item.title)}`} className="inline-flex items-center text-xs font-semibold text-indigo-700 hover:text-indigo-800">
                    Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* All Packages */}
      <Section id="packages" className="py-16 bg-gray-50 scroll-mt-28">
        <Container>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">All Packages</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Choose your system</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {content.services?.map((service, index) => {
              const palettes = [
                { gradient: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', border: 'border-blue-100' },
                { gradient: 'from-purple-500 to-pink-600', light: 'bg-purple-50', border: 'border-purple-100' },
                { gradient: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50', border: 'border-emerald-100' },
                { gradient: 'from-orange-500 to-amber-600', light: 'bg-orange-50', border: 'border-orange-100' },
                { gradient: 'from-indigo-500 to-violet-600', light: 'bg-indigo-50', border: 'border-indigo-100' },
                { gradient: 'from-cyan-500 to-blue-600', light: 'bg-cyan-50', border: 'border-cyan-100' },
                { gradient: 'from-pink-500 to-rose-600', light: 'bg-pink-50', border: 'border-pink-100' },
                { gradient: 'from-teal-500 to-green-600', light: 'bg-teal-50', border: 'border-teal-100' },
              ];
              const p = palettes[index % palettes.length];
              const Icon = getIcon(service.title);

              return (
                <div key={service.id} className={`group flex flex-col bg-white rounded-2xl border ${p.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
                  <div className={`p-5 ${p.light} border-b ${p.border}`}>
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${p.gradient} text-white shadow mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{service.description}</p>
                  </div>
                  <div className="px-5 py-4 flex-grow space-y-2">
                    {(service.features || []).slice(0, 3).map((f: string, fi: number) => (
                      <div key={fi} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-xs leading-relaxed">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 pb-5 space-y-2 mt-auto">
                    <Button className={`w-full py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r ${p.gradient} text-white border-0 hover:opacity-90 transition-all`} onClick={() => window.open('/contact', '_self')}>
                      Get Started <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </Button>
                    <Button variant="outline" asChild className={`w-full py-2 text-xs font-semibold rounded-xl border ${p.border} text-gray-600 hover:${p.light}`}>
                      <Link href={`/solutions/${toSlug(service.title)}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section id="results" className="py-16 bg-white scroll-mt-28">
        <Container>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Results</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Real impact, real numbers</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => {
              const palettes = [
                { bar: 'from-blue-500 to-indigo-500', stat: 'text-blue-600', badge: 'bg-blue-50 text-blue-700 border-blue-100' },
                { bar: 'from-purple-500 to-pink-500', stat: 'text-purple-600', badge: 'bg-purple-50 text-purple-700 border-purple-100' },
                { bar: 'from-emerald-500 to-teal-500', stat: 'text-emerald-600', badge: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
              ];
              const p = palettes[index % 3];
              return (
                <div key={study.slug || index} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${p.bar}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{study.company}</h3>
                        <p className="text-gray-400 text-xs">{study.industry}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${p.badge}`}>{study.service}</span>
                    </div>
                    <p className={`text-xl font-extrabold ${p.stat} mb-1`}>{study.results}</p>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
                      <Clock className="w-3.5 h-3.5" /> achieved in {study.duration}
                    </div>
                    {study.metrics && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {study.metrics.slice(0, 4).map((m: { before: string; after: string; improvement: string }, i: number) => (
                          <div key={i} className="bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
                            <p className={`text-sm font-extrabold ${p.stat}`}>{m.improvement}</p>
                            <p className="text-gray-400 text-[11px]">{m.before} → {m.after}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {study.testimonial && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <p className="text-gray-600 italic text-xs leading-relaxed mb-2">"{typeof study.testimonial === 'object' ? study.testimonial.quote : study.testimonial}"</p>
                        <p className="text-gray-900 text-xs font-bold">{typeof study.testimonial === 'object' ? study.testimonial.author : ''}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-slate-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Ready to build your system?</h2>
              <p className="text-slate-400">Let's scope what's right for your business — no fluff, just results.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/contact" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all">
                Book a call
              </Link>
              <Link href="/portfolio" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">
                View Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
