import type { Metadata } from 'next';
import Topbar from '@/components/layout/Topbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import SchemaOrg from '@/components/shared/SchemaOrg';
import SkipToMain from '@/components/shared/SkipToMain';
import { PageTransition } from '@/components/shared/PageTransition';
import { defaultMetadata } from '@/lib/metadata';
import { schoolSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';
import { Plus_Jakarta_Sans, Inter, Dancing_Script } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = SCHOOL.gaId;
  const hasAnalytics = gaId && gaId !== 'G-XXXXXXXXXX';

  return (
    <html lang="en-IN" className={`${plusJakarta.variable} ${inter.variable} ${dancingScript.variable}`}>
      <head>
        <SchemaOrg schema={schoolSchema()} />
        <link rel="icon" href="/images/Omjanahithya LogoOnly.png" />
      </head>
      <body>
        <SkipToMain />
        {hasAnalytics && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <Topbar />
        <Navbar />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
