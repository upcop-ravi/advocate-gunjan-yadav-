import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, practiceAreas } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { Breadcrumb, SectionHeading } from "@/components/Shared";

export const metadata: Metadata = {
  title: "About Advocate Gunjan Yadav",
  description:
    "Learn about Advocate Gunjan Yadav — a practising advocate at District Court, Ghaziabad, Uttar Pradesh. B.A. LL.B. qualified, handling criminal, civil, family, and corporate law matters.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About Advocate Gunjan Yadav | District Court Ghaziabad",
    description:
      "Professional profile of Advocate Gunjan Yadav, practising at District Court, Ghaziabad.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const practiceCategories = {
    criminal: practiceAreas.filter((a) => a.category === "criminal"),
    family: practiceAreas.filter((a) => a.category === "family"),
    civil: practiceAreas.filter((a) => a.category === "civil"),
    corporate: practiceAreas.filter((a) => a.category === "corporate"),
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "About" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
            About Advocate <span className="text-gold">Gunjan Yadav</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">
            Practising Advocate at District Court, Ghaziabad, Uttar Pradesh
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-ivory to-white rounded-2xl p-6 border border-gray-100 shadow-md">
                <div className="text-center mb-6">
                  <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden border-3 border-gold/30 shadow-lg mb-4">
                    <Image
                      src="/images/Advocate Gunjan Yadav.jpg"
                      alt="Advocate Gunjan Yadav — District Court, Ghaziabad"
                      width={144}
                      height={144}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-navy">Advocate Gunjan Yadav</h2>
                  <p className="text-gold text-sm font-medium mt-1">Practising Advocate</p>
                  <p className="text-gray-500 text-xs mt-1">District Court, Ghaziabad</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="certificate" size={18} className="text-gold shrink-0" />
                    <div>
                      <div className="text-gray-500 text-xs">Qualification</div>
                      <div className="text-navy font-semibold">{siteConfig.qualifications}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="document" size={18} className="text-gold shrink-0" />
                    <div>
                      <div className="text-gray-500 text-xs">Bar Council Registration</div>
                      <div className="text-navy font-semibold">{siteConfig.barCouncil.registrationNo}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="location" size={18} className="text-gold shrink-0" />
                    <div>
                      <div className="text-gray-500 text-xs">Court of Practice</div>
                      <div className="text-navy font-semibold">{siteConfig.address.court}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="clock" size={18} className="text-gold shrink-0" />
                    <div>
                      <div className="text-gray-500 text-xs">Office Hours</div>
                      <div className="text-navy font-semibold">{siteConfig.officeHoursShort}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="btn-primary w-full text-sm"
                  >
                    <Icon name="phone" size={16} />
                    Call {siteConfig.phoneDisplay}
                  </a>
                  <Link href="/contact" className="btn-outline-gold w-full text-sm">
                    Request Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Professional Profile
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />

              <div className="prose prose-lg max-w-none text-gray-600 space-y-5">
                <p>
                  Advocate Gunjan Yadav is a practising advocate at the District Court,
                  Ghaziabad, Uttar Pradesh, India. She holds a <strong>B.A. LL.B.</strong> degree
                  and is enrolled with the Bar Council under Registration No.{" "}
                  <strong>{siteConfig.barCouncil.registrationNo}</strong>.
                </p>
                <p>
                  Advocate Gunjan Yadav provides professional legal assistance across a
                  wide range of practice areas including criminal defense, bail matters,
                  family law, matrimonial disputes, civil litigation, cheque bounce
                  cases, consumer matters, cyber crime defense, corporate law, and
                  many other areas of legal practice.
                </p>
                <p>
                  Her practice is guided by a commitment to professional ethics,
                  diligent case preparation, and clear communication with clients.
                  She handles matters across criminal, civil, family, and corporate
                  jurisdictions at the Ghaziabad District Court.
                </p>
                <p>
                  Advocate Gunjan Yadav believes in providing accessible and
                  competent legal representation while maintaining the highest
                  standards of professional conduct. She is available for consultation
                  during office hours at the District Court, Ghaziabad.
                </p>
              </div>

              {/* Practice Area Categories */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-navy mb-6">Areas of Practice</h3>
                <div className="space-y-6">
                  {Object.entries(practiceCategories).map(([category, areas]) => (
                    areas.length > 0 && (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-3 capitalize">
                          {category === "corporate" ? "Corporate & Commercial" : category} Law
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {areas.map((area) => (
                            <Link
                              key={area.id}
                              href={`/practice-areas/${area.slug}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gold/10 text-gray-700 hover:text-navy text-sm rounded-lg border border-gray-200 hover:border-gold/30 transition-all"
                            >
                              <Icon name={area.icon} size={14} className="text-gold" />
                              {area.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 bg-navy rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors">
                    <Icon name="phone" size={18} className="text-gold" />
                    {siteConfig.phoneDisplay}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors">
                    <Icon name="email" size={18} className="text-gold" />
                    {siteConfig.email}
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Icon name="location" size={18} className="text-gold" />
                    {siteConfig.address.court}
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Icon name="clock" size={18} className="text-gold" />
                    {siteConfig.officeHours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
