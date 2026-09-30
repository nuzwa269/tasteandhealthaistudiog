import React from 'react';

export const WhyWeSection: React.FC = () => {
  return (
    <section id="why-we" className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#E3E1D7]">
      <div className="max-w-4xl">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5E6D62] mb-3 block">
          WHY WE
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C2621] font-normal tracking-tight leading-[1.1] mb-6">
          A restaurant built for how you want to feel.
        </h2>
        <p className="text-lg md:text-xl text-[#4A5750] leading-relaxed max-w-2xl font-normal">
          Every dish at Taste &amp; Health is built around whole ingredients, transparent nutrition, and bold, Nordic-inspired flavor.
        </p>
      </div>
    </section>
  );
};
