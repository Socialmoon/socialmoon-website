'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle2, Filter, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { PORTFOLIO_CONTENT } from '@/lib/config/portfolio-catalog';

const CATEGORIES = [
  { label: 'All', value: 'All' },
  { label: 'Full-Scope', value: 'Full-Scope Build' },
  { label: 'Field Ops', value: 'Field Operations' },
  { label: 'Data Ops', value: 'Data Operations' },
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const projects = PORTFOLIO_CONTENT.projects || [];
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) setActiveCategory(category);
  }, [searchParams]);

  const filtered = useMemo(
    () => activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory, projects]
  );

  return (
    <div className="min-h-screen bg-[#fffdf8] text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-orange-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified work only
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Portfolio without inflated claims.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              A curated view of projects SocialMoon can describe clearly: what the brand needed, what we delivered, and what changed. No invented project counts, no borrowed logos, no vanity wall.
            </p>
          </div>
        </Container>
      </section>

      <div className="sticky top-16 z-30 border-b border-slate-200 bg-[#fffdf8]/95 backdrop-blur">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-3">
            <Filter className="h-4 w-4 shrink-0 text-slate-400" />
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-black transition-colors ${
                  activeCategory === category.value
                    ? 'bg-slate-950 text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Case notes</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Work we can explain.</h2>
            </div>
            <p className="text-sm font-semibold text-slate-500">{filtered.length} visible project{filtered.length === 1 ? '' : 's'}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => {
              const results = Array.isArray(project.results) ? project.results : [project.results];
              return (
                <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group block">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-1">
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      {project.image && (
                        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      )}
                      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black text-slate-900 shadow-sm">
                        {project.category}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#ff4d2e]">{project.client}</p>
                      <h3 className="mt-2 text-lg font-black leading-snug text-slate-950">{project.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{project.description}</p>
                      <div className="mt-5 space-y-2">
                        {results.slice(0, 2).map((result) => (
                          <div key={result} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                            <span className="text-xs font-semibold leading-5 text-slate-600">{result}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto pt-5">
                        <span className="inline-flex items-center gap-2 text-sm font-black text-slate-950">
                          Read the case note
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm font-semibold text-slate-500">
              No verified project is listed in this category yet.
            </div>
          )}
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="rounded-[2rem] border border-slate-200 bg-[#fffdf8] p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Proof over noise</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">A smaller portfolio with clearer context.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We prefer fewer projects with explainable scope over a long wall of logos. If a project appears here, the work can be described without inflated claims.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white">
                Discuss a campaign
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense>
      <PortfolioContent />
    </Suspense>
  );
}
