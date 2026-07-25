"use client";

import { useCartStore } from "@/store/useCartStore";

export default function Home() {
  const { currentBox, addCookie, removeCookie, addBoxToCart } = useCartStore();
  const isBoxFull = currentBox.length === 3;

  const menuItems = [
    {
      name: "Brown Butter Chocolate Chip",
      description: "Rich, deeply nutty brown butter meets pools of velvety dark chocolate. A thick, melt-in-your-mouth homestead classic baked with a whole lot of love."
    },
    {
      name: "Lemon Sugar & Glazed",
      description: "Bursting with fresh citrus zest and dipped in a sweet, tangy glaze. A bright, pillowy cookie that tastes like a summer afternoon in the garden."
    },
    {
      name: "Snickerdoodle",
      description: "Pillow-soft and thick, rolled in a sweet blanket of warm cinnamon sugar. Simply cozy and nostalgic."
    },
    {
      name: "Traditional Sugar",
      description: "A buttery, tender tradition. Available plain or topped with a joyful dash of sprinkles for any celebration."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6">
          Fresh from the Oven
        </h1>
        <p className="text-text-main text-lg max-w-2xl mx-auto mb-2">
          Handcrafted in Highland. Baked fresh for your family.
        </p>
        <p className="text-primary font-medium">
          Select 3 cookies to build your box.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-surface border border-[#e0dcd3] rounded-[8px] overflow-hidden flex flex-col">
            
            <div className="w-full aspect-square bg-[#f0ebe1] flex items-center justify-center border-b border-[#e0dcd3]">
              <span className="text-text-main text-sm uppercase tracking-wider">Image Coming Soon</span>
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-serif font-medium text-xl text-text-main mb-3">{item.name}</h3>
              <p className="text-sm text-text-main mb-6 flex-grow leading-relaxed">{item.description}</p>
              
              <button 
                onClick={() => addCookie(item.name)}
                disabled={isBoxFull}
                className={`w-full font-medium py-2 px-6 rounded-[8px] transition-colors duration-200 cursor-pointer ${
                  isBoxFull 
                    ? "bg-[#e0dcd3] text-[#7D7166] opacity-50 cursor-not-allowed" 
                    : "bg-primary hover:bg-[#8C673F] text-white"
                }`}
              >
                {isBoxFull ? "Box Full" : "Add to Box"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {currentBox.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-surface border-t-2 border-primary p-4 shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-serif font-semibold text-xl text-primary">Your Box ({currentBox.length}/3):</span>
              <div className="flex gap-2">
                {currentBox.map((cookie, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#f0ebe1] px-3 py-1 rounded-[8px] text-sm text-text-main">
                    {cookie}
                    <button onClick={() => removeCookie(idx)} className="text-primary hover:text-alert font-bold">×</button>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={addBoxToCart}
              disabled={!isBoxFull}
              className={`px-8 py-3 rounded-[8px] font-medium transition-colors ${
                isBoxFull 
                  ? "bg-primary hover:bg-[#8C673F] text-white cursor-pointer" 
                  : "bg-[#e0dcd3] text-[#7D7166] cursor-not-allowed"
              }`}
            >
              Add Box to Cart
            </button>
          </div>
        </div>
      )}

    </div>
  );
}