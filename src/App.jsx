import { Outlet } from "react-router-dom"
import NavBar from "./shared/NavBar/NavBar"
import Footer from "./shared/Footer/Footer"

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App