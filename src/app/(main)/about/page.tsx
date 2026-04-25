'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import Link from 'next/link';
import { Award, Target, Heart, Zap, Globe, Clock, ArrowRight, Users, CheckCircle } from 'lucide-react';

type AboutData = {
  title: string;
  mission?: string;
  story?: string;
  companyDescription?: string;
  values?: Array<{ title: string; description: string }>;
  stats?: Array<{ value: string; label: string }>;
};

export default function AboutPage() {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch('/api/about').then(r => r.json()).then(setData).catch(() => setData(null));
  }, []);

  const values = data?.values || [
    { title: 'Strategic Excellence', description: 'Data-driven systems that deliver measurable outcomes.' },
    { title: 'Client-Centric', description: 'Your growth is our only metric of success.' },
    { title: 'Innovation First', description: 'AI and automation at the core of everything we build.' },
    { title: 'Radical Transparency', description: 'Clear communication, no fluff, real results.' },
  ];

  const stats = data?.stats || [
    { value: '50+', label: 'Clients Served' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '3x', label: 'Avg. Growth' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — Bold editorial */}
      <div className="relative bg-white border-b border-gray-100 pt-16 pb-20 overflow-hidden">
        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-black text-gray-900/[0.025] tracking-tighter whitespace-nowrap">ABOUT</span>
        </div>
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">About SocialMoon</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight mb-6">
              We build systems,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">not campaigns.</span>
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
              {data?.companyDescription || data?.mission || 'SocialMoon is a growth and automation agency based in Lucknow, India. We design structured systems that help businesses scale demand, improve operations, and grow with control.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/solutions" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-blue-700 transition-all">
                Our Solutions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/team" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-all">
                Meet the Team <Users className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats */}
      <Section className="py-16 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const icons = [Target, Heart, Globe, Clock];
              const colors = ['text-blue-600 bg-blue-50', 'text-green-600 bg-green-50', 'text-purple-600 bg-purple-50', 'text-orange-600 bg-orange-50'];
              const Icon = icons[i % 4];
              return (
                <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors[i % 4]} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900 mb-1">{s.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{s.label}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Story */}
      {data?.story && (
        <Section className="py-20 bg-gray-50">
          <Container>
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Our Story</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">How SocialMoon started</h2>
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">{data.story}</p>
            </div>
          </Container>
        </Section>
      )}

      {/* Values */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">What drives us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our core values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const icons = [Target, Heart, Zap, Award];
              const colors = [
                'from-blue-500 to-indigo-600',
                'from-green-500 to-teal-600',
                'from-purple-500 to-violet-600',
                'from-orange-500 to-amber-600',
              ];
              const Icon = icons[i % 4];
              return (
                <div key={i} className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${colors[i % 4]} text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why us */}
      <Section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Why SocialMoon</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Systems, not campaigns.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Most agencies sell you deliverables — posts, ads, reports. We build operating systems for growth and efficiency that compound over time. Every engagement is designed to leave your business more capable than before.
              </p>
              <div className="space-y-3">
                {[
                  'Structured systems with measurable milestones',
                  'AI and automation embedded in every workflow',
                  'Transparent reporting — no vanity metrics',
                  'Based in Lucknow, serving clients globally',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Growth Systems', desc: 'Content, leads, personal brand', color: 'bg-emerald-50 border-emerald-100 text-emerald-700' },
                { label: 'Efficiency Systems', desc: 'Ops, cloud, AI, database', color: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
                { label: 'BPOLYTIX Collab', desc: 'Powered by SocialMoon', color: 'bg-purple-50 border-purple-100 text-purple-700' },
                { label: 'Luna AI', desc: '24/7 intelligent assistant', color: 'bg-blue-50 border-blue-100 text-blue-700' },
              ].map((item, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${item.color} font-semibold`}>
                  <div className="text-sm font-bold mb-1">{item.label}</div>
                  <div className="text-xs opacity-70">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-slate-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Ready to build your growth system?</h2>
              <p className="text-slate-400">Let's scope what's right for your business.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/contact" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all">
                Talk to us
              </Link>
              <Link href="/solutions" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">
                Our Solutions
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
