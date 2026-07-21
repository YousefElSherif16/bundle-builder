import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePopupStore } from "@/store/popupStore";

export default function Popup() {
  const isOpen = usePopupStore((state) => state.isOpen);
  const message = usePopupStore((state) => state.message);
  const closePopup = usePopupStore((state) => state.closePopup);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePopup, isOpen]);

  if (!isMounted || !isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/40 px-4"
      onClick={closePopup}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="save-popup-title"
        className="w-full max-w-[420px] rounded-[12px] bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="save-popup-title" className="text-[18px] font-semibold text-[#0B0D10]">
          System saved
        </h2>

        <p className="mt-3 text-[14px] leading-[20px] text-[#484848]">
          {message}
        </p>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={closePopup}
            className="rounded-[8px] bg-[#4E2FD2] px-4 py-2 text-[14px] font-medium text-white"
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}