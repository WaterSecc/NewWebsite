"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

const SingleProduct = ({ product }: { product: Product }) => {
  const { title, image, paragraph, link } = product;

  return (
    <div className="-mx-4 mb-10 flex flex-wrap justify-center">
      <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-8">
        {/* CARD + BUTTON GROUP */}
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
            {/* Image (slightly smaller with padding) */}
            <div className="relative w-[90%] mx-auto mt-5 h-48 sm:h-52 md:h-56 overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={title || "WaterSec product"}
                fill
                className="object-cover rounded-xl"
                sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, (min-width: 768px) 66vw, 100vw"
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
          {/* ← properly closes the card container */}

          {/* BUTTON (separate element under the card) */}
          <div className="pt-4 w-full">
            <Link
              href={link}
              target="_blank"
              className="
                block w-full rounded-full border-2 border-bleujdid
                px-6 py-3 text-center text-[1.05rem] font-semibold
                text-bleujdid transition-all duration-300
                hover:bg-bleujdid hover:text-white
                group-hover:bg-bleujdid group-hover:text-white
              "
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
