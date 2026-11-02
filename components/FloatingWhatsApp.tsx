'use client';

import React, { useState } from 'react';
import { STUDIO_CONFIG } from '@/lib/studio-config';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.contact.phoneClean}?text=Hello%20Sun%20Digital%20Studio!%20I%20have%20an%20inquiry%20regarding%20your%20photography%20and%20printing%20services%20in%20Kowdiar.`;

  return (
    <aside aria-label="Quick WhatsApp contact" className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip on hover/touch */}
      <div
        className={`hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#1F2937] text-white text-xs font-medium shadow-lg transition-all duration-300 pointer-events-none whitespace-nowrap ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with Sun Digital Studio
      </div>

      {/* Pulsing Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp with Sun Digital Studio"
      >
        {/* Soft pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-0 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
}
