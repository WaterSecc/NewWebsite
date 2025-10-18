import Breadcrumb from "@/components/Common/Breadcrumb";
import Demo from "@/components/Demo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaterSec | DEMO",
  description: "",
  // other metadata
};

const DemoPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Request a DEMO"
        description=""
      />

      <Demo />
    </>
  );
};

export default DemoPage;
