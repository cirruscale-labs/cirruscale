import type { Metadata } from "next";
import AboutHero from "@/components/company/AboutHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "CirruScale was founded on September 17, 2026 in Dhaka, Bangladesh — delivering cloud infrastructure and full-stack software solutions.",
};

export default function AboutPage() {
  return <AboutHero />;
}
