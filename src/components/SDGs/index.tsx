import Image from "next/image";

const SDGCardVertical = ({ image, title, description }) => (
  <div className="bg-white dark:bg-gray-dark shadow-md p-6 flex flex-col items-center ">
    <Image
      src={image}
      alt={title}
      width={160}
      height={160}
      className="object-contain mb-4"
    />
    <h3 className="text-lg font-bold text-black dark:text-white mb-2">{title}</h3>
    <p className="text-sm text-body-color dark:text-white leading-relaxed">{description}</p>
  </div>
);

const SDGCardHorizontal = ({ image, title, description }) => (
  <div className="bg-white dark:bg-gray-dark shadow-md p-4 flex items-start gap-10">
    <Image
      src={image}
      alt={title}
      width={100}
      height={100}
      className="object-contain flex-shrink-0"
    />
    <div>
      <h3 className="text-md font-bold text-black dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-body-color dark:text-white leading-relaxed">{description}</p>
    </div>
  </div>
);

const SDG = () => {
  return (
    <section id="about" className="pt-16 pb-4">
      <div className="container">
        <h1 className="text-center text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px] mb-10">
          SDGs
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-y-10 lg:gap-x-12 px-4">
          {/* Left card */}
          <div className="w-full lg:w-[300px]">
            <SDGCardVertical
              image="/images/sdg/sdg6.png"
              title="Clean Water and Sanitation"
              description="By improving water use efficiency through the assessment of water consumption and intensity, employing water saving technology."
            />
          </div>

          {/* Right stacked cards */}
          <div className="w-full lg:w-[500px] flex flex-col gap-y-10">
            <SDGCardHorizontal
              image="/images/sdg/sdg12.png"
              title="Responsible Consumption and Production"
              description="By ensuring a sustainable management and efficient use of water resources."
            />
            <SDGCardHorizontal
              image="/images/sdg/sdg13.png"
              title="Climate Action"
              description="By offering a solution shaping a more responsible consumption behavior towards water and raising awareness on water scarcity's negative socio-economic impact."
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default SDG;