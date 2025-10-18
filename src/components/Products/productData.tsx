import { Product } from "@/types/product";

const productData: Product[] = [
    {
        id: 1,
        title: "WS Single",
        paragraph:
            "An IoT sensor integrating a flow meter and tracks water consumption in realtime.",
        image: "/images/products/WS_Single-sensor.png",
        tags: ["Single"],
        link: "",
    },
    {
        id: 2,
        title: "WS Block",
        paragraph:
            "An IoT sensor integrating a flow meter and tracks water consumption in realtime.",
        image: "/images/products/WS_Block-sensor.png",
        tags: ["Block"],
        link: "",
    },
    {
        id: 3,
        title: "WSSM",
        paragraph:
            "Uses image processing and AI to make every water meter connected.",
        image: "/images/products/WSSM-sensor.png",
        tags: ["Image Recognition"],
        link: "https://www.youtube.com/shorts/7wIAzw_MLQ0",
    },
];
export default productData;
