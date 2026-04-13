import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import {Outlet} from "react-router/internal/react-server-client";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
