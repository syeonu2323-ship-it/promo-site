"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* 타이틀 */}
        <h1
          className={`
            text-3xl md:text-5xl font-extrabold text-center mb-12 transition-all duration-[1400ms]
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          왜 ECP-MPO 기반 키트가 필요한가 ?
        </h1>

        {/* 개발 배경 */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            개발 배경
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            국내 비염 환자는 이미 <strong>약 700만 명</strong>을 넘어섰고  
            매년 증가 추세에 있습니다.  
            하지만 의료현장과 가정의학에서는 여전히  
            <strong>알레르기성 비염과 세균성 비염을 구분하기 어렵다</strong>는 
            문제를 가지고 있습니다.
            <br /><br />
            두 질환은 증상은 유사하지만 치료법은 완전히 다릅니다.  
            잘못된 약물 치료는 오히려 증상을 악화시키거나  
            항생제 오남용 문제를 일으키기도 합니다.
            <br /><br />
            우리는 이러한 문제를 해결하기 위해  
            **혈액·비강분비물에서 실제로 변화하는 바이오마커(ECP/MPO)를 기반으로,  
            가정에서도 빠르게 구분할 수 있는 진단 키트 개발**을 시작했습니다.
          </p>
        </section>

        {/* 차별화된 바이오마커 */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            차별화된 듀얼 바이오마커 접근
          </h2>

          <div className="space-y-6">

            {/* ECP */}
            <div className="p-5 border rounded-xl bg-blue-50">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                🧬 ECP (Eosinophil Cationic Protein)
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                알레르기성 비염 환자에서는 ‘호산구(Eosinophil)’가 증가하며  
                이때 분비되는 대표적인 단백질이 바로 <strong>ECP</strong>입니다.  
                실제 임상에서 ECP는 **알레르기 정도를 반영하는 지표**로 사용됩니다.  
                이 바이오마커를 라인으로 구성해 알레르기 반응을 시각적으로 확인할 수 있습니다.
              </p>
            </div>

            {/* MPO */}
            <div className="p-5 border rounded-xl bg-blue-50">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                🦠 MPO (Myeloperoxidase)
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                세균성 비염에서는 중성구(Neutrophil)의 활성이 증가하며  
                이때 *강력한 항균 효소*인 <strong>MPO</strong>가 다량 분비됩니다.  
                MPO는 **세균성 염증의 특이적 지표**로 알려져 있어  
                세균성 비염을 직접적으로 감지하기에 적합합니다.
              </p>
            </div>

          </div>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            이 두 가지 바이오마커를 하나의 테스트 스트립에서 동시에 확인하는 것은  
            **국내 최초의 듀얼 바이오마커 비염 자가진단 접근**으로,  
            기존의 단일 CRP·IgE 기반 방식보다 훨씬 정확하고  
            병인 기반 분석이 가능하다는 차별점이 있습니다.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            메인 화면으로 돌아가기
          </a>
        </div>

      </div>
    </main>
  );
}
