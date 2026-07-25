"use client";

import { useCartStore } from "@/store/useCartStore";

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart } = useCartStore();

  // If the drawer is told to be closed, render nothing
  if (!isCartOpen) return null;

  const boxPrice = 15; // Example math
  const subtotal = cart.length * boxPrice;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      
      {/* Dark background overlay (clicking it closes the cart) */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer" 
        onClick={closeCart} 
      />
      
      {/* The Slide-Out Drawer */}
      <div className="relative w-full max-w-md bg-[#fdfbf7] h-full shadow-2xl flex flex-col">
        
        {/* The Mandatory Terracotta Compliance Alert */}
        <div className="bg-[#c96a52] text-white px-6 py-4 text-sm font-medium leading-relaxed">
          <strong>Notice:</strong> All orders require a strict 48-hour turnaround time for local Highland pickup.
        </div>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e0dcd3]">
          <h2 className="font-serif text-3xl font-semibold text-primary">Your Order</h2>
          <button onClick={closeCart} className="text-3xl text-text-main hover:text-[#c96a52] cursor-pointer">&times;</button>
        </div>

        {/* Cart Contents */}
        <div className="p-6 flex-grow overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-text-main text-center mt-10 italic">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cart.map((box, index) => (
                <div key={index} className="bg-white p-4 rounded-[8px] border border-[#e0dcd3] shadow-sm">
                  <h3 className="font-serif font-medium text-lg text-primary mb-2">Custom Box {index + 1}</h3>
                  <ul className="text-sm text-text-main space-y-1 mb-3">
                    {box.map((cookie, i) => (
                      <li key={i}>• {cookie}</li>
                    ))}
                  </ul>
                  <p className="font-medium text-primary">${boxPrice}.00</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#e0dcd3] bg-white">
            <div className="flex justify-between items-center mb-6 text-lg font-medium text-primary">
              <span>Subtotal</span>
              <span>${subtotal}.00</span>
            </div>
            <button className="w-full bg-primary hover:bg-[#8C673F] text-white font-medium py-4 rounded-[8px] transition-colors cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}