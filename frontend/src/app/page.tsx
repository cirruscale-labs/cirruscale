import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedServices from "@/components/home/FeaturedServices";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <FeaturedServices />
      <CTASection />
    </>
  );
}
