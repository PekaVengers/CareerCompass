import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} path="/" >
    <Route element={<Home />} index />
    <Route element={<Profile />} path="profile" />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}