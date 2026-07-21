import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BundleState {
  quantities: Record<string, number>;

  increaseQuantity: (key: string) => void;
  decreaseQuantity: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  getQuantity: (key: string) => number;
  clearBundle: () => void;
  saveSystem: () => void;
}

export const useBundleStore = create<BundleState>()(
  persist(
    (set, get) => ({
      quantities: {},

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
            [key]: Math.max(
              (state.quantities[key] ?? 0) - 1,
              0
            ),
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

        localStorage.setItem(
          "bundle-builder",
          JSON.stringify(data)
        );

        alert("System saved successfully");
      },
    }),
    {
      name: "bundle-builder",
    }
  )
);