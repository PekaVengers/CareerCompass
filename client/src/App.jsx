import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile, {action as profileAction} from "./pages/Profile";
import RoadMap, {action as roadmapAction} from "./pages/Roadmap";
import RoadmapDetail, {loader as roadmapDetailLoader} from "./pages/RoadmapDetail";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} path="/" >
    <Route element={<Home />} index />
    <Route action={profileAction} element={<Profile />} path="profile" />
    <Route action={roadmapAction} element={<RoadMap />} path="roadmap" />
    <Route element={<RoadmapDetail />} loader={roadmapDetailLoader} path="roadmap-detail" />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}