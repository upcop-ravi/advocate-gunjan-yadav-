import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Breadcrumb } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal disclaimer for the website of Advocate Gunjan Yadav, District Court, Ghaziabad.",
  alternates: { canonical: `${siteConfig.url}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Disclaimer" }]} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            <span className="text-gold">Disclaimer</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg text-gray-600 prose-headings:text-navy prose-headings:font-bold">
          <h2>General Disclaimer</h2>
          <p>
            The information provided on this website (www.advocategunjanyadav.in)
            is intended for general informational purposes only and should not be
            treated as legal advice. Viewing this website, submitting an enquiry,
            or communicating through this website does not by itself create an
            advocate-client relationship.
          </p>

          <h2>No Legal Advice</h2>
          <p>
            The content on this website, including legal articles, practice area
            descriptions, and other information, is of a general nature and does
            not constitute legal advice specific to any individual matter. Laws
            and regulations change frequently, and the applicability of any legal
            provision depends on the specific facts and circumstances of each
            case.
          </p>

          <h2>No Advocate-Client Relationship</h2>
          <p>
            Accessing this website, sending an email, submitting a contact form,
            or communicating through WhatsApp or any other channel does not
            establish an advocate-client relationship. An advocate-client
            relationship is created only through mutual agreement and formal
            engagement.
          </p>

          <h2>No Guarantees</h2>
          <p>
            No outcome is guaranteed in any legal matter. The information on this
            website does not guarantee any specific result. Past results do not
            guarantee future outcomes.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            While every effort is made to ensure the accuracy of information on
            this website, Advocate Gunjan Yadav does not warrant or guarantee the
            accuracy, completeness, or currentness of the information provided.
            Users should independently verify any information before relying on
            it.
          </p>

          <h2>External Links</h2>
          <p>
            This website may contain links to external websites for reference
            purposes. Advocate Gunjan Yadav is not responsible for the content,
            accuracy, or privacy practices of external websites.
          </p>

          <h2>Confidentiality Warning</h2>
          <p>
            Users are advised not to send confidential or privileged information
            through the website&apos;s contact forms or other communication channels
            until a formal advocate-client relationship has been established.
          </p>

          <h2>Professional Conduct</h2>
          <p>
            This website is designed to provide information about the legal
            services offered by Advocate Gunjan Yadav and is intended to comply
            with applicable rules of professional conduct. The website does not
            make any comparative or superlative claims about the advocate&apos;s
            services or expertise.
          </p>

          <h2>Jurisdiction</h2>
          <p>
            This website is subject to the laws of India. Any disputes arising
            from the use of this website shall be subject to the jurisdiction of
            the courts in Ghaziabad, Uttar Pradesh, India.
          </p>

          <h2>Contact</h2>
          <p>
            For any questions regarding this disclaimer, please contact:<br />
            <strong>Advocate Gunjan Yadav</strong><br />
            Email: {siteConfig.email}<br />
            Phone: {siteConfig.phoneDisplay}
          </p>
        </div>
      </section>
    </>
  );
}
