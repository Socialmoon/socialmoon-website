import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Users, Clock, Award, Target, CheckCircle, ExternalLink } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_PROJECTS, getProjectBySlug } from '@/lib/config/portfolio-catalog';

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map(p => ({ slug: p.slug }));
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-950 pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)' }} />
        <Container className="relative z-10">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-4">{project.category}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">{project.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {project.client}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {project.duration}</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> {project.category}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Results */}
      <Section className="py-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Results Achieved</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {(Array.isArray(project.results) ? project.results : [project.results]).map((r, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20">
                <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                <span className="font-semibold">{r}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Challenge & Solution */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-7">
              <div className="flex items-center gap-2 text-red-600 text-sm font-bold mb-3">
                <div className="w-2 h-2 rounded-full bg-red-600" /> The Challenge
              </div>
              <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-7">
              <div className="flex items-center gap-2 text-green-600 text-sm font-bold mb-3">
                <div className="w-2 h-2 rounded-full bg-green-600" /> Our Solution
              </div>
              <p className="text-gray-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="py-14 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">How We Did It</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {project.process.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-black text-sm flex items-center justify-center mb-3">{String(i + 1).padStart(2, '0')}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technologies */}
      <Section className="py-10 bg-white border-t border-gray-100">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">Tools & Channels</span>
            {project.technologies.map(t => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">{t}</span>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-14 bg-gray-950">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-1">Ready for similar results?</h2>
              <p className="text-gray-400 text-sm">Let's talk about what we can build for your business.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all">
                Get in touch
              </Link>
              <Link href="/portfolio" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">
                More work
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
