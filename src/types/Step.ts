import type { Product } from "./Product";

export interface Step {
  id: string;
  title: string;
  products: Product[];
}