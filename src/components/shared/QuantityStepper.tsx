import { icons } from "../../assets";

interface QuantityStepperProps {
  value?: number;
}

export default function QuantityStepper({ value = 0 }: QuantityStepperProps) {
  return (
    <div className="flex h-[35px] w-[80px] items-center justify-between">
      <button
        aria-label="Decrease quantity"
        className="
          flex
          h-[20px]
          w-[20px]
          items-center
          justify-center
          rounded-[4px]
          border-2
          border-[#E6EBF0]
          bg-white
        "
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
        className="
          flex
          h-[20px]
          w-[20px]
          items-center
          justify-center
          rounded-[4px]
          bg-[#F0F4F7]
        "
      >
        <img src={icons.add} alt="" className="h-[10px] w-[10px]" />
      </button>
    </div>
  );
}
