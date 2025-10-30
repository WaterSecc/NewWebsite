
import Breadcrumb from "@/components/Common/Breadcrumb";
import TechSectionOne from "@/components/technologies/techSectionOne";
import ProductsSectionFour from "@/components/Products/productsSectionFour";
import ProductsSectionOne from "@/components/Products/smartBuildingIntro";
import ProductsSectionThree from "@/components/Products/productsSectionThree";
import ProductsSectionTwo from "@/components/Products/smartBuildingSectionTwo";
import Image from "next/image";

import { Metadata } from "next";
import TechSectionTwo from "@/components/technologies/techSectionTwo";
import Features from "@/components/Features";
import ProductsMainSection from "@/components/Products/productMainSection";
import DashboardsSection from "@/components/Products/dashboardsSection";
import TechHero from "@/components/TechHero";

export const metadata: Metadata = {
  title: "WaterSec | Technologies",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogSidebarPage = () => {
  return (
    <>

      <TechHero/>
      <TechSectionOne />
      <TechSectionTwo />
      <ProductsMainSection />
      <DashboardsSection />
      <Features />


    </>
  );
};

export default BlogSidebarPage;
