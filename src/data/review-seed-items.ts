export interface ReviewSeedItem {
    key: string;
    productId: string;
    variantId?: string;
    category: "sensors" | "accessories" | "plan";
    name: string;
    image: string;
    price: number;
    compareAtPrice?: number;
    defaultQuantity: number;
}

export const reviewSeedItems: ReviewSeedItem[] = [
    {
        key: "sensor-entry",
        productId: "sensor-entry",
        category: "sensors",
        name: "Entry Sensor",
        image: "../assets/icons/sensors.svg",
        price: 19.99,
        compareAtPrice: 24.99,
        defaultQuantity: 2,
    },
    {
        key: "accessory-keypad",
        productId: "accessory-keypad",
        category: "accessories",
        name: "Keypad",
        image: "../assets/icons/protection.svg",
        price: 29.99,
        compareAtPrice: 39.99,
        defaultQuantity: 1,
    },
    {
        key: "plan-core",
        productId: "plan-core",
        category: "plan",
        name: "Core Monitoring Plan",
        image: "../assets/icons/plan.svg",
        price: 9.99,
        compareAtPrice: 14.99,
        defaultQuantity: 1,
    },
];