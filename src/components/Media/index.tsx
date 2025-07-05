"use client";

import SectionTitle from "../Common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="pt-16 pb-6 md:pt-20 md:pb-8 lg:pt-28 lg:pb-10">
            <div className="container">
                <SectionTitle title="Media" paragraph="" center mb="80px" />

                <Slider {...settings}>
                    {videos.map((videoId, index) => (
                        <div key={index} className="px-4">
                            <div className="relative overflow-hidden rounded-xl shadow-md group">
                                {/* Thumbnail */}
                                <img
                                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                    alt={`YouTube video ${index + 1}`}
                                    className="aspect-video w-full object-cover"
                                />

                                {/* Play button overlay */}
                                <a
                                    href={`https://www.youtube.com/watch?v=${videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
}
