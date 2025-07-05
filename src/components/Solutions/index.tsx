import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";
import solutionsData from "./solutionsData";

const Solutions = () => {
  return (
    <>
      <section id="features" className="pt-16 pb-6 md:pt-20 md:pb-8 lg:pt-28 lg:pb-10">
        <div className="container">
          <SectionTitle
            title="Our Solutions"
            paragraph="WaterSec is a response to a world critical problem : wasted water in times of water scarcity. Through WaterSec we aim to shape a more sustainable water consumption behavior using cutting-edge technologies."
            center
          />

          <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-4 lg:grid-cols-4 rounded-lg border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            {solutionsData.map((solution) => (
              <SingleSolution key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
