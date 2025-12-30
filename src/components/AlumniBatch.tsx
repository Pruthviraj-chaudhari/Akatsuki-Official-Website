import React, { useState } from 'react';
import AlumniCard from './AlumniCard';
import { alumni2023, alumni2024, alumni2025, alumni2026 } from '../data/alumniData'; // Import other batches when available
import { IAlumni } from '@/types';

const AlumniBatch: React.FC = () => {

  const [selectedBatch, setSelectedBatch] = useState(2026);

  const alumniData: { [key: number]: IAlumni[] } = {
    2026: alumni2026,
    2025: alumni2025,
    2024: alumni2024,
    2023: alumni2023,
  };

  const handleBatchChange = (batch: number) => {
    setSelectedBatch(batch);
  };

  return (
    <section id="team" className="bg-gray-100 py-12 mx-5">
      <div className="container mx-auto py-8 ">
        <div className="text-center mb-6">
          <h2 className="max-w-7xl mx-auto text-4xl md:text-5xl font-bold text-black font-sans">
            Alumni <span className="text-red-500">Success</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 italic">
            Once Akatsuki, always Akatsuki — From campus to career.
          </p>

          <div className="flex justify-center space-x-4 mt-7">
            {Object.keys(alumniData)
              .sort((a, b) => Number(b) - Number(a)) // optional: sort by descending year
              .map((batchStr) => {
                const batch = Number(batchStr); // convert key string to number
                return (
                  <button
                    key={batch}
                    onClick={() => handleBatchChange(batch)}
                    className={`px-4 py-2 rounded-lg ${selectedBatch === batch ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                  >
                    <span className="hidden md:inline">Batch</span> {batch}
                  </button>
                );
              })}
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {alumniData[selectedBatch]?.map(alumni => (
            <AlumniCard key={alumni.name} alumni={alumni} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniBatch;
