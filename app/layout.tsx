import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#DC2626",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vishwajeettripathi.in"),
  title: "विश्वजीत त्रिपाठी 'सोनू' | Vishwajeet Tripathi 'Sonu' - Corporator Ward 322 Madhopur-Betiyahata Gorakhpur",
  description: "Official portal of Vishwajeet Tripathi aka Sonu Tiwari - Independent & Fearless Corporator (Parshad), Nagar Nigam Gorakhpur (Ward 322 Madhopur / Betiyahata). Dedicated to public service, infrastructure development, and transparent governance in Gorakhpur.",
  keywords: [
    "विश्वजीत त्रिपाठी",
    "सोनू तिवारी",
    "Sonu Tiwari Gorakhpur",
    "Vishwajeet Tripathi",
    "Parshad Ward 322 Gorakhpur",
    "Madhopur Betiyahata Parshad",
    "Nagar Nigam Gorakhpur Corporator",
    "Shahar Vidhansabha 322",
    "Gorakhpur Public Leader",
    "Betiyahata Drainage Protest",
    "Sonu Tiwari Official Website"
  ],
  authors: [{ name: "विश्वजीत त्रिपाठी सोनू", url: "https://facebook.com/sonu.tiwari.125323" }],
  creator: "कार्यालय विश्वजीत त्रिपाठी",
  publisher: "कार्यालय पार्षद वार्ड 322, नगर निगम गोरखपुर",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "विश्वजीत त्रिपाठी 'सोनू' | Vishwajeet Tripathi - Corporator Ward 322, Gorakhpur",
    description: "अन्याय के खिलाफ, जनता के साथ | Official leadership portal of Vishwajeet Tripathi (Sonu Tiwari), Corporator Ward 322 Gorakhpur.",
    url: "https://vishwajeettripathi.in",
    siteName: "विश्वजीत त्रिपाठी 'सोनू' आधिकारिक वेबसाइट",
    locale: "hi_IN",
    type: "website",
    images: [
      {
        url: "/assets/leader-hero-section-image.png",
        width: 1200,
        height: 630,
        alt: "विश्वजीत त्रिपाठी सोनू - पार्षद नगर निगम गोरखपुर",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "विश्वजीत त्रिपाठी 'सोनू' | Corporator Ward 322 Gorakhpur",
    description: "अन्याय के खिलाफ, जनता के साथ - नगर निगम गोरखपुर वार्ड 322 (माधोपुर-बेतियाहाता)।",
    images: ["/assets/leader-hero-section-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vishwajeettripathi.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://vishwajeettripathi.in/#person",
      "name": "विश्वजीत त्रिपाठी",
      "alternateName": ["सोनू तिवारी", "Sonu Tiwari", "Vishwajeet Tripathi", "सोनू"],
      "jobTitle": "पार्षद (Corporator / Municipal Councilor)",
      "affiliation": {
        "@type": "GovernmentOrganization",
        "name": "Nagar Nigam Gorakhpur (नगर निगम गोरखपुर)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gorakhpur",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "273001",
          "addressCountry": "IN"
        }
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "M.G. Inter College Gorakhpur"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Deen Dayal Upadhyaya Gorakhpur University (D.D.U. Gorakhpur)"
        }
      ],
      "url": "https://vishwajeettripathi.in",
      "sameAs": [
        "https://facebook.com/sonu.tiwari.125323"
      ],
      "image": "https://vishwajeettripathi.in/assets/leader-hero-section-image.png",
      "description": "गोरखपुर नगर निगम वार्ड 322 माधोपुर-बेतियाहाता से निर्भीक व जुझारू जन-प्रतिनिधि पार्षद।"
    },
    {
      "@type": "GovernmentOffice",
      "@id": "https://vishwajeettripathi.in/#office",
      "name": "पार्षद जन-सेवा कार्यालय - वार्ड 322 माधोपुर-बेतियाहाता (गोरखपुर)",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "वार्ड 322, माधोपुर - बेतियाहाता",
        "addressLocality": "गोरखपुर",
        "addressRegion": "उत्तर प्रदेश",
        "postalCode": "273001",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Su 08:00-10:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 selection:bg-brandRed-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
