import Image from "next/image";
import SDG from "@/components/SDGs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaterSec | SDGS",
  description: "",
  // other metadata
};

const SDGS = () => {
  return (
    <>
      <section className=" pt-[180px] pb-[10px] ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-1 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  SDGs
                </h2>

                <div>
                  <p className="text-body-color mb-5 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015 as a universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity. The 17 SDGs are integrated, they recognize that action in one area will affect outcomes in others, and that development must balance social, economic and environmental sustainability
                  </p>
                  <div className="mb-5 w-full overflow-hidden rounded-sm">
                    <div className="relative w-full" style={{ aspectRatio: "2 / 1.6" }}>
                      <Image
                        src="/images/blog/SDG.png"
                        alt="SDG image"
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                  <SDG />
                  <div className="border-b border-body-color/[.15] pb-4 dark:border-white/[.15] md:pb-6 lg:pb-8">
                    <h3 className=" mt-20 font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                      WaterSec SDG’s indicators
                    </h3>
                    <p className="text-body-color mb-2 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      WaterSec will monitor:
                    </p>
                    <div className="w-full px-4 max-w-6xl mx-auto mb-10">
                      <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-4 lg:grid-cols-3 rounded-lg border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                        <div>
                          <Image
                            src="/images/blog/water-consumption.png"
                            alt="Water Consumption"
                            width={150}
                            height={150}
                            className="mx-auto mb-2"
                          />
                          <p className="text-lg font-medium text-black dark:text-white">
                            water consumption
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/images/blog/water-saving.png"
                            alt="Water Saving"
                            width={150}
                            height={150}
                            className="mx-auto mb-2"
                          />
                          <p className="text-lg font-medium text-black dark:text-white">
                            water saving
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/images/blog/water-efficiency.png"
                            alt="Water Use Efficiency"
                            width={150}
                            height={150}
                            className="mx-auto mb-2"
                          />
                          <p className="text-lg font-medium text-black dark:text-white">
                            water use efficiency over time
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SDGS;
