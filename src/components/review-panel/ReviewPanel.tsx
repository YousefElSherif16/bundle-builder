import ReviewSection from "./ReviewSection";

export default function ReviewPanel() {
  return (
    <aside
      className="
      rounded-[10px]
      bg-white
      shadow-sm
    "
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold">Your Security System</h2>

        <div className="mt-6 flex flex-col gap-5">
          <ReviewSection title="Cameras" />

          <ReviewSection title="Sensors" />

          <ReviewSection title="Accessories" />

          <ReviewSection title="Plan" />
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between">
            <span>Total</span>

            <span className="font-semibold">$499.99</span>
          </div>

          <button
            className="
            mt-6
            w-full
            rounded-lg
            bg-[#0046C7]
            py-3
            font-medium
            text-white
          "
          >
            Checkout
          </button>

          <button
            className="
            mt-4
            w-full
            text-center
            text-sm
            text-[#0046C7]
          "
          >
            Save my system for later
          </button>
        </div>
      </div>
    </aside>
  );
}
