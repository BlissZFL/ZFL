import type { Metadata } from "next";
import {
  Fraunces,
  Geist,
  Montserrat,
  Outfit,
  Plus_Jakarta_Sans,
  Source_Serif_4,
  Square_Peg,
} from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif-4",
  display: "swap",
});

const squarePeg = Square_Peg({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-square-peg",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZFL",
  description: "ZFL Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${fraunces.variable} ${geist.variable} ${montserrat.variable} ${outfit.variable} ${sourceSerif4.variable} ${squarePeg.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

