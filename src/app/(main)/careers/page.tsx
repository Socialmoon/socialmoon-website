'use client';

import { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import Link from 'next/link';
import { Briefcase, MapPin, ArrowRight, Users, Zap, CheckCircle, Mail } from 'lucide-react';
import JOBS from '@/data/careers';

const DEPT_COLORS: Record<string, string> = {
  Growth: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Engineering: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  Sales: 'bg-orange-50 text-orange-700 border-orange-100',
  Design: 'bg-pink-50 text-pink-700 border-pink-100',
  Operations: 'bg-blue-50 text-blue-700 border-blue-100',
};

const TYPE_COLORS: Record<string, string> = {
  'Full-time': 'bg-green-100 text-green-700',
  'Part-time': 'bg-yellow-100 text-yellow-700',
  'Contract': 'bg-purple-100 text-purple-700',
  'Internship': 'bg-blue-100 text-blue-700',
};

export default function CareersPage() {
  const [filter, setFilter] = useState('All');

  const departments = ['All', ...Array.from(new Set(JOBS.map(j => j.department)))];
  const filtered = filter === 'All' ? JOBS : JOBS.filter(j => j.department === filter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gray-950 pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
          <span className="text-[22vw] font-black text-white/[0.03] tracking-tighter whitespace-nowrap">CAREERS</span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">We're Hiring</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6">
              Build the future<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">with us.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              We're a small, focused team building growth and automation systems for businesses. If you're sharp, driven, and want your work to matter — let's talk.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Users, label: 'Small, focused team' },
                { icon: Zap, label: 'AI-first culture' },
                { icon: MapPin, label: 'Remote-friendly' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                  <item.icon className="w-4 h-4 text-orange-400" /> {item.label}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Filter */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <Container>
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${filter === dept ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {dept}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Jobs */}
      <Section className="py-16 bg-gray-50">
        <Container>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">No open roles in this department right now.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((job) => {
                const deptColor = DEPT_COLORS[job.department] || 'bg-gray-50 text-gray-700 border-gray-100';
                const typeColor = TYPE_COLORS[job.type] || 'bg-gray-100 text-gray-700';
                return (
                  <div key={job.slug} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${deptColor}`}>{job.department}</span>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${typeColor}`}>{job.type}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-orange-600 transition-colors mb-2">{job.title}</h3>
                      <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-4">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{job.description}</p>
                      {job.requirements.length > 0 && (
                        <div className="space-y-1.5 mb-5">
                          {job.requirements.slice(0, 3).map((req, ri) => (
                            <div key={ri} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" /> {req}
                            </div>
                          ))}
                        </div>
                      )}
                      <Link
                        href={`/careers/${job.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-orange-600 transition-all"
                      >
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </Section>

      {/* Open application */}
      <Section className="py-16 bg-white border-t border-gray-100">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-5">
              <Mail className="w-7 h-7 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Don't see the right role?</h2>
            <p className="text-gray-500 mb-6">We're always interested in sharp people. Send us your resume and tell us how you'd contribute.</p>
            <a
              href="mailto:contact@socialmoon.in?subject=Open Application — SocialMoon"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-all"
            >
              Send Open Application <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
