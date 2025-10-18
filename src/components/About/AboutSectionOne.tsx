import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "next-intl";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const t = useTranslations("About"); // You access messages under "about.*"
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p> 
  );

  return (
    <section id="about" className="py-0">

      <div className="container">
        <div className="border-b border-body-color/[.15] pb-0 dark:border-white/[.15]">

          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={t("title")}
                paragraph={t("paragraph")}
                mb="16px"
              />


              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >

              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-[320px] sm:w-[400px] md:w-[460px] lg:w-[500px] xl:w-[600px] 2xl:w-[600px] h-[650px]">

                <Image
                  src="/images/about/aboutGIFv2.gif"
                  alt="about-image"
                  fill
                  className="mx-auto drop-shadow-three dark:hidden object-contain"
                  unoptimized
                />
                <Image
                  src="/images/about/aboutGIFv2.gif"
                  alt="about-image"
                  fill
                  className="mx-auto hidden drop-shadow-three dark:block object-contain"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
