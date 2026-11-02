'use client';

import React from 'react';
import Image from 'next/image';
import { STUDIO_CONFIG } from '@/lib/studio-config';
import { MessageCircle, ArrowRight, Clock, Award, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.contact.phoneClean}?text=Hello%20Sun%20Digital%20Studio!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20photo%20session%20or%20wedding%20coverage.`;

  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Sun Digital Studio - Kowdiar, Thiruvananthapuram"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layer warm dark gradient overlay for optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/80 to-stone-950/70" />
        <div className="absolute inset-0 bg-[#E8A317]/10 mix-blend-color-dodge" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#E8A317]" />
          <span>Kowdiar, Thiruvananthapuram · {STUDIO_CONFIG.tagline}</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-sm text-balance">
          {STUDIO_CONFIG.heroHeadline}
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-200 max-w-2xl mx-auto font-sans leading-relaxed mb-10 text-balance font-light">
          From express 1-hour portraits and urgent passport photos to bespoke wedding albums delivered in 4 days, experience Trivandrum&apos;s complete photo, video, and printing studio under one roof.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#E8A317] hover:bg-[#D4920E] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#E8A317]/30 hover:shadow-xl hover:shadow-[#E8A317]/40 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-medium text-sm sm:text-base hover:border-white/50 active:scale-[0.98] transition-all"
          >
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4 text-[#E8A317]" />
          </a>
        </div>

        {/* 3 Quick Hero Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-stone-100">
            <Clock className="w-4 h-4 text-[#E8A317] shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-white">1-Hour Studio Photos</span>
              <span className="text-stone-300">Urgent Passport in 10 Mins</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-stone-100">
            <Award className="w-4 h-4 text-[#E8A317] shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-white">Albums in 4 Days</span>
              <span className="text-stone-300">Bespoke Wedding Layflat</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-stone-100">
            <ShieldCheck className="w-4 h-4 text-[#E8A317] shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-white">Imported Frames</span>
              <span className="text-stone-300">Italian Finish &amp; Big Prints</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
