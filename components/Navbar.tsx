import React, { useState, useEffect } from 'react';
import { Key, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

// 1. 이미지 01~04 순서에 맞춘 최종 카테고리 설정
const NAV_ITEMS = [
  { id: 'offmarket', label: 'OFF-MARKET' },
  { id: 'analysis', label: 'INSIGHT' },
  { id: 'asset', label: 'OWNERS' },
  { id: 'contact', label: 'CONTACT' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 스크롤 감지 로직 (50px 이상 내려가면 배경 및 폰트 색상 변경)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 오픈 시 바디 스크롤 잠금
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // 2. 섹션 이동 함수 (ID 연동 및 상단 네비바 높이 고려)
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 네비바 높이만큼 여백 확보
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      // 모바일 메뉴가 열려있을 때는 배경을 투명하게 처리하여 오버레이와 자연스럽게 연결
      mobileMenuOpen 
        ? 'bg-transparent border-transparent py-6' 
        : (isScrolled ? 'bg-[#F5F5F0]/95 backdrop-blur-md border-stone-200 py-2' : 'bg-transparent border-transparent py-6')
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* --- 로고 섹션 시작 --- */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer z-50 flex flex-col items-center md:items-start group"
        >
          <div
            className="flex items-center gap-2 transition-all duration-300"
            style={{
              // 스크롤 전: 로고 색상보다 더 어두운 진한 골드(#5F4B2E) 테두리로 선명도 확보 + 흰색 광채
              filter: isScrolled ? 'none' : `
                drop-shadow(0.5px 0.5px 0px #5F4B2E) 
                drop-shadow(-0.5px -0.5px 0px #5F4B2E)
                drop-shadow(0 0 12px rgba(255,255,255,0.9))
              `
            }}
          >
            {/* 열쇠 아이콘: 크기를 살짝 키우고(w-6 h-6) 굵기를 조절했습니다 */}
            <Key className="w-6 h-6 stroke-[2.5]" style={{ color: '#8C7146' }} />

            <h1 className="font-serif text-2xl tracking-[0.05em] font-extrabold" style={{ color: '#8C7146' }}>
              JS PARTNERS
            </h1>
          </div>
        </div>
        {/* --- 로고 섹션 끝 --- */}

        {/* 3. 데스크탑 메뉴: 스크롤 전 흰색 / 스크롤 후 검정색 */}
        <div className="hidden md:flex space-x-12">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-bold tracking-[0.15em] transition-colors uppercase hover:text-[#8C7146] ${isScrolled ? 'text-black' : 'text-white'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 모바일 토글 버튼: 클릭 및 호버 효과 추가 */}
        <button
          className={`md:hidden z-50 p-2 transition-all duration-200 ease-out active:scale-90 hover:text-[#8C7146] ${
            mobileMenuOpen || isScrolled ? 'text-black' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen
            ? <X size={26} />
            : <Menu size={26} />
          }
        </button>

        {/* 모바일 메뉴 오버레이 */}
        <div className={`fixed inset-0 bg-[#F5F5F0] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-xl font-serif tracking-widest uppercase text-stone-800 hover:text-[#8C7146] transition-transform duration-300 hover:scale-105"
            >
              {item.label}
            </button>
          ))}

          {/* 모바일 하단 정보 */}
          <div className="pt-10 flex flex-col items-center space-y-4 text-stone-500">
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span className="text-sm">02-1234-5678</span>
            </div>
            <div className="flex items-center gap-2 text-center px-10">
              <MapPin size={16} className="shrink-0" />
              <span className="text-sm px-4 text-center">서울특별시 강남구 테헤란로 123 JS빌딩</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;