import EcoSysHero from "@/components/EcoSysHero";
import JoinEcoSystem from "@/components/JoinEcoSystem";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: " WaterSec | Join Us",
  description: "This is WaterSec's Join Us Page",
  // other metadata
};

const JoinEcoSystemPage = () => {
  return (
    <>
      <EcoSysHero/>
      <JoinEcoSystem />
    </> 
  );
};

export default JoinEcoSystemPage;
