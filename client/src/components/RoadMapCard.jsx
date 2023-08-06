import RoadmapStep from "./RoadmapStep"
import roadmapImg from "../assets/roadmap.png";
import bookmark from "../assets/bookmark.svg";

export default function RoadMapCard({ roadMapSteps }) {
  console.log(roadMapSteps)
  return (
    <div className="roadmap mt-[55px] max-w-[700px]">
      <div className="title-con flex mb-[55px]">
        <div className="title flex ml-[190px] mt-[25px]">
          <img src={roadmapImg} alt="" />
          <div className="font-bold text-3xl mt-[25px]">ROADMAP</div>
        </div>
        <div className="bookmark h-[40px] w-[40px] mt-[50px] ml-[176px]">
          <img src={bookmark} alt="" />
        </div>
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