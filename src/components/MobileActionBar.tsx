"use client";

import { siteConfig } from "@/lib/data";
import { Icon } from "@/components/Icons";

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar md:hidden" aria-label="Quick actions">
      <a href={`tel:${siteConfig.phone}`} aria-label="Call Advocate Gunjan Yadav">
        <Icon name="phone" size={20} className="text-gold" />
        <span>Call</span>
      </a>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <Icon name="whatsapp" size={20} className="text-green-400" />
        <span>WhatsApp</span>
      </a>
      <a href={`mailto:${siteConfig.email}`} aria-label="Send email">
        <Icon name="email" size={20} className="text-gold" />
        <span>Email</span>
      </a>
      <a href="/contact" aria-label="Contact page">
        <Icon name="user" size={20} className="text-gold" />
        <span>Consult</span>
      </a>
    </div>
  );
}
