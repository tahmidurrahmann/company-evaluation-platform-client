import { Outlet } from "react-router-dom";
import NavBar from "./shared/NavBar/NavBar";
import Footer from "./shared/Footer/Footer";

function App() {
  return (
    <div className="font-inter">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
