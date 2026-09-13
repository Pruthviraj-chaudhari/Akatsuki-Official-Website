import React, { useRef, useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { EventData } from "@/types/Event";

interface EventReelsProps {
  event: EventData;
}

const EventReels: React.FC<EventReelsProps> = ({ event }) => {
  const reels = event.reels || [];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const pages = Math.ceil(container.scrollWidth / container.clientWidth);
      setTotalPages(pages);
    }
  }, [reels]);

  if (!reels.length) return null;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const page = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Reel Carousel */}
        <div className="relative">
          
          {/* Left Arrow */}
          {totalPages > 1 && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-6 top-1/2 bg-red-500 -translate-y-1/2 z-10 p-2 rounded-full text-white shadow-lg hover:scale-105 transition-transform duration-200 hover:bg-red-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable Reels */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className={`flex gap-6 overflow-x-hidden scroll-smooth no-scrollbar snap-x snap-mandatory 
              ${reels.length < 4 ? "justify-center" : ""}`}
          >
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-48 sm:w-56 group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 snap-center"
              >
                <div className="relative h-96 w-full">
                  <img
                    src={reel.thumbnail}
                    alt={`Reel ${reel.id}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          {totalPages > 1 && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-red-500 text-white shadow-lg hover:scale-105 transition-transform duration-200 hover:bg-red-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/akatsuki_codingclub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-2xl px-5 py-0 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <span className="m-2">Follow us</span>
            <img src="/unused/InstaLogo.webp" alt="Instagram" height="50px" width="50px"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventReels;
