import type { Metadata } from "next";
import { getProducts } from "@/lib/getProducts";
import ProductCard from "@/components/works/ProductCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products",
  description: "Backend development, cloud DevOps, and managed operations — the CirruScale product suite.",
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <>
      {/* Header */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Products</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Build. Deploy. Scale.
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            Backend software in Go and Python, containerization, CI/CD, Kubernetes, and cloud
            deployment — everything your project needs to go from code to production.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-primary">Not sure where to start?</h2>
          <p className="mt-4 text-brand-muted">
            Our engineers will map your exact use case to the right product combination — for free.
          </p>
          <div className="mt-8">
            <Button href="/contact">Talk to an Engineer</Button>
          </div>
        </div>
      </section>
    </>
  );
}
