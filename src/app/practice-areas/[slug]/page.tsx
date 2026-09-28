import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig, practiceAreas } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { Breadcrumb, DisclaimerBanner, ContactCard } from "@/components/Shared";

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return {};

  return {
    title: `${area.title} — Legal Services in Ghaziabad`,
    description: area.shortDescription,
    alternates: {
      canonical: `${siteConfig.url}/practice-areas/${area.slug}`,
    },
    openGraph: {
      title: `${area.title} | Advocate Gunjan Yadav`,
      description: area.shortDescription,
      url: `${siteConfig.url}/practice-areas/${area.slug}`,
    },
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const relatedAreas = practiceAreas
    .filter((a) => a.category === area.category && a.id !== area.id)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: area.title,
    description: area.shortDescription,
    url: `${siteConfig.url}/practice-areas/${area.slug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Practice Areas",
          item: `${siteConfig.url}/practice-areas`,
        },
        { "@type": "ListItem", position: 3, name: area.title },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Practice Areas", href: "/practice-areas" },
              { label: area.title },
            ]}
          />
          <div className="flex items-center gap-4 mt-2">
            <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
              <Icon name={area.icon} size={28} className="text-gold" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {area.title}
              </h1>
              <p className="text-gray-400 text-sm mt-1 capitalize">{area.category} Law</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed">{area.description}</p>

                <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
                  How Advocate Gunjan Yadav Can Assist
                </h2>
                <p>
                  Advocate Gunjan Yadav provides professional legal assistance in{" "}
                  {area.title.toLowerCase()} matters at the District Court,
                  Ghaziabad. This includes legal consultation, case evaluation,
                  documentation, court representation, and ongoing case management.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
                  Legal Process Overview
                </h2>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-gold">1</span>
                    <span><strong>Initial Consultation:</strong> Discuss the facts and circumstances of your legal matter with the advocate.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-gold">2</span>
                    <span><strong>Case Evaluation:</strong> Assessment of the legal position, applicable laws, and potential course of action.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-gold">3</span>
                    <span><strong>Documentation:</strong> Preparation of necessary legal documents, petitions, applications, and filings.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-gold">4</span>
                    <span><strong>Court Representation:</strong> Professional representation at the District Court, Ghaziabad.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <DisclaimerBanner />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact CTA */}
                <div className="bg-navy rounded-2xl p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Need Legal Assistance?
                  </h3>
                  <p className="text-gray-400 text-sm mb-5">
                    Contact Advocate Gunjan Yadav for {area.title.toLowerCase()} matters.
                  </p>
                  <Link href="/contact" className="btn-primary w-full mb-3">
                    Request Consultation
                  </Link>
                  <a href={`tel:${siteConfig.phone}`} className="btn-secondary w-full text-sm border-white/20">
                    <Icon name="phone" size={16} />
                    {siteConfig.phoneDisplay}
                  </a>
                </div>

                {/* Related Areas */}
                {relatedAreas.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-navy mb-4">Related Practice Areas</h3>
                    <div className="space-y-2">
                      {relatedAreas.map((ra) => (
                        <Link
                          key={ra.id}
                          href={`/practice-areas/${ra.slug}`}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all group"
                        >
                          <Icon name={ra.icon} size={18} className="text-gold shrink-0" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-navy">
                            {ra.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
