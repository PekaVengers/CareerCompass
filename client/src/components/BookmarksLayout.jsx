import { Outlet } from "react-router-dom"
import BookmarksNav from "./BookmarksNav"
export default function BookmarksLayout() {
  return (
    <>
    <BookmarksNav />
    <Outlet />
    </>
  )
}