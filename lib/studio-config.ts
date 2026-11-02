/**
 * ============================================================================
 * SUN DIGITAL STUDIO - CENTRAL BUSINESS CONFIGURATION
 * ============================================================================
 * You can easily update your phone number, address, opening hours, services,
 * gallery photos, and reviews right here in this single configuration file.
 * ============================================================================
 */

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlight?: string;
  category: 'Urgent & Passport' | 'Studio & Portraits' | 'Weddings & Events' | 'Printing & Framing' | 'Tech & Restoration';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Portraits' | 'Albums & Prints' | 'Family';
  imageUrl: string;
  alt: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export const STUDIO_CONFIG = {
  // Brand & Identity
  name: "Sun Digital Studio",
  tagline: "Your Complete Photo & Wedding Studio.",
  heroHeadline: "Capturing Moments That Last Forever",
  heroSubtext:
    "Kowdiar's trusted destination for professional studio portraits, cinematic wedding photography, urgent passport prints, and handcrafted albums delivered with warmth and precision.",

  // Contact Information
  contact: {
    phone: "+91 85899 18505",
    phoneClean: "918589918505", // digits only for tel: and wa.me links
    email: "sundigital.tvm@gmail.com",
    address: {
      landmark: "Opposite Narmada Shopping Complex",
      locality: "Kowdiar",
      city: "Thiruvananthapuram",
      state: "Kerala",
      pincode: "695003",
      country: "India",
      displayText: "Opposite Narmada Shopping Complex, Kowdiar, Thiruvananthapuram, Kerala",
    },
    hours: "Mon–Sat 9:30 AM – 8:00 PM (Sunday by appointment)",
    mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Narmada+Shopping+Complex+Kowdiar+Thiruvananthapuram",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.768142345053!2d76.95878!3d8.52554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf2ee0cba95%3A0xe541c9ad96ba75c!2sNarmada%20Shopping%20Complex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  // Social Links
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/918589918505",
  },

  // About Section Highlights (Row of 3)
  highlights: [
    {
      title: "1-Hour Studio Photos",
      description: "Quick turnaround portrait shoots and instant passport prints ready while you wait or within an hour.",
      stat: "1 Hour",
    },
    {
      title: "Wedding Albums in 4 Days",
      description: "Bespoke design, color correction, and luxury binding ready in just 4 days from photo selection.",
      stat: "4 Days",
    },
    {
      title: "Imported Frames & Premium Prints",
      description: "Archival pigment inks, Italian molding frames, and acrylic wall mounts designed to last generations.",
      stat: "Archival",
    },
  ],

  // Full List of 12 Services
  services: [
    {
      id: "passport-photos",
      title: "Urgent Passport Photos",
      subtitle: "Ready in 10 minutes",
      description:
        "Compliant with all global requirements: Indian passport, US Visa, Schengen, UK, Canada, Gulf employment, and OCI cards. Instant retouched preview.",
      iconName: "UserCheck",
      highlight: "Instant Delivery",
      category: "Urgent & Passport",
    },
    {
      id: "studio-portraits",
      title: "Studio Portrait Photos",
      subtitle: "Ready in 1 hour",
      description:
        "High-definition portrait sessions with professional diffused studio lighting, flattering angles, and rapid 1-hour final retouched prints.",
      iconName: "Camera",
      highlight: "Ready in 1 Hour",
      category: "Studio & Portraits",
    },
    {
      id: "wedding-photography",
      title: "Wedding Photography & Videography",
      subtitle: "Still, Video & Candid Coverage",
      description:
        "Comprehensive wedding and reception coverage. Traditional moments, artistic candid captures, 4K cinematic highlights, and drone perspectives.",
      iconName: "HeartHandshake",
      highlight: "Complete Package",
      category: "Weddings & Events",
    },
    {
      id: "wedding-albums",
      title: "Wedding Albums",
      subtitle: "Ready within 4 days",
      description:
        "Layflat luxury photobooks crafted with non-tearable metallic and velvet papers, embossed hard covers, and custom storytelling page layouts.",
      iconName: "BookOpen",
      highlight: "Delivered in 4 Days",
      category: "Weddings & Events",
    },
    {
      id: "modelling-family",
      title: "Modelling & Family Photos",
      subtitle: "Studio & Outdoor Sessions",
      description:
        "Vibrant family group portraits, milestone anniversaries, kids & toddler portfolios, and fashion modelling composite cards.",
      iconName: "Users",
      category: "Studio & Portraits",
    },
    {
      id: "big-prints-frames",
      title: "Big Prints & Imported Frames",
      subtitle: "Museum-grade quality",
      description:
        "Wide-format fine-art canvas prints, acrylic floating mounts, and authentic imported Italian wood frames customized to your home decor.",
      iconName: "Frame",
      category: "Printing & Framing",
    },
    {
      id: "photo-restoration",
      title: "Photo Restoration",
      subtitle: "Preserving your legacy",
      description:
        "Meticulous digital restoration of faded, water-damaged, scratched, or vintage black-and-white heirlooms with optional natural colorization.",
      iconName: "Sparkles",
      category: "Tech & Restoration",
    },
    {
      id: "hd-video-recording",
      title: "HD Video Recording",
      subtitle: "Crystal clear memories",
      description:
        "Professional high-definition multi-camera videography for stage events, betrothals, housewarmings, arangetram, and birthday parties.",
      iconName: "Video",
      category: "Weddings & Events",
    },
    {
      id: "invitation-cards",
      title: "Invitation & Birthday Cards",
      subtitle: "Custom themed printing",
      description:
        "Elegant bespoke wedding invites, engagement cards, milestone birthday invites, and commemorative event stationery with gold foil touches.",
      iconName: "Mail",
      category: "Printing & Framing",
    },
    {
      id: "visiting-cards",
      title: "Visiting Cards & Custom Cards",
      subtitle: "Business & Corporate Cards",
      description:
        "Executive business cards with matte lamination, spot UV gloss, rounded corners, letterheads, and customized promotional brochures.",
      iconName: "CreditCard",
      category: "Printing & Framing",
    },
    {
      id: "lamination-duplicating",
      title: "Document Lamination & Licence Duplicating",
      subtitle: "Protective archival coating",
      description:
        "Heavy-duty hot roll lamination for certificates, land deeds, identity cards, driving licence duplicating, and archival document safety.",
      iconName: "ShieldCheck",
      category: "Tech & Restoration",
    },
    {
      id: "cddvd-conversion",
      title: "CD/DVD Conversion & Writing",
      subtitle: "Digital preservation",
      description:
        "Transfer cherished old wedding VHS tapes, mini-DVs, and CD/DVDs into modern MP4 videos for high-speed USB flash drives or cloud storage.",
      iconName: "Disc",
      category: "Tech & Restoration",
    },
  ] as ServiceItem[],

  /**
   * =========================================================================
   * REPLACE WITH REAL STUDIO PHOTOS:
   * Replace the placeholder images below with actual studio photographs.
   * You can place your own images in `/public/images/` and update `imageUrl` to
   * `/images/your-photo.jpg`, or use any direct image URL.
   * =========================================================================
   */
  gallery: [
    {
      id: "gal-1",
      title: "Traditional Kerala Bride",
      category: "Weddings",
      imageUrl: "https://picsum.photos/seed/sunwedbride1/800/1000",
      alt: "Traditional Kerala Hindu bride portrait by Sun Digital Studio Kowdiar",
      aspectRatio: "portrait",
      description: "Golden hour bridal portrait with traditional Kasavu silk saree and temple jewelry.",
    },
    {
      id: "gal-2",
      title: "Candid Garland Exchange",
      category: "Weddings",
      imageUrl: "https://picsum.photos/seed/suncandidmoments2/1000/700",
      alt: "Candid wedding garland ceremony in Thiruvananthapuram",
      aspectRatio: "landscape",
      description: "Emotional candid celebration capture with floral garlands and family smiles.",
    },
    {
      id: "gal-3",
      title: "Professional Studio Portrait",
      category: "Portraits",
      imageUrl: "https://picsum.photos/seed/sunportraitexec3/800/950",
      alt: "Studio portrait headshot taken at Sun Digital Studio",
      aspectRatio: "portrait",
      description: "Controlled three-point softbox lighting for executive and matrimony headshots.",
    },
    {
      id: "gal-4",
      title: "4-Day Handcrafted Wedding Album",
      category: "Albums & Prints",
      imageUrl: "/images/album.jpg",
      alt: "Handcrafted wedding photo album delivered in 4 days by Sun Digital Studio",
      aspectRatio: "landscape",
      description: "Premium leatherette album with crystal-clear non-tearable photographic sheets.",
    },
    {
      id: "gal-5",
      title: "Three-Generation Family Portrait",
      category: "Family",
      imageUrl: "https://picsum.photos/seed/sunfamilygrp5/900/700",
      alt: "Three generation family portrait in Kowdiar studio",
      aspectRatio: "landscape",
      description: "Warm family togetherness portrait captured in our spacious Kowdiar studio.",
    },
    {
      id: "gal-6",
      title: "Pre-Wedding Cinematic Sunset",
      category: "Weddings",
      imageUrl: "https://picsum.photos/seed/sunprewed6/800/1000",
      alt: "Cinematic pre-wedding shoot at Kovalam beach near Trivandrum",
      aspectRatio: "portrait",
      description: "Romantic golden hour pre-wedding shoot capturing timeless couple intimacy.",
    },
    {
      id: "gal-7",
      title: "Baby & Toddler Milestone Shoot",
      category: "Family",
      imageUrl: "https://picsum.photos/seed/sunbabyport7/800/800",
      alt: "First birthday and baby milestone photoshoot",
      aspectRatio: "square",
      description: "Joyful natural toddler expression captured with gentle child-friendly lighting.",
    },
    {
      id: "gal-8",
      title: "Imported Italian Wood Framing",
      category: "Albums & Prints",
      imageUrl: "/images/hero.jpg",
      alt: "Large format framed wall prints and imported teak frames",
      aspectRatio: "landscape",
      description: "Museum-grade pigment wall canvas framed with imported textured wooden molding.",
    },
  ] as GalleryItem[],

  // Why Choose Us (4 Points)
  whyChooseUs: [
    {
      id: "turnaround",
      title: "Fast Turnaround",
      tagline: "Passport in 10 mins · Portraits in 1 hr · Albums in 4 days",
      description:
        "We know timing matters. Whether you need urgent visa photos before your consulate appointment or your complete wedding album within the week, our in-house lab guarantees unbeatable speed.",
      iconName: "Clock",
    },
    {
      id: "pricing",
      title: "Affordable Pricing",
      tagline: "Honest local pricing with zero hidden surcharges",
      description:
        "Premium studio craftsmanship shouldn't come with inflated quotes. We offer straightforward package rates for families, students, and couples with total transparency.",
      iconName: "IndianRupee",
    },
    {
      id: "quality",
      title: "Quality Prints",
      tagline: "Ultra-HD pigment inks & imported Italian frames",
      description:
        "Using professional 12-color archival pigment printers, authentic non-tearable photo sheets, and durable frames that preserve colors for 50+ years without fading.",
      iconName: "Award",
    },
    {
      id: "friendly",
      title: "Friendly Local Service",
      tagline: "Over two decades in Kowdiar opposite Narmada Complex",
      description:
        "We treat every customer like family. Our experienced photographers guide you through natural posing, make nervous kids laugh, and ensure you feel relaxed in front of the lens.",
      iconName: "Smile",
    },
  ] as WhyChooseUsItem[],

  /**
   * =========================================================================
   * PLACEHOLDER TESTIMONIALS:
   * Replace the reviews below with your real Google Reviews or customer quotes.
   * =========================================================================
   */
  testimonials: [
    {
      id: "rev-1",
      name: "Priya & Rahul Nair",
      location: "Kowdiar, Thiruvananthapuram",
      service: "Wedding Photography & Album",
      rating: 5,
      comment:
        "Sun Digital Studio did an outstanding job with our wedding photos. True to their promise, the finished luxury album was delivered in just 4 days! The print sharpness and candid moments were breathtaking. Our whole family is thrilled.",
      date: "Wedding Client",
    },
    {
      id: "rev-2",
      name: "Dr. Anand Krishnan",
      location: "Vellayambalam",
      service: "Urgent Schengen Visa Photos",
      rating: 5,
      comment:
        "Needed emergency biometric photos for a German visa submission. They knew the exact technical specifications, lighting was perfect, and the prints were in my hands in less than 10 minutes. Extremely professional local studio.",
      date: "Studio Visitor",
    },
    {
      id: "rev-3",
      name: "Deepa Varma",
      location: "Sasthamangalam",
      service: "Restored 1970s Heritage Portrait",
      rating: 5,
      comment:
        "I brought in a severely creased, faded black-and-white picture of my late grandparents. Sun Digital Studio digitally repaired all cracks and restored the contrast like magic. The framed print now hangs proudly in our living room.",
      date: "Restoration Client",
    },
  ] as TestimonialItem[],
};
