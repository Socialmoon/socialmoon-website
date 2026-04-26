import Link from "next/link";
import { Container } from "@/components/common/Container";
import { BreadcrumbSchema, FAQSchema } from "@/components/common/JsonLd";
import { SITE_URL } from "@/lib/config/site";

export type CityPageProps = {
  city: string;
  state: string;
  slug: string;
  headline: string;
  subheadline: string;
  description: string;
  stats: { value: string; label: string }[];
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
  stats,
  services,
  faqs,
}: CityPageProps) {
  const pageUrl = `${SITE_URL}/${slug}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: `Digital Marketing Agency ${city}`, url: pageUrl },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-20 pb-16 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500" />
          <Container className="relative z-10">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Digital Marketing Agency {city}</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Serving {city}, {state}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                {headline}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg"
                >
                  Get Free Strategy Call →
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </Container>
        </div>

        {/* Stats */}
        <div className="bg-white border-b border-gray-100 py-12">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="text-3xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Why SocialMoon for this city */}
        <div className="py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                {subheadline}
              </h2>
              <p className="text-gray-500 text-lg">
                We understand the {city} market — local consumer behavior, regional competition, and what actually drives growth for businesses in {state}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* FAQ */}
        <div className="py-20 bg-gray-50">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
                Frequently Asked Questions — Digital Marketing in {city}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* CTA */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Grow Your {city} Business?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join 100+ Indian businesses already growing with SocialMoon. Get a free strategy consultation today.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-blue-700 font-bold text-base hover:bg-blue-50 transition-all shadow-lg"
              >
                Get Your Free Strategy Call →
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
