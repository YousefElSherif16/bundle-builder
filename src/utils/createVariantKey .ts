export const createVariantKey = (
  productId: string,
  variantId?: string
) => {
  if (!variantId) {
    return productId;
  }

  return `${productId}-${variantId}`;
};