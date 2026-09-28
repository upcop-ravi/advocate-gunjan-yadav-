import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, legalArticles } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { Breadcrumb, SectionHeading } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Legal Articles & Resources",
  description:
    "Read informational legal articles by Advocate Gunjan Yadav covering topics such as bail, FIR, cheque bounce, consumer complaints, and other legal subjects.",
  alternates: { canonical: `${siteConfig.url}/legal-articles` },
};

export default function LegalArticlesPage() {
  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Legal Articles" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
            Legal <span className="text-gold">Articles</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">
            General informational articles on legal topics. These articles are
            for informational purposes and do not constitute legal advice.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {legalArticles.map((article) => (
              <Link
                key={article.id}
                href={`/legal-articles/${article.slug}`}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden card-hover"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="px-2.5 py-1 bg-gold/10 text-gold-dark rounded-full font-medium">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="calendar" size={12} />
                      {new Date(article.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-navy mb-3 group-hover:text-gold-dark transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Icon name="user" size={12} />
                      {article.author}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                      Read Article <Icon name="arrowRight" size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
