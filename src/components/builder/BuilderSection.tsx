import StepAccordion from "./StepAccordion";
import bundleData from "@/data/bundle-data.json";
import { useBundleStore } from "@/store/bundleStore";
import type { Step } from "@/types/Step";
import { useState } from "react";

export default function BuilderSection() {
  const quantities = useBundleStore((state) => state.quantities);
  const [openStepIndex, setOpenStepIndex] = useState(0);

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
      {bundleData.steps.map((step, index) => (
        <StepAccordion
          key={step.id}
          step={step}
          isOpen={index === openStepIndex}
          stepNumber={index + 1}
          totalSteps={bundleData.steps.length}
          selectedCount={getStepSelectedCount(step)}
          onToggle={() =>
            setOpenStepIndex((currentIndex) =>
              currentIndex === index ? -1 : index,
            )
          }
          onNext={() =>
            setOpenStepIndex((currentIndex) =>
              Math.min(currentIndex + 1, bundleData.steps.length - 1),
            )
          }
          nextStepTitle={bundleData.steps[index + 1]?.title}
          isLastStep={index === bundleData.steps.length - 1}
        />
      ))}
    </div>
  );
}
