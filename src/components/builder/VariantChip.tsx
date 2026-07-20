import type { ProductVariant } from "../../types/ProductVariant";
import { resolveAssetImage } from "../../utils/resolveAssetImage";

interface VariantChipProps {
  variant: ProductVariant;
  selected?: boolean;
}

export default function VariantChip({
  variant,
  selected = false,
}: VariantChipProps) {
  const variantImageSrc = resolveAssetImage(variant.image);

  return (
    <button
      className={`
        flex
        h-[26px]
        items-center
        gap-[2px]
        rounded-[2px]
        px-[4px]
        border-[0.5px]

        ${
          selected
            ? "border-[#0AA288] bg-[rgba(29,240,187,0.04)]"
            : "border-[#CCCCCC] bg-white"
        }
      `}
    >
      {variantImageSrc && (
        <img
          src={variantImageSrc}
          alt={variant.name}
          className="h-[22px] w-[22px] rounded"
        />
      )}

      <span
        className="
          text-[10px]
          leading-[10px]
          tracking-[0.6px]
        "
      >
        {variant.name}
      </span>
    </button>
  );
}
