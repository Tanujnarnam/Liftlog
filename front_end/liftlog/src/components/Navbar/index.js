import './navbar.css'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [width] = useState(window.innerWidth);

  const handleClick = () => {
    if(toggle){
      setToggle(false);
    }
    else{
      setToggle(true);
    }
  }

  const handleResize = () => {
    if(width > 800){
      setToggle(false);
    }
  }

  window.addEventListener('resize', handleResize);

  return(
    <nav className="NavbarItems">
      <h1 className="logo">Liftlog <FontAwesomeIcon icon={faDumbbell} /></h1>
      <div className="menu-icons">
        <FontAwesomeIcon icon={faBars} onClick={handleClick} className={toggle ? "FabarsHidden" : "FabarsDisplay"}/>
        <FontAwesomeIcon icon={faXmark} onClick={handleClick} className={toggle ? "FaCrossDisplay" : "FaCrossHidden"}/>
      </div>
      <div className={toggle ? "Links" : "NavLinks"}>
        <NavLink exact="true">
          Home
        </NavLink>
        <NavLink exact="true">
          Track
        </NavLink>
        <NavLink exact="true">
          View
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;