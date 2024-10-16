import Explor from "./pages/Explor";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/login", element: <Login /> },
  { path: "/explore", element: <Explor /> },
  { path: "/notification", element: <Notifications /> },
  { path: "/messages", element: <Messages /> },
  {
    path: "/*",
    element: (
      <div className=" overflow-hidden w-full h-screen flex items-center justify-center text-8xl pt-24 pl-1 sm:pl-[270px] ">
        <h1>NOT FOUNd</h1>
      </div>
    ),
  },
];

export default routes;
