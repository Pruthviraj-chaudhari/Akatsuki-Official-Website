import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import axios from "axios";

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
  const incrementAndFetchViews = async () => {
    try {
      await axios.post("http://localhost:4000/api/views");
      const res = await axios.get("http://localhost:4000/api/views");
      setViews(res.data.views);
    } catch (err) {
      console.error("View count fetch error:", err);
    }
  };

  incrementAndFetchViews();
}, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-md text-white">
      <Eye className="w-4 h-4" />
      <span className="text-sm font-medium">{views}</span>
    </div>

  );
};

export default ViewCounter;
