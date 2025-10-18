import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Solutions from "@/components/Solutions";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import KPIs from "@/components/KPIs";
import Media from "@/components/Media";
import SDG from "@/components/SDGs";
import TrustedBy from "@/components/TrustedBy";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import MapSection from "@/components/About/MapSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaterSec | Smart Water Management Solutions",
  description: "This is WaterSec's Website",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <TrustedBy />
      <Solutions />
      <KPIs />
      <Testimonials />
      <Media />
      <MapSection />
      {/*<Brands />*/}
    </main>
  );
}