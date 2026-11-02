import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sun Digital Studio | Photo & Wedding Studio in Kowdiar, Thiruvananthapuram',
  description:
    'Sun Digital Studio in Kowdiar, Thiruvananthapuram: Your complete photo & wedding studio. Urgent passport photos in 10 mins, studio portraits in 1 hr, wedding films, 4-day albums, imported frames & fine-art prints.',
  keywords: [
    'photo studio in Kowdiar Thiruvananthapuram',
    'photo studio Kowdiar',
    'wedding photography Thiruvananthapuram',
    'urgent passport photos Kowdiar',
    'wedding albums Trivandrum',
    'Sun Digital Studio Kowdiar',
    'photo framing Kowdiar Trivandrum',
    'photo restoration Thiruvananthapuram',
    'studio portrait photos Trivandrum',
  ],
  authors: [{ name: 'Sun Digital Studio' }],
  creator: 'Sun Digital Studio',
  publisher: 'Sun Digital Studio',
  metadataBase: new URL(process.env.APP_URL || 'https://sundigitalstudio.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sun Digital Studio | Photo & Wedding Studio in Kowdiar, Thiruvananthapuram',
    description:
      'Urgent passport photos, studio portraits ready in 1 hour, wedding photography & 4-day albums, imported frames and premium printing in Kowdiar, Trivandrum.',
    url: '/',
    siteName: 'Sun Digital Studio',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Sun Digital Studio Kowdiar Thiruvananthapuram',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sun Digital Studio | Photo Studio in Kowdiar, Thiruvananthapuram',
    description:
      'Complete photo & wedding studio in Kowdiar. Urgent passport photos, wedding films, 4-day albums & framing.',
    images: ['/images/hero.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sundigitalstudio.in/#localbusiness',
  name: 'Sun Digital Studio',
  alternateName: 'Sun Photo Studio Kowdiar',
  description:
    'Complete photo and wedding studio in Kowdiar, Thiruvananthapuram. Specializing in urgent passport photos, 1-hour studio portraits, wedding photography, candid video, 4-day wedding albums, custom imported frames, and card printing.',
  url: 'https://sundigitalstudio.in',
  telephone: '+91 85899 18505',
  email: 'sundigital.tvm@gmail.com',
  image: 'https://picsum.photos/seed/sundigitalhero/1200/630',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Opposite Narmada Shopping Complex',
    addressLocality: 'Kowdiar',
    addressRegion: 'Kerala',
    postalCode: '695003',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.5254,
    longitude: 76.9587,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:30',
      closes: '20:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Photography & Printing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Urgent Passport Photos',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Photography & Videography',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Albums in 4 Days',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Studio Portrait Photos (Ready in 1 Hour)',
        },
      },
    ],
  },
  sameAs: [
    'https://instagram.com',
    'https://facebook.com',
    'https://wa.me/918589918505',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#1F2937] antialiased min-h-screen selection:bg-amber-100 selection:text-amber-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
