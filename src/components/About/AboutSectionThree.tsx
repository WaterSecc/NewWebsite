import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "next-intl";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

// ✅ ValueCard component
const ValueCard = ({ title, icon, description }) => {
  return (
    <div className="group relative h-72 w-64 rounded-xl bg-white dark:bg-gray-dark shadow-md p-6 text-center shadow-md ">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 ">
        <div className="mb-4 text-4xl">{icon}</div>

        <h3 className="text-xl font-semibold text-white-800">{title}</h3>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 shadow z-0" />

        <p className="text-sm font-medium text-white-700">{description}</p>

      </div>

    </div>
  );
};

const AboutSectionThree = () => {
  const t = useTranslations("About"); 
  return (
    <section id="about" className="pt-8 md:pt-10 lg:pt-10">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">


          {/* 💡 Our Values Section */}
          <div className="mt-20">
            <h1 className="text-center text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] mb-16">
              {t("values")}
            </h1>
            <div className="flex flex-wrap justify-center gap-10">
              <ValueCard
                title={t("Quality")}
                icon="🏅"
                description={t("Qualitypara")}
              />
              <ValueCard
                title="Integrity"
                icon="🧩"
                description="WE DO THE RIGHT THING, EVEN IN THE FACE OF ADVERSITY. WE ARE COMMITTED TO PRESERVE INTEGRITY AT ALL ORGANIZATIONAL LEVELS."
              />
              <ValueCard
                title="Transparency"
                icon="🔍"
                description="WE ARE OPEN ABOUT HOW WE DO WHAT WE DO.WE AIM TO MAINTAIN RELATIONSHIPS OF TRANSPARENCY NOT ONLY WITHIN OUR TEAM BUT ALSO WITH OUR CLIENTS AND OTHER STAKEHOLDERS."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;