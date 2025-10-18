import SmartIndustrySectionThree from "@/components/Products/smartIndustrySectionThree";
import SmartIndustrySectionTwo from "@/components/Products/smartIndustrySectionTwo";
import { Metadata } from "next";
import SmartIndustryIntro from "@/components/Products/smartIndustryIntro";

export const metadata: Metadata = {
    title: " WaterSec | Smart Industry",
    description: "",
    // other metadata
};

const SmartIndustry = () => {
    return (
        <>
            <SmartIndustryIntro />
            <SmartIndustrySectionTwo />
            <SmartIndustrySectionThree />
        </>
    );
};

export default SmartIndustry;
