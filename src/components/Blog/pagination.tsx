"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const DEFAULT_IMAGE = "/images/blog/default-blog.jpg";
type Post = {
    title: string;
    description: string;
    image?: string;
    link: string;
    author: string;
    pubDate: string;
};

type Props = {
    posts: Post[];
};

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
                        <div className="h-full group shadow-one hover:shadow-two dark:bg-dark relative overflow-hidden rounded-xs bg-white duration-300 flex flex-col justify-between">
                            <Link
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block w-full h-60"
                            >
                                <Image
                                    src="/images/blog/default-blog.jpeg"
                                    alt="Test Image"
                                    width={800}
                                    height={450}
                                    className="object-cover"
                                />
                            </Link>
                            <div className="p-6 sm:p-8">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                                    <Link href={post.link} target="_blank">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mb-2 text-body-color text-base font-medium">
                                    {stripHtml(post.description).slice(0, 150)}...
                                </p>
                                <Link
                                    href={post.link}
                                    target="_blank"
                                    className="text-watersecblue hover:underline text-sm"
                                >
                                    Read more →
                                </Link>
                                <div className="mt-4 flex items-center gap-3 text-sm text-body-color">
                                    <Image
                                        src="/favicon.png" // Adjust path if needed
                                        alt="WaterSec Logo"
                                        width={17}
                                        height={17}
                                        className="object-contain"
                                    />  {post.author} – {new Date(post.pubDate).toDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`h-9 min-w-[36px] rounded-md px-4 text-sm transition ${i + 1 === currentPage
                            ? "bg-watersecblue text-white"
                            : "bg-body-color/15 text-body-color hover:bg-watersecblue hover:text-white"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </>
    );
}
