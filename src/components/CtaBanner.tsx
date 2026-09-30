import React from 'react';
import { Calendar } from 'lucide-react';

interface CtaBannerProps {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenReservation, onOpenOrder }) => {
  return (
    <section id="reservations" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-br from-[#415549] via-[#384A3F] to-[#2E3C33] rounded-3xl p-8 sm:p-12 md:p-16 text-white text-center overflow-hidden shadow-xl">
        
        {/* Organic Background Wave Lines Effect */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <path d="M0,100 C150,200 350,0 500,100 C650,200 750,50 800,100 L800,400 L0,400 Z" fill="currentColor" />
            <path d="M0,200 C200,300 400,100 600,250 C700,320 780,200 800,220 L800,400 L0,400 Z" fill="currentColor" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-200/90 mb-3 block">
            JOIN US
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-5 leading-tight">
            Reserve your table or order for home.
          </h2>

          <p className="text-emerald-100/90 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Whether it&apos;s a slow lunch, a working dinner or a nourishing meal delivered to your door, we&apos;re ready when you are.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#202E27] hover:bg-[#F2EFE8] font-medium text-sm md:text-base transition-all shadow-md hover:shadow-lg"
            >
              <Calendar className="w-4 h-4 text-[#3E5C49]" />
              <span>Book a Table</span>
            </button>

            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white font-medium text-sm md:text-base transition-all"
            >
              <span>Order Online</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
