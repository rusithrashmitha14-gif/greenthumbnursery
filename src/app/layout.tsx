import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Thumb Nursery | Premier Nursery & Luxury Landscaping Tampa, FL",
  description:
    "Tampa Bay's trusted landscape architects and 5-acre retail nursery since 1953. 3D master planning, cool-touch travertine hardscaping, specimen palms, and smart irrigation. Call (813) 884-3797.",
  keywords: [
    "Green Thumb Nursery",
    "Tampa Landscaping",
    "Garden Center Tampa",
    "Landscape Architect Tampa",
    "Davis Islands Landscaping",
    "South Tampa Landscaping",
    "Westchase Landscaping",
    "Travertine Patios Tampa",
    "Specimen Palms Florida",
    "Smart Irrigation Tampa",
  ],
  openGraph: {
    title: "Green Thumb Nursery | Premier Nursery & Luxury Landscaping",
    description: "Architectural landscape design-build & 5-acre botanical garden center in Tampa, FL since 1953.",
    url: "https://www.greenthumbnursery.com",
    siteName: "Green Thumb Nursery",
    images: [
      {
        url: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/ITC-HH-0030-bff0234c-06d37227-76bc53cc-1920w.jpg",
        width: 1920,
        height: 1080,
        alt: "Green Thumb Nursery Luxury Landscape Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/site_favicon_16_1710542547720.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-emeraldAccent-light selection:text-forest-900">
        {children}
      </body>
    </html>
  );
}
