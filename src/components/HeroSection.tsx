import React, { useState } from 'react';
import { Leaf, ArrowRight, Clock, MapPin, RotateCcw, Maximize2, RotateCw, ZoomIn, Volume2, VolumeX } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMenu }) => {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const handleRotateLeft = () => setRotation(r => r - 45);
  const handleRotateRight = () => setRotation(r => r + 45);
  const handleReset = () => {
    setRotation(0);
    setZoom(1);
  };
  const handleToggleZoom = () => setZoom(z => z === 1 ? 1.25 : 1);

  return (
    <section className="pt-8 md:pt-14 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Top Eyebrow Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8ECE5] border border-[#D1DBCB] text-[#2D4537] text-xs font-semibold tracking-wider uppercase">
          <span className="w-5 h-5 rounded-full bg-[#3E5C49] text-white flex items-center justify-center shrink-0">
            <Leaf className="w-3 h-3" />
          </span>
          <span>SEASONAL, CHEF-CRAFTED BOWLS THAT PUT FLAVOR AND NUTRITION ON THE SAME PLATE.</span>
        </div>
      </div>

      {/* Hero Headline */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1C2621] font-normal tracking-tight leading-[1.08]">
          Eat with <span className="font-serif italic font-normal text-[#627768]">intention.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#4A5750] max-w-2xl mx-auto font-normal leading-relaxed">
          Every dish at Taste &amp; Health is built around whole ingredients, transparent nutrition, and bold, Nordic-inspired flavor.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <button
          onClick={onExploreMenu}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#3E5C49] hover:bg-[#324B3B] text-white text-base font-medium transition-all shadow-sm hover:shadow-md"
        >
          <Leaf className="w-4 h-4 opacity-80" />
          <span>Explore the menu</span>
        </button>

        <a
          href="#chef-picks"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#CBD2CA] bg-white/60 hover:bg-white text-[#1C2621] text-base font-medium transition-all shadow-2xs hover:shadow-xs"
        >
          <span>Explore Menu</span>
          <ArrowRight className="w-4 h-4 text-[#3E5C49]" />
        </a>
      </div>

      {/* Quick Info Strip */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-[#4E5C54] mb-12">
        <div className="flex items-center gap-2 bg-[#ECEAE2]/80 px-4 py-2 rounded-full border border-[#DCD8CB]">
          <Clock className="w-4 h-4 text-[#3E5C49]" />
          <span>Open today: 11:00 – 22:00</span>
        </div>
        <div className="flex items-center gap-2 bg-[#ECEAE2]/80 px-4 py-2 rounded-full border border-[#DCD8CB]">
          <MapPin className="w-4 h-4 text-[#3E5C49]" />
          <span>Garden District, NY</span>
        </div>
      </div>

      {/* Hero Visual Presentation Area */}
      <div className="relative max-w-5xl mx-auto bg-[#EFECE3] rounded-3xl p-6 md:p-12 overflow-hidden border border-[#E0DCD0] shadow-xs">
        
        {/* Background Graphic Accents (Golden, Sage & Dark Circles) */}
        <div className="absolute top-12 left-12 w-28 h-28 rounded-full bg-[#D1B875] opacity-75 blur-xs"></div>
        <div className="absolute top-8 right-24 w-20 h-20 rounded-full bg-[#B8C8B6] opacity-80"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-[#2C3B32] opacity-15"></div>

        {/* Central Dish Image Stage */}
        <div className="relative z-10 flex flex-col items-center justify-center py-6 min-h-[380px] md:min-h-[460px]">
          <div 
            className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-2xl transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing border-8 border-white/80"
            style={{
              transform: `rotate(${rotation}deg) scale(${zoom})`,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1200"
              alt="Signature Taste & Health Nordic Bowl"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Center subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none"></div>
          </div>

          {/* Interactive Toolbar Control Bar Overlay */}
          <div className="mt-8 relative z-20 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-md text-[#2D3E34]">
            <button
              onClick={handleRotateLeft}
              className="p-1.5 rounded-full hover:bg-[#EBE8DE] transition-colors text-gray-700"
              title="Rotate counter-clockwise"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={handleToggleZoom}
              className="p-1.5 rounded-full hover:bg-[#EBE8DE] transition-colors text-gray-700"
              title="Zoom image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleRotateRight}
              className="p-1.5 rounded-full hover:bg-[#EBE8DE] transition-colors text-gray-700"
              title="Rotate clockwise"
            >
              <RotateCw className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-full hover:bg-[#EBE8DE] transition-colors text-gray-700"
              title="Reset view"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPlayingSound(!isPlayingSound)}
              className={`p-1.5 rounded-full transition-colors ${isPlayingSound ? 'bg-[#3E5C49] text-white' : 'hover:bg-[#EBE8DE] text-gray-700'}`}
              title="Toggle ambiance sound"
            >
              {isPlayingSound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
