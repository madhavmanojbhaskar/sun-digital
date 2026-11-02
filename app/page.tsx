'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { STUDIO_CONFIG } from '@/lib/studio-config';

/**
 * ============================================================================
 * SUN DIGITAL STUDIO - KOWDIAR, THIRUVANANTHAPURAM
 * Tagline: "Your Complete Photo & Wedding Studio."
 *
 * All business details, services, gallery photos, and reviews are defined in:
 * `/lib/studio-config.ts` for quick editing.
 * ============================================================================
 */

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>(
    'Urgent Passport Photos'
  );

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2937]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section with 3 Highlights */}
        <About />

        {/* 4. Services Grid (12 Cards) */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Gallery (Responsive Masonry + Lightbox) */}
        <Gallery />

        {/* 6. Why Choose Us (4 Key Pillars) */}
        <WhyChooseUs />

        {/* 7. Testimonials (3 Reviews) */}
        <Testimonials />

        {/* 8. Contact & Embedded Google Map */}
        <Contact initialService={selectedService} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Extra: Floating WhatsApp Button (Bottom-Right) */}
      <FloatingWhatsApp />
    </div>
  );
}
