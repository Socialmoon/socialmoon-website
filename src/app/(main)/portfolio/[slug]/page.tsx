import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Layers3,
  ListChecks,
  Route,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { PORTFOLIO_PROJECTS, getProjectBySlug } from '@/lib/config/portfolio-catalog';
import { SITE_URL } from '@/lib/config/site';

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = project.slug === 'onhour-full-scope-build' ? 'Full Scope Build for OnHour | SocialMoon' : `${project.title} | SocialMoon`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `${SITE_URL}/portfolio/${project.slug}` },
    openGraph: {
      title,
      description: project.description,
      url: `${SITE_URL}/portfolio/${project.slug}`,
      images: [{ url: project.imageUrl }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const results = Array.isArray(project.results) ? project.results : [project.results];
  const impact = project.impact?.length ? project.impact : results;
  const isFullScopeBuild = project.slug === 'onhour-full-scope-build';

  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
        <Container className="relative z-10 py-10 sm:py-14 lg:py-16">
          <Link href="/portfolio" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-orange-200">
                  <BriefcaseBusiness className="h-3.5 w-3.5" />
                  {project.category}
                </span>
                {project.badge && (
                  <span className="rounded-full bg-[#ff4d2e] px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-white">
                    {project.badge}
                  </span>
                )}
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {isFullScopeBuild ? 'Full Scope Build for OnHour' : project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{project.description}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Project note</p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {[
                  ['Client', project.client],
                  ['Scope', project.category],
                  ['Status', project.duration],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/5 p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">{label}</p>
                    <p className="mt-1 text-sm font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.82fr_1.18fr]">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">The honest version</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">What the work actually involved.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.challenge}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.solution}</p>
            </article>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {impact.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-[#ff4d2e]" />
                  <p className="mt-4 text-sm font-bold leading-6 text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {project.deliverables && (
        <Section className="bg-white">
          <Container>
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Scope map</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">A full build means the parts have to meet.</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {project.deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-[#fffdf8] p-5">
                  <Layers3 className="h-5 w-5 text-[#ff4d2e]" />
                  <p className="mt-4 text-sm font-bold leading-6 text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {project.executionModel && (
        <Section>
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Execution model</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Built as one connected operation.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  The point was not to create separate assets. It was to make brand, product, campaign, onboarding, and launch activity work from the same plan.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.executionModel.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm font-bold leading-6 text-slate-950">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      <Section className="bg-slate-950 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">Build sequence</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">How we moved it forward.</h2>
            </div>
            <div className="space-y-3">
              {project.process.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-orange-200" />
                  <p className="text-sm leading-6 text-slate-200">
                    <span className="font-black text-white">{String(index + 1).padStart(2, '0')}.</span> {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {project.images?.length > 0 && (
        <Section className="bg-white">
          <Container>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Visual references</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Signals from the work.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">Images are used as visual context for the type of work and should not be read as performance claims.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {project.images.slice(0, 4).map((image, index) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
                  <Image src={image} alt={`${project.client} work reference ${index + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {project.outcome && (
        <Section>
          <Container>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
                <div>
                  <Route className="h-6 w-6 text-[#ff4d2e]" />
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Current outcome</p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Where the project stands.</h2>
                </div>
                <p className="text-sm leading-7 text-slate-600">{project.outcome}</p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      <Section className="bg-[#fffdf8]">
        <Container>
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">Need a build like this?</p>
                <h2 className="mt-2 text-2xl font-black">Tell us what needs to be built and what it has to support.</h2>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white">
                Start with a brief
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
