import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fdfbf7] border-b border-[#e0dcd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif font-semibold text-2xl text-primary tracking-wide">
              Abundantly Gathered
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-8">
            <Link href="/about" className="text-text-main hover:text-primary-hover font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/shop" className="text-text-main hover:text-primary-hover font-medium transition-colors duration-200">
              Menu
            </Link>
          </div>

          {/* Cart Trigger */}
          <div className="flex items-center">
            <button className="text-text-main hover:text-primary-hover font-medium transition-colors duration-200">
              Cart (0)
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}