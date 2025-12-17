import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
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
  title: "CookieCraft AI - Start Your Business",
  description: "Your complete, step-by-step checklist to launch your cookie business legally, profitably, and without the overwhelm.",
  openGraph: {
    title: "CookieCraft AI - Start Your Business",
    description: "Your complete, step-by-step checklist to launch your cookie business legally, profitably, and without the overwhelm.",
    type: "website",
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
      </body>
    </html>
  );
}
