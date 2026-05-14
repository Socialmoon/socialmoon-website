import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Container } from './Container';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  icon: Icon,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
      <Container className="relative z-10 grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-orange-200">
            {Icon && <Icon className="h-3.5 w-3.5" />}
            {eyebrow}
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {primaryCta && (
                <Link href={primaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-transform hover:-translate-y-0.5">
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
        {children && <div>{children}</div>}
      </Container>
    </section>
  );
}
