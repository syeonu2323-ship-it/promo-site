"use client";

export default function ProductPhotos() {
  return (
    <section className="py-20 bg-gray-50 text-gray-900 px-6">
      <div className="max-w-5xl mx-auto">

        {/* 제목 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          제품 구성 & 디자인 미리보기
        </h2>

        {/* 메인 이미지 하나 크게 */}
        <div className="mb-12">
          <img
            src="/producphotos/키트 실제 모습.png"
            alt="비염 진단 키트"
            className="w-full rounded-2xl shadow-lg"
          />
          <p className="text-center text-gray-600 mt-3 text-sm">
            프로토타입 기반 비염 자가진단 키트 (예시 이미지)
          </p>
        </div>

        {/* 서브 이미지 두 개 가로 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img
            src="/images/mockup1.jpg"
            alt="키트 사용 예시 1"
            className="w-full rounded-xl shadow-md"
          />
          <img
            src="/images/mockup2.jpg"
            alt="키트 사용 예시 2"
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* 설명 텍스트 */}
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          우리의 진단 키트는 <strong>“간단한 사용법 · 빠른 판독 · 병인 기반 구분”</strong>을 목표로 설계되었습니다.
          ECP/MPO 듀얼 바이오마커 라인을 통해, <strong>하나의 테스트로 알레르기성 비염과 세균성 비염을 동시에 구분</strong>합니다.
        </p>
      </div>
    </section>
  );
}
