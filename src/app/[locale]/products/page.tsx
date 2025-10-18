
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductsSectionFour from "@/components/Products/productsSectionFour";
import ProductsSectionOne from "@/components/Products/smartBuildingIntro";
import ProductsSectionThree from "@/components/Products/productsSectionThree";
import ProductsSectionTwo from "@/components/Products/smartBuildingSectionTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: " WaterSec | Products Page",
    description: "This is WaterSec's ProductsPage",
    // other metadata
};

const ProductPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Products Page"
                description=""
            />
            <ProductsSectionOne />
            <ProductsSectionTwo />
            <ProductsSectionThree />
            <ProductsSectionFour />
        </>
    );
};

export default ProductPage;
