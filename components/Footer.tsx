import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-[#e0dcd3] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Hook */}
          <div>
            <h3 className="font-serif font-semibold text-xl text-primary mb-4">Abundantly Gathered</h3>
            <p className="text-text-main text-sm mb-4">
              Join the neighborhood list to find out when the next batch of fresh eggs drops.
            </p>
            {/* Email Capture Placeholder (Will wire to Formspree later) */}
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow px-3 py-2 bg-bg-base border border-[#e0dcd3] rounded-[8px] text-sm focus:outline-none focus:border-primary text-text-main"
              />
              <button 
                type="button" 
                className="bg-primary hover:bg-[#8C673F] text-white px-4 py-2 rounded-[8px] text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-medium text-lg text-primary mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-text-main">
              <li><Link href="/shop" className="hover:text-primary hover:underline transition-colors">Menu</Link></li>
              <li><Link href="/about" className="hover:text-primary hover:underline transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-serif font-medium text-lg text-primary mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-text-main">
              <li><Link href="/terms" className="hover:text-primary hover:underline transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary hover:underline transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#e0dcd3] text-center text-sm text-text-main">
          <p>&copy; {new Date().getFullYear()} Abundantly Gathered. Handcrafted in Highland, CA.</p>
        </div>
      </div>
    </footer>
  );
}