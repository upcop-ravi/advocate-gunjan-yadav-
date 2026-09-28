import type { Metadata } from "next";
import { siteConfig, courts } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { Breadcrumb, SectionHeading, ContactCard } from "@/components/Shared";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courts & Jurisdiction",
  description:
    "Advocate Gunjan Yadav practises at the District Court, Ghaziabad, Uttar Pradesh. Learn about the court location, jurisdiction, and how to reach the office.",
  alternates: { canonical: `${siteConfig.url}/courts` },
};

export default function CourtsPage() {
  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Courts & Jurisdiction" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
            Courts & <span className="text-gold">Jurisdiction</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">
            Information about the courts where Advocate Gunjan Yadav practises.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                District Court, Ghaziabad
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Advocate Gunjan Yadav primarily practises at the District Court,
                Ghaziabad, Uttar Pradesh. The District Court handles a wide range
                of civil, criminal, and family matters with jurisdiction over the
                Ghaziabad district.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Ghaziabad District Court Complex houses multiple courts including
                civil courts, criminal courts, family courts, and special courts.
                Advocate Gunjan Yadav represents clients across these various
                jurisdictions.
              </p>

              <h3 className="text-lg font-bold text-navy mb-3 mt-8">Jurisdictions Covered</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Civil Courts",
                  "Criminal Courts",
                  "Family Court",
                  "Motor Accident Claims Tribunal",
                  "Consumer Forum",
                  "Revenue Courts",
                ].map((court) => (
                  <div
                    key={court}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm"
                  >
                    <Icon name="gavel" size={16} className="text-gold shrink-0" />
                    <span className="text-navy font-medium">{court}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-navy mb-3">Office Information</h3>
              <div className="space-y-3">
                <ContactCard
                  icon="location"
                  title="Office Address"
                  value={siteConfig.address.full}
                />
                <ContactCard
                  icon="clock"
                  title="Office Hours"
                  value={siteConfig.officeHours}
                />
                <ContactCard
                  icon="phone"
                  title="Phone"
                  value={siteConfig.phoneDisplay}
                  href={`tel:${siteConfig.phone}`}
                />
                <ContactCard
                  icon="email"
                  title="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
              </div>
            </div>

            {/* Map / Location Card */}
            <div>
              <div className="bg-navy rounded-2xl p-8 mb-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                    <Icon name="location" size={32} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">How to Reach</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    District Court Complex, Ghaziabad, Uttar Pradesh
                  </p>
                </div>
                <div className="space-y-4 text-gray-300 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold mt-0.5">📍</span>
                    <div>
                      <strong className="text-white">Location:</strong> The District Court
                      Complex is located in the heart of Ghaziabad city and is
                      well-connected by road and metro.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold mt-0.5">🚇</span>
                    <div>
                      <strong className="text-white">By Metro:</strong> The nearest metro
                      stations on the Delhi Metro network provide convenient access
                      to the Ghaziabad District Court area.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold mt-0.5">🚗</span>
                    <div>
                      <strong className="text-white">By Road:</strong> The court complex
                      is accessible from NH-9 and major city roads. Parking
                      facilities are available near the complex.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-ivory rounded-2xl p-6 border border-gold/20">
                <h3 className="font-bold text-navy mb-3">Important Note</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  It is recommended to schedule an appointment before visiting the
                  office. Please call{" "}
                  <a href={`tel:${siteConfig.phone}`} className="text-gold font-semibold hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>{" "}
                  during office hours ({siteConfig.officeHoursShort}) to confirm
                  availability and schedule a visit.
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link href="/contact" className="btn-primary">
                  Request Consultation
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
