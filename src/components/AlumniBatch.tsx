import React, { useState } from 'react';
import AlumniCard from './AlumniCard';
import { alumni2023 , alumni2024,alumni2025, AlumniMember  } from '../Data/alumniData'; // Import other batches when available

const AlumniBatch: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState(2023); 

  const alumniData: { [key: number]: AlumniMember[] } = {
    2023: alumni2023,
    2024: alumni2024,
    2025: alumni2025,
  };

  const handleBatchChange = (batch: number) => {
    setSelectedBatch(batch);
  };

  return (
    <section id="team" className="bg-gray-100 py-12">
    <div className="container mx-auto py-8 ">
      <div className="text-center mb-6">
      <h2 className="max-w-7xl mx-auto text-4xl md:text-5xl font-bold text-black font-sans">
            Alumni <span className="text-red-500">Success</span>
          </h2>
        <div className="flex justify-center space-x-4 mt-7">
          {[2023  , 2024, 2025 ].map((batch) => (
            <button
              key={batch}
              onClick={() => handleBatchChange(batch)}
              className={`px-4 py-2 rounded-lg ${selectedBatch === batch ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Batch {batch}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {alumniData[selectedBatch]?.map((alumni) => (
          <AlumniCard key={alumni.name} alumni={alumni} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default AlumniBatch;
