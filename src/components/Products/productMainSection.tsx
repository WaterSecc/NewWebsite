import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import productData from "./productData";
import SingleProduct from "./singleproduct";

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
);
const ProductsMainSection = () => {



    return (
        <section className="pt-[120px] pb-[60px]">
        <div className="container">
           <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                 Our Products
                </h1>
          <div className="-mx-4 flex flex-wrap justify-center">
            {productData.map((product) => (
              <div
                key={product.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleProduct product={product} />
              </div>
            ))}
          </div>

        </div>
      </section>
    );

};

export default ProductsMainSection;