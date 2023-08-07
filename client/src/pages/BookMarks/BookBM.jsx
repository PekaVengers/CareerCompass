import axios from "axios";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NoBookMarks from "../../components/NoBookMarks";

export default function BookBM() {
  const [currentBookmarks, setCurrentBookmarks] = useState([]);
  const [loading, setShowLoading] = useState(true);
  const { user } = useAuth0();

  useEffect(() => {
    async function fetchBookMarks() {
      const res = await axios.get(`http://localhost:8000/api/bookmarks?type=books&email=${user.email}`);
      setCurrentBookmarks(res.data);
    }

    setShowLoading(true);
    if (user) {
      fetchBookMarks();
    }
    setShowLoading(false);
  }, [user]);

  async function handleBookBM(ind) {
    await axios.delete(`http://localhost:8000/api/bookmarks?name=${currentBookmarks[ind].name}&email=${user.email}&type=book`);
    const res = await axios.get(`http://localhost:8000/api/bookmarks?type=books&email=${user.email}`);
    setCurrentBookmarks(res.data);
  }

  return (
    !loading ?
    <div className="mt-[3.125rem] ml-[13.5rem] mr-[11.25rem] flex gap-20 py-[3.875rem] px-[5.625rem]">
      {
        currentBookmarks.length > 0
          ? <div className="col-1 flex flex-col gap-4">
            {
              currentBookmarks.map((book, i) => (
                <Card
                  title={book.name}
                  content={book.description}
                  type="book"
                  link={book.link}
                  key={book.id}
                  handleClick={handleBookBM}
                  ind={i}
                  isBookMarked={true}
                />
              ))
            }
          </div>
          : <NoBookMarks />
      }
    </div>
    : <div>Loading...</div>
  );
}