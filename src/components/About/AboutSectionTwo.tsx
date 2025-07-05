import Image from "next/image";

const AboutSectionTwo = () => {
  return (
   <section className="pt-7 pb-2 md:pt-5 md:pb-2 lg:pt-8 lg:pb-2">

      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[900px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about1.png"
                alt="about image"
                width={900}
                height={520}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about1.png"
                alt="about image"
                width={900}
                height={520}
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A more responsible way of water consumption and an optimized water-use efficiency ratio of all citizens and businesses in the MENA region.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  WaterSec is committed to improve water-use efficiency as a solution to water scarcity via a cutting edge technological solution using the power of IOT and AI offering a water monitoring in real-time that enables the customer to keep track of their water consumption.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
