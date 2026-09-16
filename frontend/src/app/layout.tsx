import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Cirruscale — Scale AI Infrastructure Without Limits",
    template: "%s | Cirruscale",
  },
  description:
    "Cirruscale provides on-demand GPU clusters, intelligent distributed storage, and production-ready AI inference platforms for enterprise teams.",
  keywords: ["GPU cloud", "AI infrastructure", "machine learning", "GPU clusters", "cloud computing"],
  openGraph: {
    title: "Cirruscale — Scale AI Infrastructure Without Limits",
    description: "On-demand GPU clusters and AI infrastructure for enterprise teams.",
    siteName: "Cirruscale",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
