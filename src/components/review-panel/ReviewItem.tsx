import QuantityStepper from "../shared/QuantityStepper";
import { resolveAssetImage } from "@/utils/resolveAssetImage";
import type { ReviewItem } from "@/types/ReviewItem";

interface Props {
  item: ReviewItem;
}

export default function ReviewItem({ item }: Props) {
  const itemImageSrc = resolveAssetImage(item.image);

  return (
    <div className="flex items-center gap-[16px]">
      <div className="flex flex-1 items-center gap-[12px]">
        <img
          src={itemImageSrc}
          alt={item.name}
          className="
            w-[41px]
            h-[41px]
            rounded-[5px]
            bg-white
            object-contain
          "
        />

        <span
          className="
            text-[14px]
            leading-[16px]
            text-[#0B0D10]
          "
        >
          {item.name}
        </span>
      </div>

      <QuantityStepper
        value={item.quantity}
        onIncrement={() => {}}
        onDecrement={() => {}}
        size="small"
      />
      <div className="flex flex-col items-end gap-[3px]">
        {item.compareAtPrice && (
          <span
            className="
          text-[16px]
                leading-[100%]
          tracking-[0.6px]
          line-through
          text-[#575757]
        "
          >
            ${item.compareAtPrice.toFixed(2)}
          </span>
        )}

        <span
          className="
        text-[16px]
                leading-[100%]
        tracking-[0.6px]
        text-[#4E2FD2]
      "
        >
          ${item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
