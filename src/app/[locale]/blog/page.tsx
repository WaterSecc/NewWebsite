import Breadcrumb from "@/components/Common/Breadcrumb";
import { fetchMediumPosts } from "@/types/fetchMediumPosts";
import BlogPagination from "@/components/Blog/pagination";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "WaterSec | Blogs",
  description: "This is an About page for WaterSec",
  // other metadata
};
export default async function BlogPage() {
  const posts = await fetchMediumPosts();
  return (
    <section className="pt-[120px] pb-[120px]">
      <Breadcrumb
        pageName="WaterSec Blogs"
        description="Here are some clipses of our blogs on Medium"
      />
      <div className="container">
        <BlogPagination posts={posts} />
      </div>
    </section>
  );
}
