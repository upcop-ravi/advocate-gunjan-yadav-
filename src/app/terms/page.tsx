import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Breadcrumb } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the website of Advocate Gunjan Yadav, District Court, Ghaziabad.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Terms of Use" }]} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Terms of <span className="text-gold">Use</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg text-gray-600 prose-headings:text-navy prose-headings:font-bold">
          <p className="text-sm text-gray-500">Last Updated: September 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the website of Advocate Gunjan Yadav
            (www.advocategunjanyadav.in), you agree to be bound by these Terms
            of Use. If you do not agree with any of these terms, please do not
            use this website.
          </p>

          <h2>Use of Website</h2>
          <p>
            This website is provided for informational purposes only. The
            content is intended to provide general information about the legal
            services offered by Advocate Gunjan Yadav and does not constitute
            legal advice.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The content on this website, including text, images, design elements,
            and other materials, is the property of Advocate Gunjan Yadav and is
            protected by applicable intellectual property laws. You may not
            reproduce, distribute, or use any content from this website without
            prior written consent.
          </p>

          <h2>User Conduct</h2>
          <p>Users of this website agree not to:</p>
          <ul>
            <li>Submit false or misleading information through contact forms</li>
            <li>Attempt to gain unauthorized access to the website or its systems</li>
            <li>Use the website for any unlawful purpose</li>
            <li>Transmit harmful code, spam, or malware</li>
            <li>Interfere with the proper functioning of the website</li>
          </ul>

          <h2>Contact Form Submissions</h2>
          <p>
            Information submitted through contact forms is used solely for the
            purpose of responding to your enquiry. Submission of a contact form
            does not create an advocate-client relationship.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Advocate Gunjan Yadav shall not be liable for any direct, indirect,
            incidental, or consequential damages arising from the use of this
            website or the information contained herein.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. Advocate
            Gunjan Yadav is not responsible for the content or privacy practices
            of such websites.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            These Terms of Use may be updated from time to time. Continued use
            of the website after changes constitutes acceptance of the updated
            terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of India. Any disputes
            shall be subject to the exclusive jurisdiction of the courts in
            Ghaziabad, Uttar Pradesh, India.
          </p>

          <h2>Contact</h2>
          <p>
            For questions regarding these Terms of Use:<br />
            <strong>Advocate Gunjan Yadav</strong><br />
            Email: {siteConfig.email}<br />
            Phone: {siteConfig.phoneDisplay}
          </p>
        </div>
      </section>
    </>
  );
}
