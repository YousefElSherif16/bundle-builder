import { type ProductVariant } from "./ProductVariant";
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  variants?: ProductVariant[];
  quantity?: number;
}