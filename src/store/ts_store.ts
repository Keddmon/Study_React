import { create } from "zustand";

/**
 * 인터페이스 정의: 상태의 타입을 정의
 */
interface Store {
    selectedButton: string | null;
    count: number;
    setSelectedButton: (button: string) => void;
    incrementCount: () => void;
    removeCount: () => void;
}

/**
 * zustand 스토어 생성
 */
// <Store>: 스토어의 상태와 함수를 Store 인터페이스로 타입 지정
const useTsStore = create<Store>((set) => ({
    // 상태와 함수를 정의하는 객체를 반환
    selectedButton: null,
    count: 0,
    // button을 인자로 받아 selectedButton 상태를 변경하는 함수
    setSelectedButton: (button) => set({ selectedButton: button }),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    removeCount: () => set({ count: 0 }),
}));

export default useTsStore;