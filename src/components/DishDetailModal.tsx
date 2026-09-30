import React from 'react';
import { X, Plus, Sparkles, Check } from 'lucide-react';
import { Dish } from '../types';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onAddToCart: (dish: Dish) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onAddToCart }) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      ></div>

      <div className="relative bg-[#F6F5F0] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E3E0D4] z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 text-[#1C2621] hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative h-64 sm:h-72 w-full bg-[#EFECE3]">
          <img
            src={dish.image}
            alt={dish.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-[#1C2621]">
            £{dish.price.toFixed(2)}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {dish.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md bg-[#E5EADF] text-[11px] font-semibold text-[#3E5C49] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-3xl text-[#1C2621] font-medium">
              {dish.title}
            </h3>
            <p className="text-sm text-[#4E5C54] leading-relaxed mt-2">
              {dish.description}
            </p>
          </div>

          {/* Macro Breakdown Grid */}
          <div className="grid grid-cols-4 gap-2 bg-white p-4 rounded-xl border border-[#E0DCD0] text-center">
            <div>
              <span className="block font-serif text-lg font-bold text-[#1C2621]">{dish.calories}</span>
              <span className="text-[10px] uppercase font-bold text-[#5E6D62]">kcal</span>
            </div>
            <div>
              <span className="block font-serif text-lg font-bold text-[#3E5C49]">{dish.protein}</span>
              <span className="text-[10px] uppercase font-bold text-[#5E6D62]">protein</span>
            </div>
            <div>
              <span className="block font-serif text-lg font-bold text-[#1C2621]">{dish.fibre}</span>
              <span className="text-[10px] uppercase font-bold text-[#5E6D62]">fibre</span>
            </div>
            <div>
              <span className="block font-serif text-lg font-bold text-[#1C2621]">{dish.fats}</span>
              <span className="text-[10px] uppercase font-bold text-[#5E6D62]">fats</span>
            </div>
          </div>

          {/* Sourcing & Allergens */}
          <div className="space-y-2 text-xs text-[#526057]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C28C43]" />
              <span><strong className="text-[#1C2621]">Sourcing:</strong> Regional biodynamic farms &amp; sustainable fisheries.</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#3E5C49]" />
              <span><strong className="text-[#1C2621]">Allergens:</strong> {dish.allergens.join(', ')}</span>
            </div>
          </div>

          {/* Add to Order Button */}
          <button
            onClick={() => {
              onAddToCart(dish);
              onClose();
            }}
            className="w-full py-3.5 rounded-lg bg-[#3E5C49] hover:bg-[#324B3B] text-white text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Add to Order (£{dish.price.toFixed(2)})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
