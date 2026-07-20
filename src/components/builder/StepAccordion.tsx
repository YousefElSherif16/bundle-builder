import ProductCard from "./ProductCard";

interface StepAccordionProps {
  step: number;
  title: string;
  selectedCount: number;
  isOpen?: boolean;
}

export default function StepAccordion({
  step,
  title,
  selectedCount,
  isOpen = false,
}: StepAccordionProps) {
  const productCards = Array.from({ length: 5 }, (_, index) => index);
  const sectionClassName = `
    rounded-[10px]
    ${isOpen ? "bg-[#EDF4FF]" : "bg-white"}
  `;

  return (
    <section className={sectionClassName}>
      {/* Header */}
      <div
        className={`${!isOpen ? "border-b border-[#1F1F1F] pb-[15px] pt-[5px]" : "py-[5px]"}`}
      >
        {/* STEP LABEL */}
        <div className="flex h-[12px] items-center border-b border-[#1F1F1F] py-[10px]">
          <span
            className="
              text-[12px]
              uppercase
              tracking-[1.6px]
              leading-[12px]
              text-[#484848]
              px-[15px]
            "
          >
            STEP {step} OF 4
          </span>
        </div>

        {/* TITLE ROW */}
        <div className="px-[15px] mt-[14px] flex h-[26px] items-center justify-between">
          {/* Left */}
          <div className="flex flex-1 items-center gap-[8px]">
            {/* Temporary Icon */}
            <div
              className="
                flex
                h-[26px]
                w-[26px]
                items-center
                justify-center
                rounded
                border
              "
            >
              📷
            </div>

            <h2
              className="
                text-[22px]
                leading-[22px]
                text-[#0B0D10]
              "
            >
              {title}
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-center gap-[4px]">
            {isOpen && (
              <span
                className="
                  text-[14px]
                  leading-[16px]
                  text-[#4E2FD2]
                "
              >
                {selectedCount} selected
              </span>
            )}

            {isOpen ? (
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M6 2L11 9H1L6 2Z" fill="#4E2FD2" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M1 3H11L6 10L1 3Z" fill="#4E2FD2" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <>
          <div className="px-[15px] pt-[20px]">
            <div className="grid grid-cols-2 gap-[15px]">
              {productCards.map((productCardIndex) => {
                const isSingleItemLastRow =
                  productCards.length % 2 !== 0 &&
                  productCardIndex === productCards.length - 1;

                return (
                  <div
                    key={productCardIndex}
                    className={
                      isSingleItemLastRow
                        ? "col-span-2 flex justify-center"
                        : ""
                    }
                  >
                    <ProductCard />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center px-[15px] py-[20px]">
            <button
              className="
                h-[44px]
                rounded-[7px]
                border
                border-[#4E2FD2]
                bg-transparent
                px-[20px]
                text-[#4E2FD2]
              "
            >
              Next: Choose your plan
            </button>
          </div>
        </>
      )}
    </section>
  );
}
