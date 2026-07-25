import { create } from 'zustand';

// 1. Define the rules for our expanded memory
interface CartState {
  cart: string[][]; // The master cart holding arrays of completed boxes
  currentBox: string[]; // The current box being built
  addCookie: (cookieName: string) => void;
  removeCookie: (index: number) => void;
  addBoxToCart: () => void; // The new action to save a box
}

// 2. Build the upgraded engine
export const useCartStore = create<CartState>((set) => ({
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

  // New Logic: Push the full box into the cart, then wipe the current box clean
  addBoxToCart: () => set((state) => {
    if (state.currentBox.length === 3) {
      return {
        cart: [...state.cart, state.currentBox],
        currentBox: [] // Reset the builder so they can make another
      };
    }
    return state;
  })
}));