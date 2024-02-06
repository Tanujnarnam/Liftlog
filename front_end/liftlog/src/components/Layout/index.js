import Navbar from "../Navbar";
import { Outlet } from "react-router";
import './layout.css'


const Layout = ({setAuth}) => {
  return(
    <>
    <Navbar/>
    
    <Outlet/>

    <button className="animated-button3" onClick={() => setAuth(false)}>
      <span>Logout</span>
      <span></span>
    </button>
    </>
  )
};

export default Layout;