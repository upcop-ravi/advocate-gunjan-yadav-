"use client";

import { useState, FormEvent } from "react";
import { Icon } from "@/components/Icons";

export default function ConsultationForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    preferredContact: "phone",
    message: "",
    consent: false,
    honeypot: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    setFormState("submitting");

    // Simulate form submission (in production, this would be an API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        preferredContact: "phone",
        message: "",
        consent: false,
        honeypot: "",
      });
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">
          Thank You for Your Enquiry
        </h3>
        <p className="text-gray-600 mb-4">
          Your consultation request has been received. Advocate Gunjan Yadav
          will respond during office hours.
        </p>
        <p className="text-xs text-gray-500 mb-6">
          Please note: Submitting this form does not create an advocate-client
          relationship.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="btn-outline-gold text-sm"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot - hidden from users */}
      <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            maxLength={100}
            className="form-input"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            maxLength={15}
            className="form-input"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          maxLength={100}
          className="form-input"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="subject" className="form-label">
          Legal Matter / Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          required
          className="form-input"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        >
          <option value="">Select a legal matter</option>
          <option value="Criminal Defense">Criminal Defense</option>
          <option value="Bail / Anticipatory Bail">Bail / Anticipatory Bail</option>
          <option value="Family Law / Divorce">Family Law / Divorce</option>
          <option value="Domestic Violence">Domestic Violence</option>
          <option value="Child Custody / Maintenance">Child Custody / Maintenance</option>
          <option value="Court Marriage">Court Marriage</option>
          <option value="Cheque Bounce">Cheque Bounce</option>
          <option value="Civil Dispute">Civil Dispute</option>
          <option value="Property / Land Matter">Property / Land Matter</option>
          <option value="Consumer Complaint">Consumer Complaint</option>
          <option value="Cyber Crime">Cyber Crime</option>
          <option value="Corporate / Commercial">Corporate / Commercial</option>
          <option value="Legal Drafting">Legal Drafting</option>
          <option value="FIR / FIR Quashing">FIR / FIR Quashing</option>
          <option value="498A Defense">498A Defense</option>
          <option value="RERA / Real Estate">RERA / Real Estate</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferredContact" className="form-label">
          Preferred Contact Method
        </label>
        <select
          id="preferredContact"
          className="form-input"
          value={formData.preferredContact}
          onChange={(e) =>
            setFormData({ ...formData, preferredContact: e.target.value })
          }
        >
          <option value="phone">Phone Call</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={1000}
          className="form-input resize-none"
          placeholder="Briefly describe your legal matter (do not include confidential information)"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          required
          className="mt-1 w-4 h-4 accent-gold rounded"
          checked={formData.consent}
          onChange={(e) =>
            setFormData({ ...formData, consent: e.target.checked })
          }
        />
        <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
          I understand that submitting this form does not create an
          advocate-client relationship. I consent to being contacted regarding
          this enquiry. <span className="text-red-500">*</span>
        </label>
      </div>

      {formState === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          An error occurred. Please try again or contact us directly at{" "}
          <a href="tel:+919454072550" className="font-semibold underline">
            +91 94540-72550
          </a>.
        </div>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-primary w-full text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Submit Consultation Request
            <Icon name="arrowRight" size={18} />
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Your information will be handled in accordance with our{" "}
        <a href="/privacy-policy" className="text-gold underline">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}
