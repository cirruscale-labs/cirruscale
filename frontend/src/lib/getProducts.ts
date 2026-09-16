import { Product } from "@/types/product";
import { products } from "@/data/products";

// Phase 1: reads local JSON
// Phase 2: swap body to → fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
export function getProducts(): Product[] {
  return products;
}
