import Link from "next/link";
import { Icon } from "@/components/Icons";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb py-4">
      <Link href="/" className="flex items-center gap-1">
        <Icon name="home" size={14} />
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <span className="breadcrumb-separator">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="text-gray-700 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-1 rounded-full bg-gold ${
          centered ? "mx-auto" : ""
        } mb-5`}
      />
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function DisclaimerBanner() {
  return (
    <div className="bg-ivory-warm border border-gold/20 rounded-lg p-4 md:p-5">
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
        <strong className="text-navy">Disclaimer:</strong> This content is
        provided for general informational purposes only and does not constitute
        legal advice. Laws and procedures may change, and the applicability of
        any legal provision depends on the facts of the individual matter. Please
        consult a qualified legal professional for advice specific to your
        situation.
      </p>
    </div>
  );
}

export function PracticeAreaCard({
  title,
  description,
  icon,
  slug,
}: {
  title: string;
  description: string;
  icon: string;
  slug: string;
}) {
  return (
    <Link
      href={`/practice-areas/${slug}`}
      className="group block bg-white rounded-xl border border-gray-100 p-6 card-hover"
    >
      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
        <Icon name={icon} size={24} className="text-gold" />
      </div>
      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold-dark transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
        Learn More <Icon name="arrowRight" size={14} />
      </span>
    </Link>
  );
}

export function FAQAccordion({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-navy text-base pr-4">{question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-gold text-white rotate-180" : "bg-gray-100 text-gray-500"
          }`}
        >
          <Icon name="chevronDown" size={16} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: string;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 card-hover">
      <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
        <Icon name={icon} size={20} className="text-gold" />
      </div>
      <div>
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
          {title}
        </div>
        <div className="text-navy font-semibold text-sm">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return content;
}
