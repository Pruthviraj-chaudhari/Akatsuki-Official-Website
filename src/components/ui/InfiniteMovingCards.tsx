"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";

interface ReviewItem {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

interface InfiniteMovingCardsProps {
  items: ReviewItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-x-hidden px-1 sm:px-2 md:px-8 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-3 sm:gap-4 py-2 sm:py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
  key={item.name + item.quote}
  className="relative flex flex-col justify-between overflow-hidden 
             w-[90vw] xs:w-[80vw] sm:w-[350px] md:w-[400px] lg:w-[450px] 
             max-w-full shrink-0 rounded-xl border border-red-200 bg-white 
             px-6 py-6 shadow-md hover:shadow-lg transition-shadow duration-300 
             min-h-[200px]"  
>
  <Quote className="absolute top-4 left-4 w-6 h-6 text-red-100" />
               <div className="flex-1 flex items-start p-5">
    <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
      {item.quote}
    </p>
  </div>
              <div className="mt-0">
    <div className="flex items-center gap-4">
      <img
        src={item.avatar}
        alt={item.name}
        className="w-10 h-10 rounded-full object-cover border border-red-200"
      />
      <div>
        <h4 className="text-red-600 font-semibold text-sm sm:text-base">
          {item.name}
        </h4>
        <p className="text-xs text-gray-500">{item.title}</p>
      </div>
    </div>
    <div className="mt-3 flex space-x-1">{renderStars(item.rating)}</div>
  </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;




// "use client";

// import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";

// const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     quote: string;
//     name: string;
//     title: string;
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);

//   useEffect(() => {
//     addAnimation();
//     // eslint-disable-next-line
//   }, []);
//   const [start, setStart] = useState(false);
//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);
//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });
//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }
//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "forwards"
//         );
//       } else {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "reverse"
//         );
//       }
//     }
//   };
//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };
//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         // Responsive padding, max width, and edge fade
//         "scroller relative z-20 w-full max-w-7xl overflow-x-hidden px-1 sm:px-2 md:px-8 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           // Responsive gap and padding
//           "flex w-max min-w-full shrink-0 flex-nowrap gap-3 sm:gap-4 py-2 sm:py-4",
//           start && "animate-scroll",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item) => (
//           <li
//             className="relative w-[90vw] xs:w-[80vw] sm:w-[350px] md:w-[400px] lg:w-[450px] max-w-full shrink-0 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-gradient-to-b from-white/90 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 px-3 py-5 xs:px-4 xs:py-6 md:px-8 md:py-8 shadow-lg flex flex-col justify-between"
//             key={item.name + item.quote}
//           >
//             <blockquote>
//               <span className="relative z-20 text-sm xs:text-base md:text-lg leading-relaxed font-normal text-neutral-800 dark:text-gray-100 block mb-4 break-words">
//                 {item.quote}
//               </span>
//               <div className="relative z-20 mt-4 flex flex-row items-center">
//                 <span className="flex flex-col gap-1">
//                   <span className="text-xs xs:text-sm md:text-base font-semibold text-red-600 dark:text-red-400">
//                     {item.name}
//                   </span>
//                   <span className="text-[11px] xs:text-xs md:text-sm text-neutral-500 dark:text-gray-400">
//                     {item.title}
//                   </span>
//                 </span>
//               </div>
//             </blockquote>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InfiniteMovingCards;
