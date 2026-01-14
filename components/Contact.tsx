import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    budget: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // SheetDB API를 사용하여 구글 시트로 직접 전송합니다.
      // 키값(name, phone, area, budget, date)은 절대 수정하지 않습니다.
      const response = await fetch('https://sheetdb.io/api/v1/j7k48l8m0d298', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              name: formData.name,
              phone: formData.phone,
              area: formData.area,
              budget: formData.budget,
              date: new Date().toLocaleString('ko-KR'),
            }
          ]
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error('전송 실패');
      }

      const result = await response.json();
      console.log('Success:', result);

      setSuccess(true);
      setFormData({ name: '', phone: '', area: '', budget: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('요청이 실패했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#F5F5F0]">
      <div className="container mx-auto">
        {/* 모바일: 좌측 정렬, 데스크탑: 중앙 정렬 */}
        <div className="mb-16 border-b border-stone-300 pb-6 text-left md:text-center">
          <span className="text-xs font-bold tracking-widest uppercase block mb-2">04 — Contact Us</span>
          <h3 className="font-serif text-4xl md:text-5xl">Partner With Us</h3>
          <p className="mt-4 text-stone-500 text-sm">매수 및 매각, 임대차 등 모든 부동산 문의를 남겨주세요.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-16 shadow-sm border border-stone-100">
          {success ? (
            /* 성공 메시지도 모바일 좌측 정렬, 데스크탑 중앙 정렬 적용 */
            <div className="text-left md:text-center py-12 space-y-4">
              <h5 className="font-serif text-2xl">Thank You</h5>
              <p className="text-stone-500">
                문의가 성공적으로 접수되었습니다. <br />
                담당 컨설턴트가 검토 후 빠르게 연락드리겠습니다.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 text-xs font-bold uppercase tracking-widest border-b border-stone-900 pb-1"
              >
                Return to Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-stone-50 border-none p-4 text-stone-900 focus:ring-1 focus:ring-stone-300 transition-all placeholder:text-stone-400"
                    placeholder="성함"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Phone</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-stone-50 border-none p-4 text-stone-900 focus:ring-1 focus:ring-stone-300 transition-all placeholder:text-stone-400"
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* 통합 필드: 매수 희망 지역 또는 보유 건물 주소 */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Interest Area / Building Address
                </label>
                <input
                  type="text"
                  className="w-full bg-stone-50 border-none p-4 text-stone-900 focus:ring-1 focus:ring-stone-300 transition-all placeholder:text-stone-400"
                  placeholder="관심 지역 또는 보유 건물 주소를 입력해주세요"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                />
              </div>

              {/* 통합 필드: 예산 또는 예상 가치 */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Budget / Estimated Value (KRW)
                </label>
                <input
                  type="text"
                  className="w-full bg-stone-50 border-none p-4 text-stone-900 focus:ring-1 focus:ring-stone-300 transition-all placeholder:text-stone-400"
                  placeholder="예산 범위 또는 예상 매각가를 입력해주세요 (예: 50억)"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#8C7146';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#1c1917';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  style={{
                    backgroundColor: '#1c1917',
                    transition: 'all 0.3s ease',
                    display: 'block',
                    width: '100%',
                    color: 'white',
                    padding: '1rem',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  {loading ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};