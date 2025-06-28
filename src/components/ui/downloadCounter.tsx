import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import axios from "axios";

const DownloadCounter = ({ title,trigger }: { title: string; trigger: number; }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  const fetchDownloads = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/downloads/${encodeURIComponent(title)}`);
      setCount(res.data.downloads || 0);
    } catch (error) {
      console.error("Error fetching download count:", error);
    }
  };

  fetchDownloads();
}, [title,trigger]);

  return (
    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-danger  
                    rounded-md bg-white/50 backdrop-blur-sm ring-1 ring-white/10 text-sm sm:text-base md:text-m">
      <Download className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      {count}
    </div>
  );
};

export default DownloadCounter;
