import SmartBuildingIntro from "@/components/Products/smartBuildingIntro";
import SmartBuildingSectionTwo from "@/components/Products/smartBuildingSectionTwo";
import { Metadata } from "next";
import SmartBuildingSectionThree from "@/components/Products/smartBuildingSectionThree";

export const metadata: Metadata = {
    title: " WaterSec | Smart Building",
    description: "",
    // other metadata
};

const SmartBuilding = () => {
    return (
        <>

            <SmartBuildingIntro />
            <SmartBuildingSectionTwo />
            <SmartBuildingSectionThree />
        </>
    );
};

export default SmartBuilding;
