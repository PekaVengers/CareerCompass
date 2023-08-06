import { NavLink } from "react-router-dom";

export default function BookmarksNav() {
  return (
    <div>
      <NavLink to=".">RoadMaps</NavLink>
      <NavLink to="books">Books</NavLink>
      <NavLink to="youtube">Youtube</NavLink>
    </div>
  )
}