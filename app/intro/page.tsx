"use client";

import { useEffect, useState } from "react";
import ProductPhotos from "../components/ProductPhotos";

export default function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-6">

      {/* 두 번째 애니메이션 문구 */}
      <h1
        className={`
          text-3xl md:text-5xl font-bold text-center leading-snug transition-all duration-[1600ms]
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        국내 알레르기성 비염 환자{" "}
        <span className="text-blue-600 font-extrabold">700만명</span> 돌파,
        <br />
        조기진단에 앞장서겠습니다.
      </h1>

      {/* 다음 버튼 */}
      <div className="mt-10">
        <a
          href="/analyze"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          실제 판독하러 가기 →
        </a>
      </div>
      <ProductPhotos />  
    </main>
  );
}
