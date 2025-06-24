import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import axios from "axios";

const DownloadCounter = ({ title }: { title: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  const fetchDownloads = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/downloads/${encodeURIComponent(title)}`);
      setCount(res.data.downloads || 0);
    } catch (error) {
      console.error("Error fetching download count:", error);
    }
  };

  fetchDownloads();
}, [title]);

  return (
    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-danger text-xs 
                    rounded-md bg-white/50 backdrop-blur-sm ring-1 ring-white/10">
      <Download className="w-3 h-3" />
      {count}
    </div>
  );
};

export default DownloadCounter;
