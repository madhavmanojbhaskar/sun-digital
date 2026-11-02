'use client';

import React from 'react';
import { STUDIO_CONFIG, WhyChooseUsItem } from '@/lib/studio-config';
import { Clock, IndianRupee, Award, Smile } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Clock,
  IndianRupee,
  Award,
  Smile,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-t border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8A317] mb-2">
            <span>The Kowdiar Advantage</span>
            <span aria-hidden="true">·</span>
            <span>Why Trivandrum Chooses Sun Digital</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] tracking-tight mb-4">
            Why Choose Sun Digital Studio?
          </h2>
          <p className="text-base sm:text-lg text-[#1F2937]/70 font-sans leading-relaxed">
            We understand that life moves fast and memories are irreplaceable. Here is why generations of Trivandrum residents return to our studio.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {STUDIO_CONFIG.whyChooseUs.map((point: WhyChooseUsItem, index: number) => {
            const Icon = iconMap[point.iconName] || Award;
            return (
              <div
                key={point.id}
                className="bg-white rounded-2xl p-7 sm:p-9 border border-[#E8E2D9] shadow-sm hover:shadow-md hover:border-[#E8A317]/50 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#E8A317] shrink-0 group-hover:bg-[#E8A317] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7 stroke-[1.75]" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#E8A317] uppercase tracking-wider">
                      0{index + 1}.
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937] group-hover:text-[#B87C07] transition-colors">
                      {point.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#1F2937]/90 bg-[#FAF8F5] inline-block px-2.5 py-1 rounded-md border border-[#E8E2D9]">
                    {point.tagline}
                  </p>

                  <p className="text-sm text-[#1F2937]/75 font-sans leading-relaxed pt-1">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Trust Stat Strip */}
        <div className="mt-14 rounded-2xl bg-[#1F2937] text-white p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-700">
            <div className="pt-4 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#E8A317] block">
                10 Mins
              </span>
              <span className="text-xs sm:text-sm text-stone-300 font-sans mt-1 block">
                Urgent Passport Prints
              </span>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#E8A317] block">
                1 Hour
              </span>
              <span className="text-xs sm:text-sm text-stone-300 font-sans mt-1 block">
                Studio Portraits Delivery
              </span>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#E8A317] block">
                4 Days
              </span>
              <span className="text-xs sm:text-sm text-stone-300 font-sans mt-1 block">
                Custom Wedding Albums
              </span>
            </div>
            <div className="pt-4 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#E8A317] block">
                20+ Yrs
              </span>
              <span className="text-xs sm:text-sm text-stone-300 font-sans mt-1 block">
                Kowdiar Trusted Presence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
