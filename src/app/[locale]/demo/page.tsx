import Demo from "@/components/Demo";
import DemoHero from "@/components/DemoHero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaterSec | DEMO",
  description: "",
  // other metadata
};

const DemoPage = () => {
  return (
    <>
     <DemoHero />
      <Demo />
    </>
  );
};

export default DemoPage;
