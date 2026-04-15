// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/hero8-header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeCare Connections LLC | Professional Home Care Services Indiana",
  description: "Licensed personal service agency providing 24/7 home care, homemaker services, and non-emergency transportation throughout Indiana. Certified Medicaid provider with A+ BBB rating.",
  keywords: "home care Indiana, personal care services, homemaker services, Medicaid provider Indiana, elderly care, disability care, non-emergency medical transportation, home health aide, attendant care Indiana",
  authors: [{ name: "HomeCare Connections LLC" }],
  creator: "HomeCare Connections LLC",
  publisher: "HomeCare Connections LLC",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.homecareconnectionsllc.com",  // UPDATED
    siteName: "HomeCare Connections LLC",
    title: "HomeCare Connections LLC | Professional Home Care Services Indiana",
    description: "Licensed personal service agency providing 24/7 home care, homemaker services, and non-emergency transportation throughout Indiana.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HomeCare Connections LLC - Professional Home Care Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeCare Connections LLC | Professional Home Care Services Indiana",
    description: "Licensed personal service agency providing 24/7 home care throughout Indiana.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.homecareconnectionsllc.com",  // UPDATED
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}