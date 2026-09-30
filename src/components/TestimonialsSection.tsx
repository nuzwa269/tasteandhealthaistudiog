import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#E3E1D7]">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5E6D62] mb-2 block">
          GUEST STORIES
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#1C2621] font-normal tracking-tight">
          What people say
        </h2>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#EFECE3] rounded-2xl p-8 border border-[#E0DCD0] flex flex-col justify-between hover:border-[#CBD2C5] transition-all"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#425A4B] text-[#425A4B]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif italic text-lg md:text-xl text-[#1C2621] font-normal leading-relaxed mb-8">
              {item.quote}
            </blockquote>

            {/* Author */}
            <div>
              <div className="font-semibold text-[#1C2621] text-base">
                {item.author}
              </div>
              <div className="text-xs text-[#526057] font-medium">
                {item.role}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
