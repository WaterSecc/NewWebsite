import { Metadata } from "next";
import WSBlockIntro from "@/components/Products/wsBlockIntro";

export const metadata: Metadata = {
    title: " WaterSec | Sensors",
    description: "",
    // other metadata
};

const WSBlock = () => {
    return (
        <>
            <WSBlockIntro />
        </>
    );
};

export default WSBlock;
