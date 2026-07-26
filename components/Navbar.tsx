"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
  const { cart, openCart } = useCartStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary shadow-md border-b border-primary-hover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN HEADER ROW */}
        <div className="relative flex justify-between items-center py-4 lg:py-6">
          {/* LEFT: Logo (Desktop & Mobile) */}
          <Link href="/" className="flex items-center justify-start z-10">
            <Image
              src="/logo-desktop.svg"
              alt="Abundantly Gathered Logo"
              width={400}
              height={180}
              priority
              // Upgraded desktop size to lg:h-40 for maximum brand authority
              className="w-auto h-16 lg:h-40 object-contain drop-shadow-[0_2px_2px_rgba(62,39,35,0.6)]"
            />
          </Link>

          {/* CENTER BOTTOM: Bible Verse (Desktop Only) */}
          <div className="hidden lg:block absolute bottom-0 pb-2 left-1/2 -translate-x-1/2 opacity-90 w-full text-center pointer-events-none">
            <p className="text-bg-base font-serif italic text-sm leading-relaxed">
              "Taste and see that the LORD is good." <br />
              <span className="text-xs not-italic font-sans mt-1 block uppercase tracking-widest">
                - Psalm 34:8
              </span>
            </p>
          </div>

          {/* RIGHT: Navigation Links & Cart (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-end space-x-8 z-10">
            <Link
              href="/"
              className="text-bg-base hover:text-surface font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-bg-base hover:text-surface font-medium transition-colors"
            >
              About
            </Link>
            <button
              onClick={openCart}
              className="text-bg-base hover:text-surface font-medium transition-colors duration-200 cursor-pointer"
            >
              Cart ({cart?.length || 0} Boxes)
            </button>
          </div>

          {/* MOBILE RIGHT: Cart + Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-5 z-10">
            <button
              onClick={openCart}
              className="text-bg-base hover:text-surface font-medium text-sm"
            >
              Cart ({cart?.length || 0})
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-bg-base hover:text-surface p-1 focus:outline-none cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary-hover border-t border-primary px-4 pt-2 pb-4 space-y-1 shadow-inner">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-bg-base hover:text-surface font-medium py-3 border-b border-primary/30"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-bg-base hover:text-surface font-medium py-3 border-b border-primary/30"
          >
            About
          </Link>
          <div className="pt-4 pb-2">
            <p className="text-bg-base/70 font-serif italic text-xs text-center">
              "Taste and see that the LORD is good." - Ps 34:8
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
