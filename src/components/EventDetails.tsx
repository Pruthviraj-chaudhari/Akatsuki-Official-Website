import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">


      {/* Event Details Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Event Title */}
        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">Converges <span className="text-red-500">2024</span></h2>
        </div>

        {/* Event Image */}
        <div className="w-full my-8 flex justify-center">
          <img
            src="./public/brandnew.png" // Replace with actual image
            alt="Event"
            className="w-3/5 h-auto rounded-lg shadow-lg" // Adjust the width and height
          />
        </div>


        {/* Event Meta Info */}
        <div className="flex justify-center items-center space-x-4 text-gray-600 text-sm mb-8">
          {/* <div className="flex items-center">
            <i className="fas fa-user mr-2"></i>
            <span>Author</span>
          </div> */}
          <div className="flex items-center">
            <i className="fas fa-calendar-alt mr-2"></i>
            <span className="text-base">25 Jun 2021</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-calendar-alt mr-2"></i>
            <span className="text-base">RCPIT, Shirpur</span>
          </div>
          {/* <div className="flex items-center">
            <i className="fas fa-comments mr-2"></i>
            <span>10</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock mr-2"></i>
            <span>12 min Read</span>
          </div> */}
        </div>

        {/* Event Content */}
        <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
          <p className="mb-6">
            The converges at our college is a thrilling platform for tech enthusiasts and problem solvers to showcase their skills. This event brings together some of the brightest minds from various branches, competing in a range of programming challenges designed to test logic, algorithms, and creativity
          </p>
          <p className="mb-6">
            With multiple rounds of increasing complexity, participants will solve real-world problems under time constraints, fostering not only competitive spirit but also teamwork and collaboration.
          </p>
          {/* Highlighted Section */}
          <blockquote className="bg-yellow-100 p-6 rounded-lg border-l-4 border-yellow-400 text-yellow-900 italic font-semibold my-8">
            “ The converges at our college is a thrilling platform for tech enthusiasts and problem solvers to showcase their skills. This event brings together some of the brightest minds from various branches, competing in a range of programming challenges”
          </blockquote>
          <div className="p-6 mt-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Round 1: Chromatic Blast</h3>
            <p className="text-lg text-gray-700 mb-4">
              Converges 2024 is not just a coding event; it's an opportunity to learn, network, and grow. Participants will have the chance to interact with industry professionals, attend workshops, and gain insights into the latest trends in technology.
            </p>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventDetails;

