import { Product } from "@/types/product";

const productData: Product[] = [
    {
        id: 1,
        title: "WS Single",
        paragraph:
            "An IoT sensor integrating a flow meter and tracks water consumption in realtime.",
        image: "/images/products/wssingle1.jpeg",
        tags: ["Single"],
        link: "",
        page:"/WSsingle",
    },
    {
        id: 2,
        title: "WS Block",
        paragraph:
            "An IoT sensor integrating a flow meter and tracks water consumption in realtime.",
        image: "/images/products/WS_products.jpeg",
        tags: ["Block"],
        link: "",
        page:"/WSblock",
    },
    {
        id: 3,
        title: "WSSM",
        paragraph:
            "Uses image processing and artifical intelligence to make every water meter connected.",
        image: "/images/products/wssm2.jpeg",
        tags: ["Image Recognition"],
        link: "https://www.youtube.com/shorts/7wIAzw_MLQ0",
        page:"/WSSM",
    },
];
export default productData;
