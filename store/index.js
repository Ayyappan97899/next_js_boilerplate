import { create } from "zustand";

const useStore = create((set) => ({
  detail: {
    title: "Next Js",
  },

  setDetail: (data) => {
    set({ detail: data });
  },
}));

export default useStore;
