import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";
import solutionsData from "./solutionsData";

const Solutions = () => {
  return (
    <>
      <section id="features" className="pt-8 pb-3 md:pt-12 md:pb-4 lg:pt-16 lg:pb-10">
        <div className="container">
          <SectionTitle
            title="Our Solution: Supporting your work in diverse fields with Water Sec."
            /* WaterSec is a response to a world critical problem : wasted water in times of water scarcity. 
             Through WaterSec we aim to shape a more sustainable water consumption behavior using cutting-edge technologies.*/
             paragraph=""
            
          />

          <div className="flex flex-wrap justify-center gap-8">
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
