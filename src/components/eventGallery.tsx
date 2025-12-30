import React from 'react';

interface EventGalleryProps {
  photos: string[];
}

const EventGallery: React.FC<EventGalleryProps> = ({ photos }) => {
  return (
    <section className="py-40 px-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Event Gallery</h2>
          <div className="w-28 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600">Capturing moments from our amazing journey</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-12">
          {photos.map((url, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={url}
                alt={`Event photo ${index + 1}`}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-red-600 px-4 py-1 rounded-full text-sm font-medium">
                    Photo {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-20">
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;



// // components/EventGallery.tsx
// import React from 'react';

// interface EventGalleryProps {
//   photos: string[];
// }

// const EventGallery: React.FC<EventGalleryProps> = ({ photos }) => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">Event Gallery</h2>
//           <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600">Capturing moments from our amazing journey</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {photos.map((url, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <img
//                 src={url}
//                 alt={`Event photo ${index + 1}`}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">
//                     Photo {index + 1}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
//             View More Photos
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventGallery;

  