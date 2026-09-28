import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig, legalArticles } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { Breadcrumb, DisclaimerBanner } from "@/components/Shared";

export async function generateStaticParams() {
  return legalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = legalArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${siteConfig.url}/legal-articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updatedDate,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = legalArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const otherArticles = legalArticles.filter((a) => a.id !== article.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.date,
    dateModified: article.updatedDate,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/legal-articles/${article.slug}`,
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
              { label: "Legal Articles", href: "/legal-articles" },
              { label: article.title },
            ]}
          />
          <div className="mt-4">
            <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Icon name="user" size={14} />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="calendar" size={14} />
                {new Date(article.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none text-gray-600
                  prose-headings:text-navy prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-strong:text-navy
                  prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                  prose-ul:space-y-2 prose-li:text-gray-600"
                dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
              />

              <div className="mt-10">
                <DisclaimerBanner />
              </div>

              {/* Author Info */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Icon name="user" size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-sm">{article.author}</div>
                    <div className="text-xs text-gray-500">Practising Advocate, District Court Ghaziabad</div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-navy rounded-2xl p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">Need Legal Help?</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Contact Advocate Gunjan Yadav for professional legal assistance.
                  </p>
                  <Link href="/contact" className="btn-primary w-full mb-3 text-sm">
                    Request Consultation
                  </Link>
                  <a href="tel:+919454072550" className="btn-secondary w-full text-sm border-white/20">
                    <Icon name="phone" size={14} /> Call Now
                  </a>
                </div>

                {otherArticles.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-navy mb-4">More Articles</h3>
                    <div className="space-y-3">
                      {otherArticles.map((a) => (
                        <Link
                          key={a.id}
                          href={`/legal-articles/${a.slug}`}
                          className="block p-3 bg-white rounded-lg hover:shadow-md transition-all group"
                        >
                          <span className="text-xs text-gold font-medium">{a.category}</span>
                          <h4 className="text-sm font-semibold text-navy mt-1 group-hover:text-gold-dark transition-colors line-clamp-2">
                            {a.title}
                          </h4>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

// Simple markdown-like to HTML converter for article content
function formatContent(content: string): string {
  return content
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(?!<[hul])(.*\S.*)$/gm, '<p>$1</p>')
    .replace(/\n{2,}/g, '')
    .trim();
}
