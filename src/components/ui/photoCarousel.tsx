import React, { useState, useEffect, useRef } from 'react';

interface PhotoCarouselProps {
  photos: string[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive card width/height (make images bigger)
  const getCardSize = () => {
    if (window.innerWidth < 640) return { width: 220, height: 140 };
    if (window.innerWidth < 1024) return { width: 320, height: 200 };
    return { width: 420, height: 260 };
  };
  const [cardSize, setCardSize] = useState(getCardSize());
  useEffect(() => {
    const handleResize = () => setCardSize(getCardSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamically calculate radius to prevent collision, add a little extra for spacing
  const numImages = photos.length;
  const angleStep = 360 / numImages;
  const rotation = -currentIndex * angleStep;
  const radius = numImages > 1 ? (cardSize.width / (2 * Math.tan(Math.PI / numImages))) * 1.15 : cardSize.width * 1.3;

  useEffect(() => {
    if (!isAutoRotating) return;
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % photos.length);
    }, 4000); // 4 seconds per image
    return () => {
      clearInterval(intervalId);
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current);
      }
    };
  }, [isAutoRotating, photos.length]);

  const resetAutoRotateTimer = () => {
    if (autoRotateTimeoutRef.current) {
      clearTimeout(autoRotateTimeoutRef.current);
    }
    autoRotateTimeoutRef.current = setTimeout(() => {
      setIsAutoRotating(true);
    }, 5000);
  };

  // Manual navigation: rotate by one image
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev + 1) % photos.length);
    setIsAutoRotating(false);
    resetAutoRotateTimer();
  };
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev - 1 + photos.length) % photos.length);
    setIsAutoRotating(false);
    resetAutoRotateTimer();
  };
  const handleCarouselClick = () => {
    setIsAutoRotating(prev => !prev);
    if (autoRotateTimeoutRef.current) {
      clearTimeout(autoRotateTimeoutRef.current);
    }
  };

  // Simple, responsive container
  const containerClasses =
    'relative mx-auto my-12 sm:my-16 flex items-center justify-center w-full max-w-[98vw] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] aspect-[16/9]';
  const carouselClasses =
    'absolute w-full h-full';
  const cardClasses =
    'absolute rounded-xl overflow-hidden shadow-xl border-0 bg-transparent transition-all duration-300';
  const imgClasses =
    'w-full h-full object-cover object-center rounded-xl ';

  return (
    <div
      className={containerClasses}
      style={{ perspective: '1200px', minHeight: cardSize.height + 40 }}
      onClick={handleCarouselClick}
    >
      <div
        className={carouselClasses}
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation}deg)`,
          transition: 'transform 1s cubic-bezier(.4,2,.6,1)',
        }}
      >
        {photos.map((photo, index) => {
          const imgAngle = index * angleStep;
          return (
            <div
              key={index}
              className={cardClasses}
              style={{
                width: cardSize.width,
                height: cardSize.height,
                left: `calc(50% - ${cardSize.width / 2}px)`,
                top: `calc(50% - ${cardSize.height / 2}px)` ,
                transform: `rotateY(${imgAngle}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={photo}
                alt={`event-photo-${index}`}
                className={imgClasses}
                draggable={false}
              />
            </div>
          );
        })}
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-full opacity-70 hover:opacity-100 shadow-lg ring-2 ring-red-500/30 focus:ring-4 focus:ring-red-500/60 transition-all duration-300 z-10"
        style={{ fontSize: 24 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-full opacity-70 hover:opacity-100 shadow-lg ring-2 ring-red-500/30 focus:ring-4 focus:ring-red-500/60 transition-all duration-300 z-10"
        style={{ fontSize: 24 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PhotoCarousel;
