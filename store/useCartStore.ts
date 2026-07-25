import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
  cart: string[][]; 
  currentBox: string[]; 
  isCartOpen: boolean; // NEW: Drawer state
  addCookie: (cookieName: string) => void;
  removeCookie: (index: number) => void;
  addBoxToCart: () => void; 
  openCart: () => void; // NEW: Action to open drawer
  closeCart: () => void; // NEW: Action to close drawer
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [], 
      currentBox: [], 
      isCartOpen: false, 
      
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
            currentBox: [], 
            isCartOpen: true // Auto-open the drawer when they finish a box
          };
        }
        return state;
      }),

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false })
    }),
    { name: 'abundantly-gathered-storage' }
  )
);