import type { ProductVariant } from "../../types/ProductVariant";
import { resolveAssetImage } from "../../utils/resolveAssetImage";

interface VariantChipProps {
  variant: ProductVariant;
  selected: boolean;
  onClick: () => void;
}

export default function VariantChip({
  variant,
  selected,
  onClick,
}: VariantChipProps) {
  const variantImageSrc = resolveAssetImage(variant.image);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        h-[26px]
        items-center
        gap-[2px]
        rounded-[2px]
        border-[0.5px]
        px-[4px]
        transition-colors

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
          className="h-[22px] w-[22px] rounded-[2px] object-cover"
        />
      )}

      <span
        className="
          text-[10px]
          leading-[10px]
          tracking-[0.6px]
          text-[#1F1F1F]
        "
      >
        {variant.name}
      </span>
    </button>
  );
}
