import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface CategorySectionProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ categories, onSelectCategory }) => {
  return (
    <section id="category" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#E3E1D7]">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#5E6D62] mb-2 block">
            EXPLORE BY CATEGORY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1C2621] font-normal tracking-tight">
            What we&apos;re cooking
          </h2>
        </div>

        <a
          href="#chef-picks"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C2621] hover:text-[#3E5C49] transition-colors group self-start sm:self-auto"
        >
          <span>View full menu</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#3E5C49]" />
        </a>
      </div>

      {/* 2x2 Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group relative bg-[#EFECE3] rounded-2xl overflow-hidden border border-[#E0DCD0] cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden bg-[#D8D4C7]">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-30 group-hover:opacity-20 transition-opacity"></div>
            </div>

            {/* Bottom Info Banner Card */}
            <div className="p-6 bg-[#EFECE3] border-t border-[#E3E0D4] flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#E1DDD0] text-[11px] font-semibold tracking-wider text-[#3D4B42] uppercase mb-2">
                  {cat.badge}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1C2621] font-medium">
                  {cat.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
