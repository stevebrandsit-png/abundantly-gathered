"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
  // Here is where we pull in the memory engine and the openCart remote control
  const { cart, openCart } = useCartStore();

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fdfbf7] border-b border-[#e0dcd3] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand Name */}
          <Link href="/" className="font-serif text-2xl font-semibold text-[#8C673F]">
            Abundantly Gathered
          </Link>

          {/* Navigation Links & Cart Button */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-[#7D7166] hover:text-[#8C673F] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#7D7166] hover:text-[#8C673F] font-medium transition-colors">
              About
            </Link>
            
            {/* The Cart Button with the onClick trigger */}
            <button 
              onClick={openCart}
              className="text-[#7D7166] hover:text-[#8C673F] font-medium transition-colors duration-200 cursor-pointer"
            >
              Cart ({cart?.length || 0} Boxes)
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}