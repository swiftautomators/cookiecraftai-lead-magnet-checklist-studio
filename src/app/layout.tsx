import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Free Cookie Business Startup Checklist | CookieCraft AI",
  description: "Your complete, step-by-step checklist to launch your cookie business legally, profitably, and without the overwhelm. From LLC to first sale.",
  icons: {
    icon: '/favicon.ico', // or /icon.png
    apple: '/icon.png',
  },
  openGraph: {
    title: "Free Cookie Business Startup Checklist | CookieCraft AI",
    description: "Your complete, step-by-step checklist to launch your cookie business legally, profitably, and without the overwhelm. From LLC to first sale.",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CookieCraft AI Startup Checklist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Cookie Business Startup Checklist | CookieCraft AI",
    description: "Your complete, step-by-step checklist to launch your cookie business legally, profitably, and without the overwhelm.",
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} antialiased font-sans bg-cookie-50 text-gray-900`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
