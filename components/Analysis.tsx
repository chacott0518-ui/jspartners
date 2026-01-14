import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MarketData } from '../types';

const DATA: MarketData[] = [
  { month: 'Jan', gangnam: 100, seongsu: 85, hannam: 90 },
  { month: 'Feb', gangnam: 102, seongsu: 88, hannam: 92 },
  { month: 'Mar', gangnam: 105, seongsu: 92, hannam: 93 },
  { month: 'Apr', gangnam: 104, seongsu: 95, hannam: 95 },
  { month: 'May', gangnam: 108, seongsu: 98, hannam: 97 },
  { month: 'Jun', gangnam: 112, seongsu: 105, hannam: 99 },
];

export const Analysis: React.FC = () => {
  return (
    <section id="analysis" className="py-24 px-6 md:px-12 bg-stone-100">
      <div className="container mx-auto">
        <div className="mb-16 border-b border-stone-300 pb-6">
          <span className="text-xs font-bold tracking-widest uppercase block mb-2">02 — Market Insight</span>
          <h3 className="font-serif text-4xl md:text-5xl">Market Price Index</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Chart Area */}
          <div className="lg:col-span-2 w-full h-[400px]" style={{ minHeight: '400px' }}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontFamily: 'sans-serif', fontSize: 12, fill: '#888' }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontFamily: 'sans-serif', fontSize: 12, fill: '#888' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#F5F5F0', border: 'none', borderRadius: '0px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ fontFamily: 'serif', color: '#1c1917' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="gangnam" name="Gangnam" stroke="#1c1917" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="seongsu" name="Seongsu" stroke="#78716c" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="hannam" name="Hannam" stroke="#d6d3d1" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h4 className="font-serif text-2xl mb-4">Seongsu's Rapid Growth</h4>
              <p className="text-sm leading-relaxed opacity-80">
                성수동 권역은 지난 6개월간 가장 가파른 지가 상승률을 기록했습니다.
                MZ세대의 유입과 대기업 팝업 스토어의 증가는 상업용 부동산의 가치를 재평가하게 만들고 있습니다.
              </p>
            </div>

            <div className="border-t border-stone-300 pt-6">
              <h4 className="font-serif text-2xl mb-4">Gangnam Resilience</h4>
              <p className="text-sm leading-relaxed opacity-80">
                강남구는 여전히 가장 안전한 자산 가치를 증명하고 있습니다.
                금리 인상기에도 불구하고 공실률 0%에 가까운 임대 수요가 자산 가치를 방어합니다.
              </p>
            </div>

            <button className="self-start px-6 py-3 border border-stone-900 text-xs font-bold tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-colors">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};