'use client';

import React from 'react';
import { STUDIO_CONFIG } from '@/lib/studio-config';
import { Camera, MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-stone-300 border-t border-stone-800 pt-16 pb-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8A317] flex items-center justify-center text-white shadow-sm">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  {STUDIO_CONFIG.name}
                </span>
                <span className="text-xs text-[#E8A317] font-medium block">
                  {STUDIO_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              Your neighborhood photo and wedding studio in Kowdiar, Thiruvananthapuram. Specializing in urgent biometric passport photos, express studio portraits, 4-day wedding albums, and premium archival framing.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-[#E8A317] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Sun Digital Studio"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-[#E8A317] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Sun Digital Studio"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-[#E8A317] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Sun Digital Studio"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#about" className="hover:text-[#E8A317] transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E8A317] transition-colors">
                  All 12 Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E8A317] transition-colors">
                  Photo &amp; Album Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#E8A317] transition-colors">
                  Why Choose Sun Digital
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#E8A317] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E8A317] transition-colors">
                  Contact &amp; Map Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3 text-sm text-stone-400">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase">
              Kowdiar Studio Desk
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2.5 text-stone-300">
                <MapPin className="w-4 h-4 text-[#E8A317] shrink-0 mt-0.5" />
                <span>{STUDIO_CONFIG.contact.address.displayText}</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8A317] shrink-0" />
                <a
                  href={`tel:${STUDIO_CONFIG.contact.phoneClean}`}
                  className="hover:text-white transition-colors"
                >
                  {STUDIO_CONFIG.contact.phone}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E8A317] shrink-0" />
                <a
                  href={`mailto:${STUDIO_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {STUDIO_CONFIG.contact.email}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E8A317] shrink-0" />
                <span>{STUDIO_CONFIG.contact.hours}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Sun Digital Studio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Opposite Narmada Shopping Complex, Kowdiar, Thiruvananthapuram</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
