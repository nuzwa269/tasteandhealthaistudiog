import React from 'react';
import { Plus } from 'lucide-react';
import { Dish } from '../types';

interface ChefPicksSectionProps {
  dishes: Dish[];
  onAddToCart: (dish: Dish) => void;
  onSelectDish: (dish: Dish) => void;
}

export const ChefPicksSection: React.FC<ChefPicksSectionProps> = ({ dishes, onAddToCart, onSelectDish }) => {
  return (
    <section id="chef-picks" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#E3E1D7]">
      
      {/* Centered Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5E6D62] mb-2 block">
          CHEF&apos;S PICKS
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#1C2621] font-normal tracking-tight mb-4">
          Signature dishes
        </h2>
        <p className="text-[#4A5750] text-base md:text-lg font-normal leading-relaxed">
          Seasonal plates built around whole-food nutrition, balanced macros and honest sourcing.
        </p>
      </div>

      {/* Signature Dish Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E3E0D4] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
          >
            {/* Price Badge Top Right */}
            <div className="absolute top-6 right-6 z-10 bg-[#F4F2EA] px-3 py-1 rounded-full text-sm font-semibold text-[#1C2621] border border-[#E0DCD0]">
              £{dish.price.toFixed(2)}
            </div>

            {/* Dish Circular Image */}
            <div 
              onClick={() => onSelectDish(dish)}
              className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto my-4 rounded-full overflow-hidden cursor-pointer shadow-inner bg-[#F6F5F0]"
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Tags / Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {dish.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#EFECE3] text-[11px] font-medium text-[#4A584F] lowercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Dish Title & Description */}
            <div className="mb-6">
              <h3 
                onClick={() => onSelectDish(dish)}
                className="font-serif text-2xl text-[#1C2621] font-medium mb-2 hover:text-[#3E5C49] cursor-pointer transition-colors"
              >
                {dish.title}
              </h3>
              <p className="text-sm text-[#526057] leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Add to Order Button */}
            <button
              onClick={() => onAddToCart(dish)}
              className="w-full py-3 rounded-lg bg-[#3E5C49] hover:bg-[#324B3B] text-white text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-2xs active:scale-[0.99]"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Order</span>
            </button>

          </div>
        ))}
      </div>

    </section>
  );
};
