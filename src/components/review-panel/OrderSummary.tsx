import { usePopupStore } from "@/store/popupStore";
import { images } from "../../assets";

interface OrderSummaryProps {
  subtotal: number;
  compareSubtotal: number;
  savings: number;
}

export default function OrderSummary({
  subtotal,
  compareSubtotal,
  savings,
}: OrderSummaryProps) {
  const openPopup = usePopupStore((state) => state.openPopup);

  return (
    <div className="flex flex-col gap-[12px]">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <img
          src={images.badge}
          alt="Satisfaction Badge"
          className="h-[78px] w-[78px]"
        />

        <div className="flex flex-col items-end gap-[8px]">
          <div className="flex items-center justify-center rounded-[3px] bg-[#4E2FD2] px-[8px] py-[5px]">
            <span
              className=" text-[12px] font-normal leading-[10px] tracking-[-0.05em] text-white"
              style={{ fontFamily: "Gilroy-Medium" }}
            >
              as low as $19.19/mo
            </span>
          </div>

          <div className="flex items-baseline gap-[8px]">
            <span className="text-[18px] leading-[20px] line-through text-[#6F7882]">
              ${compareSubtotal.toFixed(2)}
            </span>

            <span className="text-[24px] leading-[32px] font-bold text-[#4E2FD2]">
              ${subtotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-[10px]">
        <p className="text-center text-[12px] leading-[12px] text-[#0AA288]">
          Congrats! You're saving ${savings.toFixed(2)} on your security bundle!
        </p>
      </div>

      <button
        type="button"
        onClick={() =>
          openPopup(
            "Checkout",
            "Checkout flow is not connected yet. Your selected system is ready.",
          )
        }
        className="
          h-[48px]
          w-full
          rounded-[4px]
          bg-[#4E2FD2]
          text-[17px]
          font-bold
          text-white
        "
      >
        Checkout
      </button>
    </div>
  );
}
