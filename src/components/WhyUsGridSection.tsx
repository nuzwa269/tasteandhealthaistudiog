import React from 'react';
import { Leaf, Utensils, Heart, ChefHat } from 'lucide-react';
import { whyUsFeatures } from '../data/restaurantData';

export const WhyUsGridSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'leaf': return <Leaf className="w-5 h-5 text-[#3E5C49]" />;
      case 'utensils': return <Utensils className="w-5 h-5 text-[#3E5C49]" />;
      case 'heart': return <Heart className="w-5 h-5 text-[#3E5C49]" />;
      case 'chef-hat': return <ChefHat className="w-5 h-5 text-[#3E5C49]" />;
      default: return <Leaf className="w-5 h-5 text-[#3E5C49]" />;
    }
  };

  return (
    <section className="pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="max-w-4xl mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5E6D62] mb-3 block">
          WHY US
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#1C2621] font-normal tracking-tight">
          A restaurant built for how you want to feel.
        </h2>
      </div>

      {/* 2x2 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {whyUsFeatures.map((feat) => (
          <div
            key={feat.id}
            className="bg-[#EFECE3] rounded-2xl p-8 border border-[#E0DCD0] flex flex-col justify-between hover:border-[#CBD2C5] transition-all"
          >
            {/* Top Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-[#E2DFD4] flex items-center justify-center mb-6">
              {getIcon(feat.icon)}
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="font-serif text-2xl text-[#1C2621] font-medium mb-3">
                {feat.title}
              </h3>
              <p className="text-sm md:text-base text-[#4E5C54] leading-relaxed">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
