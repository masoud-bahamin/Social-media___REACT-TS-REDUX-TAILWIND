import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import routes from "./routes";
import { useSelector } from "react-redux";
import { StateType } from "./redux/store";

function App() {
  const router = useRoutes(routes);

  const { status } = useSelector((state: StateType) => state.Theme);
  console.log(status, localStorage.getItem("BGram"));

  return (
    <div className={`${localStorage.getItem("BGram")}`}>
      <Header />
      <div className="flex gap-10 dark:text-gray-300 dark:bg-gray-600">
        <Sidebar />
        {router}
      </div>
    </div>
  );
}

export default App;
