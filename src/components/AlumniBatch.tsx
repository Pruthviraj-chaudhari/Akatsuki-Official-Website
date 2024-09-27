import React, { useState } from 'react';
import AlumniCard from './AlumniCard';
import { alumni2023, alumni2024, alumni2025, AlumniMember } from '../Data/alumniData'; // Import other batches when available
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      <div className="container mx-auto py-8">
        <div className="text-center mb-6">
          <h2 className="max-w-7xl mx-auto text-4xl md:text-5xl font-bold text-black font-sans">
            Alumni <span className="text-red-500">Success</span>
          </h2>

          {/* Updated batch selection with left and right arrows */}
          <div className="flex justify-center items-center mt-7 space-x-2">
            {/* Left Arrow */}
            <button 
              onClick={() => handleBatchChange(selectedBatch > 2023 ? selectedBatch - 1 : 2025)}
              className="p-2 bg-red-500 rounded-lg text-white hover:bg-red-600 hover:text-white transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-4 bg-black px-4 py-2 rounded-lg">
              {[2023, 2024, 2025 ] .map((batch) => (
                <button
                  key={batch}
                  onClick={() => handleBatchChange(batch)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    selectedBatch === batch
                      ? 'bg-red-500 text-white'
                      : ' text-white hover:bg-white hover:text-black'
                  }`}
                >
                  <span className={`hidden md:inline`}>Batch</span> {batch}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => handleBatchChange(selectedBatch < 2025 ? selectedBatch + 1 : 2023)}
              className="p-2 bg-red-500 rounded-lg text-white hover:bg-red-600 hover:text-white transition"
            >
               <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {alumniData[selectedBatch]?.map((alumni) => (
            <AlumniCard key={alumni.name} alumni={alumni} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniBatch;
