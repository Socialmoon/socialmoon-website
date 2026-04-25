'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import {
  Sparkles, ChevronDown, TrendingUp, Target, Users, BrainCircuit,
  Shield, Rocket, Code, BarChart3, Award, BookOpen, Briefcase,
  Globe, ArrowRight, Zap, ExternalLink, Instagram, Play, Star
} from 'lucide-react';

const SOLUTIONS = [
  {
    category: 'Growth Systems',
    color: 'emerald',
    items: [
      { title: 'Content & Social Growth', desc: 'Build consistent brand visibility', icon: TrendingUp, slug: 'content-social-growth-system' },
      { title: 'Lead Generation System', desc: 'Predictable qualified pipeline', icon: Target, slug: 'lead-generation-system' },
      { title: 'Personal Brand System', desc: 'LinkedIn-first founder authority', icon: Users, slug: 'personal-brand-system' },
    ],
  },
  {
    category: 'Efficiency Systems',
    color: 'indigo',
    items: [
      { title: 'OpsFlow AI', desc: 'Automate repetitive operations', icon: BrainCircuit, slug: 'opsflow-ai' },
      { title: 'WorkflowOS', desc: 'Unified internal operating layer', icon: Code, slug: 'workflowos' },
      { title: 'CloudTrim', desc: 'Cut cloud cost & improve scale', icon: Shield, slug: 'cloudtrim' },
      { title: 'QueryBoost', desc: 'Faster APIs & database tuning', icon: BarChart3, slug: 'queryboost' },
      { title: 'SmartLayer AI', desc: 'AI roadmap to production', icon: Rocket, slug: 'smartlayer-ai' },
    ],
  },
];

const COMPANY = [
  { title: 'About Us', desc: 'Our mission & story', icon: Award, href: '/about' },
  { title: 'Our Team', desc: 'The people behind the work', icon: Users, href: '/team' },
  { title: 'Blog', desc: 'Insights & industry thinking', icon: BookOpen, href: '/blog' },
  { title: 'Case Studies', desc: 'Real results, real impact', icon: Globe, href: '/case-studies' },
  { title: 'Careers', desc: 'Join our growing team', icon: Briefcase, href: '/careers' },
];

const PORTFOLIO_CATEGORIES = [
  { title: 'OnHour — Full-Scope Build', desc: 'App, brand, marketing & field ops', icon: Rocket, slug: 'Full-Scope Build' },
  { title: 'Social Media Marketing', desc: 'Instagram, Facebook & more', icon: Instagram, slug: 'Social Media Marketing' },
  { title: 'LinkedIn B2B Marketing', desc: 'Founder authority & lead gen', icon: Target, slug: 'LinkedIn B2B Marketing' },
  { title: 'Content Creation', desc: 'Reels, carousels & copy', icon: Play, slug: 'Content Creation' },
  { title: 'Field Operations', desc: 'Ground activation & onboarding', icon: Users, slug: 'Field Operations' },
  { title: 'Data Operations', desc: 'Annotation & dataset services', icon: BarChart3, slug: 'Data Operations' },
];

type DropdownKey = 'solutions' | 'company' | 'portfolio' | null;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<DropdownKey>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (key: DropdownKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(null), 120);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const isActive = (paths: string[]) => paths.some(p => pathname === p || pathname.startsWith(p + '/'));

  return (
    <>
      <header className="bg-white/90 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <Image src="/1.png" alt="SocialMoon" width={72} height={72} className="transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${pathname === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive(['/solutions', '/services']) ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Portfolio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('portfolio')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive(['/portfolio']) ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                Portfolio
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === 'portfolio' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive(['/about', '/team', '/blog', '/case-studies', '/careers']) ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                Company
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === 'company' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://luna.socialmoon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold shadow hover:shadow-md hover:scale-105 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Ask Luna
            </a>
            <Link href="/contact" className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all">
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* ── MEGA DROPDOWN ── */}
        {open && (
          <div
            className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-2xl z-50"
            style={{ maxHeight: '50vh' }}
            onMouseEnter={() => handleMouseEnter(open)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 py-8 overflow-y-auto" style={{ maxHeight: '50vh' }}>

              {open === 'portfolio' && (
                <div className="grid grid-cols-12 gap-8">
                  {/* Left promo */}
                  <div className="col-span-3 bg-gradient-to-br from-pink-600 to-purple-700 rounded-2xl p-6 text-white flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-pink-200" />
                        <span className="text-pink-200 text-xs font-bold uppercase tracking-wider">Our Work</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 leading-snug">500+ Projects Delivered</h3>
                      <p className="text-pink-100 text-sm leading-relaxed">Real campaigns. Measurable results. Browse by category or see everything.</p>
                    </div>
                    <Link href="/portfolio" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-pink-200 hover:text-white transition-colors" onClick={() => setOpen(null)}>
                      View all work <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Categories */}
                  <div className="col-span-9 grid grid-cols-2 gap-2 content-start">
                    <p className="col-span-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Browse by Category</p>
                    {PORTFOLIO_CATEGORIES.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/portfolio?category=${encodeURIComponent(item.slug)}`}
                        onClick={() => setOpen(null)}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-all group/item"
                      >
                        <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-pink-100 text-pink-600 transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                          <div className="text-xs text-gray-500">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {open === 'solutions' && (
                <div className="grid grid-cols-12 gap-8">
                  {/* Left promo */}
                  <div className="col-span-3 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-blue-300" />
                        <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">Systems Approach</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 leading-snug">Growth & Efficiency Systems</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">Structured systems that scale demand, improve speed, and reduce friction.</p>
                    </div>
                    <Link href="/solutions" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 hover:text-white transition-colors" onClick={() => setOpen(null)}>
                      View all solutions <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Solutions columns */}
                  <div className="col-span-9 grid grid-cols-2 gap-6">
                    {SOLUTIONS.map((group) => (
                      <div key={group.category}>
                        <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${group.color === 'emerald' ? 'text-emerald-600' : 'text-indigo-600'}`}>
                          {group.category}
                        </p>
                        <div className="space-y-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.slug}
                              href={`/solutions/${item.slug}`}
                              onClick={() => setOpen(null)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-all group/item"
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${group.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover/item:bg-emerald-100' : 'bg-indigo-50 text-indigo-600 group-hover/item:bg-indigo-100'} transition-colors`}>
                                <item.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900 leading-tight">{item.title}</div>
                                <div className="text-xs text-gray-500 leading-tight">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {open === 'company' && (
                <div className="grid grid-cols-12 gap-8">
                  {/* Left promo */}
                  <div className="col-span-3 bg-gradient-to-br from-violet-900 to-purple-900 rounded-2xl p-6 text-white flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-purple-300" />
                        <span className="text-purple-300 text-xs font-bold uppercase tracking-wider">SocialMoon</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 leading-snug">Lucknow's Growth & Automation Agency</h3>
                      <p className="text-purple-200 text-sm leading-relaxed">We build systems that help businesses scale demand and operate with less friction.</p>
                    </div>
                    {/* BPOLYTIX highlight */}
                    <a
                      href="https://bpolytix.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
                      onClick={() => setOpen(null)}
                    >
                      <Image src="/logo_bpolytix.png" alt="BPOLYTIX" width={20} height={20} className="object-contain rounded" />
                      <div>
                        <div className="text-xs font-bold text-white">BPOLYTIX</div>
                        <div className="text-[10px] text-purple-300">Powered by SocialMoon ↗</div>
                      </div>
                      <span className="ml-auto px-1.5 py-0.5 rounded bg-yellow-400/20 text-yellow-300 text-[10px] font-bold">COLLAB</span>
                    </a>
                  </div>

                  {/* Company links */}
                  <div className="col-span-9 grid grid-cols-2 gap-2 content-start">
                    <p className="col-span-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Company</p>
                    {COMPANY.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(null)}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-all group/item"
                      >
                        <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-50 group-hover/item:text-blue-600 text-gray-500 transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                          <div className="text-xs text-gray-500">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            <Link href="/" className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Home</Link>

            {/* Solutions mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
                onClick={() => setMobileSection(mobileSection === 'solutions' ? null : 'solutions')}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'solutions' && (
                <div className="ml-4 mt-1 space-y-1">
                  {SOLUTIONS.map(group => (
                    <div key={group.category}>
                      <p className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${group.color === 'emerald' ? 'text-emerald-600' : 'text-indigo-600'}`}>{group.category}</p>
                      {group.items.map(item => (
                        <Link key={item.slug} href={`/solutions/${item.slug}`} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                          <item.icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link href="/solutions" className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-blue-600" onClick={() => setMobileOpen(false)}>
                    View all solutions <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Portfolio mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
                onClick={() => setMobileSection(mobileSection === 'portfolio' ? null : 'portfolio')}
              >
                Portfolio
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'portfolio' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'portfolio' && (
                <div className="ml-4 mt-1 space-y-1">
                  {PORTFOLIO_CATEGORIES.map(item => (
                    <Link key={item.slug} href={`/portfolio?category=${encodeURIComponent(item.slug)}`} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                      <item.icon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">{item.title}</span>
                    </Link>
                  ))}
                  <Link href="/portfolio" className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-pink-600" onClick={() => setMobileOpen(false)}>
                    View all work <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Company mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
                onClick={() => setMobileSection(mobileSection === 'company' ? null : 'company')}
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'company' && (
                <div className="ml-4 mt-1 space-y-1">
                  {COMPANY.map(item => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                      <item.icon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">{item.title}</span>
                    </Link>
                  ))}
                  {/* BPOLYTIX in mobile */}
                  <a
                    href="https://bpolytix.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-purple-50 border border-purple-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Image src="/logo_bpolytix.png" alt="BPOLYTIX" width={18} height={18} className="object-contain" />
                    <span className="text-sm font-semibold text-purple-700">BPOLYTIX</span>
                    <span className="ml-auto text-[10px] font-bold text-purple-500 bg-purple-100 px-1.5 py-0.5 rounded">COLLAB</span>
                  </a>
                </div>
              )}
            </div>

            <Link href="/contact" className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className="pt-4 space-y-2">
              <a
                href="https://luna.socialmoon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm"
                onClick={() => setMobileOpen(false)}
              >
                <Sparkles className="w-4 h-4" /> Ask Luna AI
              </a>
              <Link href="/contact" className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm" onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
