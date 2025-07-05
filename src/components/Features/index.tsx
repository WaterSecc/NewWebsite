import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-5 lg:py-8">
        <div className="container">
          <SectionTitle
            title="The Features"
            paragraph=""
            center
          />

          <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-4 lg:grid-cols-4 rounded-lg border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
