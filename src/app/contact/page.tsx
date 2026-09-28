import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { Breadcrumb, ContactCard } from "@/components/Shared";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Contact — Request Legal Consultation",
  description:
    "Contact Advocate Gunjan Yadav for legal consultation and professional legal assistance at District Court, Ghaziabad. Call, email, WhatsApp, or submit a consultation request.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
            Contact <span className="text-gold">Advocate Gunjan Yadav</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">
            Reach out for professional legal consultation and assistance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Get in Touch
              </h2>
              <div className="w-12 h-1 bg-gold rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed mb-8">
                For legal consultation or enquiry, please contact Advocate
                Gunjan Yadav through any of the following methods, or submit the
                consultation request form.
              </p>

              <div className="space-y-4 mb-8">
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
                  icon="whatsapp"
                  title="WhatsApp"
                  value={siteConfig.phoneDisplay}
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                />
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
              </div>

              <div className="bg-ivory-warm rounded-xl p-5 border border-gold/20">
                <h3 className="font-bold text-navy text-sm mb-2">Important Notice</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Please do not submit confidential or privileged information
                  through this form until an advocate-client relationship has been
                  formally established. Submitting this form does not by itself
                  create an advocate-client relationship.
                </p>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-navy mb-2">
                  Request a Consultation
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill out the form below and Advocate Gunjan Yadav will get back
                  to you.
                </p>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
