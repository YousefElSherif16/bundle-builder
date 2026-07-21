import { create } from "zustand";
import { usePopupStore } from "@/store/popupStore";

export interface BundleState {
  quantities: Record<string, number>;

  increaseQuantity: (key: string) => void;
  decreaseQuantity: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  getQuantity: (key: string) => number;
  clearBundle: () => void;
  saveSystem: () => void;
}

const STORAGE_KEY = "bundle-builder";

const loadSavedQuantities = (): Record<string, number> => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const savedData = window.localStorage.getItem(STORAGE_KEY);

    return savedData ? (JSON.parse(savedData) as Record<string, number>) : {};
  } catch {
    return {};
  }
};

export const useBundleStore = create<BundleState>()((set, get) => ({
  quantities: loadSavedQuantities(),

  increaseQuantity: (key: string) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [key]: (state.quantities[key] ?? 0) + 1,
      },
    })),

  decreaseQuantity: (key: string) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [key]: Math.max((state.quantities[key] ?? 0) - 1, 0),
      },
    })),

  setQuantity: (key: string, quantity: number) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [key]: Math.max(quantity, 0),
      },
    })),

  getQuantity: (key: string) => {
    return get().quantities[key] ?? 0;
  },

  clearBundle: () =>
    set({
      quantities: {},
    }),

  saveSystem: () => {
    const data = get().quantities;

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    usePopupStore
      .getState()
      .openPopup("System saved", "Your bundle has been saved successfully.");
  },
}));