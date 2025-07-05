import Breadcrumb from "@/components/Common/Breadcrumb";
import Career from "@/components/Career";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaterSec | Career",
  description: "",
  // other metadata
};

const DemoPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Career"
        description=""
      />

      <Career />
    </>
  );
};

export default DemoPage;
