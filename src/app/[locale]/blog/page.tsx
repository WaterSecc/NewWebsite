import { fetchMediumPosts } from "@/types/fetchMediumPosts";
import BlogPagination from "@/components/Blog/pagination";
import { Metadata } from "next";
import BlogHero from "@/components/BlogHero";



export const metadata: Metadata = {
  title: "WaterSec | Blogs",
  description: "This is a Blog page for WaterSec",
};
export default async function BlogPage() {
  const posts = await fetchMediumPosts();
  return (
    <section className="pt-[120px] pb-[120px]">
      <BlogHero/>
      <div className="container">
        <BlogPagination posts={posts} />
      </div>
    </section>
  );
}
