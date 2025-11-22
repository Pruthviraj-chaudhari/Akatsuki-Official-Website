'use client';
import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventDetails } from '@/data/eventDetails';
import { EventData } from '@/types/Event';
import InfiniteMovingCards from './ui/InfiniteMovingCards';
import { motion, useInView } from 'framer-motion';
import ScheduleDemo from './ScheduleDemo';
import EventReels from './EventReels';
import WinnersSection from './winnerSection';
import { ChevronLeft, ChevronRight, XCircle, Image as ImageIcon } from 'lucide-react';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import ScrollReveal from './ui/scrollReveal';

const Heading: React.FC<{ redText: string; blackText: string }> = ({ redText, blackText }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="text-center mb-2"
    >
      <h2 className="text-3xl lg:text-5xl md:text-5xl font-bold mb-2 tracking-tight">
        <span className="relative inline-block">
          <span className="relative z-10 text-red-500">{redText}</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-red-500/20 rounded-full origin-left"
          />
        </span>{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-black dark:text-white">{blackText}</span>
        </span>
      </h2>
    </motion.div>
  );
};

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event: EventData | undefined = id ? eventDetails[id] : undefined;
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!event) {
    return <div className="text-red-500 text-center mt-10">Event not found!</div>;
  }

  const main = event.main[0];
  const visiblePhotos = showAllPhotos ? event.photos : event.photos.slice(0, 6);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex(lightboxIndex !== null ? (lightboxIndex - 1 + event.photos.length) % event.photos.length : null);
  const nextImage = () =>
    setLightboxIndex(lightboxIndex !== null ? (lightboxIndex + 1) % event.photos.length : null);

  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const mainTitleInView = useInView(mainTitleRef, { once: true, margin: '-100px' });

  return (
    <div className="relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/events')}
        className="fixed top-2 left-2 flex sm:ml-1 md:ml-5 items-center gap-2 bg-white dark:bg-zinc-900 text-red-600 hover:bg-red-50 dark:hover:bg-zinc-800 hover:text-red-700 border border-red-200 dark:border-zinc-700 shadow-md rounded-full px-3 py-3 sm:px-2 sm:py-2 text-base sm:text-lg font-semibold transition-all duration-200 z-30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:m-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Hero Section */}
      <div className="relative text-center px-4 pt-24 pb-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={main.coverImage || '/images/default-cover.jpg'}
            alt="Event Background"
            className="w-full h-full object-center object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10">
          <motion.div
            ref={mainTitleRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: mainTitleInView ? 1 : 0, y: mainTitleInView ? 0 : 40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-block relative"
          >
            <h1 className="text-white text-4xl md:text-6xl lg:text-6xl font-bold mb-3">
              {main.title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mainTitleInView ? 1 : 0, y: mainTitleInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-red-100 text-[16px] sm:mx-2 md:mx-20 lg:mx-20 mb-20 leading-tight"
          >
            {main.text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mainTitleInView ? 1 : 0, y: mainTitleInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-4 text-white sm:text-[22px] sm:text-base"
          >
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-white" />
              <span>{main.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-white" />
              <span>{main.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-white" />
              <span>{main.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <ScrollReveal>
        <div className="p-2 sm:p-6 max-w-8xl mt-10 mx-auto font-semibold">
          <Heading redText="About" blackText="Event" />
          <p className="text-md lg:text-lg text-gray-600 text-center italic mb-10">
            Where ideas meet action - learn more about us
          </p>
          <p className=" text-md lg:text-lg text-black mx-5 lg:mx-20 mb-20 flex text-justify">{main.description}</p>
        </div>
      </ScrollReveal>

      {/* Schedule Section */}
      <ScrollReveal delay={0.2}>
        <div className="p-2 sm:p-6 max-w-8xl mx-auto font-semibold">
          <Heading redText="Event" blackText="Schedule" />
          <p className="text-md lg:text-lg text-gray-600 text-center italic mb-3 md:mb-5 lg:mb-10">
            From start to finish - here’s the roadmap to our event.
          </p>
          <div className="mt-10 lg:m-20">
            <ScheduleDemo eventId={id!} />
          </div>
        </div>
      </ScrollReveal>

      {/* Gallery Section */}
      <ScrollReveal delay={0.3}>
        <section className="py-20 bg-white">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heading redText="Event" blackText="Gallery" />
            <p className="text-md lg:text-lg text-gray-600 italic mb-20">
              Capturing moments from our amazing journey
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {visiblePhotos.map((url, index) => (
                <motion.div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-full h-96 overflow-hidden relative rounded-lg shadow-md bg-gray-100">
                    <img
                      src={url}
                      alt={`Event photo ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {event.photos.length > 6 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAllPhotos(!showAllPhotos)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  {showAllPhotos ? 'Hide Photos' : 'View More Photos'}
                </button>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-7xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <XCircle className="w-8 h-8" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={event.photos[lightboxIndex]}
              alt={`Expanded view ${lightboxIndex + 1}`}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Reels Section */}
      {event.reels && event.reels.length > 0 && (
        <ScrollReveal delay={0.3}>
          <div className="sm:mt-10 mt-16">
            <Heading redText="Event" blackText="Reels" />
            <p className="text-md lg:text-lg text-gray-600 text-center italic mb-10">
              Relive the best moments, now in motion.
            </p>
            <EventReels event={event} />
          </div>
        </ScrollReveal>
      )}

      {/* Winners Section */}
      {event.winners && event.winners.length > 0 && (
        <ScrollReveal delay={0.4}>
          <div className="sm:mt-10 mt-16">
            <Heading redText="Event" blackText="Winners" />
            <p className="text-md lg:text-lg text-gray-600 text-center italic mb-10">
              Champion of the challenge!
            </p>
            <WinnersSection event={event} />
          </div>
        </ScrollReveal>
      )}

      {/* Reviews Section */}
      <ScrollReveal delay={0.5}>
        <div className="sm:mt-10 mt-16">
          <Heading redText="Student" blackText="Reviews" />
          <p className="text-md lg:text-lg text-gray-600 text-center italic mb-10">
           What our students say
          </p>
          <InfiniteMovingCards
            items={event.reviews.map((r) => ({
              quote: r.quote,
              name: r.name,
              title: r.username,
              avatar: r.avatar,
              rating: r.rating,
            }))}
            direction="right"
            speed="normal"
            className="m-10"
            pauseOnHover={true}
          />
        </div>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default EventDetails;
