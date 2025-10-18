import Breadcrumb from "@/components/Common/Breadcrumb";
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
      <Breadcrumb
        pageName="Join Our Eco-System "
        description=""
      />

      <JoinEcoSystem />
    </>
  );
};

export default JoinEcoSystemPage;
