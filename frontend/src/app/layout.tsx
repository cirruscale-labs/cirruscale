import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "CirruScale — Software Engineering & Cloud Solutions",
    template: "%s | CirruScale",
  },
  description:
    "Cloud deployment, CI/CD, Kubernetes, and infrastructure management on AWS, GCP, and Azure. We also build backend software in Go and Python.",
  keywords: ["cloud solutions", "devops", "kubernetes", "ci/cd", "docker", "golang", "python", "aws", "gcp", "azure", "software engineering"],
  openGraph: {
    title: "CirruScale — Software Engineering & Cloud Solutions",
    description: "Cloud deployment, CI/CD, Kubernetes, and infrastructure on AWS, GCP, and Azure. Plus backend software in Go and Python.",
    siteName: "CirruScale",
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
