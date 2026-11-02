'use client';

import React, { useState, useEffect } from 'react';
import { STUDIO_CONFIG } from '@/lib/studio-config';
import { Phone, Menu, X, Camera, MessageCircle, Clock, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top emergency announcement ticker / quick contact info */}
      <div className="bg-[#1F2937] text-white text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#E8A317]" />
              <span className="hidden sm:inline">Opposite Narmada Complex,</span> Kowdiar, Trivandrum
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E8A317]" />
              {STUDIO_CONFIG.contact.hours}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${STUDIO_CONFIG.contact.phoneClean}`}
              className="hover:text-[#E8A317] transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-[#E8A317]" />
              <span>{STUDIO_CONFIG.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D9] py-3'
            : 'bg-[#FAF8F5] border-b border-[#E8E2D9]/70 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#E8A317] flex items-center justify-center text-white shadow-sm group-hover:bg-[#D4920E] transition-all">
              <Camera className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1F2937] leading-tight">
                {STUDIO_CONFIG.name}
              </span>
              <span className="text-[10px] sm:text-xs text-[#1F2937]/70 font-sans tracking-wide">
                Kowdiar · Photo &amp; Wedding Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#1F2937]/80 hover:text-[#E8A317] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8A317] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Call Now & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${STUDIO_CONFIG.contact.phoneClean}`}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#1F2937] text-white text-xs sm:text-sm font-medium hover:bg-[#111827] active:scale-[0.98] transition-all shadow-sm"
              title="Call studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8A317]" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${STUDIO_CONFIG.contact.phoneClean}?text=Hello%20Sun%20Digital%20Studio!%20I%20would%20like%20to%20inquire%20about%20your%20photography%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#E8A317] text-white text-xs sm:text-sm font-medium hover:bg-[#D4920E] active:scale-[0.98] transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#1F2937] hover:bg-[#E8E2D9]/40 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8E2D9] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <a
                href={`tel:${STUDIO_CONFIG.contact.phoneClean}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1F2937] text-white text-xs font-medium rounded-xl text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-3.5 h-3.5 text-[#E8A317]" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${STUDIO_CONFIG.contact.phoneClean}?text=Hello%20Sun%20Digital%20Studio!%20I%20would%20like%20to%20inquire%20about%20your%20photography%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#E8A317] text-white text-xs font-medium rounded-xl text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-[#1F2937] hover:bg-[#E8E2D9]/50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#E8E2D9]/70 text-xs text-[#1F2937]/70 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E8A317] shrink-0" />
                Opposite Narmada Shopping Complex, Kowdiar
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E8A317] shrink-0" />
                {STUDIO_CONFIG.contact.hours}
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
