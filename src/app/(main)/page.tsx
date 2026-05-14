'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Eye, Megaphone, MessageSquare, PenLine, Radar, ShieldCheck, Sparkles, Target } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';

const SERVICES = [
  {
    title: 'Campaigns people remember',
    text: 'Angles, hooks, visuals, and moments built around what the audience should recall after they scroll away.',
    icon: Sparkles,
  },
  {
    title: 'Social growth systems',
    text: 'A publishing rhythm for reels, posts, carousels, community replies, and brand consistency across channels.',
    icon: Megaphone,
  },
  {
    title: 'Lead generation journeys',
    text: 'Clear targeting, landing paths, nurture messages, and handoff flows so marketing creates useful conversations.',
    icon: Target,
  },
  {
    title: 'Founder and brand voice',
    text: 'Narrative, positioning, and content that make the people behind the company easier to trust.',
    icon: PenLine,
  },
];

const PRINCIPLES = [
  'No fake numbers, borrowed logos, or inflated claims.',
  'Every recommendation explains what we know, what we assume, and what we still need to test.',
  'Portfolio entries are presented as case notes, not trophies with unverifiable noise.',
];

const PROCESS = [
  { step: 'Find the memory', detail: 'We define the one thing your audience should remember about the brand.' },
  { step: 'Build the proof', detail: 'We turn product truth, customer friction, and market context into campaign material.' },
  { step: 'Ship and learn', detail: 'We publish, observe, and improve with honest reporting instead of vanity theatre.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fffdf8] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <Container className="relative grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#ff4d2e]" />
              Creative marketing agency
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Marketing that gives your brand a place in people&apos;s memory.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              SocialMoon designs campaigns, content systems, and lead journeys for brands that do not want generic agency noise. We make the message clear, memorable, and honest enough to build trust.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-transform hover:-translate-y-0.5">
                Plan my campaign
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50">
                See honest proof
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-[2rem] border border-slate-950 bg-slate-950 p-3 shadow-2xl shadow-slate-950/20">
              <div className="overflow-hidden rounded-[1.35rem] bg-[#fffdf8]">
                <div className="border-b border-slate-200 bg-white px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Campaign Board</p>
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-emerald-700">Truth first</span>
                  </div>
                </div>
                <div className="space-y-3 p-4">
                  {[
                    ['Audience memory', 'What should people repeat after seeing us?'],
                    ['Creative hook', 'Make the first 3 seconds impossible to ignore.'],
                    ['Proof point', 'Use only claims the brand can actually defend.'],
                    ['Action path', 'Give interested buyers a clear next step.'],
                  ].map(([label, text], index) => (
                    <div key={label} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">{index + 1}</span>
                      <span>
                        <span className="block text-sm font-black text-slate-950">{label}</span>
                        <span className="block text-xs leading-relaxed text-slate-500">{text}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white py-10 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: 'Primary focus', value: 'Marketing services' },
              { label: 'Creative target', value: 'Recall, not clutter' },
              { label: 'Trust rule', value: 'No misinformation' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-[#fffdf8] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                <p className="mt-1 text-lg font-black text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#fffdf8]">
        <Container>
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">What we build</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Marketing services with one recognizable spine.</h2>
            <p className="mt-3 text-slate-600">Every service page should feel like it belongs to the same agency: bold thinking, simple proof, clean mobile layouts, and clear next actions.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <service.icon className="h-5 w-5 text-[#ff4d2e]" />
                <h3 className="mt-4 text-base font-black text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-950 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-300">Transparency</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">If we cannot verify it, it does not go on the website.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">Your website should make people trust you before they talk to you. That trust breaks when the site uses fake scale, vague awards, or numbers nobody can explain.</p>
            </div>
            <div className="space-y-3">
              {PRINCIPLES.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">How we work</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">From blank attention to remembered brand.</h2>
            </div>
            <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-black text-slate-950">
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PROCESS.map((item, index) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-[#fffdf8] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">{index + 1}</span>
                <h3 className="mt-5 text-lg font-black text-slate-950">{item.step}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#fffdf8]">
        <Container>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Next step</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Let&apos;s design the campaign people will use to describe your brand.</h2>
              </div>
              <div className="space-y-3">
                {[
                  ['Audit the current website and content', Eye],
                  ['Choose the campaign memory', Radar],
                  ['Create the execution roadmap', MessageSquare],
                ].map(([label, Icon]) => (
                  <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-[#fffdf8] p-3">
                    <CheckCircle2 className="h-5 w-5 text-[#ff4d2e]" />
                    <span className="text-sm font-bold text-slate-800">{label as string}</span>
                  </div>
                ))}
                <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white sm:w-auto">
                  Talk to SocialMoon
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
