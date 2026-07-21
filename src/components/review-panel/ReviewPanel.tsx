import ReviewHeader from "./ReviewHeader";
import ReviewSection from "./ReviewSection";
import ShippingRow from "./ShippingBadge";
import OrderSummary from "./OrderSummary";
import { buildReviewItems } from "@/utils/buildReviewItems";
import { useBundleStore } from "@/store/bundleStore";
import { calculateOrderSummary } from "@/utils/calculateOrderSummary";

export default function ReviewPanel() {
  const quantities = useBundleStore((state) => state.quantities);

  const reviewItems = buildReviewItems(quantities);

  const cameraItems = reviewItems.filter((item) => item.category === "cameras");

  const sensorItems = reviewItems.filter((item) => item.category === "sensors");

  const planItems = reviewItems.filter((item) => item.category === "plan");

  const protectionItems = reviewItems.filter(
    (item) => item.category === "protection",
  );

  const summary = calculateOrderSummary(reviewItems);

  return (
    <aside
      className="
        bg-[#EDF4FF]
        rounded-[10px]
        pt-[10px]
        flex
        flex-col
        gap-[5px]
      "
    >
      <ReviewHeader />

      <div
        className="
          px-[20px]
          flex
          flex-col
          gap-[10px]
        "
      >
        <ReviewSection title="Cameras" items={cameraItems} />
        <ReviewSection title="Sensors" items={sensorItems} />
        <ReviewSection title="Plan" items={planItems} />
        <ReviewSection title="Protection" items={protectionItems} />

        <ShippingRow />

        <OrderSummary
          subtotal={summary.subtotal}
          compareSubtotal={summary.compareSubtotal}
          savings={summary.savings}
        />
        <button
          className="
            mb-[20px]
            text-center
            text-[14px]
            underline
            text-[#4E2FD2]
          "
        >
          Save my system for later
        </button>
      </div>
    </aside>
  );
}
