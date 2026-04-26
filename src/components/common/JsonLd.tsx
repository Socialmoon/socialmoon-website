import { SITE_URL } from "@/lib/config/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "SocialMoon",
    alternateName: "SocialMoon Digital Marketing Agency",
    description:
      "SocialMoon is India's top social media marketing agency helping startups & small businesses grow with Instagram ads, Facebook marketing, lead generation & website design. Based in Lucknow, Uttar Pradesh.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    telephone: "+91-9118439107",
    email: "contact@socialmoon.in",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
      postalCode: "226001",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.8467,
      longitude: 80.9462,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/socialmoon.inc",
      "https://www.linkedin.com/company/socialmoonhq/",
      "https://x.com/socialmoonx",
      "https://www.facebook.com/profile.php?id=61562932652058",
    ],
    areaServed: [
      { "@type": "City", name: "Lucknow" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Chennai" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instagram Ads" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facebook Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Generation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "SocialMoon",
    description: "India's top social media marketing agency for startups & small businesses",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "SocialMoon",
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "SocialMoon",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
