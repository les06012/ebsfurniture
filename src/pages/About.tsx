import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/Common';
import { motion } from 'motion/react';
import { getCategories } from '../data/projects';
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  const principles = [
    { title: '사용성 (Usability)', desc: '보여지는 화려함보다 실제 사용자가 가구를 사용하며 느끼는 편리함과 실용성을 우선합니다.' },
    { title: '내구성 (Durability)', desc: '검증된 친환경 자재와 견고한 하드웨어를 사용하여 시간이 지나도 변함없는 튼튼한 가구를 지향합니다.' },
    { title: '예산 및 일정 (Budget & Schedule)', desc: '현실적인 예산 범위 내에서 최적의 소재와 마감을 제안하고, 약속된 제작 및 설치 일정을 엄수합니다.' },
    { title: '마감 (Finishing)', desc: '보이지 않는 가구의 내부 구조와 뒷면 마감까지 정직하게 제작하여 정교한 디테일의 차이를 만듭니다.' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-24">
      <section>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 text-center"
        >
          <h3 className="text-2xl md:text-4xl font-bold leading-tight text-sage-800 break-keep">
            공간, 저마다 가치의 답을<br className="hidden md:block" /> 제시하는 스튜디오
          </h3>
          <div className="text-[13px] sm:text-[14px] md:text-base text-sage-600 leading-[1.8] space-y-6 md:space-y-8 max-w-3xl mx-auto break-keep px-4 md:px-0 text-center">
            <p>
              우리는 주거공간, 상업공간 등 다양한 유형의 공간에 맞춤 가구를 설계하고 제작하는 가구 전문 회사입니다.
            </p>
            <p>
              가구의 디자인이나 소재보다 먼저 고려하는 것은 이 가구가 어떻게 사용되는가입니다.<br/ > 각 공간이 가진 목적과 사용자의 행동, 생활 방식까지 분석한 뒤 설계와 제작을 진행합니다.
            </p>
            <p>
              주거공간에서는 생활의 흐름과 유지 관리를 최우선으로 하며, 상업공간에서는 브랜드의 정체성을 시각적으로 구현하고 방문객의 동선과 비즈니스 효율을 극대화하는 맞춤 가구를 제안합니다.
            </p>
            <p>
              모든 프로젝트는 동일한 스타일을 적용하기보다, 공간의 성격에 맞는 <br/ > 합리적인 구조와 마감을 찾는 데 집중합니다.
            </p>
            <p>
              우리는 보여지기 위한 가구보다, 사용하면서 신뢰가 쌓이는 가구를 목표로 합니다. <br/ > 설계 단계에서부터 제작 이후의 관리까지 고려하며, 불필요한 요소를 줄이고 <br/ > 필요한 기능을 명확히 드러내는 방식으로 작업합니다.
            </p>
            <p className="text-[15px] sm:text-[16px] md:text-lg font-bold text-sage-900 pt-4 md:pt-6">
              가구가 완성되는 순간보다, 시간이 지나도 불편하지 않은 가구를 만드는 것이 우리의 기준입니다.
            </p>
          </div>
        </motion.div>
      </section>

      <section>
        <SectionTitle title="작업 원칙" subtitle="우리가 타협하지 않는 네 가지 기준입니다." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div key={i} className="p-6 md:p-8 bg-white rounded-2xl border border-sage-100">
              <h4 className="text-[13px] sm:text-[15px] md:text-lg font-bold mb-4 text-sage-900 flex items-start md:items-center gap-2">
                <span className="w-1.5 h-6 bg-sage-200 rounded-full flex-shrink-0 mt-0.5 md:mt-0" />
                <span className="break-keep">{p.title}</span>
              </h4>
              <p className="text-[12px] sm:text-[13px] md:text-sm text-sage-600 leading-relaxed break-keep">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sage-100 p-6 md:p-12 rounded-3xl">
        <h4 className="text-xl font-bold mb-8">서비스 범위</h4>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((item) => (
            <button 
              key={item} 
              onClick={() => navigate('/gallery', { state: { category: item } })}
              className="w-[48%] md:w-auto md:flex-1 bg-white p-3 md:p-6 rounded-xl text-center font-medium shadow-sm text-xs md:text-base break-keep hover:bg-sage-50 hover:text-sage-800 transition-colors cursor-pointer border border-transparent hover:border-sage-200"
            >
              {item}
            </button>
          ))}
        </div>
        <p className="text-center text-xs text-sage-500 mt-4">
          각 카테고리를 클릭하시면 해당 포트폴리오 <br className="block md:hidden" />갤러리로 바로 이동합니다.
        </p>
        <div className="mt-12 pt-12 border-t border-sage-200">
          <h4 className="text-xl font-bold mb-4">사후관리 및 AS</h4>
          <p className="text-sage-600 text-[13px] md:text-sm leading-relaxed break-keep">
            가구 설치 완료 후 1년간 무상 AS를 보장하며, 정기적인 해피콜을 통해 가구 사용의 불편함을 체크합니다. 
            보증 기간 이후에도 유상 유지보수 서비스를 통해 지속적인 관리를 도와드립니다.
          </p>
        </div>
      </section>
    </div>
  );
};
