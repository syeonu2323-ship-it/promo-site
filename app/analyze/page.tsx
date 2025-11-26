"use client";

export default function AnalyzePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          🔍 키트 판독 페이지 (예시)
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          여기는 나중에 사진 업로드해서 판독하는 기능, crop, 결과 표시 등
          실제 기능을 넣을 공간이에요.
        </p>

        <div className="border rounded-xl p-4 md:p-6 text-sm md:text-base text-gray-700 bg-gray-50">
          <p className="mb-2">예: 추후 기능 아이디어</p>
          <ul className="list-disc list-inside space-y-1">
            <li>키트 사진 업로드 버튼</li>
            <li>업로드된 이미지 미리보기</li>
            <li>Crop 박스 드래그해서 C/M/E 라인 선택</li>
            <li>“판독하기” 버튼 → 결과 텍스트 출력</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
