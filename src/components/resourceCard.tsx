import React from "react";
import { Download, BookOpen } from "lucide-react";

// Define the type for props
type ResourceCardProps = {
  title: string;
  description: string;
  fileUrl: string;
  imageUrl: string;
};

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  fileUrl,
  imageUrl,
}) => {
  return (
    <div className="bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group hover:scale-[1.03] transform">
      <div className="relative">
  <img
    src={imageUrl}
    alt={title}
    className="h-50 w-full object-cover transition duration-300 group-hover:brightness-105 z-0"
  />
  <div className="absolute top-0 left-0 w-full bg-white  sm:py-3 sm:px-5 rounded-t-3xl z-10">
    <h3 className="text-lg sm:text-xl p-3 md:p-0 font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300 drop-shadow">
      {title}
    </h3>
  </div>
</div>


      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white rounded-b-3xl">
        <div className="mb-4">
          <div className="flex items-center text-gray-700 mb-2">
            <BookOpen className="w-4 h-4 mr-2 text-red-400" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
              Overview
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed pl-3 border-l-4 border-red-200 italic">
            {description}
          </p>
        </div>

        <a
          href={fileUrl}
          download={title}
          className="mt-auto inline-flex items-center justify-center bg-red-500 hover:bg-red-400 text-white font-medium py-2 px-4 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
