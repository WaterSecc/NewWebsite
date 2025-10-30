"use client";
import { Dashboard } from "@/types/dashboard";
import Image from "next/image";
import Link from "next/link";

const SingleDashboard = ({ dashboard }: { dashboard: Dashboard }) => {
  const { title, image, paragraph, link } = dashboard;

  return (
    <div className="group h-full flex flex-col items-center">
      {/* CARD */}
      <div
        className="
          relative overflow-hidden rounded-2xl border-2 border-bleujdid
          bg-white transition-colors duration-300
          group-hover:bg-bleujdid
          flex flex-col justify-between
          w-full h-full
        "
      >
        {/* Image */}
        <div className="relative w-[90%] mx-auto mt-5 h-56 sm:h-60 md:h-64 overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title || 'WaterSec Dashboard'}
            fill
            className="object-cover rounded-xl"
            sizes="(min-width: 1280px) 50vw, (min-width: 768px) 60vw, 100vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-center flex flex-col flex-grow justify-between">
          <h3
            className="
              mb-4 text-xl font-extrabold
              text-bleujdid transition-colors
              group-hover:text-white
            "
          >
            {title}
          </h3>

          <p
            className="
              mb-4 text-base leading-relaxed
              text-bleujdid/90 transition-colors
              group-hover:text-white/90
            "
          >
            {paragraph}
          </p>
        </div>
      </div>

      {/* Visit button */}
      <div className="pt-4 w-full">
        <Link
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="
            block w-full rounded-full border-2 border-bleujdid
            px-6 py-3 text-center text-[1.05rem] font-semibold
            text-bleujdid transition-all duration-300
            hover:bg-bleujdid hover:text-white
            group-hover:bg-bleujdid group-hover:text-white
          "
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

export default SingleDashboard;
