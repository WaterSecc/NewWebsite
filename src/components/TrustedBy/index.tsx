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
  { light: "/images/brands/Client Logos Black/aziza.png",        dark: "/images/brands/Client Logos White Dark Mode/aziza_white.png",        alt: "Hopital Aziza Othmana" },
  { light: "/images/brands/Client Logos Black/Bank.png",         dark: "/images/brands/Client Logos White Dark Mode/Bank_white.png",         alt: "Attijari Bank" },
  { light: "/images/brands/Client Logos Black/EndaInterArab.png",dark: "/images/brands/Client Logos White Dark Mode/EndaInterArab_white.png",alt: "Enda Inter Arab" },
  { light: "/images/brands/Client Logos Black/harmonia.png",     dark: "/images/brands/Client Logos White Dark Mode/harmonia_white.png",     alt: "Harmonia Pharma" },
  { light: "/images/brands/Client Logos Black/mallsfax.png",     dark: "/images/brands/Client Logos White Dark Mode/mallsfax_white.png",     alt: "Mall Of Sfax" },
  { light: "/images/brands/Client Logos Black/marelab.png",      dark: "/images/brands/Client Logos White Dark Mode/marelab_white.png",      alt: "Mare Alb" },
  { light: "/images/brands/Client Logos Black/Marina.png",       dark: "/images/brands/Client Logos White Dark Mode/Marina_white.png",       alt: "Marina Hammamet" },
  { light: "/images/brands/Client Logos Black/naviationcity.png",dark: "/images/brands/Client Logos White Dark Mode/naviationcity_white.png",alt: "Novation City" },
  { light: "/images/brands/Client Logos Black/pluxee.png",       dark: "/images/brands/Client Logos White Dark Mode/pluxee_white.png",       alt: "Pluxee" },
  { light: "/images/brands/Client Logos Black/sfbt.png",         dark: "/images/brands/Client Logos White Dark Mode/sfbt_white.png",         alt: "SFBT" },
  { light: "/images/brands/Client Logos Black/sostem.png",       dark: "/images/brands/Client Logos White Dark Mode/sostem_white.png",       alt: "SOSTEM" },
  { light: "/images/brands/Client Logos Black/startupvillage.png",dark:"/images/brands/Client Logos White Dark Mode/startupvillage_white.png",alt: "StartUp Village" },
  { light: "/images/brands/Client Logos Black/taa.png",          dark: "/images/brands/Client Logos White Dark Mode/taa_white.png",          alt: "TAA" },
  { light: "/images/brands/Client Logos Black/teriak.png",       dark: "/images/brands/Client Logos White Dark Mode/teriak_white.png",       alt: "Teriak" },
  { light: "/images/brands/Client Logos Black/titans.png",       dark: "/images/brands/Client Logos White Dark Mode/titans_white.png",       alt: "Titans" },
  { light: "/images/brands/Client Logos Black/uib.png",          dark: "/images/brands/Client Logos White Dark Mode/uib_white.png",          alt: "UIB" },
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

const TrustedBy = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="pt-2 md:pt-8 pb-10 md:pb-14">
      <div className="mx-auto max-w-[85rem] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-left text-2xl md:text-[28px] leading-tight font-normal tracking-tight text-gray-900 dark:text-white">
              Leading companies
              <br />trust WaterSec.
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
                          priority={i < 4} // small perf touch
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

export default TrustedBy;
