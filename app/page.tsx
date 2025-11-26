"use client";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 px-6">
      {/* 콧속탐정단 */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          ✨ DualCHeck Rhinitis ✨
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
           ECP-MPO 기반 듀얼 바이오마커 진단 솔루션으로 
           알레르기성 비염과 세균성 비염을 구분하는 혁신적 자가진단 키트 
        </p>
      </div>

      {/* 메인 홍보 박스 */}
      <section className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          🩺 이런 사람에게 딱이에요
        </h2>
        <ul className="space-y-2 text-gray-700 mb-6 text-sm md:text-base">
          <li>• 비염 증상이 반복되는데, 병원 가기 전에 상태를 알고 싶은 사람</li>
          <li>• 자가진단키트 결과가 애매해서 헷갈렸던 사람</li>
          <li>• 가족/친구/환자 등 여러 사람의 검사 결과를 한 곳에서 관리하고 싶은 사람</li>
        </ul>

        {/* CTA 버튼들 */}
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <a
            href="/analyze"
            className="text-center bg-blue-600 text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:bg-blue-700 transition"
          >
            🔍 키트 결과 판독하러 가기
          </a>
          <a
            href="/about"
            className="text-center border border-gray-300 px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:bg-gray-50 transition"
          >
            ℹ️ 서비스 소개 더 보기
          </a>
        </div>
      </section>

      {/* 푸터 비슷한 문구 */}
      <p className="mt-6 text-xs md:text-sm text-gray-400">
        * 실제 기능과 이름은 나중에 자유롭게 바꿀 수 있어요 :)
      </p>
    </main>
  );
}
