import React from 'react';

interface AlumniMember {
  name: string;
  role: string;
  company: string[];
  image: string;
  batch: number;
}

interface AlumniCardProps {
  alumni: AlumniMember;
}

const AlumniCard: React.FC<AlumniCardProps> = ({ alumni }) => {
  return (
    <div className="relative text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div
        className="absolute inset-0 bg-black" // Adjusted opacity for lighter overlay
        style={{
          backgroundImage: 'url("./download (7).jpeg")', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="relative z-10"> {/* Ensure content is above the overlay */}
        <div className="flex justify-center mb-4">
          <img
            src={alumni.image}
            alt={alumni.name}
            className="w-32 h-32  object-cover rounded-full border-2 border-gray-200 transition duration-300 ease-in-out hover:border-transparent hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          />
        </div>

        <h3 className="text-xl font-bold text-white">{alumni.name}</h3>
        <p className="text-red-600 font-bold">{alumni.role}</p>

        <div className="mt-2 text-md text-white space-y-1">
          {alumni.company.map((company, index) => (
            <p key={index}>{company}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
