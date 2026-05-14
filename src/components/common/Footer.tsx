import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const serviceLinks = [
  ['Content & Social Growth', '/solutions/content-social-growth-system'],
  ['Lead Generation', '/solutions/lead-generation-system'],
  ['Personal Brand', '/solutions/personal-brand-system'],
  ['Website Development', '/solutions/website-development-system'],
  ['App Development', '/solutions/app-development-system'],
  ['All Services', '/solutions'],
];

const proofLinks = [
  ['Portfolio', '/portfolio'],
  ['Case Studies', '/case-studies'],
  ['About', '/about'],
  ['Team', '/team'],
  ['Careers', '/careers'],
  ['Blog', '/blog'],
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Image src="/1.png" alt="SocialMoon" width={150} height={70} className="mb-4 h-16 w-auto rounded-xl bg-white object-contain p-2" />
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              SocialMoon designs memorable, transparent marketing campaigns and growth systems for brands that want to be understood clearly.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-orange-300">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm font-semibold text-slate-300 transition-colors hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-orange-300">Proof</h3>
            <ul className="space-y-3">
              {proofLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm font-semibold text-slate-300 transition-colors hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-orange-300">Start Here</h3>
            <p className="text-sm leading-7 text-slate-300">Bring us the brand, product, or campaign problem. We will help define the message people should remember.</p>
            <div className="mt-5 flex flex-col gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-5 py-3 text-sm font-bold text-white">
                Talk to SocialMoon
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://avena.socialmoon.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-slate-200">
                <MessageCircle className="h-4 w-4" />
                Ask Avena
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">Copyright 2026 SocialMoon. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://www.instagram.com/socialmoon.inc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/socialmoonhq/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="/terms-of-service.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-400 hover:text-white">Terms</a>
            <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-400 hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
