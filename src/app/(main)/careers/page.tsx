'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Mail, MapPin, Users } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import JOBS from '@/data/careers';

export default function CareersPage() {
  const [filter, setFilter] = useState('All');
  const departments = ['All', ...Array.from(new Set(JOBS.map((job) => job.department)))];
  const filtered = filter === 'All' ? JOBS : JOBS.filter((job) => job.department === filter);

  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <PageHero
        eyebrow="Careers"
        title="Join the team building campaigns, products, and systems."
        description="SocialMoon work spans marketing, content, design, technology, and operations. If you care about clear thinking and real execution, this is where open roles live."
        icon={BriefcaseBusiness}
        primaryCta={{ label: 'See open roles', href: '#roles' }}
        secondaryCta={{ label: 'Meet the team', href: '/team' }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">We look for</p>
          <div className="mt-4 space-y-3">
            {['Clear communication', 'Ownership', 'Useful creativity'].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/5 p-3">
                <CheckCircle2 className="h-5 w-5 text-orange-200" />
                <span className="text-sm font-bold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <div className="sticky top-16 z-30 border-b border-slate-200 bg-[#fffdf8]/95 backdrop-blur">
        <Container>
          <div className="flex gap-2 overflow-x-auto py-3">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setFilter(department)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-black ${filter === department ? 'bg-slate-950 text-white' : 'border border-slate-200 bg-white text-slate-700'}`}
              >
                {department}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <Section id="roles" className="scroll-mt-28">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {filtered.map((job) => (
              <article key={job.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#fffdf8] px-3 py-1 text-[11px] font-black uppercase tracking-wide text-[#ff4d2e]">{job.department}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-slate-600">{job.type}</span>
                </div>
                <h2 className="text-xl font-black text-slate-950">{job.title}</h2>
                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{job.description}</p>
                <div className="mt-5 space-y-2">
                  {job.requirements.slice(0, 3).map((requirement) => (
                    <div key={requirement} className="flex gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff4d2e]" />
                      {requirement}
                    </div>
                  ))}
                </div>
                <Link href={`/careers/${job.slug}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white">
                  View role
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <Users className="mx-auto h-8 w-8 text-slate-300" />
              <p className="mt-3 text-sm font-semibold text-slate-500">No open roles in this department right now.</p>
            </div>
          )}
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Mail className="mx-auto h-8 w-8 text-[#ff4d2e]" />
            <h2 className="mt-4 text-3xl font-black text-slate-950">Do not see the right role?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Send a short note about what you do well and how you could help SocialMoon.</p>
            <a href="mailto:contact@socialmoon.in?subject=Open Application - SocialMoon" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white">
              Send open application
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
