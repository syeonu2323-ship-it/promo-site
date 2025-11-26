"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 px-6">
      
      {/* 애니메이션 문구 */}
      <h1
        className={`
          text-4xl md:text-6xl font-extrabold mb-8 text-center transition-all duration-[1200ms]
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        코막힘의 진짜 원인 15분 안에 밝혀드립니다.
      </h1>

      {/* 설명문구 */}
      <p className="text-base md:text-lg text-gray-600 max-w-xl text-center mb-8">
        ECP-MPO 기반 듀얼 바이오마커 진단 솔루션으로 
        알레르기성 비염과 세균성 비염을 구분하는 혁신적 자가진단 키트
      </p>

      {/* 버튼 */}
      <div className="flex gap-4">
        <a
  href="/intro"
  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
>
  바로 시작하기 →
</a>

      </div>

    </main>
  );
}
