import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile, {action as profileAction} from "./pages/Profile";
import RoadMap, {action as roadmapAction} from "./pages/Roadmap";
import Loader from "./components/Loader";
import RoadmapDetail, {loader as roadmapDetailLoader} from "./pages/RoadmapDetail";
import BookmarksLayout from "./components/BookmarksLayout";
import BookBM, {loader as bookBMLoader} from "./pages/BookMarks/BookBM";
import RoadMapBM, {loader as roadmapBMLoader}  from "./pages/BookMarks/RoadMapBM";
import YoutubeBM, {loader as youtubeBMLoader} from "./pages/BookMarks/YoutubeBM";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} path="/" >
    <Route element={<Home />} index />
    <Route action={profileAction} element={<Profile />} path="profile" />
    <Route action={roadmapAction} element={<RoadMap />} path="roadmap" />
    <Route element={<Loader />} path="loading" />
    <Route element={<RoadmapDetail />} loader={roadmapDetailLoader} path="roadmap-detail" />
    <Route element={<BookmarksLayout />} path="bookmarks">
      <Route element={<RoadMapBM />} loader={roadmapBMLoader} index />
      <Route element={<BookBM />} loader={bookBMLoader} path="books" />
      <Route element={<YoutubeBM />} loader={youtubeBMLoader} path="youtube" />
    </Route>
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}