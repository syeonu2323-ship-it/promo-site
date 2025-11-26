"use client";

import Hero from "./components/Hero";
import Problem from "./components/Problem";
import ProductPhotos from "./components/ProductPhotos";

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <ProductPhotos />
      <Problem />
    </main>
  );
}
