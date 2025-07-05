import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Solutions from "@/components/Solutions";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import KPIs from "@/components/KPIs";
import Media from "@/components/Media";
import SDG from "@/components/SDGs";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaterSec | Smart Water Management Solutions",
  description: "This is WaterSec's Webiste",
  icons: {
    icon: "/public/favicon.ico", // Or "/logo.png"
  },
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Solutions />
      <KPIs />
      <Testimonials />
      <Media />
      <SDG />
      <AboutSectionFour/>
      <Brands />
    </>
  );
}
