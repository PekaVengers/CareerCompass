import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import RoadMap, {action as roadmapAction} from "./pages/Roadmap";
import RoadmapDetail from "./pages/RoadmapDetail";
import Loader from "./components/Loader";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} path="/" >
    <Route element={<Home />} index />
    <Route element={<Profile />} path="profile" />
    <Route action={roadmapAction} element={<RoadMap />} path="roadmap" />
    <Route element={<RoadmapDetail />} path="roadmap-detail" />
    <Route element={<Loader />} path="loading" />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}