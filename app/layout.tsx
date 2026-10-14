import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zerofrictionlab.com"),
  title: {
    default: "Zero Friction Lab (ZFL) — AI Automation, Web Design & Intelligence Systems",
    template: "%s | Zero Friction Lab (ZFL)",
  },
  description:
    "Zero Friction Lab designs, builds, and launches conversion-focused websites, AI automations, and custom intelligence systems that eliminate business friction.",
  keywords: [
    "Zero Friction Lab",
    "ZFL",
    "AI Automation",
    "Web Design Studio",
    "Conversion Rate Optimization",
    "Lead Automation",
    "Revenue Intelligence",
    "Competitive Intelligence",
    "Speed to Lead",
    "Next.js Design Studio",
  ],
  authors: [{ name: "Zero Friction Lab", url: "https://zerofrictionlab.com" }],
  creator: "Zero Friction Lab",
  publisher: "Zero Friction Lab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zerofrictionlab.com",
    title: "Zero Friction Lab (ZFL) — AI Automation, Web Design & Intelligence Systems",
    description:
      "Zero Friction Lab designs, builds, and launches conversion-focused websites, AI automations, and custom intelligence systems that eliminate business friction.",
    siteName: "Zero Friction Lab",
    images: [
      {
        url: "/zflfav.svg",
        width: 500,
        height: 500,
        alt: "Zero Friction Lab (ZFL)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Friction Lab (ZFL) — AI Automation, Web Design & Intelligence Systems",
    description:
      "Zero Friction Lab designs, builds, and launches conversion-focused websites, AI automations, and custom intelligence systems that eliminate business friction.",
    images: ["/zflfav.svg"],
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
  icons: {
    icon: [
      {
        url: "/zflfav.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/zflfav.svg",
    apple: "/zflfav.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/zflfav.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/zflfav.svg" />
        <link rel="apple-touch-icon" href="/zflfav.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Geist:ital,wght@0,100..900;1,100..900&family=Gochi+Hand&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Parisienne&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Square+Peg&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
