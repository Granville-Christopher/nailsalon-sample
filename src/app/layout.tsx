import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import salonConfig from "@/data/salonConfig";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const { name, seo, colors } = salonConfig;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: name,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

const themeStyle = {
  "--salon-primary": colors.primary,
  "--salon-primary-dark": colors.primaryDark,
  "--salon-secondary": colors.secondary,
  "--salon-background": colors.background,
  "--salon-foreground": colors.foreground,
  "--salon-muted": colors.muted,
} as CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased" style={themeStyle}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
