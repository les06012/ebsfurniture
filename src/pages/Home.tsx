import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { SectionTitle } from '../components/Common';
import { PROJECTS, getProjects } from '../data/projects';

export const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const projectsList = getProjects();

  const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2000&auto=format&fit=crop');

  React.useEffect(() => {
    const savedImage = localStorage.getItem('homeHeroImage');
    if (savedImage) {
      setHeroImage(savedImage);
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { title: '공간 맞춤 가구 설계', desc: '거주자의 동선과 공간 특성을 분석하여 최적의 가구 레이아웃을 제안합니다.' },
    { title: '투명한 제작 견적', desc: '투명한 견적 산출과 철저한 공정 관리로 예산 내 최상의 가구 품질을 보장합니다.' },
    { title: '자체 공장 맞춤 제작', desc: '자체 공장에서 직접 제작하여 마진을 줄이고 디테일한 완성도를 높입니다.' },
    { title: '철저한 사후 관리', desc: '가구 설치 후에도 안심할 수 있도록 체계적이고 신속한 AS를 운영합니다.' },
  ];

  const processes = [
    { step: '01', title: '상담 및 현장 실측', desc: '가구 용도 상담 및 공간 실측' },
    { step: '02', title: '설계 및 디자인 제안', desc: '가구 구조 및 마감재 제안' },
    { step: '03', title: '계약 및 제작', desc: '견적 확정 및 자체 공장 제작' },
    { step: '04', title: '배송 및 시공', desc: '안전한 운송 및 전문 설치' },
    { step: '05', title: '검수 및 사후관리', desc: '최종 품질 점검 및 AS 안내' },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden -mt-8 -mx-8">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 px-6 w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-white/90 text-xl md:text-2xl mb-4 font-medium tracking-tight">
              “공간에 가치를 담다, 가구의 선두주자”
            </p>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-8">
              에바스
            </h1>
            <div className="space-y-2 mb-10">
              <p className="text-lg md:text-xl text-white/90 font-light">
                친환경 맞춤가구 제작 전문
              </p>
              <p className="text-lg md:text-xl text-white/90 font-light">
                상담 문의 환영
              </p>
            </div>
            
            <div className="space-y-2 mb-12 text-white/90 font-bold text-xl">
              <p>TEL. 010-6634-8119</p>
              <p>TEL. 031-664-4666</p>
            </div>

            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="px-16 py-4 border-2 border-white text-white text-2xl font-medium hover:bg-white/10 transition-colors"
              >
                문의하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4">
        <SectionTitle title="핵심 강점" subtitle="에바스가 추구하는 가치입니다." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 lg:p-5 xl:p-8 bg-white rounded-2xl border border-sage-100 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="text-sage-600 mb-4" size={32} />
              <h3 className="text-lg lg:text-base xl:text-xl font-bold mb-3 whitespace-nowrap tracking-tight">{f.title}</h3>
              <p className="text-sage-600 text-[13px] lg:text-[12px] xl:text-[13px] leading-relaxed break-keep">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects */}
      <section className="px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-sage-900 tracking-tight mb-2">대표 프로젝트</h2>
          <div className="flex justify-between items-center">
            <p className="text-sage-600 text-[11px] sm:text-sm whitespace-nowrap tracking-tighter sm:tracking-normal">최근 진행된 주요 시공 사례입니다.</p>
            {projectsList.length > 0 && (
              <Link to="/gallery" className="text-sage-600 hover:text-sage-900 text-[11px] sm:text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                전체보기 <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
        {projectsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsList.slice(0, 3).map((p) => (
              <Link key={p.id} to={`/gallery/${p.id}`} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={p.thumbnail} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs text-sage-500 mb-1">{p.category} · {p.subCategory}</p>
                <h3 className="text-lg font-bold group-hover:text-sage-600 transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-2xl border border-sage-100 border-dashed">
            <p className="text-sage-400 text-sm">현재 업데이트 중입니다.</p>
          </div>
        )}
      </section>

      {/* Process Summary */}
      <section className="px-4 py-20 bg-sage-100 -mx-8 rounded-3xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-sage-900 tracking-tight mb-2">업무 프로세스</h2>
            <p className="text-sage-600 text-[11px] sm:text-sm whitespace-nowrap tracking-tighter sm:tracking-normal">체계적인 단계별 관리를 통해 완성도 높은 맞춤 가구를 만듭니다.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {processes.map((p, i) => (
              <div key={i} className="relative p-4 lg:p-5 xl:p-6 bg-white rounded-xl border border-sage-200 flex flex-col">
                <span className="text-2xl lg:text-3xl font-black text-sage-200 mb-4">{p.step}</span>
                <h4 className="font-bold text-[14px] lg:text-[13px] xl:text-base mb-1.5 whitespace-nowrap tracking-tighter">{p.title}</h4>
                <p className="text-[11px] lg:text-[10px] xl:text-xs text-sage-500 break-keep">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Inquiry */}
      <section className="px-4 max-w-3xl mx-auto text-center">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-sage-900 tracking-tight mb-2">빠른 상담 문의</h2>
          <p className="text-sage-600 text-[11px] sm:text-sm whitespace-nowrap tracking-tighter sm:tracking-normal">궁금하신 점을 남겨주시면 확인 후 연락드리겠습니다.</p>
        </div>
        <form action="https://formspree.io/f/mpqjnkjy" method="POST" onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="space-y-2">
            <label className="text-xs font-bold text-sage-600">성함</label>
            <input type="text" name="name" required className="w-full px-4 py-3 bg-white border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-200" placeholder="성함을 입력해주세요" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-sage-600">연락처</label>
            <input type="tel" name="phone" required className="w-full px-4 py-3 bg-white border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-200" placeholder="010-0000-0000" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-bold text-sage-600">문의내용</label>
            <textarea name="message" required className="w-full px-4 py-3 bg-white border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-200 h-32" placeholder="가구 종류, 배치할 공간, 대략적인 치수 등 문의하실 내용을 남겨주세요"></textarea>
          </div>
          <div className="md:col-span-2 flex items-center gap-2">
            <input type="checkbox" id="privacy" name="privacy_consent" required className="w-4 h-4 accent-sage-800" />
            <label htmlFor="privacy" className="text-xs text-sage-500">개인정보 수집 및 이용에 동의합니다.</label>
          </div>
          {submitStatus === 'success' && (
            <div className="md:col-span-2 p-4 bg-sage-50 text-sage-800 rounded-lg text-sm font-bold text-center">
              문의가 성공적으로 전송되었습니다. 확인 후 연락드리겠습니다.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="md:col-span-2 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-bold text-center">
              문의 전송에 실패했습니다. 다시 시도해주세요.
            </div>
          )}
          <button type="submit" disabled={isSubmitting} className="md:col-span-2 py-4 bg-sage-800 text-white font-bold rounded-lg hover:bg-sage-900 transition-colors disabled:opacity-50">
            {isSubmitting ? '전송 중...' : '문의 보내기'}
          </button>
        </form>
      </section>
    </div>
  );
};
