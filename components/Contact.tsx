'use client';

import React, { useState } from 'react';
import { STUDIO_CONFIG } from '@/lib/studio-config';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export default function Contact({ initialService }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Derived active service: user selection takes precedence, falls back to initialService or default
  const activeService = selectedService ?? initialService ?? 'Urgent Passport Photos';

  const getWhatsAppUrl = () => {
    const text = `Hello Sun Digital Studio!
I would like to inquire about your services:

*Name:* ${name.trim()}
*Phone:* ${phone.trim()}
*Service:* ${activeService}
*Requirements:* ${message.trim() || 'Please share more details and pricing.'}

Looking forward to your reply!`;
    return `https://wa.me/${STUDIO_CONFIG.contact.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  // Submit via WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setFormError('Please enter both your Name and Phone number to continue.');
      return;
    }
    setFormError(null);
    setFormSubmitted(true);

    // Open WhatsApp safely via anchor or direct navigation
    const link = document.createElement('a');
    link.href = getWhatsAppUrl();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  // Submit via Mailto link
  const handleEmailSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      setFormError('Please enter both your Name and Phone number to continue.');
      return;
    }
    setFormError(null);

    const subject = encodeURIComponent(
      `Studio Inquiry: ${activeService} - ${name}`
    );
    const body = encodeURIComponent(
      `Hello Sun Digital Studio,

Name: ${name}
Phone: ${phone}
Service: ${activeService}

Message / Details:
${message || 'Please provide package details and availability.'}

Best regards,
${name}`
    );

    window.location.href = `mailto:${STUDIO_CONFIG.contact.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-t border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8A317] mb-2">
            <span>Get In Touch</span>
            <span aria-hidden="true">·</span>
            <span>Visit Us in Kowdiar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] tracking-tight mb-4">
            Contact Sun Digital Studio
          </h2>
          <p className="text-base sm:text-lg text-[#1F2937]/70 font-sans leading-relaxed">
            Have a question, need urgent passport photos, or want to discuss wedding coverage? Drop by our studio or send us a quick WhatsApp inquiry.
          </p>
        </div>

        {/* 2-Column Split: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
          {/* Left Column: Business Info & Get Directions */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-7 sm:p-9 border border-[#E8E2D9] shadow-sm space-y-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8A317] block mb-1">
                Studio Location
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1F2937]">
                Sun Digital Studio
              </h3>
              <p className="text-xs text-[#1F2937]/60 mt-0.5">
                Kowdiar, Thiruvananthapuram, Kerala
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#E8A317] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <span className="font-semibold block text-[#1F2937] mb-0.5">
                  Address
                </span>
                <p className="text-[#1F2937]/75 font-sans leading-relaxed">
                  {STUDIO_CONFIG.contact.address.displayText}
                </p>
                <span className="text-xs text-[#E8A317] font-medium block mt-1">
                  Landmark: Directly opposite Narmada Complex main gate
                </span>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#E8A317] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <span className="font-semibold block text-[#1F2937] mb-0.5">
                  Phone &amp; WhatsApp
                </span>
                <a
                  href={`tel:${STUDIO_CONFIG.contact.phoneClean}`}
                  className="text-[#1F2937] hover:text-[#E8A317] font-medium transition-colors block"
                >
                  {STUDIO_CONFIG.contact.phone}
                </a>
                <span className="text-xs text-[#1F2937]/60">
                  Instant response during studio hours
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#E8A317] shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <span className="font-semibold block text-[#1F2937] mb-0.5">
                  Email
                </span>
                <a
                  href={`mailto:${STUDIO_CONFIG.contact.email}`}
                  className="text-[#1F2937] hover:text-[#E8A317] font-medium transition-colors block break-all"
                >
                  {STUDIO_CONFIG.contact.email}
                </a>
                <span className="text-xs text-[#1F2937]/60">
                  For high-res photo files &amp; album softcopies
                </span>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#E8A317] shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <span className="font-semibold block text-[#1F2937] mb-0.5">
                  Studio Working Hours
                </span>
                <p className="text-[#1F2937]/80 font-medium">
                  {STUDIO_CONFIG.contact.hours}
                </p>
                <span className="text-xs text-[#1F2937]/60">
                  Sunday sessions available with prior booking
                </span>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-2">
              <a
                href={STUDIO_CONFIG.contact.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1F2937] hover:bg-[#111827] text-white text-sm font-medium shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-[#E8A317]" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pre-filled WhatsApp Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-[#E8E2D9] shadow-sm">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-[#1F2937]">
                  Send a Direct Inquiry
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Instant WhatsApp Send
                </span>
              </div>
              <p className="text-sm text-[#1F2937]/70 font-sans mt-1">
                Fill in the details below and we will automatically open a pre-filled WhatsApp message for you.
              </p>
            </div>

            {formError && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-center justify-between">
                <span>{formError}</span>
                <button
                  onClick={() => setFormError(null)}
                  className="font-bold underline ml-2"
                >
                  Dismiss
                </button>
              </div>
            )}

            {formSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-center justify-between">
                <span>Inquiry opened in WhatsApp! You can also reach us directly at {STUDIO_CONFIG.contact.phone}.</span>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="font-bold underline ml-2"
                >
                  Dismiss
                </button>
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#1F2937] uppercase tracking-wider mb-1.5"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Suresh Kumar"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D9] focus:outline-none focus:border-[#E8A317] focus:ring-2 focus:ring-[#E8A317]/20 text-sm font-sans bg-[#FAF8F5]/50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold text-[#1F2937] uppercase tracking-wider mb-1.5"
                  >
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D9] focus:outline-none focus:border-[#E8A317] focus:ring-2 focus:ring-[#E8A317]/20 text-sm font-sans bg-[#FAF8F5]/50"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-xs font-semibold text-[#1F2937] uppercase tracking-wider mb-1.5"
                >
                  Required Service
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={activeService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D9] focus:outline-none focus:border-[#E8A317] focus:ring-2 focus:ring-[#E8A317]/20 text-sm font-sans bg-[#FAF8F5]/50"
                >
                  {STUDIO_CONFIG.services.map((svc) => (
                    <option key={svc.id} value={svc.title}>
                      {svc.title} ({svc.subtitle})
                    </option>
                  ))}
                  <option value="General Inquiry / Other">General Studio Inquiry / Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[#1F2937] uppercase tracking-wider mb-1.5"
                >
                  Details / Preferred Date / Specific Requests
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your requirements (e.g. visa country, wedding date in Trivandrum, frame size, or number of copies)..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D9] focus:outline-none focus:border-[#E8A317] focus:ring-2 focus:ring-[#E8A317]/20 text-sm font-sans bg-[#FAF8F5]/50 resize-y"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E8A317] hover:bg-[#D4920E] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#1F2937] font-medium text-sm transition-all"
                >
                  <Mail className="w-4 h-4 text-[#1F2937]" />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-[11px] text-[#1F2937]/50 text-center font-sans pt-1">
                No spam. Your contact details are kept strictly private and used solely to answer your inquiry.
              </p>
            </form>
          </div>
        </div>

        {/* Embedded Google Map Section */}
        <div className="rounded-2xl overflow-hidden bg-white border border-[#E8E2D9] shadow-sm">
          <div className="p-4 sm:p-5 border-b border-[#E8E2D9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF8F5]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#E8A317] text-white flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-[#1F2937]">
                  Sun Digital Studio Map Location
                </h4>
                <p className="text-xs text-[#1F2937]/70 font-sans">
                  Opposite Narmada Shopping Complex, Kowdiar, Thiruvananthapuram
                </p>
              </div>
            </div>

            <a
              href={STUDIO_CONFIG.contact.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F2937] hover:text-[#E8A317] px-3 py-1.5 rounded-lg bg-white border border-[#E8E2D9] transition-colors self-start sm:self-auto"
            >
              <span>Open in Google Maps App</span>
              <Navigation className="w-3.5 h-3.5 text-[#E8A317]" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="relative w-full h-[320px] sm:h-[400px] bg-stone-100">
            <iframe
              src={STUDIO_CONFIG.contact.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sun Digital Studio Location Map - Kowdiar, Thiruvananthapuram"
              className="w-full h-full grayscale-[15%] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
