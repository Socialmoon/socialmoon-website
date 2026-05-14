'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  ArrowRight,
  AppWindow,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  FileText,
  Lightbulb,
  Menu,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  UserRound,
  X,
} from 'lucide-react';

const NAV = [
  {
    label: 'Services',
    href: '/solutions',
    items: [
      { title: 'Content & Social Growth', href: '/solutions/content-social-growth-system', desc: 'Campaigns, posts, reels, and brand recall.', icon: Sparkles },
      { title: 'Lead Generation', href: '/solutions/lead-generation-system', desc: 'Clear targeting, capture, and follow-up.', icon: Target },
      { title: 'Personal Brand', href: '/solutions/personal-brand-system', desc: 'Founder-led trust and audience building.', icon: Users },
      { title: 'Website Development', href: '/solutions/website-development-system', desc: 'Fast, credible websites and landing pages.', icon: Code2 },
      { title: 'App Development', href: '/solutions/app-development-system', desc: 'Product builds, dashboards, and mobile app flows.', icon: AppWindow },
    ],
  },
  {
    label: 'Work',
    href: '/portfolio',
    items: [
      { title: 'Portfolio', href: '/portfolio', desc: 'Only the work we are ready to stand behind.', icon: BriefcaseBusiness },
      { title: 'Case Studies', href: '/case-studies', desc: 'Deeper stories, challenges, and execution.', icon: FileText },
      { title: 'OnHour Build', href: '/portfolio/onhour-full-scope-build', desc: 'A full-scope brand, product, and launch story.', icon: Sparkles },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    items: [
      { title: 'About SocialMoon', href: '/about', desc: 'How we think, work, and communicate.', icon: Lightbulb },
      { title: 'Team', href: '/team', desc: 'The people shaping SocialMoon work.', icon: UserRound },
      { title: 'Careers', href: '/careers', desc: 'Open roles and ways to work with us.', icon: Users },
    ],
  },
];

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#fffdf8]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2" aria-label="SocialMoon home">
          <Image src="/1.png" alt="SocialMoon" width={70} height={70} className="h-12 w-auto object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${pathname === '/' ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
          >
            Home
          </Link>

          {NAV.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setDesktopOpen(group.label)}
              onMouseLeave={() => setDesktopOpen(null)}
            >
              <Link
                href={group.href}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${isActive(pathname, group.href) ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                {group.label}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${desktopOpen === group.label ? 'rotate-180' : ''}`} />
              </Link>

              {desktopOpen === group.label && (
                <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3">
                  <div className="grid grid-cols-1 gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/10">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-amber-50"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                          <item.icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-bold text-slate-950">{item.title}</span>
                          <span className="block text-xs leading-relaxed text-slate-500">{item.desc}</span>
                        </span>
                        <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-700" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/blog"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${isActive(pathname, '/blog') ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
          >
            Insights
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://avena.socialmoon.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <MessageCircle className="h-4 w-4" />
            Ask Avena
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff4d2e] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-transform hover:-translate-y-0.5"
          >
            Start a campaign
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-[#fffdf8] px-4 py-4 shadow-2xl lg:hidden">
          <div className="space-y-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-900 hover:bg-white">
              Home
            </Link>
            {NAV.map((group) => (
              <div key={group.label} className="rounded-2xl border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setMobileSection(mobileSection === group.label ? null : group.label)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold text-slate-900"
                >
                  {group.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === group.label ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === group.label && (
                  <div className="border-t border-slate-100 p-2">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="flex gap-3 rounded-xl p-3 hover:bg-amber-50">
                        <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#ff4d2e]" />
                        <span>
                          <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                          <span className="block text-xs leading-relaxed text-slate-500">{item.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-900 hover:bg-white">
              Insights
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-4 py-3 text-sm font-bold text-white">
              Start a campaign
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
