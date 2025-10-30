"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const DemoHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E9F1FF] to-white">
      <div className="container mx-auto px-6 pt-52 pb-16 md:pt-36 md:pb-24">
        {/* Title */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1726]">
          Request your Demo
        </h1>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 md:mt-12 max-w-5xl w-full"
        >
         
            {/* Aspect ratio container */}
            <div className="relative w-full aspect-[16/10] rounded-[26px] overflow-hidden">
              <Image
                src="/images/demo/IPadDemo.png" 
                alt="WaterSec dashboard preview"
                fill
                className="object-contain"
                sizes="(min-width: 1280px) 960px, (min-width: 768px) 80vw, 100vw"
                priority
              />
         
          </div>
        </motion.div>

        {/* Pagination dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-watersecblue" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
        </div>
      </div>

      {/* Subtle top gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-white/60 to-transparent" />
    </section>
  );
};

export default DemoHero;
