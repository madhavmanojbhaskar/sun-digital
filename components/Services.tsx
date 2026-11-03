'use client';

import React, { useState } from 'react';
import { STUDIO_CONFIG, ServiceItem } from '@/lib/studio-config';
import {
  UserCheck,
  Camera,
  HeartHandshake,
  BookOpen,
  Users,
  Frame,
  Sparkles,
  Video,
  Mail,
  CreditCard,
  ShieldCheck,
  Disc,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  Camera,
  HeartHandshake,
  BookOpen,
  Users,
  Frame,
  Sparkles,
  Video,
  Mail,
  CreditCard,
  ShieldCheck,
  Disc,
};

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Urgent & Passport',
    'Studio & Portraits',
    'Weddings & Events',
    'Printing & Framing',
    'Tech & Restoration',
  ];

  const filteredServices =
    activeCategory === 'All'
      ? STUDIO_CONFIG.services
      : STUDIO_CONFIG.services.filter((s) => s.category === activeCategory);

  const handleInquiry = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const text = encodeURIComponent(
        `Hello Sun Digital Studio! I would like to inquire about "${service.title}".`
      );
      const link = document.createElement('a');
      link.href = `https://wa.me/${STUDIO_CONFIG.contact.phoneClean}?text=${text}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-t border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8A317] mb-2">
            <span>Comprehensive Studio Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>All Under One Roof</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] tracking-tight mb-4">
            Our Studio &amp; Printing Services
          </h2>
          <p className="text-base sm:text-lg text-[#1F2937]/70 font-sans leading-relaxed">
            From urgent biometric passport prints and express studio shoots to wedding films and custom Italian frames, every service is executed in-house with guaranteed turnaround times.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#E8A317] text-white shadow-sm'
                    : 'bg-white border border-[#E8E2D9] text-[#1F2937]/80 hover:bg-[#FAF8F5]'
                }`}
              >
                {cat} {cat === 'All' ? `(${STUDIO_CONFIG.services.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Camera;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E2D9] shadow-sm hover:shadow-md hover:border-[#E8A317]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Subtitle Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#E8A317] group-hover:bg-[#E8A317] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    {service.highlight ? (
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E8A317]/15 text-[#B87C07]">
                        {service.highlight}
                      </span>
                    ) : (
                      <span className="text-xs text-[#1F2937]/50 font-medium">
                        {service.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#1F2937] mb-1.5 group-hover:text-[#B87C07] transition-colors">
                    {service.title}
                  </h3>

                  {/* Subtitle / turnaround */}
                  <p className="text-xs font-medium text-[#E8A317] mb-3">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#1F2937]/75 font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#E8E2D9]/60 flex items-center justify-between">
                  <button
                    onClick={() => handleInquiry(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F2937] hover:text-[#E8A317] transition-colors"
                  >
                    <span>Inquire for this</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E8A317]" />
                  </button>

                  <a
                    href={`https://wa.me/${STUDIO_CONFIG.contact.phoneClean}?text=${encodeURIComponent(
                      `Hello Sun Digital Studio! I would like to inquire about "${service.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#FAF8F5] hover:bg-[#E8A317] text-[#1F2937] hover:text-white flex items-center justify-center transition-colors"
                    title={`Inquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Requirement */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1F2937] mb-1">
              Have a special photography or printing requirement?
            </h4>
            <p className="text-sm text-[#1F2937]/70">
              Custom sizes, framing, urgent stage video recording, or bulk corporate card printing—we do it all.
            </p>
          </div>
          <a
            href={`https://wa.me/${STUDIO_CONFIG.contact.phoneClean}?text=Hello%20Sun%20Digital%20Studio!%20I%20have%20a%20custom%20photography%20or%20printing%20request.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E8A317] hover:bg-[#D4920E] text-white text-sm font-medium shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
