import { getProducts } from "@/lib/getProducts";
import ProductCard from "@/components/works/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function FeaturedProducts() {
  const products = getProducts();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Built for AI Teams That Ship"
          subtitle="Three integrated products covering every layer of your AI infrastructure — from raw compute to serving at the edge."
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
