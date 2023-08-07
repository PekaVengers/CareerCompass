import axios from "axios";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NoBookMarks from "../../components/NoBookMarks";

export default function YoutubeBM() {
  const [currentBookmarks, setCurrentBookmarks] = useState([]);
  const { user } = useAuth0();
  const [loading, setShowLoading] = useState(false);

  useEffect(() => {
    async function fetchBookMarks() {
      const res = await axios.get(`http://localhost:8000/api/bookmarks?type=youtube&email=${user.email}`);
      setCurrentBookmarks(res.data);
    }

    if (user) {
      setShowLoading(true);
      fetchBookMarks();
      setShowLoading(false);
    }
  }, [user]);


  async function handleYoutubeBM(ind) {
    await axios.delete(`http://localhost:8000/api/bookmarks?name=${currentBookmarks[ind].name}&email=${user.email}&type=youtube`);
    const res = await axios.get(`http://localhost:8000/api/bookmarks?type=youtube&email=${user.email}`);
    setCurrentBookmarks(res.data);
  }

  return (
    !loading
    ? <div className="mt-[3.125rem] ml-[13.5rem] mr-[11.25rem] flex flex-col gap-4 py-[3.875rem] px-[5.625rem]">
      {
        currentBookmarks.length > 0
        ? currentBookmarks.map((yt, i) => (
          <Card
                title={yt.name}
                content={yt.description}
                link={yt.link}
                type="yt"
                key={yt.id}
                handleClick={handleYoutubeBM}
                ind={i}
                isBookMarked={true}
              />
        ))
        : <NoBookMarks />
      }
    </div>
    : <div>Loading...</div>
  );
}