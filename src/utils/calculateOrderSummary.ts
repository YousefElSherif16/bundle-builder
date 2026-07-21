import type { ReviewItem } from "@/types/ReviewItem";

export interface OrderSummary {
    subtotal: number;
    compareSubtotal: number;
    savings: number;
}

export function calculateOrderSummary(
    items: ReviewItem[],
): OrderSummary {
    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    const compareSubtotal = items.reduce(
        (sum, item) =>
            sum +
            (item.compareAtPrice ?? item.price) *
            item.quantity,
        0,
    );

    return {
        subtotal,
        compareSubtotal,
        savings: compareSubtotal - subtotal,
    };
}