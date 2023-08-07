import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import RoadMapCard from "../../components/RoadMapCard";
import NoBookMarks from "../../components/NoBookMarks";
import BASE_URL from "../../utils/baseURL";

export async function loader() {
  const res = await axios.get(`${BASE_URL}/api/bookmarks?type=roadmap`);
  return res.data;
}

export default function RoadMapBM() {
  const [currentBookmarks, setCurrentBookmarks] = useState([]);
  const { user } = useAuth0();
  const [loading, setShowLoading] = useState(true);

  useEffect(() => {
    setShowLoading(true);
    async function fetchBookMarks() {
      const res = await axios.get(`${BASE_URL}/api/bookmarks?type=roadmap&email=${user.email}`);
      setCurrentBookmarks(res.data);
    }
    
    if (user) {
      fetchBookMarks();
    }
    setShowLoading(false);
  }, [user]);


  async function handleRoadMapBookmark(ind) {
    await axios.delete(`${BASE_URL}/api/bookmarks?name=${currentBookmarks[ind].role}&email=${user.email}&type=roadmap`);
    const res = await axios.get(`${BASE_URL}/api/bookmarks?type=roadmap&email=${user.email}`);
    setCurrentBookmarks(res.data);
  }

  return (
    !loading 
    ? <div className="mt-[4.9375rem] ml-[13.5rem] flex py-[3.25rem] px-[4.25rem] gap-32">
      {
        currentBookmarks.length > 0

        ? <div className="col-1 flex flex-col gap-4">
        {currentBookmarks.map((roadmap, i) => {
          const steps = [roadmap.step1, roadmap.step2, roadmap.step3, roadmap.step4, roadmap.step5];
          return (
            <RoadMapCard key={roadmap.id} ind={i} role={roadmap.role} handleClick={handleRoadMapBookmark} isBookMarked={true} roadMapSteps={steps} />
            )
          })}
      </div>
      : <NoBookMarks />
        }
    </div>
    : <div>Loading...</div>
  );
}