import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import books from "../assets/book.svg";
import yt from "../assets/yt.png"
import community from "../assets/community.png"
import hashnode from "../assets/hashnode.png"
import freecodecamp from "../assets/freecodecamp.png"
import stackoveflow from "../assets/stackoverflow.png"
import RoadmapStep from "../components/RoadmapStep";
import Card from "../components/Card";
import { getRoleData } from "../utils/getRoleData";
import RoadMapCard from "../components/RoadMapCard";

export default function RoadmapDetail() {
  // const location = useLocation();
  // const roleInfo = location.state.roleInfo;
  const roleInfo = getRoleData()[0];
  console.log("Role Info", roleInfo);
  const [resources, setResources] = useState();

  useEffect(() => {
    async function getResources() {
      console.log("fetching data")
      const res = await axios.get(`http://127.0.0.1:8000/api/resources?role=${roleInfo.name}`)
      setResources(res.data);
    }
    getResources();
  }, [])

  console.log(resources);

  return (
    <div className="flex mt-[90px] ml-[216px] mb-[117px] mr-[174px] h-[1991px]">
      <div className="col-1">
        <div className="job max-w-[700px] h-[248px] bg-[#D9FEDC] rounded-3xl p-10">
          <div className="job-title text-3xl font-bold mb-6">
            {roleInfo.name}
          </div>
          <div className="job-des text-lg">
            {roleInfo.description}
          </div>
        </div>

        <RoadMapCard roadMapSteps={roleInfo.roadmap}/>

      </div>
      <div className="col-2 ml-[57px]">
        <div className="book">
          <div className="title flex gap-3 mb-[39px]">
            <img className="w-[65px] h-[65px]" src={books} alt="" />
            <div className="text-3xl font-bold mt-[9px]">REFERNCE BOOKS</div>
          </div>
          <Card
            title="Full Stack Web Development For Beginners"
            content="This book is written for absolute beginners who want to become full stack web application developer."
            type="price"
            priceAmount="Rs 4599.00"
            link="Amazon.in"
          /><Card
            title="Full Stack Web Development For Beginners"
            content="This book is written for absolute beginners who want to become full stack web application developer."
            type="price"
            priceAmount="Rs 4599.00"
            link="Amazon.in"
          /><Card
            title="Full Stack Web Development For Beginners"
            content="This book is written for absolute beginners who want to become full stack web application developer."
            type="price"
            priceAmount="Rs 4599.00"
            link="Amazon.in"
          />
        </div>
        <div className="yt">
          <div className="title flex gap-3 mb-[39px]">
            <img src={yt} alt="" />
            <div className="text-3xl font-bold">YOUTUBE CHANNELS</div>
          </div>
          <Card
            title="Complete Web Developer Bootcamp"
            content="Web Development Tutorials"
            type="yt"
          /><Card
            title="Complete Web Developer Bootcamp"
            content="Web Development Tutorials"
            type="yt"
          /><Card
            title="Complete Web Developer Bootcamp"
            content="Web Development Tutorials"
            type="yt"
          />
        </div>
        <div className="community mt-[49px]">
          <div className="title flex gap-3">
            <img src={community} alt="" />
            <div className="text-3xl font-bold mt-[12px]">COMMUNITIES TO JOIN</div>
          </div>
          <div className="list bg-[#D9FEDC] rounded-2xl p-4">
            <div className="list-1 flex mb-8 gap-3">
              <img src={stackoveflow} alt="" />
              <div className="flex items-center">Stack Overflow</div>
            </div><div className="list-2 flex mb-8 gap-3">
              <img src={hashnode} alt="" />
              <div className="flex items-center">Hashnode</div>
            </div><div className="list-3 flex gap-3">
              <img src={freecodecamp} alt="" />
              <div className="flex items-center">FreeCodeCamp</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}