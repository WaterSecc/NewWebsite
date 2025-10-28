"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  // Fire once the user scrolls down a little
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) setHasScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fade: Variants = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white"
    >
      <div className="container relative z-10 px-6 text-center">
        {/* Headline (no animation) */}
        <h1 className="mt-40 mb-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-6xl">
          Real-Time Water Monitoring <br className="hidden sm:block" />
          Instant Alerts, Zero Waste!
        </h1>

        {/* Subheadline (no animation) */}
        <p className="mx-auto mb-8 max-w-[640px] text-base leading-snug text-[#1D1D1F] sm:text-lg md:text-xl tracking-[0.01em]">
          Prevent costly leaks and reduce your water footprint
          <br />
          with our smart IoT solution.
        </p>

        {/* CTAs (no animation) */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/demo"
            className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow transition hover:bg-blue-700"
          >
            Save water now
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-blue-600 px-8 py-4 text-base font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            How it works
          </Link>
        </div>

        {/* Visuals: animate only after scroll */}
        <motion.div
          className="mb-8 relative max-w-[1290px] mx-auto"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
          initial="hidden"
          animate={hasScrolled ? "show" : "hidden"}
        >
          {/* Grid (left + right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left image (1st) */}
            <motion.div
              variants={fade}
              className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] rounded-[24px] overflow-hidden ml-auto"
            >
              <Image
                src="/images/hero/watermanager.png"
                alt="Engineer inspecting water system"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 100vw"
                priority
              />
            </motion.div>

            {/* Right image (2nd) */}
            <motion.div
              variants={fade}
              className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] rounded-[24px] overflow-hidden mr-auto"
            >
              <Image
                src="/images/hero/sensor.png"
                alt="WaterSec device"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 100vw"
              />
            </motion.div>
          </div>

          {/* Center overlay (3rd) */}
          <motion.div
            variants={fade}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 md:-bottom-8 lg:-bottom-0 z-20 md:w-[62%] lg:w-[48%]"
          >
            <div className="relative rounded-[26px] overflow-hidden h-[260px] md:h-[340px] lg:h-[380px]">
              <Image
                src="/images/hero/mockup.png"
                alt="WaterSec dashboard"
                fill
                className="object-contain rounded-[26px]"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 100vw"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile dashboard (optional) */}
        <div className="md:hidden mt-6">
          <div className="mx-auto max-w-[700px] rounded-[28px] bg-black/90 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="relative h-[220px] rounded-[24px] overflow-hidden bg-white">
              <Image
                src="/images/hero/mockup.png"
                alt="WaterSec dashboard"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
