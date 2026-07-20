import StepAccordion from "./StepAccordion";
import bundleData from "@/data/bundle-data.json";

export default function BuilderSection() {
  return (
    <div className="flex flex-col ">
      {bundleData.steps.map((step, index) => (
        <StepAccordion
          key={step.id}
          step={step}
          isOpen={index === 0}
          stepNumber={index + 1}
          totalSteps={bundleData.steps.length}
        />
      ))}
    </div>
  );
}
