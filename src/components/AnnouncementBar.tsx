import React, { useState } from 'react';
import { Leaf, X } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#1C2621] text-white py-2.5 px-4 text-xs md:text-sm font-medium tracking-wide flex items-center justify-center relative transition-all">
      <div className="flex items-center gap-2 max-w-7xl mx-auto pr-8">
        <span className="p-1 rounded-full bg-white/10 text-emerald-300 shrink-0">
          <Leaf className="w-3.5 h-3.5" />
        </span>
        <span className="text-center">
          Fresh seasonal bowls now available — order for collection or reserve your table.
        </span>
      </div>
      <button 
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-200/70 hover:text-white p-1 rounded-md transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
