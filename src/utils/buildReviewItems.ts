import type { ReviewItem } from "../types/ReviewItem";
import productsData from "../data/bundle-data.json";

export function buildReviewItems(
    quantities: Record<string, number>,
): ReviewItem[] {
    const items: ReviewItem[] = [];

    productsData.steps.forEach((step) => {
        step.products.forEach((product) => {
            if (product.variants?.length) {
                product.variants.forEach((variant) => {
                    const key = `${product.id}-${variant.id}`;

                    const quantity = quantities[key] ?? 0;

                    if (quantity > 0) {
                        items.push({
                            key,
                            productId: product.id,
                            variantId: variant.id,
                            category: step.id,
                            name: `${product.name} - ${variant.name}`,
                            image: product.image,
                            quantity,
                            price: product.price,
                            compareAtPrice: product.compareAtPrice,
                        });
                    }
                });
            } else {
                const quantity = quantities[product.id] ?? 0;

                if (quantity > 0) {
                    items.push({
                        key: product.id,
                        productId: product.id,
                        variantId: undefined,
                        category: step.id,
                        name: product.name,
                        image: product.image,
                        quantity,
                        price: product.price,
                        compareAtPrice: product.compareAtPrice,
                    });
                }
            }
        });
    });

    return items;
}