import { useContext } from "react";
import Main from "./components/Mainpage/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
