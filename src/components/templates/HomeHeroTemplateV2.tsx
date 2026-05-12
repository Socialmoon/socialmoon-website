import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';

export function HomeHeroTemplateV2() {
  const creativeBlocks = ['No fake metrics', 'Real campaigns monthly', 'Transparent reporting'];

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="relative w-full min-h-[74vh] md:min-h-[84vh] lg:min-h-[92vh]">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover scale-[1.03]">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/35" />

        <Container className="relative z-10 flex min-h-[74vh] md:min-h-[84vh] lg:min-h-[92vh] flex-col justify-between py-8 md:py-10 lg:py-12">
          <div className="flex justify-between items-start gap-4">
            <span className="inline-flex rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
              Direct and honest social media marketing
            </span>
            <div className="hidden md:flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 py-1 text-xs text-white/90 backdrop-blur">
              <PlayCircle className="h-3.5 w-3.5" />
              Live campaign footage
            </div>
          </div>

          <div className="max-w-4xl text-left">
            <h1 className="text-4xl font-black leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
              <span className="block">No magic.</span>
              <span className="block">No shortcuts.</span>
              <span className="block text-white">
                Just real strategy.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
              Social media takes consistent execution. We plan, publish, test, and improve with you every month.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-xl border border-white/20 bg-white text-slate-900 hover:bg-white/90">
                <Link href="/contact">
                  Book strategy call • 30 min free audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/35 bg-black/20 text-white hover:bg-white/10 hover:text-white">
                <Link href="/portfolio">See recent work</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {creativeBlocks.map((block) => (
              <div key={block} className="rounded-xl border border-white/20 bg-black/25 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                {block}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
