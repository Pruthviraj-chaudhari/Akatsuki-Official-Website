'use client';
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface TimelineEntry {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });
  const navigate = useNavigate();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900 font-sans py-24 md:py-32 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-red-100/30 to-transparent dark:from-red-900/20 rounded-full blur-3xl transform rotate-12 opacity-60 animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-blue-100/30 to-transparent dark:from-blue-900/20 rounded-full blur-3xl transform -rotate-12 opacity-60 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative"
      >
        <div className="text-center max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative inline-block"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-sans tracking-tight">
                Our{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-red-500">Events</span>
                  <div className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-red-500/20 rounded-full" />
                </span>{' '}
                &{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-red-500">Workshops</span>
                  <div className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-red-500/20 rounded-full" />
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Some of Our Works Dedicated To Club
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.98 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 hover:text-red-600 cursor-pointer"
                onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" }); 
                navigate(`/events/${item.id}`);
              }}
              >
                {item.title}
              </h3>
            </div>

            <div
              className="relative pl-20 pr-4 md:pl-4 w-full cursor-pointer"
               onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" }); 
                navigate(`/events/${item.id}`);
              }}
            >
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 hover:text-red-600"
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + 'px' }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-600 via-red-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};



// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);
//   const isInView = useInView(containerRef, { once: false, margin: '-100px' });
//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start 10%', 'end 50%'],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div
//       className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900 font-sans py-24 md:py-32 relative overflow-hidden"
//       ref={containerRef}
//     >
//       {/* Enhanced background decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-red-100/30 to-transparent dark:from-red-900/20 rounded-full blur-3xl transform rotate-12 opacity-60 animate-pulse" />
//         <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-blue-100/30 to-transparent dark:from-blue-900/20 rounded-full blur-3xl transform -rotate-12 opacity-60 animate-pulse" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         className="relative"
//       >
//         <div className="text-center max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
//           <div className="space-y-6 md:space-y-8">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative inline-block"
//             >
//               <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-sans tracking-tight">
//                 Our{' '}
//                 <span className="relative inline-block">
//                   <span className="relative z-10 text-red-500">Events</span>
//                   <div className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-red-500/20 rounded-full" />
//                 </span>{' '}
//                 &{' '}
//                 <span className="relative inline-block">
//                   <span className="relative z-10 text-red-500">Workshops</span>
//                   <div className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-red-500/20 rounded-full" />
//                 </span>
//               </h2>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed"
//             >
//               Some of Our Works Dedicated To Club
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.98 }}
//               animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.98 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"
//             />
//           </div>
//         </div>
//       </motion.div>

//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//         {data.map((item, index) => (
//           <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
//               <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                 <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//               </div>
//               <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
//                 {item.title}
//               </h3>
//             </div>

//             <div className="relative pl-20 pr-4 md:pl-4 w-full">
//               <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
//                 {item.title}
//               </h3>
//               {item.content}{' '}
//             </div>
//           </div>
//         ))}
//         <div
//           style={{
//             height: height + 'px',
//           }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-red-600 via-red-400 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

