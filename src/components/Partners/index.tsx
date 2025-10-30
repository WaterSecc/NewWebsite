"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Logo = {
  light: string;   
  dark?: string;   
  alt: string;
};

const logos: Logo[] = [
  { light: "/images/brands/Partner Logos Black/HannoverMesse.png",        dark: "/images/brands/Partner Logos White Dark Mode/HannoverMesse_white.png",        alt: "Hannover Messe" },
  { light: "/images/brands/Partner Logos Black/Impact.png",         dark: "/images/brands/Partner Logos White Dark Mode/Impact_white.png",         alt: "Impact Partner" },
  { light: "/images/brands/Partner Logos Black/Microsoft.png",dark: "/images/brands/Partner Logos White Dark Mode/Microsoft_white.png",alt: "Microsoft for Startups" },
  { light: "/images/brands/Partner Logos Black/Novation.png",     dark: "/images/brands/Partner Logos White Dark Mode/Novation_white.png",     alt: "Novation City" },
  { light: "/images/brands/Partner Logos Black/orange.png",     dark: "/images/brands/Partner Logos White Dark Mode/orange_white.png",     alt: "Orange" },
  { light: "/images/brands/Partner Logos Black/StartupGermany.png",      dark: "/images/brands/Partner Logos White Dark Mode/StartupGermany_white.png",      alt: "Startup Germany" },
];
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: "linear",
  slidesToShow: 6,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 5 } },
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768,  settings: { slidesToShow: 3 } },
    { breakpoint: 500,  settings: { slidesToShow: 2 } },
  ],
};

const Partners = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="pt-2 md:pt-8 pb-10 md:pb-14">
      <div className="mx-auto max-w-[85rem] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-left text-3xl md:text-[38px] leading-tight font-normal tracking-tight text-gray-900 dark:text-white">
              Our Partners
            </h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <div className="relative">
              <Slider {...settings}>
                {logos.map((logo, i) => {
                  const src =
                    mounted && theme === "dark" ? (logo.dark ?? logo.light) : logo.light;
                  return (
                    <div key={i} className="px-2">
                      <div className="flex h-22 md:h-14 items-center justify-center">
                        <Image
                          src={src}
                          alt={logo.alt}
                          width={200}
                          height={80}
                          className="h-18 md:h-20 w-auto object-contain opacity-80 grayscale hover:opacity-100 transition"
                          priority={i < 4} 
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
