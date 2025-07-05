"use client";

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (

    <section className="pt-8 min-h-[200px] ">
      <div className="border-b border-body-color/[.15] pb-3 dark:border-white/[.15] md:pb-10 lg:pb-18">
      <h2 className="pb-6 mb-8 text-center text-4xl font-extrabold text-black dark:text-white">
            Our Partners
          </h2>
        <div className="container bg-gray-100 p-6 dark:bg-white/5">

          

          <div className="px-2">
            <Slider {...settings}>
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name } = brand;

  return (
    <div className="flex items-center justify-center px-0 py-3">
      <div className=" w-[140px] h-[140px] flex items-center justify-center bg-white rounded-md shadow-sm border border-gray-300">
        <Image
          className="object-contain"
          width={150}
          height={150}
          src={image}
          alt={name}


        />
      </div>
    </div>
  );
};
