import type { ReviewItem } from "../types/ReviewItem";
import type { Step } from "@/types/Step";
import { reviewSeedItems } from "../data/review-seed-items";

export function buildReviewItems(
    quantities: Record<string, number>,
    steps: Step[],
): ReviewItem[] {
    const items: ReviewItem[] = [];

    steps.forEach((step) => {
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

    reviewSeedItems.forEach((seedItem) => {
        const quantity = quantities[seedItem.key] ?? 0;

        if (quantity > 0) {
            items.push({
                key: seedItem.key,
                productId: seedItem.productId,
                variantId: seedItem.variantId,
                category: seedItem.category,
                name: seedItem.name,
                image: seedItem.image,
                quantity,
                price: seedItem.price,
                compareAtPrice: seedItem.compareAtPrice,
            });
        }
    });

    return items;
}