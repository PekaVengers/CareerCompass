import { useLocation } from "react-router";

export default function RoadmapDetail() {
  const location = useLocation();
  const roadmapSteps = location.state.roadmap;
  console.log(roadmapSteps);
  return (
    <div>Roadmap details goes here!</div>
  );
}