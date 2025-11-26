"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-6">
      
      <h1
        className={`
          text-4xl md:text-6xl font-extrabold text-center leading-snug transition-all duration-[1200ms]
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        코막힘의 진짜 원인,  
        <br />
        <span className="text-blue-600">15분 안에 밝혀드립니다.</span>
      </h1>

      <p className="text-gray-600 max-w-xl text-center mt-6 text-lg">
        ECP·MPO 기반 듀얼 바이오마커 자가진단 솔루션으로  
        알레르기성 비염과 세균성 비염을 빠르고 정확하게 구분하세요.
      </p>

      <a
        href="#problem"
        className="mt-10 bg-blue-600 text-white px-7 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
      >
        더 알아보기 ↓
      </a>
    </section>
  );
}
