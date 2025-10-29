"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DEFAULT_IMAGE = "/images/blog/default-blog.jpeg";

type Post = {
  title: string;
  description: string;
  image?: string;
  link: string;
  author: string;
  pubDate: string;
};

type Props = { posts: Post[] };

export default function BlogPagination({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const stripHtml = (html: string) => {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <div className="-mx-4 mb-10 flex flex-wrap justify-center">
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-8"
          >
            {/* CARD */}
            <div className="group h-full flex flex-col items-center">
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
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src={post.image || DEFAULT_IMAGE}
                      alt={post.title}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, (min-width: 768px) 66vw, 100vw"
                    />
                  </Link>
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
                    <Link href={post.link} target="_blank">
                      {post.title}
                    </Link>
                  </h3>

                  <p
                    className="
                      mb-4 text-base leading-relaxed
                      text-bleujdid/90 transition-colors
                      group-hover:text-white/90
                    "
                  >
                    {stripHtml(post.description).slice(0, 150)}...
                  </p>

                  {/* Meta */}
                <div
  className="
    mt-2 flex items-center justify-center gap-3 text-sm
    text-bleujdid/80 transition-colors
    group-hover:text-white/80
  "
>
  {/* Logo wrapper: perfectly aligned with text */}
  <span className="relative inline-flex items-center justify-center h-6 w-[90px] flex-shrink-0 align-middle pointer-events-none">
    {/* Default (blue) */}
    <Image
      src="/images/newlogo/WS__bluepositiv.png"
      alt="WaterSec Logo"
      fill
      sizes="90px"
      className="object-contain transition-opacity duration-300 group-hover:opacity-0"
    />
    {/* Hover (white) */}
    <Image
      src="/images/newlogo/WS__positiv.png"
      alt="WaterSec Logo White"
      fill
      sizes="90px"
      className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  </span>

  {/* Date */}
  <span className="whitespace-nowrap align-middle relative top-[1px]">
    {new Date(post.pubDate).toDateString()}
  </span>
</div>


                </div>
              </div>

              {/* READ MORE BUTTON */}
              <div className="pt-4 w-full">
                <Link
                  href={post.link}
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
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`h-9 min-w-[36px] rounded-md px-4 text-sm transition ${
              i + 1 === currentPage
                ? "bg-bleujdid text-white"
                : "bg-body-color/15 text-body-color hover:bg-bleujdid hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
