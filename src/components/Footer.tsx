import React from 'react';
import { Leaf, MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F6F5F0] border-t border-[#E3E1D7] pt-16 pb-12 px-4 md:px-8 text-[#1C2621]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E3E1D7]">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-6 pr-0 lg:pr-8">
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#E5EADF] border border-[#C6D2BE] flex items-center justify-center text-[#3E5C49]">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl tracking-tight text-[#1C2621] font-medium">
                Taste <span className="font-serif italic font-normal text-[#3E5C49]">&amp;</span> Health
              </span>
            </a>

            <p className="text-sm text-[#4E5C54] leading-relaxed max-w-md">
              Fresh, balanced meals prepared for everyday wellbeing. Flavour and nourishment on the same plate.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full border border-[#D8D4C7] bg-[#EFECE3] flex items-center justify-center text-[#3E5C49] hover:bg-[#3E5C49] hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#D8D4C7] bg-[#EFECE3] flex items-center justify-center text-[#3E5C49] hover:bg-[#3E5C49] hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#D8D4C7] bg-[#EFECE3] flex items-center justify-center text-[#3E5C49] hover:bg-[#3E5C49] hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* EXPLORE Link Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#5E6D62]">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-[#4E5C54]">
              <li><a href="#category" className="hover:text-[#1C2621] transition-colors">Menu</a></li>
              <li><a href="#nutrition" className="hover:text-[#1C2621] transition-colors">Nutrition</a></li>
              <li><a href="#why-we" className="hover:text-[#1C2621] transition-colors">Our Story</a></li>
              <li><a href="#reservations" className="hover:text-[#1C2621] transition-colors">Reservations</a></li>
              <li><a href="#chef-picks" className="hover:text-[#1C2621] transition-colors">Order Online</a></li>
            </ul>
          </div>

          {/* VISIT Link Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#5E6D62]">
              VISIT
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-[#4E5C54]">
              <li><a href="#" className="hover:text-[#1C2621] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#1C2621] transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-[#1C2621] transition-colors">Catering</a></li>
              <li><a href="#" className="hover:text-[#1C2621] transition-colors">Offers</a></li>
            </ul>
          </div>

          {/* CONTACT Info Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#5E6D62]">
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm text-[#4E5C54]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3E5C49] shrink-0 mt-0.5" />
                <span>88 Botanical Way, Garden District, NY 10012</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3E5C49] shrink-0" />
                <a href="tel:2125550147" className="hover:text-[#1C2621] transition-colors">(212) 555-0147</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3E5C49] shrink-0" />
                <a href="mailto:hello@tasteandhealth.example" className="hover:text-[#1C2621] transition-colors">hello@tasteandhealth.example</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#627267] gap-4">
          <div>
            © 2026 Taste &amp; Health. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-[#1C2621] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#1C2621] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#1C2621] transition-colors">Allergen Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
