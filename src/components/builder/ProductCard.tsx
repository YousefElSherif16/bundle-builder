import QuantityStepper from "../shared/QuantityStepper";

export default function ProductCard() {
  return (
    <div
      className="
        flex
        h-[159px]
        gap-[19px]
        rounded-[10px]
        border-2
        border-[rgba(78,47,210,0.7)]
        bg-white
        p-[11px]
      "
    >
      {/* Image */}
      <div className="relative shrink-0">
        <div
          className="
            absolute
            left-0
            top-0
            flex
            h-[19px]
            w-[65px]
            items-center
            justify-center
            rounded-[10px]
            bg-[#4E2FD2]
          "
        >
          <span className="text-[12px] leading-[15px] text-white">
            Save 22%
          </span>
        </div>

        <img
          src="https://placehold.co/101x137"
          alt="Wyze Cam v4"
          className="
            h-[137px]
            w-[101px]
            rounded-[5px]
            object-cover
          "
        />
      </div>

      {/* Content */}
      <div className="flex h-[137px] flex-1 flex-col justify-between">
        {/* Title + Description */}
        <div className="flex flex-col gap-[8px]">
          <h3
            className="
              text-[16px]
              leading-[100%]
              tracking-[0.6px]
              text-[#1F1F1F]
            "
          >
            Wyze Cam v4
          </h3>

          <p
            className="
              text-[12px]
              leading-[130%]
              tracking-[0.6px]
              text-[rgba(31,31,31,0.75)]
            "
          >
            The clearest Wyze Cam ever made.{" "}
            <span className="cursor-pointer text-[#0046C7] underline">
              Learn More
            </span>
          </p>
        </div>

        {/* Variants */}
        <div className="flex gap-[6px]">
          {/* Selected */}
          <button
            className="
              flex
              h-[26px]
              items-center
              justify-center
              gap-[2px]
              rounded-[2px]
              border
              border-[#0AA288]
              bg-[rgba(29,240,187,0.04)]
              px-[3px]
            "
          >
            <img
              src="https://placehold.co/28x22"
              alt=""
              className="h-[22px] w-[28px] rounded-[5px]"
            />

            <span
              className="
                text-[10px]
                leading-[100%]
                tracking-[0.6px]
              "
            >
              White
            </span>
          </button>

          {/* Grey */}
          <button
            className="
              flex
              h-[26px]
              items-center
              justify-center
              gap-[2px]
              rounded-[2px]
              border
              border-[#CCCCCC]
              bg-white
              px-[5px]
            "
          >
            <img
              src="https://placehold.co/28x22"
              alt=""
              className="h-[22px] w-[28px] rounded-[5px]"
            />

            <span
              className="
                text-[10px]
                leading-[100%]
                tracking-[0.6px]
              "
            >
              Grey
            </span>
          </button>

          {/* Black */}
          <button
            className="
              flex
              h-[26px]
              items-center
              justify-center
              gap-[2px]
              rounded-[2px]
              border
              border-[#CCCCCC]
              bg-white
              px-[5px]
            "
          >
            <img
              src="https://placehold.co/23x22"
              alt=""
              className="h-[22px] w-[23px] rounded-[5px]"
            />

            <span
              className="
                text-[10px]
                leading-[100%]
                tracking-[0.6px]
              "
            >
              Black
            </span>
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between">
          <QuantityStepper />

          <div className="flex flex-col items-end gap-[3px]">
            <span
              className="
                text-[16px]
                leading-[100%]
                tracking-[0.6px]
                text-[#D8392B]
                line-through
              "
            >
              $35.98
            </span>

            <span
              className="
                text-[16px]
                leading-[100%]
                tracking-[0.6px]
                text-[#575757]
              "
            >
              $27.98
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
