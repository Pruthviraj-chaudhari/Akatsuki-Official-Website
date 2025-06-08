import { ChevronDownIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
// import { cn } from "@/lib/utils";

const images = [
  {
    src: './assets/background1.jpg',
    alt: 'Akatsuki Image 1',
  },
  {
    src: './assets/background2.jpg',
    alt: 'Akatsuki Image 2',
  },
  {
    src: './assets/background3.jpg',
    alt: 'Akatsuki Image 3',
  },
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const contentSectionRef = useRef<HTMLElement>(null);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex].src;
    img.onload = () => {
      setLoadedImages(prev => new Set(prev).add(nextIndex));
    };
    setNextImageIndex(nextIndex);
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loadedImages.has(nextImageIndex)) {
        setCurrentImageIndex(nextImageIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImageIndex, loadedImages]);

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-16">
        <div className="absolute inset-0 bg-black">
          <AnimatePresence mode="wait">
            {loadedImages.has(currentImageIndex) && (
              <motion.div
                key={currentImageIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="h-full w-full object-cover object-center"
                  style={{ opacity: 1 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative z-20 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-8"
          >
            <div className="md:p-3 md:h-11 md:mb-6 "></div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Akatsuki
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              The Coding Club of R.C.Patel Institute of Technology
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center gap-4 mt-8"
            >
              <button
                onClick={scrollToContent}
                className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDownIcon className="w-10 h-10" />
        </motion.button>
      </section>

      <section ref={contentSectionRef} id="about" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div className="flex flex-col items-center gap-4 justify-center mb-0 pb-0">
              <div className="flex  items-center gap-4 justify-center">
                <a href="/">
                  <img
                    src="../assets/rcpitlogo.jpg"
                    alt="About Us Logo"
                    className="max-w-lg max-h-60 h-24 md:h-32"
                  />
                </a>
                <a href="/">
                  <img
                    src="../assets/akatsukilogo.jpg"
                    alt="About Us Logo"
                    className="max-w-lg max-h-60 h-32 md:h-40"
                  />
                </a>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-red-500">Us</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <img
                src="../assets/group.jpg"
                alt="Team collaboration"
                className="w-full md:w-1/3 rounded-lg shadow-xl"
              />
              <div className="w-full md:w-1/2 space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-900">Akatsuki Coding Club</span> was
                  founded in 2021 by a group of passionate{' '}
                  <span className="italic">Computer Engineering</span> students, driven by the
                  vision to create a vibrant and collaborative environment for coding enthusiasts.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With support from faculty and juniors, the club helps students enhance their
                  technical skills through workshops, coding challenges, and mentorship. Akatsuki
                  serves as a hub for learning, innovation, and connecting with seniors and alumni,
                  empowering members to grow and excel in the tech world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;

// export function ImagesSliderDemo() {
// const images = [
//   "./1e05902e-5762-4b46-9acd-b658abdec30f.jpg",
//   "./images/tech-hunt/teamAkatsuki6_cmfaas.jpg",
//   "./images/tech-hunt/tech-1_ve9ht0.jpg",
// ];
//   return (
//     <ImagesSlider className="h-screen top-0" images={images}>
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: -80,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.6,
//         }}
//         className="z-50 flex flex-col justify-start items-center"
//       >
//         <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 -mt-44">
//           <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase mb-2">
//            Welcome to Akatsuki
//           </h1>
//           <h2 className="text-xl md:text-xl lg:text-xl font-bold uppercase mb-12">
//             The Coding Club of R.C.Patel Institute of Technology
//           </h2>
//           <a
//             href="#about"
//             className="inline-flex items-center justify-center w-16 h-16 text-2xl font-medium text-white border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-10"
//           >
//             <ChevronsDown className="w-8 h-8 mt-2 animate-bounce" />
//           </a>
//         </motion.p>
//       </motion.div>
//     </ImagesSlider>

//   );
// }
