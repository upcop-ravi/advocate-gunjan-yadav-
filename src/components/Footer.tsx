import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Icon } from "@/components/Icons";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Courts & Jurisdiction", href: "/courts" },
    { label: "Legal Articles", href: "/legal-articles" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  practiceAreas: [
    { label: "Criminal Defense", href: "/practice-areas/criminal-defense" },
    { label: "Bail & Bail Advocacy", href: "/practice-areas/bail-advocacy" },
    { label: "Family Law", href: "/practice-areas/family-law" },
    { label: "Divorce", href: "/practice-areas/divorce" },
    { label: "Civil Disputes", href: "/practice-areas/civil-disputes" },
    { label: "Cheque Bounce", href: "/practice-areas/cheque-bounce" },
    { label: "Consumer Law", href: "/practice-areas/consumer-law" },
    { label: "View All", href: "/practice-areas" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                <Icon name="scale" size={22} className="text-gold" />
              </div>
              <div>
                <div className="font-bold text-lg text-white">
                  Adv. Gunjan Yadav
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  District Court, Ghaziabad
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Practising Advocate at District Court, Ghaziabad, Uttar Pradesh.
              Providing professional legal assistance in criminal, civil, family,
              and corporate matters.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold transition-colors"
              >
                <Icon name="phone" size={16} className="text-gold" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold transition-colors"
              >
                <Icon name="email" size={16} className="text-gold" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <Icon name="location" size={16} className="text-gold mt-0.5 shrink-0" />
                {siteConfig.address.full}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Icon name="clock" size={16} className="text-gold" />
                {siteConfig.officeHours}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-5">
              Practice Areas
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.practiceAreas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-all duration-200 ${
                      link.label === "View All"
                        ? "text-gold hover:text-gold-light font-medium"
                        : "text-gray-400 hover:text-white hover:pl-1"
                    }`}
                  >
                    {link.label}
                    {link.label === "View All" && " →"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-5">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                <Icon name="whatsapp" size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">Disclaimer:</strong> The
            information provided on this website is for general informational
            purposes only and does not constitute legal advice. Viewing this
            website or submitting an enquiry does not create an advocate-client
            relationship. Please seek professional advice for your specific legal
            matter.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {currentYear} Advocate Gunjan Yadav. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            District Court, Ghaziabad, Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
