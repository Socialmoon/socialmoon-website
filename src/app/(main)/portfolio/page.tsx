'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Hero } from '@/components/common/Hero';
import {
  ArrowRight, Target, Star, Users, Play,
  Award, CheckCircle, Instagram,
} from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/lib/config/portfolio-catalog';

const CATEGORIES = [
  { label: 'All Work', value: 'All', color: 'from-blue-500 to-indigo-600' },
  { label: 'Full-Scope', value: 'Full-Scope Build', color: 'from-violet-600 to-purple-700' },
  { label: 'Social Media', value: 'Social Media Marketing', color: 'from-pink-500 to-rose-600' },
  { label: 'LinkedIn B2B', value: 'LinkedIn B2B Marketing', color: 'from-blue-600 to-cyan-500' },
  { label: 'Content', value: 'Content Creation', color: 'from-purple-500 to-violet-600' },
  { label: 'Field Ops', value: 'Field Operations', color: 'from-orange-500 to-amber-500' },
  { label: 'Data Ops', value: 'Data Operations', color: 'from-teal-500 to-green-500' },
  { label: 'Paid Ads', value: 'Paid Ads', color: 'from-rose-500 to-pink-600' },
  { label: 'Brand Identity', value: 'Brand Identity', color: 'from-amber-500 to-orange-500' },
];



const PALETTE: Record<string, { gradient: string; light: string; border: string; text: string }> = {
  'Full-Scope Build':       { gradient: 'from-violet-600 to-purple-700', light: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700' },
  'Social Media Marketing': { gradient: 'from-pink-500 to-rose-600',    light: 'bg-pink-50',   border: 'border-pink-100',   text: 'text-pink-600' },
  'LinkedIn B2B Marketing': { gradient: 'from-blue-600 to-cyan-500',    light: 'bg-blue-50',   border: 'border-blue-100',   text: 'text-blue-600' },
  'Content Creation':       { gradient: 'from-purple-500 to-violet-600',light: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-600' },
  'Paid Ads':               { gradient: 'from-rose-500 to-pink-600',    light: 'bg-rose-50',   border: 'border-rose-100',   text: 'text-rose-600' },
  'Brand Identity':         { gradient: 'from-amber-500 to-orange-500', light: 'bg-amber-50',  border: 'border-amber-100',  text: 'text-amber-600' },
  'Field Operations':       { gradient: 'from-orange-500 to-amber-500', light: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-600' },
  'Data Operations':        { gradient: 'from-teal-500 to-green-500',   light: 'bg-teal-50',   border: 'border-teal-100',   text: 'text-teal-600' },
};
const defaultPalette = { gradient: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-600' };

function PortfolioContent() {
  const projects = PORTFOLIO_CONTENT.projects || [];
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero (original) ── */}
      <Hero className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 pt-16 pb-0 md:pt-20 md:pb-0">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/80 via-violet-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        <Container className="relative z-10 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-semibold mb-7 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                500+ projects delivered
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-[0.92] tracking-tighter mb-6">
                Work that
                <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent pb-1">
                  moves the needle.
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed mb-8">
                Real campaigns. Measurable results. From social media and content to paid ads and brand building.
              </p>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start mb-9">
                {[
                  { v: '500+', l: 'Projects' },
                  { v: '98%', l: 'Satisfaction' },
                  { v: '50+', l: 'Industries' },
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-left">
                    <div className="text-2xl font-black text-gray-900">{s.v}</div>
                    <div className="text-xs text-gray-400 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => window.open('/contact', '_self')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  Browse Work
                </button>
              </div>
            </div>

            {/* Right — staggered light tiles */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { icon: Target, label: 'Social\nMedia', count: '200+', color: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50', border: 'border-blue-100', offset: '' },
                  { icon: Star, label: 'Content\nCreation', count: '150+', color: 'from-purple-500 to-pink-600', bg: 'bg-purple-50', border: 'border-purple-100', offset: 'lg:translate-y-5' },
                  { icon: Play, label: 'Video\n& Reels', count: '80+', color: 'from-rose-500 to-orange-500', bg: 'bg-rose-50', border: 'border-rose-100', offset: '' },
                  { icon: Award, label: 'Brand\nIdentity', count: '60+', color: 'from-amber-400 to-orange-500', bg: 'bg-amber-50', border: 'border-amber-100', offset: 'lg:-translate-y-3' },
                  { icon: Users, label: 'Influencer\nCampaigns', count: '40+', color: 'from-green-500 to-teal-500', bg: 'bg-green-50', border: 'border-green-100', offset: 'lg:translate-y-6' },
                  { icon: CheckCircle, label: 'Paid\nAds', count: '90+', color: 'from-cyan-500 to-blue-600', bg: 'bg-cyan-50', border: 'border-cyan-100', offset: 'lg:translate-y-1' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group ${item.bg} border ${item.border} rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default ${item.offset}`}
                  >
                    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="text-xl font-black text-gray-900 leading-none mb-1">{item.count}</div>
                    <div className="text-gray-400 text-[10px] font-medium whitespace-pre-line leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </Hero>

      {/* ── Sticky Quick Nav ── */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <Container>
          <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
            {[
              { href: '#portfolio-grid', label: 'All Projects' },
              { href: '#instagram', label: 'Instagram' },
              { href: '#results', label: 'Results' },
            ].map(item => (
              <a key={item.href} href={item.href} className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all">
                {item.label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Projects Grid ── */}
      <Section id="portfolio-grid" className="py-16 bg-gray-50 scroll-mt-28">
        <Container>
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">Section 01</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Explore Our Projects</h2>
              <p className="text-slate-600 md:max-w-md">Browse real campaigns across every category — filtered by what matters to you.</p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.value
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-md`
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((project) => {
              const p = PALETTE[project.category] || defaultPalette;
              const isFlagship = project.category === 'Full-Scope Build';
              return (
                <Link key={project.slug} href={`/portfolio/${project.slug}`} className={isFlagship ? 'md:col-span-2 xl:col-span-3' : ''}>
                  <div className={`group flex ${ isFlagship ? 'flex-col md:flex-row' : 'flex-col' } bg-white rounded-2xl border ${p.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full`}>
                    {/* Thumbnail */}
                    <div className={`relative ${ isFlagship ? 'md:w-2/5 h-56 md:h-auto' : 'h-48' } ${p.light} overflow-hidden flex-shrink-0`}>
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Target className={`w-10 h-10 ${p.text} opacity-30`} />
                        </div>
                      )}
                      {project.badge && (
                        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r ${p.gradient} text-white text-xs font-bold shadow-md`}>
                          {project.badge}
                        </span>
                      )}
                      {!project.badge && (
                        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full ${p.light} ${p.text} text-xs font-bold border ${p.border}`}>
                          {project.category}
                        </span>
                      )}
                    </div>

                    {/* Body */}
                    <div className={`p-5 border-t ${isFlagship ? 'md:border-t-0 md:border-l' : ''} ${p.border} flex-grow flex flex-col`}>
                      <p className={`text-xs font-bold ${p.text} mb-1`}>{project.client}</p>
                      <h4 className="text-gray-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors leading-snug">{project.title}</h4>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{project.description}</p>
                      {isFlagship && project.deliverables && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.deliverables.slice(0, 5).map((d, i) => (
                            <span key={i} className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${p.light} ${p.text} border ${p.border}`}>{d}</span>
                          ))}
                          {project.deliverables.length > 5 && (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-500">+{project.deliverables.length - 5} more</span>
                          )}
                        </div>
                      )}
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-green-600 text-xs font-semibold">
                          {Array.isArray(project.results) ? project.results[0] : project.results}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 group-hover:text-blue-600 transition-colors">
                          View case <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No projects in this category yet.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* ── Instagram Showcase ── */}
      <Section id="instagram" className="py-16 bg-white scroll-mt-28">
        <Container>
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-pink-600 uppercase mb-2">Section 02</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Instagram Success Stories</h2>
              <p className="text-slate-600 md:max-w-md">Campaigns that delivered exceptional results for brands across industries.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(PORTFOLIO_CONTENT.projects || [])
              .filter((p: any) => p.category === 'Social Media Marketing' || p.category === 'Content Creation')
              .slice(0, 6)
              .map((project: any) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                  <div className="group cursor-pointer flex justify-center">
                    <div className="relative">
                      {/* Phone frame */}
                      <div className="w-60 h-[30rem] bg-white rounded-[2.5rem] p-2 shadow-2xl border border-gray-200 relative overflow-hidden">
                        <div className="absolute left-0 top-24 w-1 h-10 bg-gray-300 rounded-r-md" />
                        <div className="absolute left-0 top-38 w-1 h-7 bg-gray-300 rounded-r-md" />
                        <div className="absolute right-0 top-32 w-1 h-14 bg-gray-300 rounded-l-md" />
                        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative border border-gray-100">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-white rounded-b-xl z-20 border-x border-gray-100" />
                          <div className="relative h-full overflow-hidden">
                            {project.videoUrl ? (
                              <video className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" muted loop playsInline autoPlay>
                                <source src={project.videoUrl} type="video/mp4" />
                              </video>
                            ) : project.image ? (
                              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center">
                                <Instagram className="w-10 h-10 text-pink-300" />
                              </div>
                            )}
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-xs font-bold text-pink-400 mb-1">{project.client}</p>
                                <h4 className="text-white font-bold text-sm mb-1">{project.title}</h4>
                                <p className="text-gray-300 text-xs line-clamp-2">{project.description}</p>
                                <div className="mt-2 flex items-center gap-1 text-green-400 text-xs font-semibold">
                                  <CheckCircle className="w-3 h-3" />
                                  {Array.isArray(project.results) ? project.results[0] : project.results}
                                </div>
                              </div>
                            </div>
                            {project.videoUrl && (
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-pink-500/90 backdrop-blur-sm rounded-full p-3 border border-white/40">
                                  <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full opacity-50" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </Section>

      {/* ── Results Strip ── */}
      <Section id="results" className="py-16 bg-gray-50 scroll-mt-28">
        <Container>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Results</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Real impact, real numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: '+180%', label: 'Avg. follower growth', color: 'from-pink-500 to-rose-600' },
              { stat: '3x', label: 'Inbound demo requests', color: 'from-blue-500 to-indigo-600' },
              { stat: '500K+', label: 'Organic reach per campaign', color: 'from-purple-500 to-violet-600' },
              { stat: '98%', label: 'Client retention rate', color: 'from-emerald-500 to-teal-600' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-lg transition-all">
                <div className={`text-2xl md:text-3xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>{item.stat}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <Section className="py-16 bg-slate-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Ready to build your next campaign?</h2>
              <p className="text-slate-400">Let's scope what's right for your business — no fluff, just results.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/contact" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all">
                Book a call
              </Link>
              <Link href="/solutions" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">
                View Solutions
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
