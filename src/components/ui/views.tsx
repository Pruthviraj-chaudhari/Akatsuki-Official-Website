import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import axios from "axios";

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementAndFetchViews = async () => {
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/views`);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/views`);
        setViews(res.data.views);
      } catch (err) {
        console.error("View count fetch error:", err);
      }
    };

    incrementAndFetchViews();
  }, []);

  return (
    <div className="flex items-center gap-2 w-fit px-3 py-1 bg-white text-black border border-gray-300 rounded-full shadow-sm text-sm sm:text-base md:text-m">
      <Eye className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      {views}
    </div>
  );
};

export default ViewCounter;
