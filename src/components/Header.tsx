"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Icon } from "@/components/Icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Courts", href: "/courts" },
  { label: "Legal Articles", href: "/legal-articles" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 opacity-90">
              <Icon name="location" size={14} />
              {siteConfig.address.court}
            </span>
            <span className="hidden sm:flex items-center gap-1.5 opacity-90">
              <Icon name="clock" size={14} />
              {siteConfig.officeHoursShort}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
              aria-label="Call Advocate Gunjan Yadav"
            >
              <Icon name="phone" size={14} />
              <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-gold transition-colors"
              aria-label="Email Advocate Gunjan Yadav"
            >
              <Icon name="email" size={14} />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-white border-b border-gray-100"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-[72px]"
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-navy flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Icon name="scale" size={22} className="text-gold" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-navy text-base md:text-lg tracking-tight">
                Adv. Gunjan Yadav
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide uppercase">
                District Court, Ghaziabad
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy hover:bg-gray-50 rounded-md transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 btn-primary text-sm py-2.5 px-5"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile: Call + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
              aria-label="Call now"
            >
              <Icon name="phone" size={18} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-navy hover:bg-gray-100 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <Icon name="close" size={22} />
              ) : (
                <Icon name="menu" size={22} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[calc(theme(spacing.16)+2.25rem)] z-50 transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu Panel */}
          <div
            className={`relative bg-white shadow-2xl max-h-[calc(100vh-8rem)] overflow-y-auto transition-transform duration-300 ${
              mobileMenuOpen ? "translate-y-0" : "-translate-y-4"
            }`}
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-navy hover:bg-ivory rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full btn-primary text-center"
                >
                  Request Consultation
                </Link>
                <div className="flex gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-navy text-white rounded-lg text-sm font-medium hover:bg-navy-light transition-colors"
                  >
                    <Icon name="phone" size={16} /> Call
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    <Icon name="whatsapp" size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
