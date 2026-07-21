export interface ReviewItem {
  key: string;
  productId: string;
  variantId?: string;
  category: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  compareAtPrice?: number;
}