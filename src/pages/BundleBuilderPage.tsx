import BuilderSection from "../components/builder/BuilderSection";
import ReviewPanel from "../components/review-panel/ReviewPanel";

export default function BundleBuilderPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] py-10">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid gap-[29px] lg:grid-cols-[1fr_399px]">
          <BuilderSection />

          <ReviewPanel />
        </div>
      </div>
    </main>
  );
}
