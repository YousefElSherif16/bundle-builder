import ReviewItemRow from "./ReviewItemRow";
import type { ReviewItem } from "@/types/ReviewItem";

interface Props {
  title: string;
  items: ReviewItem[];
}

export default function ReviewSection({ title, items }: Props) {
  if (!items.length) return null;

  return (
    <div
      className="
        border-t
        border-[#CED6DE]
        pt-[15px]
        flex
        flex-col
        gap-[8px]
      "
    >
      <span
        className="
          text-[12px]
          uppercase
          tracking-[0.03em]
          text-[#A8B2BD]
        "
      >
        {title}
      </span>

      <div className="flex flex-col gap-[12px]">
        {items.map((item) => (
          <ReviewItemRow key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}
