"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import CountUp from "react-countup";

export default function KPIs() { 
  const [isOpen, setOpen] = useState(false);
  const kpis = [
    { value: 8932345, label: "Meters Cube Measured" },
    { value: 1882, label: "Anomalies Notified" },
    { value: 247, label: "Endpoints Installed" },
  ];

  return (
    <>
      <section className="relative z-10 pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-16 lg:pb-4">
        <div className="container">
          <SectionTitle
            title="KPIs"
            paragraph=""
            center
            mb="50px"
          />
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
            {kpis.map((kpi, index) => (
              <div key={index}>
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">
                  <CountUp end={kpi.value} duration={3} separator="," />
                </h2>
                <p className="mt-2 text-lg font-medium text-waterseclight dark:text-sky-200">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        
      </section>

     
    </>
  );
};
