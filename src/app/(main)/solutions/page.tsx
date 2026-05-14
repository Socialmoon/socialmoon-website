'use client';

import Link from 'next/link';
import {
  ArrowRight,
  AppWindow,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Megaphone,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Users,
  Workflow,
  SearchCheck,
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { FAQSchema } from '@/components/common/JsonLd';

const SERVICES = [
  {
    group: 'Marketing',
    eyebrow: 'Primary focus',
    title: 'Marketing that makes the brand easier to remember.',
    description: 'Campaign strategy, content systems, lead generation, personal brand work, paid campaigns, and social growth.',
    color: 'bg-[#ff4d2e]',
    items: [
      { title: 'Content & Social Growth System', href: '/solutions/content-social-growth-system', icon: Megaphone, text: 'Content pillars, reels, posts, publishing rhythm, and brand recall.' },
      { title: 'Lead Generation System', href: '/solutions/lead-generation-system', icon: Target, text: 'Audience targeting, lead paths, follow-up, and qualification flow.' },
      { title: 'Personal Brand System', href: '/solutions/personal-brand-system', icon: Users, text: 'Founder-led positioning, LinkedIn content, and authority building.' },
      { title: 'SEO & AEO Visibility System', href: '/solutions/seo-aeo-visibility-system', icon: SearchCheck, text: 'Keyword strategy, local SEO, answer-ready pages, schema, and earned backlink planning.' },
      { title: 'Campaign & Creative Direction', href: '/contact', icon: Sparkles, text: 'Hooks, concepts, copy angles, and launch plans for campaigns.' },
    ],
  },
  {
    group: 'Build',
    eyebrow: 'Web and app development',
    title: 'Websites and apps that people want to explore.',
    description: 'Your marketing needs a place to land. We build websites, landing pages, app flows, dashboards, and product foundations with engagement, uniqueness, and creative interaction in mind.',
    color: 'bg-slate-950',
    items: [
      { title: 'Website Development System', href: '/solutions/website-development-system', icon: Code2, text: 'Mobile-first websites, creative landing pages, proof sections, analytics, and launch basics.' },
      { title: 'App Development System', href: '/solutions/app-development-system', icon: AppWindow, text: 'Web apps, mobile app flows, MVPs, dashboards, portals, and engaging product moments.' },
      { title: 'WorkflowOS', href: '/solutions/workflowos', icon: Workflow, text: 'Internal tools and operating boards for teams that need cleaner execution.' },
      { title: 'Full Scope Build', href: '/portfolio/onhour-full-scope-build', icon: Rocket, text: 'Brand, product, marketing, field operations, and launch support together.' },
    ],
  },
  {
    group: 'Tech & Ops',
    eyebrow: 'Available technical services',
    title: 'Automation and infrastructure when the business needs it.',
    description: 'Marketing is the lead story, but SocialMoon also offers technical support where growth depends on systems, data, and product performance.',
    color: 'bg-emerald-600',
    items: [
      { title: 'OpsFlow AI', href: '/solutions/opsflow-ai', icon: BrainCircuit, text: 'Automation for repetitive work, handoffs, reminders, and team operations.' },
      { title: 'SmartLayer AI', href: '/solutions/smartlayer-ai', icon: Sparkles, text: 'AI opportunity mapping, prototypes, and production rollout planning.' },
      { title: 'CloudTrim', href: '/solutions/cloudtrim', icon: Shield, text: 'Cloud cost and architecture review for cleaner infrastructure decisions.' },
      { title: 'QueryBoost', href: '/solutions/queryboost', icon: BarChart3, text: 'Database and API performance diagnosis for product teams.' },
    ],
  },
];

const PROCESS = [
  'We understand the brand, offer, proof, and current technical reality.',
  'We decide whether the main problem is message, channel, website, product, or operations.',
  'We scope only the work we can explain clearly and execute responsibly.',
];

const SEO_FAQS = [
  {
    question: 'Does SocialMoon offer SEO in Lucknow?',
    answer:
      'Yes. SocialMoon offers SEO strategy, local SEO, on-page SEO, AEO-ready content structure, and search-focused website planning for businesses in Lucknow and other priority Indian cities.',
  },
  {
    question: 'Can SocialMoon generate backlinks?',
    answer:
      'We do not create fake or spam backlinks. We build an earned backlink plan using relevant directories, partner mentions, local citations, digital PR targets, and real outreach opportunities the client can verify.',
  },
  {
    question: 'What is AEO?',
    answer:
      'AEO means Answer Engine Optimization. It structures pages so people, Google snippets, and AI answer engines can understand clear questions, concise answers, services, locations, and proof.',
  },
  {
    question: 'Do SEO results have a fixed timeline?',
    answer:
      'No fixed timeline is promised. Search outcomes depend on competition, website history, content quality, technical health, authority, and consistency. We set expectations after an audit.',
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <FAQSchema faqs={SEO_FAQS} />
      <PageHero
        eyebrow="Services"
        title="Marketing first. Build and tech when the campaign needs it."
        description="SocialMoon's main focus is creative marketing, content, lead generation, and brand recall. We also offer website development, app development, AI automation, internal tools, and technical optimization when those systems are needed to support growth."
        icon={Sparkles}
        primaryCta={{ label: 'Scope my project', href: '/contact' }}
        secondaryCta={{ label: 'View proof', href: '/portfolio' }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Service map</p>
          <div className="mt-4 grid grid-cols-1 gap-3">
            {['Marketing', 'Website + App Build', 'Automation + Tech'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff4d2e] text-sm font-black text-white">{index + 1}</span>
                <span className="text-sm font-bold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <div className="sticky top-16 z-30 border-b border-slate-200 bg-[#fffdf8]/95 backdrop-blur">
        <Container>
          <div className="flex gap-2 overflow-x-auto py-3">
            {SERVICES.map((section) => (
              <a key={section.group} href={`#${section.group.toLowerCase().replace(/[^a-z]+/g, '-')}`} className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700">
                {section.group}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {SERVICES.map((section, sectionIndex) => (
        <Section key={section.group} id={section.group.toLowerCase().replace(/[^a-z]+/g, '-')} className={sectionIndex % 2 ? 'bg-white scroll-mt-28' : 'bg-[#fffdf8] scroll-mt-28'}>
          <Container>
            <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">{section.eyebrow}</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{section.title}</h2>
              </div>
              <p className="text-sm leading-7 text-slate-600">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {section.items.map((service) => (
                <Link key={service.title} href={service.href} className="group block">
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${section.color} text-white`}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-black leading-snug text-slate-950">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{service.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950">
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      <Section className="bg-slate-950 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">How we choose the service</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Not every problem needs the same solution.</h2>
            </div>
            <div className="space-y-3">
              {PROCESS.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-200" />
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">SEO, AEO, local SEO</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Search visibility built on clear intent and real authority.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We treat SEO as a visibility system: pages that answer real questions, city pages that match actual service areas, and authority work based on relevant placements.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ['Keyword strategy', 'Service keywords, commercial intent, Lucknow priority terms, and supporting topic clusters.'],
                ['AEO structure', 'FAQ sections, concise answer blocks, schema, and headings designed for answer engines.'],
                ['Local SEO', 'Google Business Profile checklist, local citations, service-area clarity, and review prompts.'],
                ['Backlink plan', 'Relevant directories, partner mentions, local publications, guest features, and outreach targets.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-[#fffdf8] p-5">
                  <h3 className="text-base font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Next step</p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">Tell us whether you need marketing, a build, or both.</h2>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white">
                Start with a brief
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
