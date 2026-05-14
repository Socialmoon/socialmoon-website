import Link from 'next/link';
import { AppWindow, ArrowRight, Code2, Eye, Handshake, Lightbulb, Megaphone, ShieldCheck, Sparkles } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';

const VALUES = [
  { title: 'Memorable before loud', text: 'We care less about doing more marketing and more about making the right idea stick.', icon: Sparkles },
  { title: 'Explain the work', text: 'Clients should understand what we are doing, why it matters, and what is still uncertain.', icon: Eye },
  { title: 'No borrowed proof', text: 'We do not use fake numbers, inflated claims, or logos we cannot explain honestly.', icon: ShieldCheck },
  { title: 'Useful creativity', text: 'Creative work should help people understand, remember, or act. Otherwise it is decoration.', icon: Lightbulb },
];

const CREATIVE_SYSTEMS = [
  {
    title: 'Website development',
    text: 'We treat a website like a brand memory system: the first screen, proof sections, interactions, and landing path should make the offer easier to understand and remember.',
    icon: Code2,
  },
  {
    title: 'Social media management',
    text: 'We build content around repeatable ideas, not random posting. The aim is recognition, trust, engagement, and a voice people can connect back to your brand.',
    icon: Megaphone,
  },
  {
    title: 'App development',
    text: 'We design app flows around clarity and return value: what users do first, what keeps them engaged, and how the product supports the campaign around it.',
    icon: AppWindow,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <PageHero
        eyebrow="About SocialMoon"
        title="A marketing agency built around memory and trust."
        description="SocialMoon helps brands turn their real value into campaigns, content, and lead journeys people can understand and remember. We would rather be clear and defensible than sound bigger than we are."
        icon={Handshake}
        primaryCta={{ label: 'Work with us', href: '/contact' }}
        secondaryCta={{ label: 'View proof', href: '/portfolio' }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Our working rule</p>
          <p className="mt-4 text-3xl font-black leading-tight text-white">If a claim cannot be explained, measured, or sourced, it does not belong in the pitch.</p>
        </div>
      </PageHero>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <value.icon className="h-5 w-5 text-[#ff4d2e]" />
                <h2 className="mt-4 text-lg font-black text-slate-950">{value.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">How we think</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Marketing should make the brand easier to repeat.</h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-600">
              <p>When someone sees your campaign, the goal is not just a click. The goal is a clean memory: what you do, why it matters, and why someone should trust you.</p>
              <p>That is why our work starts with the truth inside the brand: the offer, the audience, the proof, the objections, and the moment people should remember after the ad is gone.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#fffdf8]">
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Creative systems</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Creativity has to show up in the service itself.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Whether we manage content, build a website, or design an app, the goal is the same: make the brand easier to remember, easier to trust, and easier to act on.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {CREATIVE_SYSTEMS.map((system) => (
              <article key={system.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <system.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{system.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{system.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#fffdf8]">
        <Container>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">Next</p>
                <h2 className="mt-2 text-2xl font-black">Bring us the brand problem. We will help shape the memory.</h2>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
