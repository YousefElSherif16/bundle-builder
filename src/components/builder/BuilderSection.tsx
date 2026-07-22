import StepAccordion from "./StepAccordion";
import { useBundleStore } from "@/store/bundleStore";
import { useBundleDataStore } from "@/store/bundleDataStore";
import type { Step } from "@/types/Step";
import { useEffect, useState } from "react";

export default function BuilderSection() {
  const quantities = useBundleStore((state) => state.quantities);
  const steps = useBundleDataStore((state) => state.steps);
  const loading = useBundleDataStore((state) => state.loading);
  const fetchBundleData = useBundleDataStore((state) => state.fetchBundleData);
  const [openStepIndex, setOpenStepIndex] = useState(0);

  useEffect(() => {
    void fetchBundleData();
  }, [fetchBundleData]);

  const getStepSelectedCount = (step: Step) => {
    return step.products.filter((product) => {
      if (product.variants?.length) {
        return product.variants.some((variant) => {
          const key = `${product.id}-${variant.id}`;
          return (quantities[key] ?? 0) > 0;
        });
      }

      return (quantities[product.id] ?? 0) > 0;
    }).length;
  };

  return (
    <div className="flex flex-col ">
      {loading && !steps.length && (
        <div className="rounded-[10px] bg-white px-[15px] py-[20px] text-[#484848]">
          Loading bundle steps...
        </div>
      )}

      {steps.map((step, index) => (
        <StepAccordion
          key={step.id}
          step={step}
          isOpen={index === openStepIndex}
          stepNumber={index + 1}
          totalSteps={steps.length}
          selectedCount={getStepSelectedCount(step)}
          onToggle={() =>
            setOpenStepIndex((currentIndex) =>
              currentIndex === index ? -1 : index,
            )
          }
          onNext={() =>
            setOpenStepIndex((currentIndex) =>
              Math.min(currentIndex + 1, steps.length - 1),
            )
          }
          nextStepTitle={steps[index + 1]?.title}
          isLastStep={index === steps.length - 1}
        />
      ))}
    </div>
  );
}
