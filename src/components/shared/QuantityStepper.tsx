export default function QuantityStepper() {
  return (
    <div className="flex h-[35px] w-[80px] items-center justify-between">
      <button
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
        -
      </button>

      <span
        className="
          text-[16px]
          leading-[20px]
          text-[#0B0D10]
        "
      >
        1
      </span>

      <button
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
        +
      </button>
    </div>
  );
}
