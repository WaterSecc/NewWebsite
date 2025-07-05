import WSSingleIntro from "@/components/Products/wsSingleIntro";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: " WaterSec | Sensors",
    description: "",
    // other metadata
};

const WSSingle = () => {
    return (
        <>
            <WSSingleIntro />
        </>
    );
};

export default WSSingle;
