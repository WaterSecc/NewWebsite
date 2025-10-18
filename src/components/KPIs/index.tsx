"use client";
import Image from "next/image";
import CountUp from "react-countup";
import SectionTitle from "../Common/SectionTitle";

export default function KPIs() {
  const kpis = [
    {
      image: "/images/kpi/meters.png", // replace with your asset
      value: 8932345,
      label: "Meters³ measured",
    },
    {
      image: "/images/kpi/anomalies.png", // replace with your asset
      value: 1882,
      label: "Anomalies Notified",
    },
    {
      image: "/images/kpi/endpoints.png", // replace with your asset
      value: 247,
      label: "Endpoints installed",
    },
  ];

  return (
    <section className="relative z-10 py-6 md:py-10 lg:py-14">
      <div className="container">
        <SectionTitle title="KPIs" paragraph="" center={false} mb="40px" />

        <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-8">
          {kpis.map((kpi, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Circle with image */}
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#0A66FF]">
                <Image
                  src={kpi.image}
                  alt={kpi.label}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              {/* Number */}
              <h2 className="text-3xl font-extrabold text-black">
                <CountUp
                  end={kpi.value}
                  duration={3}
                  separator="."
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h2>

              {/* Label */}
              <p className="mt-2 text-base font-medium text-black">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
