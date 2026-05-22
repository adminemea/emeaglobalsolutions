import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsentPopup from '@/components/ConsentPopup';

export const metadata = {
  metadataBase: new URL('https://emeaglobalsolutions.com'),
  title: {
    default: 'EMEA Global Services | Engineering & Industrial Solutions',
    template: '%s | EMEA Global Services',
  },
  description: 'Professional engineering, manufacturing, and automation services for mechanical industry and Oil & Gas sectors. Based in Bengaluru, India — serving clients worldwide.',
  keywords: ['engineering services', 'industrial automation', 'oil and gas engineering', 'mechanical engineering', 'Bengaluru', 'India', 'EMEA Global', 'product design', 'FEA analysis', 'PLC SCADA', 'digital twin'],
  authors: [{ name: 'EMEA Global Services' }],
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'EMEA Global Services',
    title: 'EMEA Global Services | Engineering & Industrial Solutions',
    description: 'Professional engineering, manufacturing, and automation services for mechanical industry and Oil & Gas sectors.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMEA Global Services | Engineering & Industrial Solutions',
    description: 'Professional engineering, manufacturing, and automation services for mechanical industry and Oil & Gas sectors.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://emeaglobalsolutions.com/#organization',
    name: 'EMEA Global Services',
    alternateName: ['EMEA Global Solutions', 'EMEA Global'],
    legalName: 'EMEA Global Services',
    url: 'https://emeaglobalsolutions.com',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://emeaglobalsolutions.com/#logo',
      url: 'https://emeaglobalsolutions.com/logo.png',
      caption: 'EMEA Global Services Logo'
    },
    image: 'https://emeaglobalsolutions.com/logo.png',
    description: 'Professional B2B engineering, manufacturing, and industrial automation services. Serving global clients in mechanical, aerospace, heavy manufacturing, energy, and oil & gas sectors from Indiranagar, Bengaluru, India.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 99727 72682',
      contactType: 'customer service',
      email: 'info@emeaglobalsolutions.com',
      availableLanguage: ['English', 'Hindi', 'Kannada'],
      areaServed: ['IN', 'US', 'GB', 'DE', 'FR', 'AE', 'AU']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#235, 13th Cross, 2nd Stage, Indiranagar',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560038',
      addressCountry: 'IN',
    },
    founders: [
      {
        '@type': 'Person',
        name: 'Arjun'
      },
      {
        '@type': 'Person',
        name: 'Santosh'
      }
    ],
    foundingDate: '2022',
    knowsAbout: [
      'Mechanical Engineering',
      'Industrial Automation',
      'Oil and Gas Engineering',
      'Product Design',
      'FEA Analysis',
      'CFD Simulation',
      'PLC SCADA Systems',
      'Digital Twin',
      'Industry 4.0'
    ],
    sameAs: [
      'https://www.linkedin.com/company/emea-global-services'
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E5S5M0W0G0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E5S5M0W0G0');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <ConsentPopup />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
