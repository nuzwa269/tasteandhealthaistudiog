import React from 'react';
import { Leaf, ShoppingBag, Calendar } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenReservation }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F6F5F0]/95 backdrop-blur-md border-b border-[#E3E1D7] transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#E5EADF] border border-[#C6D2BE] flex items-center justify-center text-[#3E5C49] group-hover:bg-[#3E5C49] group-hover:text-white transition-all duration-300">
            <Leaf className="w-5 h-5" />
          </div>
          <span className="font-serif text-xl md:text-2xl tracking-tight text-[#1C2621] font-medium">
            Taste <span className="font-serif italic font-normal text-[#3E5C49]">&amp;</span> Health
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#425048]">
          <a href="#category" className="hover:text-[#1C2621] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3E5C49] hover:after:w-full after:transition-all">
            Menu
          </a>
          <a href="#nutrition" className="hover:text-[#1C2621] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3E5C49] hover:after:w-full after:transition-all">
            Nutrition
          </a>
          <a href="#why-we" className="hover:text-[#1C2621] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3E5C49] hover:after:w-full after:transition-all">
            About
          </a>
          <a href="#reservations" className="hover:text-[#1C2621] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3E5C49] hover:after:w-full after:transition-all">
            Reservations
          </a>
          <a href="#chef-picks" className="hover:text-[#1C2621] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3E5C49] hover:after:w-full after:transition-all">
            Order
          </a>
        </nav>

        {/* Right CTA / Order / Cart */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full border border-[#D5D8CF] bg-[#EFECE3] text-[#1C2621] hover:bg-[#E3DFD3] transition-colors"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#2C3B32]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#3E5C49] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F6F5F0]">
                {cartCount}
              </span>
            )}
            {cartCount === 0 && (
              <span className="absolute -top-1 -right-1 bg-[#4A5D50] text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            )}
          </button>

          <button
            onClick={onOpenReservation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3E5C49] hover:bg-[#324B3B] text-white text-sm font-medium shadow-sm transition-all duration-200 hover:shadow"
          >
            <Calendar className="w-4 h-4 opacity-80" />
            <span>Book Table</span>
          </button>
        </div>

      </div>
    </header>
  );
};
