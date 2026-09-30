import React, { useState } from 'react';
import { ArrowRight, RotateCcw, Maximize2, RotateCw, ZoomIn, Volume2, VolumeX } from 'lucide-react';
import { featuredDish } from '../data/restaurantData';
import { Dish } from '../types';

interface FeaturedDishSectionProps {
  onOrderNow: (dish: Dish) => void;
}

export const FeaturedDishSection: React.FC<FeaturedDishSectionProps> = ({ onOrderNow }) => {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#E3E1D7]">
      
      {/* Header Info */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#5E6D62] mb-3 block">
          SMOKED FISH, KELP, DILL AND RYE CRUMBS WITH A LEMON
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-[#1C2621] font-normal tracking-tight mb-5">
          Most Favourite
        </h2>
        <p className="text-[#4A5750] text-base md:text-lg leading-relaxed mb-8">
          Every dish at Taste &amp; Health is built around whole ingredients, transparent nutrition, and bold, Nordic-inspired flavor.
        </p>
        
        <button
          onClick={() => onOrderNow(featuredDish)}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3E5C49] hover:bg-[#324B3B] text-white text-base font-medium transition-all shadow-sm hover:shadow"
        >
          <span>Order Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Featured Dish Dark Card */}
      <div className="relative max-w-5xl mx-auto bg-[#314237] rounded-3xl p-8 md:p-16 overflow-hidden shadow-xl text-white">
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/20 pointer-events-none"></div>

        {/* Central Bowl Image */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div 
            className="w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[360px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 border-4 border-white/20"
            style={{
              transform: `rotate(${rotation}deg) scale(${zoom})`,
            }}
          >
            <img
              src={featuredDish.image}
              alt={featuredDish.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Interactive Toolbar Control Overlay */}
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
            <button
              onClick={() => setRotation(r => r - 45)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              title="Rotate left"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom(z => z === 1 ? 1.2 : 1)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              title="Toggle Zoom"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setRotation(r => r + 45)}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              title="Rotate right"
            >
              <RotateCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setRotation(0); setZoom(1); }}
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              title="Reset"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-1.5 rounded-full transition-colors ${isPlaying ? 'bg-white text-[#314237]' : 'hover:bg-white/20'}`}
              title="Sound track"
            >
              {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
