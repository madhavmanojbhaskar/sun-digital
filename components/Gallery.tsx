'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { STUDIO_CONFIG, GalleryItem } from '@/lib/studio-config';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MessageCircle,
  Camera,
} from 'lucide-react';

/**
 * ============================================================================
 * REPLACE WITH REAL STUDIO PHOTOS:
 * To use your real studio photos:
 * 1. Place your photo files inside the `/public/images/` folder (e.g., wedding1.jpg).
 * 2. Open `/lib/studio-config.ts` and update the `imageUrl` paths under `gallery: [...]`
 *    (e.g., change to `imageUrl: "/images/wedding1.jpg"`).
 * ============================================================================
 */

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = ['All', 'Weddings', 'Portraits', 'Albums & Prints', 'Family'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? STUDIO_CONFIG.gallery
      : STUDIO_CONFIG.gallery.filter((item) => item.category === selectedCategory);

  const activePhoto =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : 0
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        : 0
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  // Handle keyboard events (ESC, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePhotoIndex]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-t border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8A317] mb-2">
            <span>Portfolio &amp; Work Showcase</span>
            <span aria-hidden="true">·</span>
            <span>Captured in Kowdiar &amp; Kerala</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] tracking-tight mb-4">
            Our Photography Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#1F2937]/70 font-sans leading-relaxed">
            A glimpse into our wedding captures, studio portraits, family milestones, and handcrafted albums. Click any photograph to view in full resolution.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActivePhotoIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#E8A317] text-white shadow-sm'
                    : 'bg-white border border-[#E8E2D9] text-[#1F2937]/80 hover:bg-[#FAF8F5]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo, index) => {
            // Give specific cards masonry height variation
            const isSpan2 = index === 0 || index === 5;
            return (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(index)}
                className={`group relative rounded-2xl overflow-hidden bg-stone-100 border border-[#E8E2D9] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 ${
                  isSpan2 ? 'sm:col-span-2 sm:row-span-2 h-[380px] sm:h-[460px]' : 'h-[280px] sm:h-[320px]'
                }`}
              >
                <Image
                  src={photo.imageUrl}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-medium">
                    {photo.category}
                  </span>
                </div>

                {/* Zoom Icon Top Right */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white z-10">
                  <h3 className="font-serif text-base sm:text-lg font-bold leading-snug mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2 font-sans font-light">
                    {photo.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code replacement hint banner for developer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#1F2937]/50 font-sans">
            Note: Previewing sample studio placeholders. Real client photographs can be uploaded directly to{' '}
            <code className="bg-[#E8E2D9]/50 px-1.5 py-0.5 rounded text-[#1F2937]">/public/images/</code> and configured in{' '}
            <code className="bg-[#E8E2D9]/50 px-1.5 py-0.5 rounded text-[#1F2937]">/lib/studio-config.ts</code>.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between text-white pb-3 px-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E8A317]">
                  {activePhoto.category}
                </span>
                <span className="text-xs text-stone-400">
                  {activePhotoIndex! + 1} of {filteredPhotos.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close photo preview (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Box */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 flex items-center justify-center">
              <Image
                src={activePhoto.imageUrl}
                alt={activePhoto.alt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
                referrerPolicy="no-referrer"
              />

              {/* Previous Photo Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Photo Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & WhatsApp Action */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-sans">
                  {activePhoto.description}
                </p>
              </div>

              <a
                href={`https://wa.me/${STUDIO_CONFIG.contact.phoneClean}?text=${encodeURIComponent(
                  `Hello Sun Digital Studio! I saw the photo "${activePhoto.title}" on your gallery and would like to inquire about similar photography/album services.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8A317] hover:bg-[#D4920E] text-white text-xs sm:text-sm font-medium transition-all shadow-md shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire About This Style</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
