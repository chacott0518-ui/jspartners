import React from 'react';
import { BarChart3, Compass, ShieldCheck } from 'lucide-react';

export const AssetManagement: React.FC = () => {
  return (
    <section id="asset" className="py-24 px-6 md:px-12 bg-[#1c1917] text-[#F5F5F0]">
      <div className="container mx-auto">
        
        {/* Header & Visual */}
        <div className="flex flex-col items-start text-left md:items-center md:text-center mb-20 space-y-8">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-400">03 — For Owners</span>
          <h3 className="font-serif text-4xl md:text-6xl leading-tight text-[#F5F5F0]">
            Unlock Your Property's<br/> Future Value
          </h3>
          <p className="opacity-70 max-w-2xl leading-relaxed text-stone-300">
            단순한 중개를 넘어, 건물의 잠재 가치를 극대화하는 전략적 파트너십을 제안합니다.<br/>
            JS PARTNERS만의 데이터 기반 솔루션으로 최적의 매각 시점과 가치를 선점하세요.
          </p>
          
          <div className="w-full h-[300px] md:h-[400px] overflow-hidden relative mt-8">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="City Skyline" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
            {/* Gradient Overlay matching the dark background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-transparent to-transparent"></div>
          </div>
        </div>

        {/* 3 Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start text-left md:items-center md:text-center space-y-4 group">
            <div className="p-4 rounded-full bg-stone-800 group-hover:bg-[#8C7146] transition-colors duration-300">
              <BarChart3 className="w-8 h-8 text-[#F5F5F0]" />
            </div>
            <h4 className="font-serif text-xl tracking-wide text-[#F5F5F0]">Precision Analysis</h4>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs text-stone-300">
              빅데이터 기반의 상권 분석과 <br/>
              건물 가치 평가 시스템을 통해 <br/>
              객관적이고 정밀한 적정가를 산출합니다.
            </p>
          </div>

          <div className="flex flex-col items-start text-left md:items-center md:text-center space-y-4 group">
            <div className="p-4 rounded-full bg-stone-800 group-hover:bg-[#8C7146] transition-colors duration-300">
              <Compass className="w-8 h-8 text-[#F5F5F0]" />
            </div>
            <h4 className="font-serif text-xl tracking-wide text-[#F5F5F0]">Tailored Strategy</h4>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs text-stone-300">
              건물의 특성과 시장 상황을 고려한 <br/>
              1:1 맞춤형 매각/임대 전략을 수립하여 <br/>
              성공적인 엑시트 플랜을 제시합니다.
            </p>
          </div>

          <div className="flex flex-col items-start text-left md:items-center md:text-center space-y-4 group">
            <div className="p-4 rounded-full bg-stone-800 group-hover:bg-[#8C7146] transition-colors duration-300">
              <ShieldCheck className="w-8 h-8 text-[#F5F5F0]" />
            </div>
            <h4 className="font-serif text-xl tracking-wide text-[#F5F5F0]">Secure Transaction</h4>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs text-stone-300">
              법무·세무 전문가 그룹과의 협업을 통해 <br/>
              계약부터 잔금까지 모든 과정에서 <br/>
              법적 리스크 없는 안전한 거래를 보장합니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};