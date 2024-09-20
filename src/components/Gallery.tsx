import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const events = [
  { name: 'Hackathon 2023', photos: Array(6).fill('../images/Alumni/shivang.jpg') },
  { name: 'Code Workshop', photos: Array(4).fill('../images/Alumni/ravi.jpg') },
  { name: 'Tech Talk', photos: Array(3).fill('../images/Alumni/vinay.jpg') },
  { name: 'AI Symposium', photos: Array(5).fill('../images/Alumni/shreya.jpg') },
  { name: 'Web Dev Meetup', photos: Array(7).fill('../images/Alumni/shubham.jpg') },
  { name: 'Data Science Day', photos: Array(4).fill('../images/Alumni/rohan.jpg') },
  { name: 'Mobile App Jam', photos: Array(6).fill('../images/Alumni/mangesh.jpg') },
  { name: 'Cybersecurity Panel', photos: Array(3).fill('../images/Alumni/sakshi.jpg') },
  { name: 'Game Dev Workshop', photos: Array(5).fill('../images/Alumni/vinay.jpg') },
  { name: 'Cloud Computing Seminar', photos: Array(4).fill('../images/Alumni/vinay.jpg') },
];

export default function GallerySection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeEvent, setActiveEvent] = useState(events[0].name);
  const [activeIndex, setActiveIndex] = useState(0);
  const photosPerPage = 6;

  const totalEvents = events.length;
  const displayedEvents = [...events, ...events, ...events]; // Repeat events for wrapping

  const scrollTabs = (direction: 'left' | 'right') => {
    const newIndex = (activeIndex + (direction === 'left' ? -1 : 1) + totalEvents) % totalEvents;
    setActiveIndex(newIndex);
    setActiveEvent(events[newIndex].name);
    setCurrentPage(1);
  };

  const renderPhotos = (photos: string[]) => {
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentPhotos.map((photo, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <img src={photo} alt={`Event photo ${index + 1}`} className="object-cover rounded-lg" />
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
      <Tabs value={activeEvent} onValueChange={setActiveEvent} className="w-full">
        <div className="flex justify-center items-center mb-20">
          <Button
            variant="outline"
            size="icon"
            className="mx-2 bg-red-500 text-white hover:bg-black hover:text-red-500 transition-transform duration-300 ease-in-out"
            onClick={() => scrollTabs('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="overflow-hidden flex justify-center">
            <TabsList className="flex justify-start overflow-x-hidden no-scrollbar h-[60px] bg-black text-white ">
              {displayedEvents.slice(activeIndex, activeIndex + 5).map((event, index) => (
                <TabsTrigger
                  key={event.name}
                  value={event.name}
                  className={`px-4 py-2 whitespace-nowrap transition-colors duration-300 rounded-3xl hover:text-red-500 ${
                    index === 0 ? 'bg-light-black text-red-500' : ' text-white rounded-xl  '
                  }`}
                  onClick={() => {
                    setActiveIndex((activeIndex + index) % totalEvents);
                    setCurrentPage(1);
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
            className="mx-2 bg-red-500 text-white hover:bg-black hover:text-red-500 transition-transform duration-300 ease-in-out"
            onClick={() => scrollTabs('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        {events.map(event => (
          <TabsContent key={event.name} value={event.name}>
            {renderPhotos(event.photos)}
            {renderPagination(event.photos.length)}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
