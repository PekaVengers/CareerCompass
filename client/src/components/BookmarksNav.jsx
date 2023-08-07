import { NavLink } from "react-router-dom";
import bookmark from "../assets/bookmarkdark.svg"

export default function BookmarksNav() {
  return (
    <div className="mt-[5.4375rem] ml-[13.5rem] mr-[11.25rem] bg-[#D9FEDC] rounded-3xl flex h-[122px]">
    
      <div className="title flex gap-1 p-[3.3125rem] justify-center items-center">
        <img className="w-[50px] h-[50px]" src={bookmark} alt="" />
        <div className="text-3xl font-bold">BOOKMARKS</div>
      </div>

      <div className="flex ml-[9.5625rem] gap-10 mt-[2.625rem]">
          <div className="roadmap text-3xl">
          <NavLink end className={({isActive}) => (`text-xl hover:text-green-500 duration-500 ${isActive ? "text-green-500" : ""}`)} to=".">ROADMAPS</NavLink>
          </div>
          <div className="videos text-3xl">
          <NavLink className={({isActive}) => (`text-xl hover:text-green-500 duration-500 ${isActive ? "text-green-500" : ""}`)} to="youtube">YOUTUBE</NavLink>
          </div>
          <div className="books text-3xl">
          <NavLink className={({isActive}) => (`text-xl hover:text-green-500 duration-500 ${isActive ? "text-green-500" : ""}`)} to="books">BOOKS</NavLink>
          </div>
      </div>
    </div>
  )
}