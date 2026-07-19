import QuantityStepper from "../shared/QuantityStepper";

export default function ReviewItem() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-14 w-14 rounded bg-gray-100" />

      <div className="flex-1">
        <h4 className="text-sm font-medium">Product Name</h4>

        <p className="text-sm text-gray-500">$39.99</p>
      </div>

      <QuantityStepper />
    </div>
  );
}
