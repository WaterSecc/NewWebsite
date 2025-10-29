"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E9F1FF] to-white">
      <div className="container mx-auto px-6 pt-52 pb-16 md:pt-46 md:pb-24">
        {/* Title */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1726]">
          Career
        </h1>
      </div>

      {/* Subtle top gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-white/60 to-transparent" />
    </section>
  );
};

export default ContactHero;
