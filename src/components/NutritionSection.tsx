import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface NutritionSectionProps {
  onOpenNutritionGuide: () => void;
}

export const NutritionSection: React.FC<NutritionSectionProps> = ({ onOpenNutritionGuide }) => {
  return (
    <section id="nutrition" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#E3E1D7]">
      
      {/* Eyebrow & Heading */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5E6D62] mb-3 block">
          NUTRITION
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-[#1C2621] font-normal tracking-tight mb-5">
          Eat with full transparency.
        </h2>
        <p className="text-[#4A5750] text-base md:text-lg leading-relaxed font-normal">
          We believe healthy eating should be effortless, not obsessive. That&apos;s why we publish every macro and every ingredient source — so the choice is always yours.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Bullets List */}
        <div className="lg:col-span-5 space-y-4 pt-2">
          <div className="flex items-center gap-3 text-base text-[#2C3B32] font-medium">
            <Sparkles className="w-4 h-4 text-[#C28C43] shrink-0" />
            <span>Full allergen labelling and dietary filters</span>
          </div>
          <div className="flex items-center gap-3 text-base text-[#2C3B32] font-medium">
            <Sparkles className="w-4 h-4 text-[#C28C43] shrink-0" />
            <span>Calorie and macro estimates for every dish</span>
          </div>
          <div className="flex items-center gap-3 text-base text-[#2C3B32] font-medium">
            <Sparkles className="w-4 h-4 text-[#C28C43] shrink-0" />
            <span>Sustainable sourcing notes for proteins</span>
          </div>
          <div className="flex items-center gap-3 text-base text-[#2C3B32] font-medium">
            <Sparkles className="w-4 h-4 text-[#C28C43] shrink-0" />
            <span>Low-sodium, gluten-free and vegan options</span>
          </div>
        </div>

        {/* Right Metric Card Container */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E3E0D4] shadow-sm">
          <h3 className="font-serif text-2xl md:text-3xl text-[#1C2621] font-medium mb-3">
            Every plate tells you what&apos;s in it.
          </h3>
          <p className="text-sm md:text-base text-[#526057] leading-relaxed mb-8">
            Our digital menu includes calories, protein, carbs, fats, fibre and allergens for every dish — so you can eat with confidence, whether you&apos;re training, healing or just hungry.
          </p>

          {/* 2x2 Stat Boxes */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#EFECE3] p-6 rounded-2xl text-center border border-[#E0DCD0]">
              <div className="font-serif text-3xl md:text-4xl text-[#1C2621] font-normal mb-1">
                450
              </div>
              <div className="text-[11px] font-bold tracking-widest text-[#5E6D62] uppercase">
                AVG KCAL
              </div>
            </div>

            <div className="bg-[#EFECE3] p-6 rounded-2xl text-center border border-[#E0DCD0]">
              <div className="font-serif text-3xl md:text-4xl text-[#1C2621] font-normal mb-1">
                28g
              </div>
              <div className="text-[11px] font-bold tracking-widest text-[#5E6D62] uppercase">
                AVG PROTEIN
              </div>
            </div>

            <div className="bg-[#EFECE3] p-6 rounded-2xl text-center border border-[#E0DCD0]">
              <div className="font-serif text-3xl md:text-4xl text-[#1C2621] font-normal mb-1">
                12g
              </div>
              <div className="text-[11px] font-bold tracking-widest text-[#5E6D62] uppercase">
                AVG FIBRE
              </div>
            </div>

            <div className="bg-[#EFECE3] p-6 rounded-2xl text-center border border-[#E0DCD0]">
              <div className="font-serif text-3xl md:text-4xl text-[#1C2621] font-normal mb-1">
                0
              </div>
              <div className="text-[11px] font-bold tracking-widest text-[#5E6D62] uppercase">
                HIDDEN ADDITIVES
              </div>
            </div>
          </div>

          {/* Nutrition Guide Button */}
          <button
            onClick={onOpenNutritionGuide}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3E5C49] hover:bg-[#324B3B] text-white text-sm font-medium transition-all"
          >
            <span>See nutrition guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </section>
  );
};
