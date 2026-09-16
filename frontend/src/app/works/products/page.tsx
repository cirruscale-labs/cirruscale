import type { Metadata } from "next";
import { getProducts } from "@/lib/getProducts";
import ProductCard from "@/components/works/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";
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

      {/* Comparison table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Which product do you need?"
            subtitle="A quick guide to picking the right product for your use case."
            centered
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-border">
                  <th className="text-left py-3 pr-6 text-brand-muted font-semibold">Use case</th>
                  <th className="text-center py-3 px-4 text-brand-primary font-bold">Backend Dev</th>
                  <th className="text-center py-3 px-4 text-brand-primary font-bold">Cloud & DevOps</th>
                  <th className="text-center py-3 px-4 text-brand-primary font-bold">Managed Ops</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["REST API / gRPC development", true, false, false],
                  ["Docker containerization", false, true, false],
                  ["CI/CD pipeline setup", false, true, false],
                  ["Kubernetes deployment", false, true, true],
                  ["Cloud provisioning (AWS/GCP/Azure)", false, true, true],
                  ["24/7 monitoring & incident response", false, false, true],
                  ["Database design & optimization", true, false, false],
                  ["Cost optimization & scaling", false, true, true],
                ].map(([useCase, cb, dn, ig]) => (
                  <tr key={useCase as string} className="border-b border-brand-border hover:bg-white/5 transition-colors">
                    <td className="py-3.5 pr-6 text-brand-primary">{useCase as string}</td>
                    {[cb, dn, ig].map((val, idx) => (
                      <td key={idx} className="py-3.5 px-4 text-center">
                        {val ? (
                          <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
