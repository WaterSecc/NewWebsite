import Career from "@/components/Career";

import { Metadata } from "next";
import CareerHero from "@/components/CareerHero";

export const metadata: Metadata = {
  title: "WaterSec | Career",
  description: "",
  // other metadata
};

const DemoPage = () => {
  return (
    <>
      <CareerHero/>
      <Career />
    </>
  );
};

export default DemoPage;
