import RoadmapStep from "./RoadmapStep"
import roadmapImg from "../assets/roadmap.png";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function RoadMapCard({ handleClick, roadMapSteps, isBookMarked, ind, role }) {
  return (
    <div className="roadmap mt-[55px] max-w-[700px]">
      <div className="title-con flex mb-[55px]">
        <div className="title flex ml-[190px] mt-[25px]">
          <img src={roadmapImg} alt="" />
          <div className="font-bold text-3xl mt-[25px]">{role ? role : ""} ROADMAP</div>
        </div>
        <button onClick={() => handleClick(ind)} className="bookmark h-[40px] w-[40px] mt-[50px] ml-[176px]">
          {isBookMarked
            ? <FaBookmark />
            : <FaRegBookmark />
          }
        </button>
      </div>

      <div className="steps">
        {
          roadMapSteps.map((step, i) => {
            return (
              <RoadmapStep key={i} number={i + 1} content={step} />
            )
          })
        }
      </div>
    </div>
  )
}