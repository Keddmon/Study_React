import { create } from "zustand";

const useJsStore = create((set) => ({
    count: 0,
    selectedButton: null,

    setSelectedButton: (button) => set({ selectedButton: button}),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    removeCount: () => set({ count: 0 }),
}));

export default useJsStore