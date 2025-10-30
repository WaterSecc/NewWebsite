"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import SingleUseCase from "./SingleUseCase";
import { useCases } from "@/types/TypeAndData";
import SectionTitle from "../Common/SectionTitle";

function Chevron({ dir = "left" }: { dir?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 160"
      className="h-[230px] w-[16px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={dir === "left" ? "M14 10 L6 80 L14 150" : "M6 10 L14 80 L6 150"} />
    </svg>
  );
}

const UseCases = () => {
  const [idx, setIdx] = useState(0);
  const total = useCases.length;

  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  // optional: arrow keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // on-scroll fade variant
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="pt-16 pb-6 md:pt-20 md:pb-8 lg:pt-28 lg:pb-4" aria-label="Use cases">
      {/* Fade-in WHEN this block enters viewport */}
      <motion.div
        className="container"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <SectionTitle title="Use Cases" paragraph="" mb="30px" />

        {/* Stage wrapper */}
        <div className="relative mx-auto max-w-[950px]">
          {/* Card area (no always-on CSS animation now) */}
          <div className="relative">
            <div className="h-[350px] md:h-[410px] lg:h-[470px] rounded-[32px] overflow-hidden">
              <SingleUseCase {...useCases[idx]} />
            </div>

            {/* Dots (inside, bottom-right) */}
            <div className="absolute bottom-5 right-6 z-30 flex items-center gap-2">
              {useCases.map((uc, i) => (
                <button
                  key={uc.id}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to use case ${i + 1}`}
                  className={`h-2.5 rounded-full transition ${
                    i === idx
                      ? "w-2.5 bg-gray-800/90 shadow"
                      : "w-2 bg-gray-400/80 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Arrows (outside content flow, vertically centered) */}
          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            className="
              absolute left-[-22px] md:left-[-28px] top-1/2 -translate-y-1/2
              text-gray-300 hover:text-gray-400 focus:outline-none z-40
            "
          >
            <Chevron dir="left" />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={next}
            className="
              absolute right-[-22px] md:right-[-28px] top-1/2 -translate-y-1/2
              text-gray-300 hover:text-gray-400 focus:outline-none z-40
            "
          >
            <Chevron dir="right" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default UseCases;
