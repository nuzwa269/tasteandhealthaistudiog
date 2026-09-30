import React from 'react';
import { X, Sparkles, Check, ShieldCheck } from 'lucide-react';
import { signatureDishes } from '../data/restaurantData';

interface NutritionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NutritionModal: React.FC<NutritionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      ></div>

      <div className="relative bg-[#F6F5F0] rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#E3E0D4] z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#4E5C54] hover:bg-[#EFECE3] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#5E6D62] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C28C43]" />
            NUTRITION GUIDE
          </span>
          <h3 className="font-serif text-3xl text-[#1C2621] font-normal mt-1">
            Complete Macro &amp; Sourcing Matrix
          </h3>
          <p className="text-sm text-[#4E5C54] mt-2">
            Every dish at Taste &amp; Health is measured for exact caloric density, protein ratios, fibre content, and allergen disclosures.
          </p>
        </div>

        {/* Dish Macro Table */}
        <div className="overflow-x-auto bg-white rounded-2xl border border-[#E0DCD0] p-4 mb-6">
          <table className="w-full text-left text-xs sm:text-sm text-[#1C2621]">
            <thead>
              <tr className="border-b border-[#E3E0D4] text-[#5E6D62] font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3">Dish</th>
                <th className="py-3 px-3">Energy</th>
                <th className="py-3 px-3">Protein</th>
                <th className="py-3 px-3">Fibre</th>
                <th className="py-3 px-3">Carbs</th>
                <th className="py-3 px-3">Fats</th>
                <th className="py-3 px-3">Key Allergens</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFECE3]">
              {signatureDishes.map((dish) => (
                <tr key={dish.id} className="hover:bg-[#F9F8F5]">
                  <td className="py-3 px-3 font-semibold text-[#1C2621]">{dish.title}</td>
                  <td className="py-3 px-3">{dish.calories} kcal</td>
                  <td className="py-3 px-3 font-medium text-[#3E5C49]">{dish.protein}</td>
                  <td className="py-3 px-3">{dish.fibre}</td>
                  <td className="py-3 px-3">{dish.carbs}</td>
                  <td className="py-3 px-3">{dish.fats}</td>
                  <td className="py-3 px-3 text-[#627267]">{dish.allergens.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#EFECE3] p-4 rounded-xl border border-[#E0DCD0] flex gap-3">
            <ShieldCheck className="w-5 h-5 text-[#3E5C49] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm text-[#1C2621]">0% Ultra-Processed Oils</h4>
              <p className="text-xs text-[#526057] mt-0.5">
                We exclusively use cold-pressed extra virgin olive oil, avocado oil, and grass-fed cultured butter.
              </p>
            </div>
          </div>

          <div className="bg-[#EFECE3] p-4 rounded-xl border border-[#E0DCD0] flex gap-3">
            <ShieldCheck className="w-5 h-5 text-[#3E5C49] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm text-[#1C2621]">Fermented Digestion Boosters</h4>
              <p className="text-xs text-[#526057] mt-0.5">
                House-fermented kombucha vinegars and cultured kefir creams assist nutrient absorption.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
