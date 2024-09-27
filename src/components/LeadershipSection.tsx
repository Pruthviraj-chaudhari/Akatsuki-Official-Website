import React from 'react';
import leaders from '../Data/leaders';

// Define the Leader type
interface Leader {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

const LeadershipSection: React.FC = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="max-w-7xl mx-auto text-3xl md:text-5xl font-bold text-black font-sans">
            Meet the  
            <span className="text-red-500">{" "}President{" "}</span> 
            and 
            <span className="text-red-500">{" "}Vice President</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">Leadership unveiled</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {
          leaders.map((leader: Leader, index: number) => (
            <div
              key={index}
              className="w-full max-w-md p-8 rounded-lg shadow-md  transition duration-300 transform hover:scale-105 flex flex-col items-center text-center border-2 border-gray-200 hover:border-transparent hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              style={{
                backgroundImage: 'url("./abstract-red-light-lines-pipe-speed-zoom-black-background-technology_1142-8936_upscaled.png")', // Add your image path here
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="w-full mb-6 flex justify-center">
                <img
                  src={leader.image}
                  alt={`${leader.name} profile`}
                  className="w-48 h-48 object-cover rounded-full border-2 border-gray-300 transition duration-300 ease-in-out hover:border-transparent hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{leader.name}</h3>
                <h4 className="text-xl text-white mb-4">{leader.role}</h4>
                <div className="flex space-x-6 justify-center">
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-white"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                  )}
                  {leader.github && (
                    <a
                      href={leader.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-white"
                      aria-label={`${leader.name} GitHub`}
                    >
                      <i className="fab fa-github fa-3x"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
