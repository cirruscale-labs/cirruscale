import type { Metadata } from "next";
import AboutHero from "@/components/company/AboutHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "CirruScale was founded in 2022 to help engineering teams build software and deploy it to the cloud without the DevOps headaches.",
};

export default function AboutPage() {
  return <AboutHero />;
}
