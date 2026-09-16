import Card from "@/components/ui/Card";
import { Product } from "@/types/product";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  return (
    <Card className="group hover:shadow-card-hover transition-shadow duration-300 flex flex-col">
      {/* Gradient header */}
      <div
        className="h-36 flex items-center justify-center text-5xl relative overflow-hidden"
        style={{ background: product.gradient }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)",
          }}
        />
        <span className="relative text-4xl">{product.icon}</span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-brand-primary">{product.name}</h3>
        <p
          className="text-sm font-medium mt-1 bg-clip-text text-transparent"
          style={{ backgroundImage: product.gradient }}
        >
          {product.tagline}
        </p>
        <p className="text-brand-muted text-sm mt-3 leading-relaxed flex-1">
          {product.description}
        </p>

        <ul className="mt-5 space-y-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-brand-primary">
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
