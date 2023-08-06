import RoadmapStep from "../../components/RoadmapStep";
import axios from "axios";
import { useLoaderData } from "react-router";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import RoadMapCard from "../../components/RoadMapCard";


export async function loader() {
  const res = await axios.get("http://localhost:8000/api/bookmarks?type=roadmap");
  return res.data;
}

export default function RoadMapBM() {
  const loaderData = useLoaderData();
  const [currentBookmarks, setCurrentBookmarks] = useState(loaderData);
  const { user } = useAuth0();
  console.log(loaderData);

  async function handleRoadMapBookmark(ind) {
    await axios.delete(`http://localhost:8000/api/bookmarks?name=${currentBookmarks[ind].role}&email=${user.email}&type=roadmap`);
    const res = await axios.get("http://localhost:8000/api/bookmarks?type=roadmap");
    setCurrentBookmarks(res.data);
  }

  return (
    <div className="mt-[4.9375rem] ml-[13.5rem] flex py-[3.25rem] px-[4.25rem] gap-32">
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
      : <div>No BookMarks to show</div>
        }
    </div>
  );
}