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
          />

          <div className="flex flex-wrap justify-center gap-8">
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
