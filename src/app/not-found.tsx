import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-8xl font-bold text-gold/20 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
          Please check the URL or navigate using the links below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Icon name="home" size={18} />
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn-outline-gold">
            Contact Us
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/practice-areas" className="text-gold hover:text-gold-dark transition-colors">
            Practice Areas
          </Link>
          <Link href="/about" className="text-gold hover:text-gold-dark transition-colors">
            About
          </Link>
          <Link href="/legal-articles" className="text-gold hover:text-gold-dark transition-colors">
            Legal Articles
          </Link>
          <Link href="/faqs" className="text-gold hover:text-gold-dark transition-colors">
            FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
