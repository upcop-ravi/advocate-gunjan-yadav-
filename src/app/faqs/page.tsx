import type { Metadata } from "next";
import { siteConfig, faqs } from "@/lib/data";
import { Breadcrumb, SectionHeading } from "@/components/Shared";
import HomeFAQ from "@/components/HomeFAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Advocate Gunjan Yadav's legal services, consultation process, office hours, and practice at District Court, Ghaziabad.",
  alternates: { canonical: `${siteConfig.url}/faqs` },
};

export default function FAQsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "FAQs" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
            Frequently Asked <span className="text-gold">Questions</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">
            Answers to common questions about legal services and consultations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <HomeFAQ faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
        </div>
      </section>
    </>
  );
}
