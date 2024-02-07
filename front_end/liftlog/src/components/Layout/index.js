import Navbar from "../Navbar";
import { Outlet } from "react-router";


const Layout = ({setAuth}) => {
  return(
    <>
    <Navbar setAuth={setAuth}/>
    
    <Outlet/>
    </>
  )
};

export default Layout;