import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import AppOverlays from "@/components/app-overlays";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  title: {
    default: config.title,
    template: `%s | ${config.author}`,
  },
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  creator: config.author,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    siteName: `${config.author} - SJCET Palai Portfolio`,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: `${config.author} Portfolio Preview`,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${config.site}/#person`,
      name: config.author,
      alternateName: ["Alwin Jose", "Alwin", "Alwin Jose George SJCET", "Alwin SJCET"],
      url: config.site,
      image: config.ogImg,
      jobTitle: "Computer Science Engineering Student & Full-Stack Web Developer",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "St. Joseph's College of Engineering and Technology, Palai",
        alternateName: "SJCET Palai",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "St. Joseph's College of Engineering and Technology, Palai",
        alternateName: "SJCET Palai",
      },
      email: config.email,
      sameAs: [
        config.social.github,
        config.social.linkedin,
        config.social.instagram,
      ].filter(Boolean),
    },
    {
      "@type": "WebSite",
      "@id": `${config.site}/#website`,
      url: config.site,
      name: "Alwin Jose George Portfolio",
      description: config.description.short,
      publisher: {
        "@id": `${config.site}/#person`,
      },
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, archivoBlack.variable, "font-display"].join(" ")} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        ></Script>
        {/* <Analytics /> */}
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <AppOverlays />
        </Providers>
      </body>
    </html>
  );
}
