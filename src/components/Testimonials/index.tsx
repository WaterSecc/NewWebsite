"use client";

import { useState, useCallback } from "react";
import SingleUseCase from "./SingleUseCase";
import { useCases } from "@/types/TypeAndData";
import SectionTitle from "../Common/SectionTitle";

const UseCases = () => {
  const [idx, setIdx] = useState(0);
  const total = useCases.length;

  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx(i => (i + 1) % total), [total]);

  return (
    <section className="pt-16 pb-6 md:pt-20 md:pb-8 lg:pt-28 lg:pb-4" aria-label="Use cases">
      <div className="container">
        <SectionTitle title="Use Cases" paragraph="" mb="30px" />

        {/* Stage: narrower + taller */}
        <div className="relative mx-auto max-w-[950px]">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous use case"
            className="
    absolute left-[-40px] top-1/2 -translate-y-1/2
    z-30 flex items-center justify-center
    h-32 w-6 md:h-40 md:w-8
    text-gray-300 hover:text-gray-500
    transition
  "
          >
            <svg
              viewBox="0 0 24 48"
              className="h-full w-full"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 4 L6 24 L18 44" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Card (fixed taller height) */}
          <div className="relative animate-[fadeIn_.25s_ease]">
            <div className="h-[400px] md:h-[460px] lg:h-[500px]">
              <SingleUseCase {...useCases[idx]} />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next use case"
            className="
    absolute right-[-40px] top-1/2 -translate-y-1/2
    z-30 flex items-center justify-center
    h-32 w-6 md:h-40 md:w-8
    text-gray-300 hover:text-gray-500
    transition
  "
          >
            <svg
              viewBox="0 0 24 48"
              className="h-full w-full"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 4 L18 24 L6 44" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots (bottom-right, on top of photo) */}
          <div className="absolute bottom-5 right-6 z-30 flex items-center gap-2">
            {useCases.map((uc, i) => (
              <button
                key={uc.id}
                onClick={() => setIdx(i)}
                aria-label={`Go to use case ${i + 1}`}
                className={`h-2.5 rounded-full transition ${i === idx ? "w-2.5 bg-gray-800 shadow"
                  : "w-2 bg-gray-400 hover:bg-gray-500"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* subtle fade-in */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default UseCases;
