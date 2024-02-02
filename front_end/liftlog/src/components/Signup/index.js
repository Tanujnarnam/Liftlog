import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import './signup.css'

const Signup = () => {
  return(
    <>
    <form>
    <h1 className="logo">Liftlog <FontAwesomeIcon icon={faDumbbell} /></h1>
    <input type="text" autocomplete="off" name="text" className="input" placeholder="Username" required/>
    <input type="password" placeholder="Password" className="input" required/>
    <input type="password" placeholder="Confirm Password" className="input" required/>
    <button class="animated-button">
      <span>Sign Up</span>
      <span></span>
    </button>
    </form>
    </>
  )
};

export default Signup;