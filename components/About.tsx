'use client';

import React from 'react';
import Image from 'next/image';
import { STUDIO_CONFIG } from '@/lib/studio-config';
import { Clock, BookOpen, Frame, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function About() {
  const highlightIcons = [Clock, BookOpen, Frame];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8A317] mb-2">
            <span>About Sun Digital Studio</span>
            <span aria-hidden="true">·</span>
            <span>Kowdiar, Trivandrum</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] tracking-tight leading-tight">
            A Trusted Name in Photography &amp; Print Since Day One
          </h2>
        </div>

        {/* 2-Column Split: Story & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Left: 2 Paragraphs & Studio Features */}
          <div className="lg:col-span-7 space-y-6 text-[#1F2937]/80 text-base sm:text-lg leading-relaxed font-sans">
            <p>
              Located conveniently opposite the Narmada Shopping Complex in Kowdiar,{' '}
              <strong className="text-[#1F2937] font-semibold">Sun Digital Studio</strong> has been the go-to photography and digital imaging destination for families, working professionals, and couples across Thiruvananthapuram. We combine artistic vision with state-of-the-art studio lighting and in-house printing technology to deliver exceptional visual keepsakes under one roof.
            </p>

            <p>
              From urgent biometrically-accurate passport photos and quick studio portraits to comprehensive multi-camera wedding videography and custom frame fabrication, we handle every detail with personal care. Our in-house production setup means zero middlemen, guaranteed rapid delivery, and uncompromising quality that endures across generations.
            </p>

            {/* Bullet points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1F2937]/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0" />
                <span>Urgent Passport &amp; Visa Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0" />
                <span>Full Candid &amp; Traditional Wedding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0" />
                <span>Lab Pigment Inks &amp; Italian Frames</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8A317] shrink-0" />
                <span>Vintage Photo Restoration &amp; Scan</span>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${STUDIO_CONFIG.contact.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F2937] text-white text-sm font-medium hover:bg-[#111827] transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#E8A317]" />
                <span>Speak to Studio: {STUDIO_CONFIG.contact.phone}</span>
              </a>
              <span className="text-xs text-[#1F2937]/60 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E8A317]" />
                Walk-ins always welcome
              </span>
            </div>
          </div>

          {/* Right: Featured Showcase Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-3 border border-[#E8E2D9]">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/album.jpg"
                  alt="Sun Digital Studio handcrafted wedding albums and prints"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1F2937]">
                      Handcrafted Wedding Albums
                    </h3>
                    <p className="text-xs text-[#1F2937]/70">
                      Signature 4-day delivery in Kowdiar
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#E8A317]/15 text-[#1F2937] text-xs font-semibold">
                    In-House Lab
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row of 3 Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDIO_CONFIG.highlights.map((item, idx) => {
            const Icon = highlightIcons[idx] || CheckCircle2;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E2D9] shadow-sm hover:shadow-md hover:border-[#E8A317]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#E8A317] mb-5 group-hover:bg-[#E8A317] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#E8A317] mb-1">
                  Highlight {idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1F2937] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1F2937]/70 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
