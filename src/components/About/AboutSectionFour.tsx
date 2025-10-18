"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Tall chevron used by both arrows */
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
      {/* left:  / ; right: \  */}
      <path d={dir === "left" ? "M14 10 L6 80 L14 150" : "M6 10 L14 80 L6 150"} />
    </svg>
  );
}

/* Arrows – positioned right beside the avatar */
const NextArrow = ({ onClick }: any) => (
  <button
    type="button"
    aria-label="Next"
    onClick={onClick}
    className="chev chev--right"
  >
    <Chevron dir="right" />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    type="button"
    aria-label="Previous"
    onClick={onClick}
    className="chev chev--left"
  >
    <Chevron dir="left" />
  </button>
);

const AboutSectionFour = () => {
  const TeamMembers = [
    {
      name: "Mohamed GUENBRI",
      title: "Project Manager",
      linkedin: "https://www.linkedin.com/in/mohamed-guenbri-73601169/",
      image: "/images/about/mohamed.png",
    },
    {
      name: "Yasmine BEN MILOUD",
      title: "Product Manager",
      linkedin: "https://www.linkedin.com/in/yasmine-ben-miloud-04567683/",
      image: "/images/about/yassmine.png",
    },
    {
      name: "Slim BOUAKEZ",
      title: "Business Manager",
      linkedin: "https://www.linkedin.com/in/ahmed-slim-bouakez/",
      image: "/images/about/slim.png",
    },
    {
      name: "Zoubeir ZARROUK",
      title: "Technical Manager",
      linkedin: "https://www.linkedin.com/in/zoubeirzarrouk/",
      image: "/images/about/zoubeir.png",
    },
    {
      name: "Khoubeib TLILI",
      title: "Software Manager",
      linkedin: "https://www.linkedin.com/in/khoubeib-tlili-56b2a579/",
      image: "/images/about/khoubeib.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative z-10 bg-gradient-to-b from-[#E6F0FF] to-white py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="ml-8 mb-12 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
          Founders
        </h2>

        {/* slider wrapper with overflow visible so arrows aren’t clipped */}
        <div className="founders-slider relative overflow-visible">
          <Slider {...settings}>
            {TeamMembers.map((m, i) => (
              <div key={i} className="px-2 text-center">
                {/* relative container so the chevrons can sit next to the circle */}
                <div className="relative mx-auto mb-6 h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={224}
                    height={224}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-watersecblue">{m.name}</h3>
                <p className="text-sm text-gray-600">{m.title}</p>

                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-gray-400 transition hover:text-watersecblue"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 2.77 2.23 5 5 5h14c2.77 0 5-2.23 5-5v-14c0-2.77-2.23-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.6z" />
                  </svg>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Minimal CSS to perfectly match the mock */}
      <style jsx global>{`
        /* let arrows stick out of the track like the mock */
        .founders-slider .slick-list { overflow: visible; }

        /* make each slide a proper positioning context (for alignment) */
        .founders-slider .slick-slide > div { position: relative; }

        /* arrow base styles */
        .founders-slider .chev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(148, 163, 184, 0.65); /* slate-400 with a touch more opacity */
          transition: color 0.2s ease;
          z-index: 10;
          pointer-events: auto;
          filter: drop-shadow(0 0 1px rgba(0,0,0,.08));
        }
        .founders-slider .chev:hover { color: rgba(148, 163, 184, 0.9); }

        /* sit right beside the circle (tweak if you change avatar size) */
        .founders-slider .chev--left  { left: -18px; }
        .founders-slider .chev--right { right: -18px; }
      `}</style>
    </section>
  );
};

export default AboutSectionFour;
