'use client';

import React from 'react';
import { STUDIO_CONFIG, TestimonialItem } from '@/lib/studio-config';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

/**
 * ============================================================================
 * PLACEHOLDER TESTIMONIALS:
 * Replace the reviews below with your real Google Reviews or customer quotes.
 * To edit, update `testimonials: [...]` in `/lib/studio-config.ts`.
 * ============================================================================
 */

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-t border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8A317] mb-2">
            <span>Customer Stories &amp; Feedback</span>
            <span aria-hidden="true">·</span>
            <span>Local Trust in Kowdiar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[#1F2937]/70 font-sans leading-relaxed">
            From emergency passport shoots to milestone wedding celebrations, hear from families and professionals who trust Sun Digital Studio.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STUDIO_CONFIG.testimonials.map((review: TestimonialItem) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E2D9] shadow-sm hover:shadow-md hover:border-[#E8A317]/50 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Watermark Icon */}
              <div className="absolute top-6 right-6 text-[#FAF8F5] group-hover:text-[#E8A317]/10 transition-colors">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#E8A317]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#E8A317]" />
                  ))}
                  <span className="text-xs font-semibold text-[#1F2937] ml-2">5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#1F2937]/80 font-sans leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#E8E2D9]/70 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#1F2937]">
                    {review.name}
                  </h3>
                  <p className="text-xs text-[#1F2937]/60 font-sans">
                    {review.location}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-medium text-[#E8A317] bg-[#FAF8F5] border border-[#E8E2D9] px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#E8A317]" />
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Google Reviews */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8E2D9] shadow-xs text-xs text-[#1F2937]/80">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Over 500+ happy clients in Kowdiar, Vellayambalam, and Trivandrum.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
