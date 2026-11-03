import React from 'react';
import Link from 'next/link';
import { Camera, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2937] flex items-center justify-center px-4 font-sans">
      <div className="max-w-md w-full text-center py-12">
        <div className="w-16 h-16 rounded-2xl bg-[#E8A317] text-white flex items-center justify-center mx-auto mb-6 shadow-md">
          <Camera className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-3xl font-bold mb-3">Page Not Found</h1>
        <p className="text-sm text-[#1F2937]/70 mb-8 leading-relaxed">
          The studio page or photo album you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1F2937] hover:bg-[#111827] text-white text-sm font-medium transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-[#E8A317]" />
          <span>Return to Sun Digital Studio</span>
        </Link>
      </div>
    </div>
  );
}
