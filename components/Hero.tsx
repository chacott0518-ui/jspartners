import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert('지역, 건물명 또는 주소를 입력해주세요.');
      return;
    }
    const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(searchQuery)}`;
    window.open(naverMapUrl, '_blank');
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-center items-center px-6 overflow-hidden bg-stone-900">
      {/* 1. 요청하신 핀터레스트 원본 이미지 복구 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/1200x/ce/c1/84/cec184959341c36d9d539785bb40a9d7.jpg"
          alt="Premium Building"
          className="w-full h-full object-cover shadow-inner"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* 2. 원본 텍스트 효과 및 디자인 (CSS 애니메이션으로 대체) */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/90 drop-shadow-md">
          The Standard of Building Investment
        </p>

        <h2 
          className="text-white font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]"
          style={{ textShadow: '2px 2px 20px rgba(0,0,0,0.6)' }}
        >
          PREMIUM BUILDING <br />
          <span className="italic font-light text-white/90 text-4xl md:text-6xl lg:text-7xl">Curation Service</span>
        </h2>

        <p className="text-white text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed pt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
          우리는 보이지 않는 가치를 봅니다. <br />
          성공적인 빌딩 투자를 위한 프라이빗 마켓의 새로운 기준.
        </p>

        {/* 3. 검색 영역 */}
        <div className="pt-10 w-full flex justify-center">
          <div className="relative group w-full max-w-md border-b-2 border-white/70">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="지역, 건물명 또는 매물번호 검색"
              className="w-full bg-transparent py-3 pl-2 pr-10 text-center text-white font-bold placeholder:text-white/40 focus:outline-none transition-colors"
            />
            <Search 
              className="absolute right-2 top-3 text-white/60 w-5 h-5 cursor-pointer hover:text-[#8C7146] transition-colors"
              onClick={handleSearch}
            />
          </div>
        </div>

        {/* 4. 원본 GET STARTED 버튼 */}
        <div className="pt-8">
          <button 
            onClick={handleSearch}
            className="inline-block bg-white text-stone-900 px-12 py-4 text-xs tracking-[0.2em] font-bold shadow-2xl hover:bg-[#8C7146] hover:text-white transition-all duration-300"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};