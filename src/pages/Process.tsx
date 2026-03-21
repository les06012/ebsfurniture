import React from 'react';
import { SectionTitle } from '../components/Common';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      step: 'Step 1',
      title: '상담 및 현장 실측',
      items: ['가구 용도 및 요구사항 상담', '배치 공간 실측', '현장 반입 경로 확인']
    },
    {
      step: 'Step 2',
      title: '가구 설계 및 디자인 제안',
      items: ['가구 구조 및 레이아웃 확정', '소재 및 마감재 제안', '3D 모델링 확인 (필요 시)']
    },
    {
      step: 'Step 3',
      title: '계약 및 제작',
      items: ['최종 견적서 산출 및 계약', '제작 일정 협의', '자체 공장 맞춤 제작 진행']
    },
    {
      step: 'Step 4',
      title: '배송 및 시공',
      items: ['안전한 가구 운송', '전문 시공팀 현장 설치', '현장 마감 및 정리']
    },
    {
      step: 'Step 5',
      title: '검수 및 사후관리',
      items: ['최종 품질 점검', '가구 관리 방법 안내', 'AS 보증서 발급']
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-24">
      <section>
        <SectionTitle title="업무 프로세스" subtitle="투명하고 체계적인 과정을 통해 신뢰할 수 있는 결과를 만듭니다." />
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 bg-white rounded-2xl border border-sage-100 relative overflow-hidden"
            >
              <div className="md:w-48 shrink-0">
                <span className="text-sage-300 font-black text-4xl block mb-2">{s.step}</span>
                <h4 className="text-xl font-bold text-sage-900">{s.title}</h4>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {s.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sage-600 text-sm">
                    <CheckCircle2 size={16} className="text-sage-400" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-3xl border border-sage-100">
          <h4 className="text-xl font-bold mb-6">제작 및 시공 기간 가이드</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-sage-50">
              <span className="text-sage-600">주거공간 맞춤 가구</span>
              <span className="font-bold">2 ~ 4주</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-sage-50">
              <span className="text-sage-600">상업공간 맞춤 가구</span>
              <span className="font-bold">3 ~ 5주</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-sage-50">
              <span className="text-sage-600">단품 가구 제작</span>
              <span className="font-bold">1 ~ 2주</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-sage-400 leading-relaxed">
            * 가구의 규모, 디자인 복잡도 및 자재 수급 상황에 따라 변동될 수 있습니다.
          </p>
        </div>

        <div className="bg-sage-800 p-10 rounded-3xl text-white">
          <h4 className="text-xl font-bold mb-6">고객 준비사항</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 text-[10px]">1</span>
              <span>가구가 배치될 공간의 대략적인 치수 확인</span>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 text-[10px]">2</span>
              <span>기존 가구 철거 및 폐기 여부 결정</span>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 text-[10px]">3</span>
              <span>희망하는 가구 디자인, 소재, 색상 레퍼런스 준비</span>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 text-[10px]">4</span>
              <span>가구 제작 및 설치를 위한 예산 범위 공유</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
