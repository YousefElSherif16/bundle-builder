export default function ShippingRow() {
  return (
    <div
      className="
        border-t
        border-[#CED6DE]
        pt-[15px]
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center gap-[12px]">
          <div
            className="
              flex
              h-[41px]
              w-[41px]
              items-center
              justify-center
              rounded-[5px]
              bg-white
            "
          >
            <img
              src="/icons/delivery.svg"
              alt="Delivery"
              className="h-[29px] w-[29px]"
            />
          </div>

          <span
            className="
              text-[14px]
              leading-[16px]
              tracking-[0.005em]
              text-[#0B0D10]
            "
          >
            Fast Shipping
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span
            className="
              text-[14px]
              leading-[16px]
              line-through
              text-[#6F7882]
            "
          >
            $5.99
          </span>

          <span
            className="
              text-[14px]
              leading-[16px]
              text-[#4E2FD2]
            "
          >
            FREE
          </span>
        </div>
      </div>
    </div>
  );
}
