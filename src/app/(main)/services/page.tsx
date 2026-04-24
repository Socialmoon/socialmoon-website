'use client';

import { useState } from 'react';
import { Hero } from '@/components/common/Hero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SERVICES_CASE_STUDIES, SERVICES_PAGE_CONTENT, type ServiceItem } from '@/lib/config/services-catalog';
import {
  CheckCircle, Star, Zap, Users, MessageSquare, Target, BarChart3, ArrowRight,
  Lightbulb, Trophy, Award, Clock, Rocket, Code, Smartphone,
  TrendingUp, Shield, Heart, Globe,
  Video, Megaphone, PieChart, UserCheck, BrainCircuit, Search, Mail
} from 'lucide-react';

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const getServiceIcon = (title: string): { type: 'lucide' | 'brand'; icon: any } => {
  const t = title.toLowerCase();
  if (t.includes('lead')) return { type: 'lucide', icon: Target };
  if (t.includes('personal brand')) return { type: 'lucide', icon: Users };
  if (t.includes('opsflow') || t.includes('smartlayer')) return { type: 'lucide', icon: BrainCircuit };
  if (t.includes('workflow')) return { type: 'lucide', icon: Code };
  if (t.includes('cloud')) return { type: 'lucide', icon: Shield };
  if (t.includes('query')) return { type: 'lucide', icon: BarChart3 };
  if (t.includes('growth') || t.includes('content')) return { type: 'lucide', icon: TrendingUp };
  return { type: 'lucide', icon: Rocket };
};

const ServiceIcon = ({ title, className }: { title: string; className?: string }) => {
  const { type, icon: Icon } = getServiceIcon(title);
  return <Icon className={className} />;
};

const ServicesPage = () => {
  const [activeView, setActiveView] = useState<'overview' | 'detail' | 'pricing'>('overview');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const content = SERVICES_PAGE_CONTENT;
  const caseStudies = SERVICES_CASE_STUDIES;

  // serviceIcons resolved per service title via getServiceIcon()
  const growthSystems = [
    {
      title: 'Content & Social Growth System',
      description:
        'A consistent content engine that builds your audience and keeps your brand visible without manual chaos.',
      outcomes: [
        'Consistent multi-platform presence without burning team time',
        'Content designed for the right audience, not vanity followers',
        'A repeatable process your team can run or fully outsource',
      ],
      tag: 'Ongoing system',
      icon: Globe,
    },
    {
      title: 'Lead Generation System',
      description:
        'A targeted outreach and nurture flow that creates a predictable pipeline without relying on ads alone.',
      outcomes: [
        'Steady flow of warm and qualified leads each month',
        'Shorter sales cycles with better-prepared prospects',
        'Clear attribution so you know exactly where leads come from',
      ],
      tag: 'Ongoing system',
      icon: TrendingUp,
    },
    {
      title: 'Personal Brand System',
      description:
        'A LinkedIn-first system that turns founder visibility into trust, inbound demand, and deals.',
      outcomes: [
        'Founder profile becomes a sales asset that works daily',
        'Category authority that shortens sales conversations',
        'Inbound opportunities from the right people in your market',
      ],
      tag: 'LinkedIn-focused',
      icon: Users,
    },
  ];

  const efficiencySystems = [
    {
      title: 'OpsFlow AI',
      description:
        'We audit expensive manual workflows and automate high-impact operations so teams focus on meaningful work.',
      outcomes: [
        'Reduce repetitive manual work by 40-70%',
        'Lower operational cost without abrupt team disruption',
        'Faster execution across sales, support, onboarding, and ops',
      ],
      tag: 'AI automation audit',
      icon: BrainCircuit,
    },
    {
      title: 'WorkflowOS',
      description:
        'We replace scattered docs, sheets, and handoffs with one structured operating system your team can trust.',
      outcomes: [
        'Replace 5-10 fragmented workflows with one clean system',
        'Less coordination overhead and more execution time',
        'Reduced handoff errors and stronger process accountability',
      ],
      tag: 'Internal tools sprint',
      icon: Code,
    },
    {
      title: 'CloudTrim',
      description:
        'We optimize cloud spending and architecture so you pay for what you use and scale without infrastructure panic.',
      outcomes: [
        'Cut cloud cost by 40-60% with low migration risk',
        'Infrastructure prepared for 5x scale growth',
        'Clear documented setup that is not person-dependent',
      ],
      tag: 'Infrastructure optimization',
      icon: Shield,
    },
    {
      title: 'QueryBoost',
      description:
        'We remove data-layer bottlenecks and improve database performance to speed up app and API response times.',
      outcomes: [
        '5-10x faster load time and API performance',
        'Database readiness for 3-5x current traffic',
        'Fewer production slowdowns and firefighting cycles',
      ],
      tag: 'Database performance',
      icon: BarChart3,
    },
    {
      title: 'SmartLayer AI',
      description:
        'We identify high-impact AI opportunities, build testable prototypes, and deliver a fast shipping roadmap.',
      outcomes: [
        'Clarity on AI features that actually move product metrics',
        'Working proofs you can test with real users quickly',
        'Cut AI feature timeline from months to weeks',
      ],
      tag: 'AI integration strategy',
      icon: Rocket,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <Hero className="relative overflow-hidden bg-white pt-10 pb-12 md:pt-16 md:pb-16">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left — Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                <Zap className="w-4 h-4" />
                Comprehensive Digital Solutions
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Services that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 pb-1 inline-block">
                  drive growth.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We design growth systems and efficiency systems that help businesses scale demand, improve speed, and operate with less friction.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                {[
                  { value: '50+', label: 'Clients Served' },
                  { value: '3x', label: 'Avg. Engagement Growth' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-5 text-base font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
                  onClick={() => window.open('/contact', '_self')}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-50 px-7 py-5 text-base font-semibold rounded-xl transition-all"
                  onClick={() => window.open('/portfolio', '_self')}
                >
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Right — Service cards grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, title: 'Content & Social Growth', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
                { icon: Target, title: 'Lead Generation System', color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50' },
                { icon: Users, title: 'Personal Brand System', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50' },
                { icon: BrainCircuit, title: 'OpsFlow AI', color: 'from-green-500 to-teal-500', bg: 'bg-green-50' },
                { icon: Shield, title: 'CloudTrim', color: 'from-orange-500 to-amber-500', bg: 'bg-orange-50' },
                { icon: Rocket, title: 'SmartLayer AI', color: 'from-indigo-500 to-violet-500', bg: 'bg-indigo-50' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group ${i === 4 ? 'col-span-1' : ''} ${item.bg} rounded-2xl p-5 border border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default`}
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 leading-snug">{item.title}</p>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </Hero>

      {/* Experience Navigation Section */}
      <Section className="py-10 bg-white border-b border-gray-100 shadow-sm">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">All Services Overview</p>
            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              Explore structured Growth and Efficiency systems designed for measurable business outcomes.
            </p>

            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-2 shadow-sm inline-flex flex-wrap gap-2 justify-center">
              {[
                { href: '#systems-framework', label: 'Systems Framework' },
                { href: '#growth-systems', label: 'Growth Systems' },
                { href: '#efficiency-systems', label: 'Efficiency Systems' },
                { href: '#service-packages', label: 'All Service Packages' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-white transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Dynamic Content Section */}
      {activeView === 'overview' ? (
        <div className="overview-content">
          <Section id="systems-framework" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 border-b border-slate-100 scroll-mt-24">
            <Container>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold mb-4 shadow-sm">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Systems Framework
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  Two systems. One goal: a better-running business.
                </h2>
                <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                  We build structured Growth and Efficiency systems so your business scales faster, executes cleaner, and grows with control.
                </p>
              </div>

              <div id="growth-systems" className="mb-14 scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] text-emerald-600 uppercase mb-2">Section 01</p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Growth Systems</h3>
                  </div>
                  <p className="text-slate-600 md:max-w-2xl">
                    For companies that want a repeatable demand and revenue engine, not random posting and one-time campaigns.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {growthSystems.map((item) => (
                    <div key={item.title} className="group rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">Growth</span>
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <item.icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>

                      <div className="space-y-2.5 mb-4">
                        {item.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 leading-relaxed">{outcome}</span>
                          </div>
                        ))}
                      </div>

                      <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-500 text-xs font-medium">
                        {item.tag}
                      </span>

                      <div className="mt-4">
                        <Link href={`/services/${toSlug(item.title)}`} className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="efficiency-systems" className="scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] text-indigo-600 uppercase mb-2">Section 02</p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Efficiency Systems</h3>
                  </div>
                  <p className="text-slate-600 md:max-w-2xl">
                    For companies losing speed and margin due to manual workflows, broken handoffs, and technical debt.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {efficiencySystems.map((item) => (
                    <div key={item.title} className="group rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">Efficiency</span>
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <item.icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>

                      <div className="space-y-2.5 mb-4">
                        {item.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 leading-relaxed">{outcome}</span>
                          </div>
                        ))}
                      </div>

                      <span className="inline-flex px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-500 text-xs font-medium">
                        {item.tag}
                      </span>

                      <div className="mt-4">
                        <Link href={`/services/${toSlug(item.title)}`} className="inline-flex items-center text-sm font-semibold text-indigo-700 hover:text-indigo-800">
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          {/* Services Grid */}
          <Section id="service-packages" className="py-16 md:py-20 bg-white scroll-mt-24">
            <Container>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
                  <Target className="w-4 h-4" />
                  Service Packages
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 pb-1">
                  Choose Your Perfect{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Package</span>
                </h2>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                  Flexible plans designed to grow with you — from startups to established brands.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {content.services?.map((service, index) => {
                  const palettes = [
                    { gradient: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', border: 'border-blue-100', ring: 'ring-blue-500' },
                    { gradient: 'from-purple-500 to-pink-600', light: 'bg-purple-50', border: 'border-purple-100', ring: 'ring-purple-500' },
                    { gradient: 'from-green-500 to-teal-600', light: 'bg-green-50', border: 'border-green-100', ring: 'ring-green-500' },
                    { gradient: 'from-orange-500 to-amber-600', light: 'bg-orange-50', border: 'border-orange-100', ring: 'ring-orange-500' },
                    { gradient: 'from-indigo-500 to-violet-600', light: 'bg-indigo-50', border: 'border-indigo-100', ring: 'ring-indigo-500' },
                    { gradient: 'from-cyan-500 to-blue-600', light: 'bg-cyan-50', border: 'border-cyan-100', ring: 'ring-cyan-500' },
                  ];
                  const palette = palettes[index % 6];
                  const isPopular = service.popular || index === 1;

                  const serviceFeatures = service.features || [
                    'Professional service delivery',
                    'Dedicated account manager',
                    'Monthly progress reports',
                    'Priority support',
                    'Flexible scheduling',
                  ];
                  const isCustomPricing = typeof service.price === 'string' && service.price.toLowerCase() === 'custom';

                  return (
                    <div key={service.id} className={`group relative flex flex-col bg-white rounded-3xl border ${palette.border} shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden`}>

                      {/* Popular badge */}
                      {isPopular && (
                        <div className={`absolute top-4 right-4 z-10 bg-gradient-to-r ${palette.gradient} text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg`}>
                          <Star className="w-3 h-3 fill-white" />
                          POPULAR
                        </div>
                      )}

                      {/* Card top — icon + title */}
                      <div className={`p-6 ${palette.light} border-b ${palette.border}`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${palette.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <ServiceIcon title={service.title} className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">{service.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                      </div>

                      {/* Price */}
                      <div className="px-6 py-4 border-b border-gray-100 flex items-baseline gap-1">
                        {isCustomPricing ? (
                          <span className="text-base font-semibold text-blue-700">Custom pricing - Talk to team</span>
                        ) : (
                          <>
                            <span className="text-gray-400 text-sm">Starting from</span>
                            <span className={`text-2xl font-extrabold bg-gradient-to-r ${palette.gradient} bg-clip-text text-transparent ml-1`}>
                              {service.price}
                            </span>
                            {service.price && !(typeof service.price === 'string' && service.price.includes('$')) && (
                              <span className="text-gray-400 text-sm">/mo</span>
                            )}
                          </>
                        )}
                      </div>

                      {/* Features */}
                      <div className="px-6 py-5 flex-grow space-y-3">
                        {serviceFeatures.slice(0, 5).map((feature: string, fi: number) => (
                          <div key={fi} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${palette.gradient} flex items-center justify-center mt-0.5`}>
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="px-6 pb-6 pt-2 space-y-2 mt-auto">
                        <Button
                          className={`w-full py-5 text-sm font-bold rounded-xl bg-gradient-to-r ${palette.gradient} text-white border-0 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200`}
                          onClick={() => window.open('/contact', '_self')}
                        >
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className={`w-full py-4 text-sm font-semibold rounded-xl border ${palette.border} text-gray-600 hover:${palette.light} transition-all duration-200`}
                        >
                          <Link href={`/services/${toSlug(service.title)}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </Section>
        </div>
      ) : selectedService && activeView === 'detail' ? (
        <Section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Service Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200/50">
                  <Target className="w-4 h-4 mr-2" />
                  Service Details
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  {selectedService.title}
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                  {selectedService.description}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 border border-blue-200/50 shadow-lg">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                        {typeof selectedService.price === 'string' && selectedService.price.toLowerCase() === 'custom'
                          ? 'Talk to team for pricing'
                          : `Starting from ${selectedService.price}/month`}
                      </div>
                    </div>
                    <div className="hidden sm:block h-16 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                    <div className="hidden sm:block h-16 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">30</div>
                      <div className="text-gray-600">Day Setup</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Features */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h3>
                  <div className="space-y-6">
                    {(() => {
                      const gradients = [
                        'from-blue-500 to-purple-600',
                        'from-green-500 to-teal-600',
                        'from-purple-500 to-pink-600',
                        'from-orange-500 to-red-600',
                        'from-indigo-500 to-blue-600',
                        'from-emerald-500 to-cyan-600'
                      ];
                      const gradient = gradients[selectedService.id - 1] || 'from-gray-500 to-gray-600';
                      const featureIcons = [Target, TrendingUp, Users, BrainCircuit, Shield, Rocket];
                      const features = (selectedService.features && selectedService.features.length > 0
                        ? selectedService.features
                        : [
                            'Custom scope planning and implementation roadmap',
                            'Structured operating model with measurable milestones',
                            'Execution support and optimization checkpoints',
                          ]
                      ).map((feature: string, index: number) => ({
                        icon: featureIcons[index % featureIcons.length],
                        title: `Key Capability ${index + 1}`,
                        desc: feature,
                      }));

                      return features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${gradient} text-white shadow-lg`}>
                            <feature.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      ));
                    })()}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose This Service</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-green-900 mb-2">Measurable Results</h4>
                          <p className="text-green-800">Track your success with detailed analytics and reporting that shows real business impact.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-900 mb-2">Expert Team</h4>
                          <p className="text-blue-800">Work with certified professionals who stay current with the latest digital marketing trends.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Shield className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-900 mb-2">Risk-Free Guarantee</h4>
                          <p className="text-purple-800">30-day money-back guarantee. If you're not satisfied, we'll make it right.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-orange-900 mb-2">Quick Setup</h4>
                          <p className="text-orange-800">Get started within 48 hours with our streamlined onboarding process.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Navigation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50 active:scale-95"
                  onClick={() => {
                    const currentIndex = content?.services.findIndex(s => s.id === selectedService.id) || 0;
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : content!.services.length - 1;
                    setSelectedService(content!.services[prevIndex]);
                  }}
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180 transition-transform hover:-translate-x-1" />
                  Previous Service
                </Button>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95"
                  onClick={() => window.open('/contact', '_self')}
                >
                  Get Started Today
                  <Zap className="ml-3 h-6 w-6 transition-transform hover:rotate-12" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50 active:scale-95"
                  onClick={() => {
                    const currentIndex = content?.services.findIndex(s => s.id === selectedService.id) || 0;
                    const nextIndex = currentIndex < content!.services.length - 1 ? currentIndex + 1 : 0;
                    setSelectedService(content!.services[nextIndex]);
                  }}
                >
                  Next Service
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      ) : activeView === 'pricing' ? (
        <Section className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-6 border border-amber-200">
                  <Award className="w-4 h-4 mr-2" />
                  Simple Pricing
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-amber-800 to-orange-800 bg-clip-text text-transparent">
                  Plans for every stage
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Start free with any one basic service — no credit card needed. See real results before you commit.
                </p>
              </div>

              {/* Free trial banner */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 sm:p-8 text-white mb-10 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-9 h-9 text-white" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xl font-bold mb-1">Try one basic service for free</p>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Pick any single service from our catalogue and run it at no cost. Experience the quality of our work firsthand — upgrade anytime.
                  </p>
                </div>
                <button
                  onClick={() => window.open('/contact', '_self')}
                  className="flex-shrink-0 px-8 py-3 rounded-xl bg-white text-green-700 font-bold text-sm hover:bg-green-50 transition shadow-lg whitespace-nowrap"
                >
                  Claim Free Trial
                </button>
              </div>

              {/* Plan cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Basic',
                    price: 'Free',
                    sub: '14-day trial · 1 service',
                    gradient: 'from-gray-500 to-gray-600',
                    bg: 'bg-white',
                    border: 'border-gray-200',
                    badge: null,
                    perks: [
                      '1 social media platform',
                      '4 posts per month',
                      'Basic performance report',
                      'Email support',
                    ],
                    missing: ['Dedicated account manager', 'Custom strategy', 'Priority support'],
                    cta: 'Start Free',
                    ctaStyle: 'border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50',
                  },
                  {
                    name: 'Standard',
                    price: 'From $10',
                    sub: 'per month',
                    gradient: 'from-blue-600 to-indigo-600',
                    bg: 'bg-gradient-to-b from-blue-600 to-indigo-700',
                    border: 'border-blue-500',
                    badge: 'MOST POPULAR',
                    perks: [
                      '3 social media platforms',
                      'Up to 20 posts per month',
                      'Monthly analytics report',
                      'Dedicated account manager',
                      'Content calendar',
                      'Chat & email support',
                    ],
                    missing: [],
                    cta: 'Get Started',
                    ctaStyle: 'bg-white text-blue-700 hover:bg-blue-50 font-bold shadow-lg',
                  },
                  {
                    name: 'Pro',
                    price: 'Custom',
                    sub: 'tailored quote',
                    gradient: 'from-purple-500 to-pink-600',
                    bg: 'bg-white',
                    border: 'border-purple-200',
                    badge: null,
                    perks: [
                      'Unlimited platforms',
                      'Unlimited posts per month',
                      'Advanced ROI analytics',
                      'Dedicated strategy team',
                      'A/B testing & optimisation',
                      'Priority 24/7 support',
                      'Custom integrations',
                    ],
                    missing: [],
                    cta: 'Contact Us',
                    ctaStyle: 'border-2 border-purple-400 text-purple-700 hover:bg-purple-50',
                  },
                ].map((plan) => {
                  const isBlue = plan.name === 'Standard';
                  return (
                    <div
                      key={plan.name}
                      className={`relative flex flex-col rounded-3xl ${plan.bg} border ${plan.border} shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                    >
                      {plan.badge && (
                        <div className="absolute top-4 right-4 bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                          {plan.badge}
                        </div>
                      )}
                      <div className="p-7 flex-1">
                        <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${isBlue ? 'text-blue-200' : 'text-gray-400'}`}>{plan.name}</p>
                        <div className="mb-5">
                          <span className={`text-4xl font-extrabold ${isBlue ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                          <span className={`text-sm ml-2 ${isBlue ? 'text-blue-200' : 'text-gray-400'}`}>{plan.sub}</span>
                        </div>
                        <ul className="space-y-2.5 mb-4">
                          {plan.perks.map((p) => (
                            <li key={p} className={`flex items-center gap-2 text-sm ${isBlue ? 'text-blue-50' : 'text-gray-600'}`}>
                              <CheckCircle className={`w-4 h-4 flex-shrink-0 ${isBlue ? 'text-blue-300' : 'text-green-400'}`} />
                              {p}
                            </li>
                          ))}
                          {plan.missing.map((p) => (
                            <li key={p} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-7 pb-7">
                        <button
                          onClick={() => window.open('/contact', '_self')}
                          className={`w-full py-3 rounded-xl text-sm transition-all duration-200 ${plan.ctaStyle}`}
                        >
                          {plan.cta}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Why Choose Us Section */}
      <Section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200/50">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Excellence You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine expertise, technology, and creativity to deliver exceptional results for your social media presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified social media professionals with years of industry experience",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Average 300% engagement increase across all our client campaigns",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: Shield,
                title: "24/7 Support",
                description: "Round-the-clock assistance and monitoring for your peace of mind",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Target,
                title: "Custom Strategy",
                description: "Tailored solutions designed specifically for your brand goals",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Success Stories Section */}
      <Section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-100/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 text-sm font-semibold mb-6 border border-green-200/50">
              <Trophy className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-900 to-teal-900 bg-clip-text text-transparent">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our services have transformed businesses across all industries and service types.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const palettes = [
                {
                  bar: 'from-blue-500 via-indigo-500 to-violet-500',
                  iconBg: 'bg-blue-100',
                  iconText: 'text-blue-600',
                  badge: 'bg-blue-50 text-blue-700 border-blue-200',
                  stat: 'text-blue-600',
                  glow: 'from-blue-400/20 to-indigo-400/20',
                  btn: 'hover:border-blue-500 hover:bg-blue-50',
                  duration: 'bg-blue-50 text-blue-700',
                },
                {
                  bar: 'from-purple-500 via-pink-500 to-rose-500',
                  iconBg: 'bg-purple-100',
                  iconText: 'text-purple-600',
                  badge: 'bg-purple-50 text-purple-700 border-purple-200',
                  stat: 'text-purple-600',
                  glow: 'from-purple-400/20 to-pink-400/20',
                  btn: 'hover:border-purple-500 hover:bg-purple-50',
                  duration: 'bg-purple-50 text-purple-700',
                },
                {
                  bar: 'from-green-500 via-teal-500 to-cyan-500',
                  iconBg: 'bg-green-100',
                  iconText: 'text-green-600',
                  badge: 'bg-green-50 text-green-700 border-green-200',
                  stat: 'text-green-600',
                  glow: 'from-green-400/20 to-teal-400/20',
                  btn: 'hover:border-green-500 hover:bg-green-50',
                  duration: 'bg-green-50 text-green-700',
                },
              ];
              const p = palettes[index % 3];
              const initials = study.company
                ? study.company.split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase()
                : '??';

              return (
                <div key={study.slug || index} className="group relative flex flex-col bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {/* Colour bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${p.bar}`} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Header: avatar + company + industry tag */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl ${p.iconBg} ${p.iconText} flex items-center justify-center text-sm font-extrabold shadow-sm flex-shrink-0`}>
                          {initials}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-900 leading-tight">{study.company}</h3>
                          <p className="text-gray-400 text-xs mt-0.5">{study.industry}</p>
                        </div>
                      </div>
                      <div className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${p.badge}`}>
                        {study.service}
                      </div>
                    </div>

                    {/* Key result headline */}
                    <div className="mb-4">
                      <p className={`text-2xl font-extrabold ${p.stat} leading-tight`}>{study.results}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-gray-400 text-xs">achieved in {study.duration}</span>
                      </div>
                    </div>

                    {/* Metrics grid */}
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {study.metrics.slice(0, 4).map((m: { before: string; after: string; improvement: string }, i: number) => (
                          <div key={i} className="bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                            <p className={`text-sm font-extrabold ${p.stat}`}>{m.improvement}</p>
                            <p className="text-gray-400 text-[11px] mt-0.5 leading-tight">{m.before} → {m.after}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Testimonial */}
                    {study.testimonial && (
                      <div className="flex-1 mb-5">
                        {(() => {
                          const t = study.testimonial;
                          const isObj = typeof t === 'object' && t !== null;
                          const quote = isObj ? t.quote : t;
                          const authorName = isObj ? t.author : study.clientName;
                          const authorPos = isObj ? t.position : study.clientPosition;
                          const initials2 = authorName
                            ? authorName.split(' ').map((w: string) => w[0]).join('').slice(0, 2)
                            : '?';
                          return (
                            <div className={`${p.iconBg.replace('100', '50')} rounded-2xl p-4 border ${p.badge.split(' ')[2]}`}>
                              <p className="text-gray-600 italic text-sm leading-relaxed mb-3">
                                &ldquo;{quote}&rdquo;
                              </p>
                              <div className="flex items-center gap-2.5">
                                <div className={`w-8 h-8 rounded-full ${p.iconBg} ${p.iconText} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                  {initials2}
                                </div>
                                <div>
                                  <p className="text-gray-900 text-xs font-bold leading-tight">{authorName}</p>
                                  <p className="text-gray-400 text-[11px]">{authorPos}</p>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    {/* CTA */}
                    <Link href={`/case-studies/${study.slug}`} className="mt-auto">
                      <Button variant="outline" className={`w-full py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-semibold text-sm transition-all duration-300 group/btn ${p.btn}`}>
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="py-32 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-200/50">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              How We Deliver Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven methodology ensures consistent, exceptional results across all projects and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Strategy & Audit",
                description: "We analyze your current digital presence and develop a customized strategy.",
                icon: Target,
                color: "from-blue-500 to-indigo-500"
              },
              {
                step: "02",
                title: "Content Creation",
                description: "Our team creates engaging, brand-consistent content tailored to your audience.",
                icon: Lightbulb,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute campaigns and manage all aspects of your digital presence.",
                icon: Rocket,
                color: "from-green-500 to-teal-500"
              },
              {
                step: "04",
                title: "Analytics & Growth",
                description: "Track performance, optimize strategies, and drive continuous growth.",
                icon: BarChart3,
                color: "from-orange-500 to-red-500"
              }
            ].map((process, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={`absolute -inset-1 bg-gradient-to-r ${process.color} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${process.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <process.icon className="w-10 h-10" />
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${process.color} text-white text-sm font-bold mb-4`}>
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50">
              <MessageSquare className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Service Questions Answered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Common questions about our social media services and digital solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to see results?",
                answer: "Most clients see initial improvements within 2-4 weeks. Significant growth and engagement increases typically occur within 2-3 months of consistent management."
              },
              {
                question: "Do you work with all industries?",
                answer: "Yes! We have experience across industries including technology, retail, healthcare, professional services, and more. We adapt our strategies to fit your industry and target audience."
              },
              {
                question: "What technologies do you use for web development?",
                answer: "We use modern technologies like React, Next.js, Node.js, and various CMS platforms. All websites are responsive, SEO-optimized, and built with performance in mind."
              },
              {
                question: "Do you develop both iOS and Android apps?",
                answer: "Yes, we develop native apps for both iOS and Android, as well as cross-platform solutions using React Native and Flutter for cost-effective development."
              },
              {
                question: "Can I pause or cancel my service anytime?",
                answer: "Absolutely. We offer flexible month-to-month agreements with no long-term contracts. You can pause, modify, or cancel your service at any time."
              },
              {
                question: "Do you provide maintenance and support after project completion?",
                answer: "Absolutely! We offer ongoing maintenance, updates, and support packages to ensure your website or app stays current and performs optimally."
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Success Story CTA Section */}
      <Section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/60 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-8 border border-indigo-200/50">
              <Rocket className="w-4 h-4 mr-2" />
              Ready to Elevate Your Digital Presence?
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Let's Build Your
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Success Story
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Start with our professional services and see the difference expert management can make. Choose the package that fits your needs and let's get started today.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "30", label: "Day Setup" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full max-w-xl mx-auto sm:max-w-none">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-5 sm:px-12 sm:py-6 text-base sm:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95">
                  Book Free Consultation
                  <MessageSquare className="ml-3 h-5 w-5 sm:ml-4 sm:h-6 sm:w-6 transition-transform hover:scale-110" />
                </Button>
              </Link>

              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-8 py-5 sm:px-12 sm:py-6 text-base sm:text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300/50 active:scale-95">
                  View Our Portfolio
                  <ArrowRight className="ml-3 h-5 w-5 sm:ml-4 sm:h-6 sm:w-6 transition-transform hover:translate-x-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ServicesPage;