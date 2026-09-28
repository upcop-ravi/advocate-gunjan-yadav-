import Image from "next/image";
import Link from "next/link";
import { siteConfig, practiceAreas, faqs } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { SectionHeading, PracticeAreaCard, ContactCard } from "@/components/Shared";
import HomeFAQ from "@/components/HomeFAQ";

const featuredPracticeAreas = practiceAreas.slice(0, 8);

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-navy overflow-hidden" aria-label="Hero">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 50%, rgba(201,169,110,0.3) 0%, transparent 50%), 
                               radial-gradient(circle at 75% 20%, rgba(201,169,110,0.2) 0%, transparent 40%)`,
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-6 border border-gold/20">
                <Icon name="scale" size={16} />
                Practising Advocate — District Court, Ghaziabad
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
                Advocate{" "}
                <span className="text-gold">Gunjan Yadav</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
                Professional legal representation and assistance at District
                Court, Ghaziabad. Dedicated to providing competent legal
                services across criminal, civil, family, and corporate law
                matters.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                  Contact Advocate
                  <Icon name="arrowRight" size={18} />
                </Link>
                <Link href="/practice-areas" className="btn-secondary text-base px-7 py-3.5">
                  View Practice Areas
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
                <div>
                  <div className="text-gold font-bold text-2xl">35+</div>
                  <div className="text-gray-400 text-sm">Practice Areas</div>
                </div>
                <div>
                  <div className="text-gold font-bold text-2xl">B.A. LL.B.</div>
                  <div className="text-gray-400 text-sm">Qualification</div>
                </div>
                <div>
                  <div className="text-gold font-bold text-2xl">Ghaziabad</div>
                  <div className="text-gray-400 text-sm">District Court</div>
                </div>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 to-gold/5 rounded-2xl rotate-3" />
                <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-transparent rounded-2xl -rotate-3" />
                <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[400px] lg:w-[380px] lg:h-[460px] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl">
                  <Image
                    src="/images/Advocate Gunjan Yadav.jpg"
                    alt="Advocate Gunjan Yadav — Practising Advocate at District Court, Ghaziabad"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-white rounded-xl shadow-xl px-4 py-3 border border-gray-100">
                  <div className="text-xs text-gray-500 font-medium">Bar Council Reg.</div>
                  <div className="text-navy font-bold text-sm">{siteConfig.barCouncil.registrationNo}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT BRIEF SECTION ===== */}
      <section className="section-padding bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 rounded-full text-gold-dark text-xs font-semibold uppercase tracking-wider mb-5">
                About the Advocate
              </div>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-navy mb-5 leading-tight">
                Professional Legal Assistance at District Court, Ghaziabad
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Advocate Gunjan Yadav is a practising advocate enrolled with the
                Bar Council (Registration No: {siteConfig.barCouncil.registrationNo}),
                with a B.A. LL.B. qualification. She practises at the District Court,
                Ghaziabad, Uttar Pradesh, and handles matters across a wide spectrum
                of legal disciplines.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With a commitment to professional ethics and diligent legal
                representation, Advocate Gunjan Yadav provides legal assistance
                in criminal defense, bail matters, family law, civil litigation,
                corporate law, and numerous other practice areas at the
                Ghaziabad District Court.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon name="certificate" size={16} className="text-gold" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-navy">B.A. LL.B.</div>
                    <div className="text-gray-500 text-xs">Qualification</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon name="civil" size={16} className="text-gold" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-navy">District Court</div>
                    <div className="text-gray-500 text-xs">Ghaziabad, U.P.</div>
                  </div>
                </div>
              </div>
              <Link href="/about" className="btn-outline-gold">
                View Full Profile
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>

            {/* Profile Card */}
            <div className="bg-gradient-to-br from-ivory to-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-3 border-gold/30 shadow-lg mb-4">
                  <Image
                    src="/images/Advocate Gunjan Yadav.jpg"
                    alt="Advocate Gunjan Yadav"
                    width={112}
                    height={112}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy">Advocate Gunjan Yadav</h3>
                <p className="text-gold text-sm font-medium mt-1">Practising Advocate</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="certificate" size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="text-gray-500">Qualification: </span>
                    <span className="text-navy font-medium">{siteConfig.qualifications}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="document" size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="text-gray-500">Bar Council Reg: </span>
                    <span className="text-navy font-medium">{siteConfig.barCouncil.registrationNo}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="location" size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="text-gray-500">Court: </span>
                    <span className="text-navy font-medium">District Court, Ghaziabad</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="clock" size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="text-gray-500">Hours: </span>
                    <span className="text-navy font-medium">{siteConfig.officeHoursShort}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="phone" size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="text-gray-500">Phone: </span>
                    <a href={`tel:${siteConfig.phone}`} className="text-navy font-medium hover:text-gold transition-colors">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="email" size={18} className="text-gold shrink-0" />
                  <div>
                    <span className="text-gray-500">Email: </span>
                    <a href={`mailto:${siteConfig.email}`} className="text-navy font-medium hover:text-gold transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRACTICE AREAS SECTION ===== */}
      <section className="section-padding bg-gray-50" aria-labelledby="practice-heading">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Areas of Practice"
            subtitle="Advocate Gunjan Yadav provides legal assistance across a comprehensive range of practice areas at District Court, Ghaziabad."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredPracticeAreas.map((area) => (
              <PracticeAreaCard
                key={area.id}
                title={area.title}
                description={area.shortDescription}
                icon={area.icon}
                slug={area.slug}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/practice-areas" className="btn-outline-gold">
              View All 35+ Practice Areas
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== COURTS SECTION ===== */}
      <section className="section-padding bg-navy" aria-labelledby="courts-heading">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Court of Practice"
            subtitle="Advocate Gunjan Yadav practises at the following court."
            light
          />
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Icon name="civil" size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                District Court, Ghaziabad
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Primary court of practice. Handling matters across civil,
                criminal, family, and other jurisdictions at the District Court
                Complex, Ghaziabad, Uttar Pradesh.
              </p>
              <Link href="/courts" className="btn-primary">
                Court & Location Details
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="section-padding bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Professional Approach"
            subtitle="Advocate Gunjan Yadav's practice is guided by professional ethics, diligence, and a commitment to providing competent legal assistance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "shield",
                title: "Professional Ethics",
                desc: "Adherence to professional conduct rules and ethical standards in every legal matter.",
              },
              {
                icon: "document",
                title: "Diligent Preparation",
                desc: "Thorough case preparation, meticulous documentation, and attention to procedural requirements.",
              },
              {
                icon: "scale",
                title: "Comprehensive Practice",
                desc: "Handling matters across 35+ areas of law including criminal, civil, family, and corporate matters.",
              },
              {
                icon: "user",
                title: "Client Communication",
                desc: "Clear and regular communication to keep clients informed about their legal matters.",
              },
              {
                icon: "location",
                title: "Accessible Location",
                desc: "Convenient office at District Court Complex, Ghaziabad with clear office hours.",
              },
              {
                icon: "gavel",
                title: "Court Representation",
                desc: "Professional court representation at District Court, Ghaziabad across multiple jurisdictions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                  <Icon name={item.icon} size={22} className="text-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="section-padding bg-ivory" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about legal services and consultations."
          />
          <HomeFAQ faqs={faqs.slice(0, 5).map(f => ({ question: f.question, answer: f.answer }))} />
          <div className="text-center mt-8">
            <Link href="/faqs" className="btn-outline-gold">
              View All FAQs
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA SECTION ===== */}
      <section className="section-padding bg-navy relative overflow-hidden" aria-labelledby="contact-cta-heading">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="contact-cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Need Legal Assistance?
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Contact Advocate Gunjan Yadav for professional legal assistance.
                Whether you need representation in court, legal drafting, or
                consultation on a legal matter, reach out today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary text-base">
                  Request Consultation
                  <Icon name="arrowRight" size={18} />
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-secondary text-base">
                  <Icon name="phone" size={18} />
                  Call Now
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <ContactCard
                icon="location"
                title="Office"
                value={siteConfig.address.court}
              />
              <ContactCard
                icon="clock"
                title="Hours"
                value={siteConfig.officeHoursShort}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
