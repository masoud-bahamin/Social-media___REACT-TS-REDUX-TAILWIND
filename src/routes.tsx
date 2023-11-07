import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const routes = [
    {path:"/" , element:<Home />},
    {path:"/home" , element:<Home />},
    {path:"/profile" , element:<Profile />},
    {path:"/login" , element:<Login />},
]

export default routes