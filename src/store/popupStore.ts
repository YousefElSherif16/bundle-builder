import { create } from "zustand";

export interface PopupState {
  isOpen: boolean;
  message: string;
  openPopup: (message: string) => void;
  closePopup: () => void;
}

export const usePopupStore = create<PopupState>((set) => ({
  isOpen: false,
  message: "",

  openPopup: (message: string) => set({ isOpen: true, message }),

  closePopup: () => set({ isOpen: false, message: "" }),
}));