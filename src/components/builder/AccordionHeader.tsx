interface AccordionHeaderProps {
  step: number;
  totalSteps: number;
  title: string;
  selectedCount: number;
  isOpen: boolean;
}

export default function AccordionHeader({
  step,
  totalSteps,
  title,
  selectedCount,
  isOpen,
}: AccordionHeaderProps) {
  return (
    <div className="flex flex-col gap-[14px]">
      {/* STEP LABEL */}
      <div
        className="
          flex
          h-[12px]
          w-[768px]
          items-center
          px-[15px]
        "
      >
        <span
          className="
            flex-1
            text-[12px]
            uppercase
            tracking-[1.6px]
            leading-[12px]
            text-[#484848]
          "
        >
          STEP {step} OF {totalSteps}
        </span>
      </div>

      {/* TITLE ROW */}
      <div
        className="
          flex
          h-[26px]
          w-[738px]
          items-center
          justify-between
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            flex
            flex-1
            items-center
            gap-[8px]
          "
        >
          {/* Replace with actual SVG */}
          <div className="h-[26px] w-[26px] shrink-0">📷</div>

          <h2
            className="
              flex-1
              text-[22px]
              leading-[22px]
              text-[#0B0D10]
            "
          >
            {title}
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            items-center
            gap-[4px]
          "
        >
          <span
            className="
              text-[14px]
              leading-[16px]
              text-[#4E2FD2]
            "
          >
            {selectedCount} selected
          </span>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={isOpen ? "" : "rotate-180"}
          >
            <path d="M6 2L11 9H1L6 2Z" fill="#4E2FD2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
