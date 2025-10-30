import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Values from "@/components/Values";
import AdvisorsSection from "@/components/About/AboutSectionFive";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import MapSection from "@/components/About/MapSection";
import AboutHero from "@/components/AboutHero";

export const metadata: Metadata = {
  title: "WaterSec | About WaterSec",
  description: "This is an About page for WaterSec",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutHero/>
      <AboutSectionOne />
      <AboutSectionTwo />
      <Values />
      <AboutSectionFour />
      <AboutSectionSix />
      <AdvisorsSection />
      <MapSection />

    </>
  );
};

export default AboutPage;
