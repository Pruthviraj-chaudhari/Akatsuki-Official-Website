import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center">
      <ImagesSliderDemo />
    </section>
  );
};

export default Hero;

export function ImagesSliderDemo() {
  const images = [
    "/brandnew.png",
    "./images/tech-hunt/teamAkatsuki6_cmfaas.jpg",
    "./images/tech-hunt/tech-1_ve9ht0.jpg",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-start items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 -mt-44">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase mb-2">
            Welcome to Akatsuki
          </h1>
          <h2 className="text-xl md:text-xl lg:text-xl font-bold uppercase mb-12">
            The Coding Club of R.C.Patel Institute of Technology
          </h2>
          <a
            href="#about"
            className="inline-flex items-center justify-center w-16 h-16 text-2xl font-medium text-white border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-10"
          >
            <ChevronsDown className="w-8 h-8 mt-2 animate-bounce" />
          </a>
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}


