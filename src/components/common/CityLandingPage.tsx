import Link from 'next/link';
import { ArrowRight, MapPin, Search, SearchCheck, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { BreadcrumbSchema, FAQSchema } from '@/components/common/JsonLd';
import PageHero from '@/components/common/PageHero';
import { SITE_URL } from '@/lib/config/site';

export type CityPageProps = {
  city: string;
  state: string;
  slug: string;
  headline: string;
  subheadline: string;
  description: string;
  stats?: { value: string; label: string }[];
  services: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export default function CityLandingPage({
  city,
  state,
  slug,
  headline,
  subheadline,
  description,
  services,
  faqs,
}: CityPageProps) {
  const pageUrl = `${SITE_URL}/${slug}`;

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_URL }, { name: `Digital Marketing Agency ${city}`, url: pageUrl }]} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-[#fffdf8]">
        <PageHero
          eyebrow={`${city}, ${state}`}
          title={headline}
          description={description}
          icon={MapPin}
          primaryCta={{ label: 'Discuss my city campaign', href: '/contact' }}
          secondaryCta={{ label: 'View services', href: '/solutions' }}
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Local campaign lens</p>
            <div className="mt-4 space-y-3">
              {['Audience memory', 'Offer clarity', 'Channel fit'].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff4d2e] text-sm font-black text-white">{index + 1}</span>
                  <span className="text-sm font-bold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </PageHero>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Services for {city}</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{subheadline}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We shape campaigns around the actual business, audience, budget, and proof available. We do not claim city dominance or certain outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <Search className="h-5 w-5 text-[#ff4d2e]" />
                  <h3 className="mt-4 text-base font-black text-slate-950">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <Container>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Local SEO for {city}</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                  Search pages built around real service intent.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Local SEO, AEO, and keyword coverage for {city} work best when the page reflects real services, clear locations, and claims the business can stand behind.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  ['Primary keyword', `digital marketing agency ${city}`],
                  ['Service intent', `social media, ads, SEO, lead generation, websites, and app support in ${city}`],
                  ['Answer engine content', `FAQs that answer how ${city} businesses can choose, scope, and measure marketing work`],
                  ['Local trust work', 'Google Business Profile, citations, reviews, partnerships, and earned mentions'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-[#fffdf8] p-5">
                    <SearchCheck className="h-5 w-5 text-[#ff4d2e]" />
                    <h3 className="mt-4 text-base font-black text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <Container>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">FAQ</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Questions before we plan a {city} campaign.</h2>
              </div>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-[#fffdf8] p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-slate-950">
                      {faq.question}
                      <span className="text-[#ff4d2e] group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-orange-200">
                    <ShieldCheck className="h-4 w-4" />
                    Truth-first scope
                  </div>
                  <h2 className="mt-2 text-2xl font-black">Let&apos;s find the campaign your {city} audience should remember.</h2>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white">
                  Start with a brief
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
