import QuantityStepper from "../shared/QuantityStepper";
import type { Product } from "../../types/Product";
import VariantChip from "./VariantChip";
import { resolveAssetImage } from "../../utils/resolveAssetImage";
import { createVariantKey } from "@/utils/createVariantKey ";
import { useBundleStore } from "@/store/bundleStore";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productImageSrc = resolveAssetImage(product.image);
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants?.[0]?.id,
  );

  const selectedVariant = product.variants?.find(
    (variant) => variant.id === selectedVariantId,
  );

  const variantKey = createVariantKey(product.id, selectedVariant?.id);
  const { getQuantity, increaseQuantity, decreaseQuantity } = useBundleStore();

  const quantity = getQuantity(variantKey);
  const hasQuantity = quantity > 0;
  return (
    <div
      className={`
        flex
        h-[159px]
        gap-[19px]
        rounded-[10px]
        ${hasQuantity ? "border-2 border-[rgba(78,47,210,0.7)]" : "border-0"}
        bg-white
        p-[11px]
      `}
    >
      {/* Image */}
      <div className="relative shrink-0">
        {product.badge && (
          <div
            className="
            absolute
            left-0
            top-0
            flex
            h-[19px]
            w-[65px]
            items-center
            justify-center
            rounded-[10px]
            bg-[#4E2FD2]
          "
          >
            <span className="text-[12px] leading-[15px] text-white">
              {product.badge}
            </span>
          </div>
        )}

        {product.image && (
          <img
            src={productImageSrc}
            alt={product.name}
            className="
              h-[137px]
              w-[101px]
              rounded-[5px]
              object-contain
            "
          />
        )}
      </div>

      {/* Content */}
      <div className="flex h-[137px] flex-1 flex-col justify-between">
        {/* Title + Description */}
        <div className="flex flex-col gap-[8px]">
          <h3
            className="
              text-[16px]
              leading-[100%]
              tracking-[0.6px]
              text-[#1F1F1F]
            "
          >
            {product.name}
          </h3>

          <p
            className="
              text-[12px]
              leading-[130%]
              tracking-[0.6px]
              text-[rgba(31,31,31,0.75)]
            "
          >
            {product.description}{" "}
            <span className="cursor-pointer text-[#0046C7] underline">
              Learn More
            </span>
          </p>
        </div>

        {/* Variants */}
        <div className="flex gap-[6px]">
          {product.variants?.map((variant) => (
            <VariantChip
              key={variant.id}
              variant={variant}
              selected={selectedVariantId === variant.id}
              onClick={() => setSelectedVariantId(variant.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex h-[35px] items-end justify-between">
          <QuantityStepper
            value={quantity}
            onIncrement={() => increaseQuantity(variantKey)}
            onDecrement={() => decreaseQuantity(variantKey)}
          />
          <div className="flex flex-col items-end gap-[3px]">
            {product.compareAtPrice && (
              <span
                className="
          text-[16px]
                leading-[100%]
          tracking-[0.6px]
          line-through
          text-[#D8392B]
        "
              >
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}

            <span
              className="
        text-[16px]
                leading-[100%]
        tracking-[0.6px]
        text-[#575757]
      "
            >
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
