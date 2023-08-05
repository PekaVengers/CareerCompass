import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function RoadmapDetail() {
  const location = useLocation();
  const roleInfo = location.state.roleInfo;
  const [resources, setResources] = useState();

  useEffect(() => {
    async function getResources() {
      console.log("fetching data")
      const res = await axios.get(`http://127.0.0.1:8000/api/resources?role=${roleInfo.name}`)
      setResources(res.data);
    }
    getResources();
  }, [roleInfo])

  console.log(resources);

  return (
    <div>Roadmap details goes here!</div>
  );
}