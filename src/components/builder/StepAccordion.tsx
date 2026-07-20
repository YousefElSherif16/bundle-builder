import type { Step } from "../../types/Step";
import { icons } from "../../assets";
import ProductCard from "../builder/ProductCard";

interface StepAccordionProps {
  stepNumber: number;
  totalSteps: number;
  step: Step;
  isOpen: boolean;
}

export default function StepAccordion({
  stepNumber,
  totalSteps,
  step,
  isOpen,
}: StepAccordionProps) {
  const stepIcon = icons[step.id as keyof typeof icons];
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
            STEP {stepNumber} OF {totalSteps}
          </span>
        </div>

        {/* TITLE ROW */}
        <div className="px-[15px] mt-[14px] flex h-[26px] items-center justify-between">
          <div className="flex flex-1 items-center gap-[8px]">
            <div
              className="flex h-[26px] w-[26px]  items-center
                justify-center
"
            >
              <img src={stepIcon} alt="" className="h-[26px] w-[26px]" />
            </div>

            <h2
              className="
                text-[22px]
                leading-[22px]
                text-[#0B0D10]
              "
            >
              {step.title}
            </h2>
          </div>

          <div className="flex items-center gap-[4px]">
            {isOpen && (
              <span
                className="
                  text-[14px]
                  leading-[16px]
                  text-[#4E2FD2]
                "
              >
                2 selected
              </span>
            )}

            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className={isOpen ? "" : "rotate-180"}
            >
              <path d="M6 2L11 9H1L6 2Z" fill="#4E2FD2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Products */}
      {isOpen && step.products.length > 0 && (
        <div className="px-[15px] pt-[20px]">
          <div className="grid grid-cols-2 gap-[15px]">
            {step.products.map((product, productCardIndex) => {
              const isSingleItemLastRow =
                step.products.length % 2 !== 0 &&
                productCardIndex === step.products.length - 1;

              return (
                <div
                  key={productCardIndex}
                  className={
                    isSingleItemLastRow ? "col-span-2 flex justify-center" : ""
                  }
                >
                  <div
                    className={
                      isSingleItemLastRow ? "w-[calc((100%-15px)/2)]" : "w-full"
                    }
                  >
                    <ProductCard key={product.id} product={product} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer */}
      {isOpen && (
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
      )}
    </section>
  );
}
