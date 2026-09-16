import type { Metadata } from "next";
import AboutHero from "@/components/company/AboutHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Cirruscale was founded in 2022 to make enterprise-grade AI infrastructure accessible to every engineering team.",
};

export default function AboutPage() {
  return <AboutHero />;
}
