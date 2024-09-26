import { useContext } from "react";
import Main from "./components/Mainpage/Main";
import useScreenWidth from "./components/CustomComponent/ScreenWidth";
import AccessDenied from "./components/AccessDenied/AccessDenied";
import Sidebar from "./components/sidebar/sidebar";

const App = () => {
  const screenWidth = useScreenWidth();

  if (screenWidth < 1200) {
    // Adjust the threshold as needed
    return <AccessDenied />;
  }
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
