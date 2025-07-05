import WSSMIntro from "@/components/Products/wssmIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: " WaterSec | Sensors",
    description: "",
    // other metadata
};

const WSSM = () => {
    return (
        <>
            <WSSMIntro />
        </>
    );
};

export default WSSM;
