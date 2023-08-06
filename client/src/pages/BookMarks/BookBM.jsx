import axios from "axios";
import Card from "../../components/Card";
import { useLoaderData } from "react-router";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NoBookMarks from "../../components/NoBookMarks";


export async function loader() {
  const res = await axios.get("http://localhost:8000/api/bookmarks?type=books");
  return res.data;
}

export default function BookBM() {
  const loaderData = useLoaderData();
  const [currentBookmarks, setCurrentBookmarks] = useState(loaderData);
  const { user } = useAuth0();

  async function handleBookBM(ind) {
    await axios.delete(`http://localhost:8000/api/bookmarks?name=${currentBookmarks[ind].name}&email=${user.email}&type=book`);
    const res = await axios.get("http://localhost:8000/api/bookmarks?type=books");
    setCurrentBookmarks(res.data);
  }

  return (
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

  );
}