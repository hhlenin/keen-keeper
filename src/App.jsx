import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import {Outlet} from "react-router/internal/react-server-client";
import Footer from "./components/footer/Footer.jsx";
import {Bounce} from "react-toastify";
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
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
