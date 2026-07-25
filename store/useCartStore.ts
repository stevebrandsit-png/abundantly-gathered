import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Define the rules for our expanded memory
interface CartState {
  cart: string[][]; 
  currentBox: string[]; 
  addCookie: (cookieName: string) => void;
  removeCookie: (index: number) => void;
  addBoxToCart: () => void; 
}

// 2. Build the upgraded engine wrapped in 'persist'
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [], 
      currentBox: [], 
      
      addCookie: (cookieName) => set((state) => {
        if (state.currentBox.length < 3) {
          return { currentBox: [...state.currentBox, cookieName] };
        }
        return state; 
      }),
      
      removeCookie: (indexToRemove) => set((state) => ({
        currentBox: state.currentBox.filter((_, index) => index !== indexToRemove)
      })),

      addBoxToCart: () => set((state) => {
        if (state.currentBox.length === 3) {
          return {
            cart: [...state.cart, state.currentBox],
            currentBox: [] 
          };
        }
        return state;
      })
    }),
    {
      // This is the name of the secure vault created in the user's browser
      name: 'abundantly-gathered-storage',
    }
  )
);