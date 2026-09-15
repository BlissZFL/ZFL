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
  metadataBase: new URL("https://www.zerofrictionlab.com"),
  title: "Web Design & Development Agency | ZeroFrictionLab",
  description:
    "ZeroFrictionLab designs and develops high-performance websites, web apps, mobile products, AI systems and automation for ambitious businesses.",
  alternates: {
    canonical: "https://www.zerofrictionlab.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "ZeroFrictionLab",
    title: "Web Design, Development & Digital Products | ZeroFrictionLab",
    description:
      "Websites, web apps, mobile products, UI/UX, AI and automation — designed and built by one product team.",
    url: "https://www.zerofrictionlab.com/",
    images: [
      {
        url: "https://www.zerofrictionlab.com/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "ZeroFrictionLab - Digital Product Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, Development & Digital Products | ZeroFrictionLab",
    description:
      "Websites, web apps, mobile products, UI/UX, AI and automation — designed and built by one product team.",
    images: ["https://www.zerofrictionlab.com/og/home.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.zerofrictionlab.com/#organization",
  name: "ZeroFrictionLab",
  url: "https://www.zerofrictionlab.com/",
  logo: "https://www.zerofrictionlab.com/logo.png",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.zerofrictionlab.com/#website",
  name: "ZeroFrictionLab",
  url: "https://www.zerofrictionlab.com/",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
