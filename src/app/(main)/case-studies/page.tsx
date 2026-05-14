'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, Layers3, Search, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { CASE_STUDIES } from '@/lib/config/case-studies-catalog';

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(CASE_STUDIES.map((study) => study.service))).filter(Boolean)];
  const filtered = selectedCategory === 'All' ? CASE_STUDIES : CASE_STUDIES.filter((study) => study.service === selectedCategory);

  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <PageHero
        eyebrow="Case studies"
        title="The work behind the claim."
        description="This page is not a trophy wall. Each case note is structured around what the client needed, what SocialMoon handled, and what can be explained without stretching the truth."
        icon={FileText}
        primaryCta={{ label: 'Plan a project', href: '/contact' }}
        secondaryCta={{ label: 'View portfolio', href: '/portfolio' }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Case note format</p>
          <div className="mt-4 space-y-3">
            {[
              ['01', 'Problem'],
              ['02', 'Work handled'],
              ['03', 'Outcome we can explain'],
            ].map(([num, label]) => (
              <div key={label} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl bg-white/5 p-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff4d2e] text-sm font-black text-white">{num}</span>
                <span className="flex items-center text-sm font-bold text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <div className="sticky top-16 z-30 border-b border-slate-200 bg-[#fffdf8]/95 backdrop-blur">
        <Container>
          <div className="flex gap-2 overflow-x-auto py-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-black transition-colors ${selectedCategory === category ? 'bg-slate-950 text-white' : 'border border-slate-200 bg-white text-slate-700'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Evidence library</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Case studies that read like work notes.</h2>
            </div>
            <p className="text-sm leading-7 text-slate-600">The list is intentionally small because every case note needs clear scope, client context, and outcomes that can be described responsibly.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {filtered.map((study, index) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className={`group block ${index === 0 ? 'lg:col-span-2' : ''}`}>
                <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-1">
                  <div className="border-b border-slate-200 bg-slate-950 p-5 text-white">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-orange-200">{study.service}</span>
                      <Layers3 className="h-5 w-5 text-white/50" />
                    </div>
                    <h3 className="text-2xl font-black leading-tight">{study.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-slate-400">{study.company} / {study.industry}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {(Array.isArray(study.results) ? study.results : [study.results]).slice(0, 2).map((result) => (
                        <div key={result} className="flex gap-2 rounded-2xl bg-[#fffdf8] p-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff4d2e]" />
                          <p className="text-xs font-bold leading-5 text-slate-700">{result}</p>
                        </div>
                      ))}
                    </div>
                    <p className="line-clamp-4 text-sm leading-6 text-slate-600">{study.challenge}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-black text-slate-950">
                      Open case note
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { icon: Search, title: 'Specific', text: 'Each case explains the actual problem instead of hiding behind vague success language.' },
              { icon: ShieldCheck, title: 'Defensible', text: 'Claims are kept to what the project record can support.' },
              { icon: FileText, title: 'Useful', text: 'The reader should understand the work, not just admire the result.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#fffdf8] p-5">
                <item.icon className="h-5 w-5 text-[#ff4d2e]" />
                <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
