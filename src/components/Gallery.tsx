import { useState, useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, XCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { eventImages } from '../Data/eventImages ';

export default function GallerySection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeEvent, setActiveEvent] = useState(eventImages[0].name);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const photosPerPage = 6;

  useEffect(() => {
    updateArrowVisibility();
  }, [activeIndex]);

  const updateArrowVisibility = () => {
    setShowLeftArrow(activeIndex > 0);
    setShowRightArrow(activeIndex < eventImages.length - 1);
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    const tabsElement = tabsRef.current;
    if (tabsElement) {
      let newIndex;
  
      if (direction === 'left') {
        newIndex = activeIndex === 0 ? eventImages.length - 1 : activeIndex - 1;
      } else {
        newIndex = activeIndex === eventImages.length - 1 ? 0 : activeIndex + 1;
      }
  
      setActiveIndex(newIndex);
      setActiveEvent(eventImages[newIndex].name);
      setCurrentPage(1);
  
    
      const tabElement = tabsElement.children[newIndex] as HTMLElement;
      tabElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };
  
  const openModal = (photo: string, index: number) => {
    setSelectedImage(photo);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (currentImageIndex !== null && currentImageIndex < eventImages[activeIndex].photos.length - 1) {
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

  const renderPhotos = (photos: string[]) => {
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentPhotos.map((photo, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <img
              src={photo}
              alt={`Event photo ${index + 1}`}
              className=" rounded-lg cursor-pointer h-auto"
              onClick={() => openModal(photo, index)}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderPagination = (totalPhotos: number) => {
    const pageNumbers = Array.from({ length: Math.ceil(totalPhotos / photosPerPage) }, (_, i) => i + 1);

    return (
      <div className="flex justify-center mt-4 space-x-2">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 rounded ${currentPage === number ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-black font-sans">
          Our <span className="text-red-500">Events</span> & <span className="text-red-500">Workshops</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4">"Some of Our Works Dedicated To Club"</p>
      </div>

      <img className='mx-auto h-56 -mb-11 z-50' src="/yahiko-bg.webp" alt="" />
     
      <Tabs value={activeEvent} onValueChange={setActiveEvent} className="w-full -z-50">
        <div className="flex justify-center items-center mb-20">
          <Button
            variant="outline"
            size="icon"
            className="mx-2 bg-red-500 text-white hover:bg-red-600 hover:text-white h-14"
            onClick={() => scrollTabs('left')}
            disabled={!showLeftArrow}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="overflow-hidden flex justify-center -z-50">
            <TabsList ref={tabsRef} className="flex justify-start overflow-x-hidden scroll-smooth pl-4 no-scrollbar no-scrollbar h-14 w-[700px] bg-black text-white px-3">
              {eventImages.map((event, index) => (
                <TabsTrigger
                  key={event.name}
                  value={event.name}
                  className={`px-4 py-2 whitespace-nowrap transition-colors duration-300 rounded-3xl hover:text-red-500 ${activeIndex === index ? 'bg-light-black text-red-500' : 'text-white'}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setCurrentPage(1);

                    // Scroll the clicked tab into view and center it
                    const tabElement = tabsRef.current?.children[index] as HTMLElement;
                    tabElement?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                      inline: 'center',
                    });
                  }}
                >
                  {event.name}
                </TabsTrigger>

              ))}
            </TabsList>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="mx-2 bg-red-500 text-white hover:bg-red-600 hover:text-white h-14"
            onClick={() => scrollTabs('right')}
            disabled={!showRightArrow}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {eventImages.map((event) => (
          <TabsContent key={event.name} value={event.name}>
            {renderPhotos(event.photos)}
            {renderPagination(event.photos.length)}
          </TabsContent>
        ))}
      </Tabs>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative max-w-6xl w-full mx-auto p-4">
            <img src={selectedImage!} alt="Zoomed Image" className="object-contain max-h-[95vh] mx-auto rounded-lg" />
            <button onClick={closeModal} className="absolute top-4 right-4 text-white">
              <XCircle className="h-8 w-8" />
            </button>

            {currentImageIndex !== null && currentImageIndex > 0 && (
              <Button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 text-black"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}

            {currentImageIndex !== null && currentImageIndex < eventImages[activeIndex].photos.length - 1 && (
              <Button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 text-black"
                style={{ transform: 'translate(50%, -50%)' }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
