"use client";
import { motion, Variants } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";
import solutionsData from "./solutionsData";

const Solutions = () => {
  // Animation variants
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="features" className="pt-8 pb-3 md:pt-12 md:pb-4 lg:pt-16 lg:pb-10">
      <div className="container">
        <SectionTitle
          title="Our Solution: Supporting your work in diverse fields with Water Sec."
          paragraph=""
        />

        {/* Motion container for staggered fade-in */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {solutionsData.map((solution) => (
            <motion.div key={solution.id} variants={fadeInUp}>
              <SingleSolution solution={solution} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
