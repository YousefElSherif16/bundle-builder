import { icons } from "../../assets";

interface QuantityStepperProps {
  value?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  size?: "default" | "small";
}

export default function QuantityStepper({
  value = 0,
  onIncrement,
  onDecrement,
  size = "default",
}: QuantityStepperProps) {
  const isSmall = size === "small";
  return (
    <div
      className={`flex items-center justify-between ${isSmall ? "h-[25px] w-[60px]" : "h-[35px] w-[80px]"}`}
    >
      <button
        aria-label="Decrease quantity"
        className={`
          flex
          h-[20px]
          w-[20px]
          items-center
          justify-center
          rounded-[4px]
          ${!isSmall ? "bg-[#F0F4F7]" : "bg-white"}
        `}
        onClick={onDecrement}
      >
        <img src={icons.minus} alt="" className="h-[10px] w-[10px]" />
      </button>

      <span
        className="
          text-[16px]
          leading-[20px]
          text-[#0B0D10]
        "
      >
        {value}
      </span>

      <button
        aria-label="Increase quantity"
        className={`
          flex
          h-[20px]
          w-[20px]
          items-center
          justify-center
          rounded-[4px]
        ${!isSmall ? "bg-[#F0F4F7]" : "bg-white"}
        `}
        onClick={onIncrement}
      >
        <img src={icons.add} alt="" className="h-[10px] w-[10px]" />
      </button>
    </div>
  );
}
