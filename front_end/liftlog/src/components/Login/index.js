import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import './login.css'

const Login = () => {
  return(
    <>
    <form>
    <h1 className="logo">Liftlog <FontAwesomeIcon icon={faDumbbell} /></h1>
    <input type="text" autocomplete="off" name="text" className="input" placeholder="Username" required/>
    <input type="password" placeholder="Password" className="input" required/>
    <Link to="/home">
    <button class="animated-button">
      <span>Submit</span>
      <span></span>
    </button>
    </Link>
    </form>
    </>
  )
};

export default Login;