"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white"
    >
      <div className="container relative z-10 px-6 text-center">
        {/* Headline */}
        <h1 className="mt-40 mb-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
          Real-Time Water Monitoring <br className="hidden sm:block" />
          Instant Alerts, Zero Waste!
        </h1>

        <p className="mb-8 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
          Prevent costly leaks and reduce your water footprint
  <br />
  with our smart IoT solution.
        </p>

        {/* CTAs */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/demo"
            className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Save water now
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-blue-600 px-8 py-4 text-base font-semibold text-blue-600 hover:bg-blue-50 transition"
          >
            How it works
          </Link>
        </div>

        {/* Visuals */}
        <div className="mb-8 relative max-w-[1290px] mx-auto">
          {/* Side images grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left: man with tablet */}

            <div className="relative w-[100%] h-[620px] sm:h-[260px] md:h-[300px] rounded-[24px] overflow-hidden ml-auto">
              <Image
                src="/images/hero/watermanager.png"
                alt="Engineer inspecting water system"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 100vw"
                priority
              />
            </div>
            {/* Right: WaterSec box */}
            <div className="relative w-[100%] h-[620px] sm:h-[260px] md:h-[300px] rounded-[24px] overflow-hidden mr-auto">
              <Image
                src="/images/hero/sensor.png"
                alt="WaterSec device"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>

          {/* Center overlay: dashboard (desktop & up) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-10 z-20 w-[67%] lg:w-[42%]">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-3 z-20 w-[78%] h-[220px] sm:h-[260px] md:h-[300px] rounded-[26px] overflow-hidden ">
              <Image
                src="/images/hero/mockup.png"
                alt="WaterSec dashboard"
                fill
                className="object-cover rounded-[26px]"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>


        {/* Mobile: dashboard stacked */}
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
