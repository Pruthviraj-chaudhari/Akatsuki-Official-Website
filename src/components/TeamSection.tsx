import React, { useState } from 'react';
import teamMembers from '../Data/teamMembers';
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Define the TeamMember interface
interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

const TeamSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 members

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Show 4 more members
  };

  const handleShowLess = () => {
    setVisibleCount(4); // Reset to show only the initial 4 members
  };

  return (
    <div className="w-full py-12 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="max-w-7xl mx-auto text-3xl md:text-5xl font-bold text-black font-sans">
            Meet our <span className="text-red-500">Core Team</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            "The core team behind Akatsuki"
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {teamMembers.slice(0, visibleCount).map((member: TeamMember, index: number) => (
            <div
              key={index}
              className="p-2  pb-5 rounded-lg  transition duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full  overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-md md:text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <h4 className="text-xs md:text-lg text-gray-600 mb-4">{member.role}</h4>
                <div className="flex space-x-6 mt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label={`${member.name} GitHub`}
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={visibleCount < teamMembers.length ? handleLoadMore : handleShowLess}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
          >
            {visibleCount < teamMembers.length ? 'Load More' : 'Show Less'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
