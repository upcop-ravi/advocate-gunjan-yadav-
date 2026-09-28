import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { Breadcrumb } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the website of Advocate Gunjan Yadav, District Court, Ghaziabad.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Privacy <span className="text-gold">Policy</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg text-gray-600 prose-headings:text-navy prose-headings:font-bold">
          <p className="text-sm text-gray-500">Last Updated: September 2026</p>

          <h2>Introduction</h2>
          <p>
            This Privacy Policy explains how information is collected, used, and
            protected when you visit the website of Advocate Gunjan Yadav
            (www.advocategunjanyadav.in). By using this website, you consent to
            the practices described in this policy.
          </p>

          <h2>Information We Collect</h2>
          <h3>Contact Form Submissions</h3>
          <p>When you submit a consultation request or contact form, we may collect:</p>
          <ul>
            <li>Full name</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>Subject of legal matter</li>
            <li>Message content</li>
            <li>Preferred contact method</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            Our web server may automatically collect certain information such as
            IP address, browser type, operating system, referring URLs, and pages
            visited. This information is used for website analytics and security
            purposes.
          </p>

          <h3>Cookies</h3>
          <p>
            This website may use cookies and similar technologies for
            functionality and analytics purposes. You can control cookie settings
            through your browser.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your consultation enquiry</li>
            <li>To communicate with you about your legal matter</li>
            <li>To improve the website and user experience</li>
            <li>For website analytics and security monitoring</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or share your personal information with third
            parties for marketing purposes. Information may be shared only:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>When required by law or court order</li>
            <li>To protect the rights and safety of the advocate or users</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the Internet is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Data Retention</h2>
          <p>
            Contact form submissions and consultation requests are retained for
            the purpose of responding to your enquiry and for as long as
            necessary for legitimate legal and business purposes.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This website may use third-party services such as Google Analytics
            for website analytics. These services have their own privacy
            policies, and we encourage you to review them.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Opt out of communications</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            This website is not intended for children under the age of 18. We do
            not knowingly collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. Changes will
            be posted on this page with an updated date.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this Privacy Policy, please contact:
          </p>
          <p>
            <strong>Advocate Gunjan Yadav</strong><br />
            Email: {siteConfig.email}<br />
            Phone: {siteConfig.phoneDisplay}<br />
            Address: {siteConfig.address.full}
          </p>
        </div>
      </section>
    </>
  );
}
