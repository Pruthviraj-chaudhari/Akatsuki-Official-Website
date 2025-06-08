import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, XCircle, Image as ImageIcon } from 'lucide-react';
import { eventImages } from '../Data/eventImages ';

export default function GallerySection() {
  const [activeEvent, setActiveEvent] = useState(eventImages[0].name);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const photosPerPage = 6;

  useEffect(() => {
    const checkScroll = () => {
      if (tabsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        tabsRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      tabsRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      setTimeout(() => {
        if (tabsRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
          setCanScrollLeft(scrollLeft > 0);
          setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
      }, 300);
    }
  };

  const openModal = (photo: string, index: number) => {
    setSelectedImage(photo);
    setCurrentImageIndex(index);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (
      currentImageIndex !== null &&
      currentImageIndex < eventImages[activeIndex].photos.length - 1
    ) {
      const nextIndex = currentImageIndex + 1;
      setSelectedImage(eventImages[activeIndex].photos[nextIndex]);
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      const prevIndex = currentImageIndex - 1;
      setSelectedImage(eventImages[activeIndex].photos[prevIndex]);
      setCurrentImageIndex(prevIndex);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (showModal) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showModal, currentImageIndex]);

  const renderPhotos = (photos: string[]) => {
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    return (
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {currentPhotos.map((photo, index) => (
          <motion.div
            key={index}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => openModal(photo, index + indexOfFirstPhoto)}
          >
            <img
              src={photo}
              alt={`Event photo ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const renderPagination = (totalPhotos: number) => {
    const pageCount = Math.ceil(totalPhotos / photosPerPage);
    if (pageCount <= 1) return null;

    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg bg-red-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`w-10 h-10 rounded-lg transition-colors ${
                currentPage === number
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
          disabled={currentPage === pageCount}
          className="p-2 rounded-lg bg-red-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-red-500">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Capturing moments of learning, growth, and achievement
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={() => scrollTabs('left')}
                className={`p-2 rounded-full bg-red-500 text-white transform transition-opacity duration-200 ${
                  canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            <div className="relative overflow-hidden mx-12">
              <div
                ref={tabsRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth py-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {eventImages.map((event, index) => (
                  <button
                    key={event.name}
                    onClick={() => {
                      setActiveEvent(event.name);
                      setActiveIndex(index);
                      setCurrentPage(1);
                    }}
                    className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                      activeEvent === event.name
                        ? 'bg-red-500 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {event.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={() => scrollTabs('right')}
                className={`p-2 rounded-full bg-red-500 text-white transform transition-opacity duration-200 ${
                  canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {eventImages.map(
            event =>
              event.name === activeEvent && (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderPhotos(event.photos)}
                  {renderPagination(event.photos.length)}
                </motion.div>
              )
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl w-full mx-auto"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selectedImage!}
                  alt="Zoomed Image"
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />

                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <XCircle className="w-8 h-8" />
                </button>

                {currentImageIndex !== null && currentImageIndex > 0 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {currentImageIndex !== null &&
                  currentImageIndex < eventImages[activeIndex].photos.length - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80">
                  {currentImageIndex !== null && (
                    <span>
                      {currentImageIndex + 1} / {eventImages[activeIndex].photos.length}
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
