import type { ReviewItem } from "@/types/ReviewItem";

export function getSelectedCount(
    items: ReviewItem[],
): number {
    return items.length;
}