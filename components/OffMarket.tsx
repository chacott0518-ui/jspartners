import React from 'react';
import { Listing } from '../types';
import { ArrowRight } from 'lucide-react';

const LISTINGS: Listing[] = [
  {
    id: 1,
    title: "PREMIUM LISTING 비공개 급매물",
    location: "Gangnam-gu, Seoul",
    price: "₩ 45,000,000,000",
    yield: "3.8%",
    // 이미지 1: 11번 행
    image: "https://i.pinimg.com/1200x/38/79/8a/38798a986cdfb89c75dac0ca827ac603.jpg",
    tags: ["대로변", "사옥추천"]
  },
  {
    id: 2,
    title: "HANNAM BOUTIQUE",
    location: "Hannam-dong, Yongsan",
    price: "Request Price",
    yield: "2.5%",
    // 이미지 2: 21번 행
    image: "https://i.pinimg.com/736x/41/fc/78/41fc789dce7d18c3d9c887fc0dd47b6c.jpg",
    tags: ["신축급", "한강뷰"]
  },
  {
    id: 3,
    title: "SEONGSU RED-BRICK",
    location: "Seongsu-dong, Seoul",
    price: "₩ 12,500,000,000",
    yield: "4.2%",
    // 이미지 3: 30번 행
    image: "https://i.pinimg.com/1200x/ff/46/a7/ff46a7024b16947cccdbee77d4f08b3e.jpg",
    tags: ["밸류애드", "팝업성지"]
  }
];

export const OffMarket: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offmarket" className="py-24 px-6 md:px-12 bg-[#EBEBE0]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-stone-300 pb-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase block mb-2">01 — Curated Collection</span>
            <h3 className="font-serif text-4xl md:text-5xl">Off-Market Listings</h3>
          </div>
          <p className="text-left md:text-right text-sm max-w-xs mt-6 md:mt-0 opacity-70">
            철저한 보안 속에 진행되는<br />VIP 전용 비공개 매물입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LISTINGS.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col h-full relative">
              {/* 이미지 영역 */}
              <div className="relative overflow-hidden w-full aspect-[3/4] mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* 기존 태그 (좌측 상단) */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-white/90 px-2 py-1 text-[10px] uppercase tracking-wider backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* [모바일 전용] 하단 오버레이: 모바일에서 이미지 터치/호버 시에만 나타남 */}
                <div className="md:hidden absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h4 className="font-serif text-lg mb-1">{item.title}</h4>
                  <p className="text-[10px] uppercase opacity-80 mb-4">{item.location}</p>
                  <div className="flex justify-between items-center border-t border-white/20 pt-3">
                    <span className="font-medium text-sm">{item.price}</span>
                    <div className="flex items-center gap-1 text-[10px] font-bold">
                      INQUIRE <ArrowRight size={10} />
                    </div>
                  </div>
                </div>
              </div>

              {/* [PC 전용] 하단 텍스트: md(PC) 사이즈 이상에서만 보이고 모바일에서는 숨김 */}
              <div className="hidden md:block space-y-2">
                <h4 className="font-serif text-xl">{item.title}</h4>
                <p className="text-xs tracking-wide uppercase text-stone-500">{item.location}</p>
                <div className="flex justify-between items-center border-t border-stone-300 pt-3 mt-2">
                  <span className="font-medium">{item.price}</span>
                  <span className="text-sm opacity-60 font-serif italic text-stone-500">Yield: {item.yield}</span>
                </div>
                <button
                  onClick={scrollToContact}
                  className="pt-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Inquire <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};