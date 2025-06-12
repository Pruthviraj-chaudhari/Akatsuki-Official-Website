import React from "react";
import ResourceCard from "@/components/resourceCard";
import resources from "../data/Resources";
import { Navbar } from "@/components/Navbar";


// Define the type for a single resource
type Resource = {
  title: string;
  description: string;
  fileUrl: string;
  imageUrl: string;
};

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white px-4 sm:px-6 lg:px-10 py-16">
      
      <Navbar className="bg-black/70" />
      <div className="text-center mb-10">
        <h1 className="text-3xl m-5 sm:text-4xl font-bold text-gray-800">
          Resources
        </h1>
        <p className="text-xl text-gray-600 italic mt-2">
          "Empowering You With the Tools to Succeed"
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {resources.map((res: Resource, index: number) => (
          <ResourceCard key={index} {...res} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
