export default function ReviewHeader() {
  return (
    <>
      {/* Review Label */}
      <div className="px-[15px]">
        <span
          className="
            text-[12px]
            uppercase
            tracking-[1.6px]
            text-[#484848]
          "
        >
          Review
        </span>
      </div>

      {/* Title Section */}
      <div
        className="
          px-[20px]
          py-[10px]
          flex
          flex-col
          gap-[10px]
        "
      >
        <h2
          className="
            text-[22px]
            leading-[22px]
            tracking-[0.6px]
            text-[#1F1F1F]
          "
        >
          Your security system
        </h2>

        <p
          className="
            text-[14px]
            leading-[18px]
            tracking-[0.6px]
            text-[rgba(31,31,31,0.75)]
          "
        >
          Review your personalized protection system designed to keep what
          matters most safe.
        </p>
      </div>
    </>
  );
}
