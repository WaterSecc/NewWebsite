"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* === Same Chevron as UseCases === */
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
      <path d={dir === "left" ? "M14 10 L6 80 L14 150" : "M6 10 L14 80 L6 150"} />
    </svg>
  );
}

/* === Arrows styled/positioned like UseCases === */
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      type="button"
      aria-label="Previous"
      onClick={onClick}
      className="
        absolute left-[-22px] md:left-[-28px] top-1/2 -translate-y-1/2
        text-gray-300 hover:text-gray-400 focus:outline-none
        z-40
      "
    >
      <Chevron dir="left" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      type="button"
      aria-label="Next"
      onClick={onClick}
      className="
        absolute right-[-22px] md:right-[-28px] top-1/2 -translate-y-1/2
        text-gray-300 hover:text-gray-400 focus:outline-none
        z-40
      "
    >
      <Chevron dir="right" />
    </button>
  );
}

export default function Video() {
  const videos = [
    "lkep-s6rAdg",
    "d1GK-EjvZac",
    "KvXTMPnVmW0",
    "RBhUfVm-mFY",
    "GGI_h70V1ZE",
    "9Ch_Hw1eXRo",
    "ggLTSiFpjVg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative z-10 py-10 md:py-16 lg:py-20">
      <div className="rounded-2xl bg-[#0A66FF] px-0 py-12 md:px-8 md:py-20 relative min-h-[480px] md:min-h-[560px]">
        <h2 className="ml-8 mb-8 text-left text-3xl font-bold text-white md:text-4xl leading-snug">
          Media. Trusted Water Security Solutions
          <br className="hidden sm:block" />
          for Industry Leaders.
        </h2>

        <Slider {...settings}>
          {videos.map((id, i) => (
            <div key={i} className="px-3">
              <a
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl"
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt={`YouTube video ${i + 1}`}
                  className="aspect-video w-full object-cover"
                />
              </a>
            </div>
          ))}
        </Slider>

        <style jsx global>{`
          .slick-dots {
            bottom: -48px;
          }
          .slick-dots li button:before {
            color: rgba(255, 255, 255, 0.6);
            opacity: 1;
            font-size: 15px;
          }
          .slick-dots li.slick-active button:before {
            color: #ffffff;
            opacity: 1;
          }
          .slick-slide > div > a {
            display: block;
            transition: transform 200ms ease, box-shadow 200ms ease;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
          }
          .slick-slide > div > a:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);
          }
        `}</style>
      </div>
    </section>
  );
}
