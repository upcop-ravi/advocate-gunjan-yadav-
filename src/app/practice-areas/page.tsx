import type { Metadata } from "next";
import { siteConfig, practiceAreas } from "@/lib/data";
import { Breadcrumb, SectionHeading, PracticeAreaCard } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore the comprehensive practice areas of Advocate Gunjan Yadav at District Court, Ghaziabad — including criminal defense, bail, family law, civil litigation, corporate law, and more.",
  alternates: { canonical: `${siteConfig.url}/practice-areas` },
};

export default function PracticeAreasPage() {
  const categories = [
    { key: "criminal", label: "Criminal Law" },
    { key: "family", label: "Family & Matrimonial" },
    { key: "civil", label: "Civil & Regulatory" },
    { key: "corporate", label: "Corporate & Commercial" },
    { key: "constitutional", label: "Constitutional" },
    { key: "regulatory", label: "Regulatory" },
  ];

  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Practice Areas" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
            Areas of <span className="text-gold">Practice</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">
            Advocate Gunjan Yadav provides professional legal assistance across 35+
            practice areas at District Court, Ghaziabad.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {categories.map((cat) => {
            const areas = practiceAreas.filter((a) => a.category === cat.key);
            if (areas.length === 0) return null;
            return (
              <div key={cat.key} className="mb-14 last:mb-0">
                <h2 className="text-2xl font-bold text-navy mb-2">{cat.label}</h2>
                <div className="w-12 h-1 bg-gold rounded-full mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {areas.map((area) => (
                    <PracticeAreaCard
                      key={area.id}
                      title={area.title}
                      description={area.shortDescription}
                      icon={area.icon}
                      slug={area.slug}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
