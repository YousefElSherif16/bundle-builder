import { create } from "zustand";

export interface PopupState {
  isOpen: boolean;
  title: string;
  message: string;
  openPopup: (title: string, message: string) => void;
  closePopup: () => void;
}

export const usePopupStore = create<PopupState>((set) => ({
  isOpen: false,
  title: "",
  message: "",

  openPopup: (title: string, message: string) => set({ isOpen: true, title, message }),

  closePopup: () => set({ isOpen: false, title: "", message: "" }),
}));