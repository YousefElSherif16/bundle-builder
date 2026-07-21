import QuantityStepper from "../shared/QuantityStepper";
import { resolveAssetImage } from "@/utils/resolveAssetImage";
import type { ReviewItem } from "@/types/ReviewItem";
import { useBundleStore } from "@/store/bundleStore";

interface Props {
  item: ReviewItem;
}

export default function ReviewItem({ item }: Props) {
  const itemImageSrc = resolveAssetImage(item.image);
  const increaseQuantity = useBundleStore((state) => state.increaseQuantity);
  const decreaseQuantity = useBundleStore((state) => state.decreaseQuantity);
  const linePrice = item.price * item.quantity;
  const compareLinePrice = item.compareAtPrice
    ? item.compareAtPrice * item.quantity
    : undefined;

  return (
    <div className="flex items-center gap-[10px]">
      <div className="flex min-w-0 flex-1 items-center gap-[12px]">
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
            block
            min-w-0
            truncate
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
        onIncrement={() => increaseQuantity(item.key)}
        onDecrement={() => decreaseQuantity(item.key)}
        size="small"
      />
      <div className="flex w-[88px] shrink-0 flex-col items-end gap-[3px]">
        {compareLinePrice !== undefined && (
          <span
            className="
          whitespace-nowrap
          tabular-nums
          text-[16px]
                leading-[100%]
          tracking-[0.6px]
          line-through
          text-[#575757]
        "
          >
            ${compareLinePrice.toFixed(2)}
          </span>
        )}

        <span
          className="
        whitespace-nowrap
        tabular-nums
        text-[16px]
                leading-[100%]
        tracking-[0.6px]
        text-[#4E2FD2]
      "
        >
          ${linePrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
