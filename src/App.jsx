import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import {Outlet} from "react-router/internal/react-server-client";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
    <>
      <Navbar></Navbar>
        <main className={'bg-[#F8FAFC]'}>
            <div className={'max-w-277.5 mx-auto px-8 sm:px-16'}>
                <Outlet></Outlet>
            </div>
        </main>
      <Footer></Footer>
    </>
  )
}

export default App
