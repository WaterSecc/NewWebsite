"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <button
            aria-label="Previous"
            onClick={onClick}
            className="
        absolute left-[-18px] top-1/2 -translate-y-1/2 z-20
        h-28 w-8 md:h-28 md:w-8
        text-white/50 hover:text-white/80 transition
      "
        >
            {/* tall, thin chevron */}
            <svg viewBox="0 0 24 96" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 12 L6 48 L18 84" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <button
            aria-label="Next"
            onClick={onClick}
            className="
        absolute right-[-18px] top-1/2 -translate-y-1/2 z-20
        h-24 w-6 md:h-28 md:w-8
        text-white/50 hover:text-white/80 transition
      "
        >
            <svg viewBox="0 0 24 96" className="h-full w-full rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 12 L6 48 L18 84" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
        slidesToShow: 3,          // unchanged
        slidesToScroll: 1,        // unchanged
        autoplay: true,           // unchanged
        autoplaySpeed: 3000,      // unchanged
        arrows: true,             // show arrows like the mock
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
                    {/* Heading inside the blue card, white & left-aligned */}
                    <h2 className="ml-8 mb-8 text-left text-3xl font-bold text-white md:text-4xl leading-snug">
                        Media. Trusted Water Security Solutions<br className="hidden sm:block" />
                        for Industry Leaders.
                    </h2>

                    {/* Slider of YouTube thumbnails (click to open YouTube) */}
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

                    {/* slick CSS tweaks scoped to this component */}
                    <style jsx global>{`
            /* position dots inside the blue card & restyle */
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
            /* make slides' images have a nice shadow & hover lift */
            .slick-slide > div > a {
              display: block;
              transition: transform 200ms ease, box-shadow 200ms ease;
              box-shadow: 0 6px 20px rgba(0,0,0,0.18);
            }
            .slick-slide > div > a:hover {
              transform: translateY(-2px);
              box-shadow: 0 10px 26px rgba(0,0,0,0.22);
            }
          `}</style>
                </div>
            
        </section>
    );
}
