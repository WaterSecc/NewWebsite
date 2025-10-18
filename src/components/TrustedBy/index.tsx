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
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } },
  ],
};

const TrustedBy = () => {
  return (
   <section className="flex flex-col justify-center items-center h-[25vh] py-2">
  <div className="w-full max-w-2xl text-center">
    <h1 className="text-center text-xl font-bold text-black dark:text-white sm:text-xl md:text-[24px] mb-0">
          Trusted By
        </h1>

    <div className="px-1">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-1 py-2"
          >
            <div className="w-[100px] h-[120px] flex items-center justify-center rounded-md">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="object-contain max-h-12 dark:invert"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>
  );
};

export default TrustedBy;
