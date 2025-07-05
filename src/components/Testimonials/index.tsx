import SingleUseCase from "./SingleTestimonial";
 import { useCases } from "@/types/TypeAndData";
 import SectionTitle from "../Common/SectionTitle";
// if you externalize it

const UseCases = () => {
  return (
    <section className="pt-16 pb-6 md:pt-20 md:pb-8 lg:pt-28 lg:pb-4">
      <div className="container">
         <SectionTitle
            title="Real Stories"
            paragraph=""
            center
            mb="50px"
          />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <SingleUseCase key={uc.id} {...uc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
