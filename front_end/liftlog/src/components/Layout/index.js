import Navbar from "../Navbar";
import { Outlet } from "react-router";
import './layout.css'


const Layout = ({setAuth}) => {

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  }
  
  return(
    <>
    <Navbar/>
    
    <Outlet/>

    <button className="animated-button3" onClick={(e) => logout(e)}>
      <span>Logout</span>
      <span></span>
    </button>
    </>
  )
};

export default Layout;