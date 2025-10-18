import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: " WaterSec | Contact Page",
  description: "This is WaterSec's Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
