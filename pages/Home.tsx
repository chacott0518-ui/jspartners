import React from 'react';
import { Hero } from '../components/Hero';
import { OffMarket } from '../components/OffMarket';
import { Analysis } from '../components/Analysis';
import { AssetManagement } from '../components/AssetManagement';
import { Contact } from '../components/Contact';
import { Key } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <OffMarket />
      <Analysis />
      <AssetManagement />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-[#D9D9CC] pt-16 pb-8 px-6 border-t border-stone-300 text-[#1c1917]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            
            {/* Brand & Address */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#8C7146]">
                <Key className="w-6 h-6 stroke-[2.5]" />
                <h5 className="font-serif font-bold text-xl tracking-widest">JS PARTNERS</h5>
              </div>
              <p className="text-xs opacity-60 font-medium pl-1">Gangnam-gu, Seoul, Republic of Korea</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-bold tracking-wide opacity-70">
              <a href="#" className="hover:text-[#8C7146] transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-[#8C7146] transition-colors">TERMS OF SERVICE</a>
              <a href="/#/admin" className="hover:text-[#8C7146] transition-colors">ADMIN</a>
            </div>
          </div>

          {/* Copyright Divider */}
          <div className="border-t border-stone-400/30 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-wider opacity-50">
            <p>© 2024 JS PARTNERS. ALL RIGHTS RESERVED.</p>
            <p className="mt-2 md:mt-0">PREMIUM REAL ESTATE ADVISORY</p>
          </div>
        </div>
      </footer>
    </main>
  );
};