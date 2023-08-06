import axios from "axios";
import { useLocation, useLoaderData } from "react-router";
import booksImage from "../assets/book.svg";
import yt from "../assets/yt.png"
import community from "../assets/community.png"
import hashnode from "../assets/hashnode.png"
import freecodecamp from "../assets/freecodecamp.png"
import stackoveflow from "../assets/stackoverflow.png"
import Card from "../components/Card";
import { getRoleData } from "../utils/getRoleData";
import RoadMapCard from "../components/RoadMapCard";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const roleName = searchParams.get("role");
  const res = await axios.get(`http://127.0.0.1:8000/api/resources?role=${roleName}`)
  console.log("Loading res", res.data);
  return { resources: res.data };
}

export default function RoadmapDetail() {
  // const location = useLocation();
  // const roleInfo = location.state.roleInfo;
  const roleInfo = getRoleData()[0];
  const loaderData = useLoaderData();
  const books = loaderData.resources.books;
  const youtube = loaderData.resources.youtube;
  const { user } = useAuth0();
  const [areBookMarked, setAreBookMarked] = useState({
    roadmap: false,
    books: { 0: false, 1: false, 2: false },
    youtube: { 0: false, 1: false, 2: false },
  });

  async function handleRoadMapBookmark() {
    if (user) {
      if (areBookMarked.roadmap) {
        await axios.delete(`http://localhost:8000/api/bookmarks?name=${roleInfo.name}&email=${user.email}&type=roadmap`);
      } else {
        const res = await axios.post(`http://localhost:8000/api/bookmarks`, { ...roleInfo, email: user.email, type:"roadmap" });
        console.log(res.data)
      }
      setAreBookMarked(prevBookMarks => ({ ...prevBookMarks, roadmap: !prevBookMarks.roadmap }));
    }
  }

  async function handleBookBM(ind) {
    console.log(ind)
    if (user) {
      if (areBookMarked.books[ind]) {
        await axios.delete(`http://localhost:8000/api/bookmarks?name=${books[ind].name}&email=${user.email}&type=book`);
      } else {
        await axios.post(`http://localhost:8000/api/bookmarks`, { ...books[ind], email: user.email, type:"book" });
      }
      setAreBookMarked(prevBookMarks => ({ ...prevBookMarks, books: { ...prevBookMarks.books, [ind]: !prevBookMarks.books[ind] } }));
    }
  }

  async function handleYoutubeBM(ind) {
    if (user) {
      if (areBookMarked.youtube[ind]) {
        await axios.delete(`http://localhost:8000/api/bookmarks?name=${youtube[ind].name}&email=${user.email}&type=youtube`);
      } else {
        await axios.post(`http://localhost:8000/api/bookmarks`, { ...youtube[ind], email: user.email, type:"youtube" });
      }
      setAreBookMarked(prevBookMarks => ({ ...prevBookMarks, youtube: { ...prevBookMarks.youtube, [ind]: !prevBookMarks.youtube[ind] } }));
    }
  }

  return (
    <div className="flex mt-[90px] ml-[216px] mb-[117px] mr-[174px] h-[1991px]">
      <div className="col-1">
        <div className="flex-shrink-0 max-w-[80%]">
          <div className="bg-green-200 rounded-3xl p-4 shadow-md">
            <h3 className="text-xl font-semibold my-5">{roleInfo.name}</h3>
            <div className="mt-2">{roleInfo.description}</div>
          </div>
        </div>

        <RoadMapCard handleClick={handleRoadMapBookmark} isBookMarked={areBookMarked.roadmap} roadMapSteps={roleInfo.roadmap} />

      </div>
      <div className="col-2">
        <div className="book">
          <div className="title flex gap-3 mb-[39px]">
            <img className="w-[65px] h-[65px]" src={booksImage} alt="" />
            <div className="text-3xl font-bold mt-[9px]">REFERENCE BOOKS</div>
          </div>
          {
            books.map((book, i) => (
              <Card
                title={book.name}
                content={book.description}
                type="book"
                link={book.link}
                key={i}
                handleClick={handleBookBM}
                ind={i}
                isBookMarked={areBookMarked.books[i]}
              />
            ))
          }
        </div>
        <div className="yt">
          <div className="title flex gap-3 mb-[39px]">
            <img src={yt} alt="" />
            <div className="text-3xl font-bold">YOUTUBE CHANNELS</div>
          </div>
          {
            youtube.map((yt, i) => (
              <Card
                title={yt.name}
                content={yt.description}
                link={yt.link}
                type="yt"
                key={i}
                handleClick={handleYoutubeBM}
                ind={i}
                isBookMarked={areBookMarked.youtube[i]}
              />
            ))
          }
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
    </div >
  );
}