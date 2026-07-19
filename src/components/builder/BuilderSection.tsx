import StepAccordion from "./StepAccordion";

export default function BuilderSection() {
  return (
    <div className="flex flex-col gap-[15px]">
      <StepAccordion
        step={1}
        title="Choose your cameras"
        selectedCount={2}
        isOpen
      />

      <StepAccordion step={2} title="Choose your plan" selectedCount={1} />

      <StepAccordion step={3} title="Choose your sensors" selectedCount={2} />

      <StepAccordion step={4} title="Add extra protection" selectedCount={1} />
    </div>
  );
}
