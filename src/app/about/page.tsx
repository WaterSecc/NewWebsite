import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Values from "@/components/Values";
import AdvisorsSection from "@/components/About/AboutSectionFive";

export const metadata: Metadata = {
  title: "WaterSec | About WaterSec",
  description: "This is an About page for WaterSec",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description=""
        bgImage="/images/about/about-bg.jpeg" // Remove this line to fall back to SVGs
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Values />
      <AboutSectionFour /> 
      <AdvisorsSection/>
    </>
  );
};

export default AboutPage;
