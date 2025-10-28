"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: "/images/trustedby/attijarilogo-dark.png", alt: "Attijari" },
  { src: "/images/trustedby/endalogo-dark.jpg", alt: "Enda" },
  { src: "/images/trustedby/pluxeelogo-dark.png", alt: "Pluxee" },
  { src: "/images/trustedby/sfbtlogo-dark.jpg", alt: "SFBT" },
  { src: "/images/trustedby/teriaklogo-dark.png", alt: "Teriak" },
  { src: "/images/trustedby/mareAlb-dark.jpg", alt: "Mare Alb" },
  { src: "/images/trustedby/talenthub-dark.jpeg", alt: "Talent Hub" },
  // Add more logos as needed
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,       // required for continuous scroll
  speed: 9000,            // overall speed of the track
  cssEase: "linear",      // smooth linear scroll
  slidesToShow: 6,        // visible logos on desktop
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 5 } },
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768,  settings: { slidesToShow: 3 } },
    { breakpoint: 500,  settings: { slidesToShow: 2 } },
  ],
};

const splitInHalf = <T,>(arr: T[]) => {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
};

const TrustedBy = () => {
  const [row1, row2] = splitInHalf(logos);
  return (
   <section className="pt-2 md:pt-8 pb-10 md:pb-14">
      <div className="mx-auto max-w-[85rem] px-6 sm:px-8 lg:px-10">
        {/* 12-col grid: title on the left, logos on the right */}
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
          {/* Left column (narrow to force 2-line title like the reference) */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-left text-2xl md:text-[28px] leading-tight font-semibold tracking-tight text-gray-900 dark:text-white">
              Leading companies
              <br />
              trust WaterSec.
            </h2>
          </div>

          {/* Right column with two rows of logos */}
          <div className="md:col-span-8 lg:col-span-9">
            {/* Top row */}
           <div className="md:col-span-8 lg:col-span-9">
            <div className="relative">
              <Slider {...settings}>
                {logos.map((logo, i) => (
                  <div key={i} className="px-4">
                    <div className="flex h-12 md:h-14 items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={180}
                        height={60}
                        className="h-8 md:h-10 w-auto object-contain grayscale opacity-80 transition hover:opacity-100"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
