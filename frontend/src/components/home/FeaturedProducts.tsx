import { getProducts } from "@/lib/getProducts";
import ProductCard from "@/components/works/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function FeaturedProducts() {
  const products = getProducts();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow blobs */}
      <div
        className="absolute top-10 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #60A5FA, transparent)" }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #38BDF8, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What We Do"
          subtitle="We build your backend, containerize it, set up CI/CD, and deploy it to the cloud — end to end."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/works/products" variant="outline">
            See Full Product Details
          </Button>
        </div>
      </div>
    </section>
  );
}
