import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "../components/Sidebar";
import RoadmapStep from "../components/RoadmapStep";
import Card from "../components/Card";
import bookmark from "../assets/bookmark.svg";
import book from "../assets/book.svg";
import yt from "../assets/yt.png";
import roadmap from "../assets/roadmap.png"
import { useSearchParams, useActionData, useNavigation, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CollectInfo from "../components/CollectInfo";

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const formData = await request.formData();

  const email = searchParams.get("email");
  formData.append("email", email);
  const res = await axios.post("http://127.0.0.1:8000/api/user-info", formData);
  return res.data;
}


export default function Profile() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userDetails, setUserDetails] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [, setSearchParams] = useSearchParams()
  const actionData = useActionData();
  const [loading, setShowLoading] = useState(true);


  const [currentBookmarks, setCurrentBookmarks] = useState({
    "roadmap": null,
    "book": null,
    "youtube": null,
  });



  useEffect(() => {
    async function getUserDetails() {
      const res = await axios.get(`http://127.0.0.1:8000/api/user-info?email=${user.email}`);
      if (res.data?.error) {
        console.log("Error");
      } else {
        setUserDetails(res.data);
      }
    }
    async function getUserBookMarks() {
      const resBook = await axios.get(`http://localhost:8000/api/bookmarks?type=books&email=${user.email}`);
      if (resBook.data.length > 0) {
        setCurrentBookmarks(prevBookmarks => ({ ...prevBookmarks, book: resBook.data[resBook.data.length - 1] }));
      }
      const resRoadmap = await axios.get(`http://localhost:8000/api/bookmarks?type=roadmap&email=${user.email}`);
      if (resRoadmap.data.length > 0) {
        setCurrentBookmarks(prevBookmarks => ({ ...prevBookmarks, roadmap: resRoadmap.data[resRoadmap.data.length - 1] }));
      }
      const resYoutube = await axios.get(`http://localhost:8000/api/bookmarks?type=youtube&email=${user.email}`);
      if (resYoutube.data.length > 0) {
        setCurrentBookmarks(prevBookmarks => ({ ...prevBookmarks, youtube: resYoutube.data[resYoutube.data.length - 1] }));
      }
    }
    setShowLoading(true);
    if (user) {
      getUserDetails();
      getUserBookMarks();
    }
    setShowLoading(false);
  }, [user, isAuthenticated, actionData]);

  const form = useRef();
  const navigation = useNavigation();
  useEffect(function resetFormOnSuccess() {
    if (navigation.state === "idle" && actionData) {
      form.current?.reset();
      setShowForm(false);
    }
  }, [navigation.state, actionData]);

  if (isLoading || !isAuthenticated) {
    return <div>Loading...</div>
  }

  function handleClick() {
    setShowForm(true);
    setSearchParams(prevParams => {
      prevParams.set("email", user.email);
      return prevParams;
    });
  }

  return (
    !loading
      ? !showForm
        ? <div className="flex mb-[10rem]">
          <div className="col-1 max-w-[26.9375rem] max-h-[54rem] ml-[17.5rem] mt-[5.1875rem] mr-[2.875rem]">
            <Sidebar
              img={user.picture}
              name={user.name}
              email={user.email}
              strength={userDetails?.strength}
              interest={userDetails?.interest}
              aspiration={userDetails?.aspiration}
              education={userDetails?.education}
            />
            <div className="flex justify-center items-center">
              <button onClick={handleClick} className="bg-green-600 px-8 py-4 text-white rounded-2xl font-semibold">{userDetails ? "Update Details" : "Add Details"}</button>
            </div>
          </div>
          <div className="col-2 pl-8 mt-[5.1875rem] mr-[11.25rem]">
            <div className="bookmark flex">
              <img className="w-[3.75rem] h-[3.75rem]" src={bookmark} alt="" />
              <div className="font-bold text-3xl ml-[0.815rem]">BOOKMARKS</div>
            </div>
            <div className="steps mt-8 flex gap-4">
              <div className="mt-[11px]"><img src={roadmap} alt="" /></div>
              <div className="step-con flex flex-col gap-5">
                <div className="flex items-center gap-10">
                  <div className="text-3xl mt-6 font-bold">ROADMAPS</div>
                  <div className="mt-6">
                    <Link to="/bookmarks" className="bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold">View All</Link>
                  </div>
                </div>
                {
                  currentBookmarks?.roadmap
                    ?
                    <>
                      <RoadmapStep
                        number="1"
                        content={currentBookmarks.roadmap.step1}
                      />
                      <RoadmapStep
                        number="2"
                        content={currentBookmarks.roadmap.step2}
                      />
                      <RoadmapStep
                        number="3"
                        content={currentBookmarks.roadmap.step3}
                      />
                      <RoadmapStep
                        number="4"
                        content={currentBookmarks.roadmap.step4}
                      />
                      <RoadmapStep
                        number="5"
                        content={currentBookmarks.roadmap.step5}
                      />
                    </>
                    : <div>No BookMarks to show</div>
                }
              </div>
            </div>
            <div className="book flex gap-4 mt-[45px]">
              <div className="w-[65px] h-[65px]">
                <img src={book} alt="" />
              </div>
              <div className="book-con flex flex-col gap-4">
                <div className="flex">
                  <div className="text-3xl font-bold flex items-center">BOOKS</div>
                  <div className="mt-1">
                    <Link to="/bookmarks/books" className="bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold ml-[3rem]">View All</Link>
                  </div>
                </div>
                {
                  currentBookmarks?.book
                    ? <Card
                      title={currentBookmarks.book.name}
                      content={currentBookmarks.book.description}
                      type="book"
                      link={currentBookmarks.book.link}
                      pfp
                    />
                    : <div>No BookMarks to show</div>
                }
              </div>
            </div>
            <div className="yt flex gap-4 mt-[45px]">
              <div className="">
                <img src={yt} alt="" />
              </div>
              <div className="yt-con flex flex-col gap-4 w-[785px]">
                <div className="flex items-center">
                  <div className="text-3xl font-bold flex items-center">YOUTUBE</div>
                  <div className="mt-1">
                    <Link to="/bookmarks/youtube" className="bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold ml-[3rem]">View All</Link>
                  </div>
                </div>
                {
                  currentBookmarks?.youtube
                    ? <Card
                      title={currentBookmarks.youtube.name}
                      content={currentBookmarks.youtube.description}
                      type="yt"
                      link={currentBookmarks.youtube.link}
                      pfp
                    />
                    : <div>No BookMarks to show</div>
                }
              </div>
            </div>
          </div>
        </div>
        : <CollectInfo form={form} />
      : <div>Loading...</div>
  )
}
