import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import './login.css'

const Login = ({setAuth}) => {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const [valid, setValid] = useState(true);

  const onChange1 = e => {
    setUser(e.target.value);
  };
  const onChange2 = e => {
    setPass(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try{
      const body = { username, password }

      const response = await fetch("https://liftlog-3dz3.onrender.com/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if(parseRes === "Password or Username is incorrect"){
        setValid(false);
        return;
      }

      localStorage.setItem("token", parseRes.token)

      setAuth(true);
    } catch(err){
      console.error(err.message);
    }
  }

  return(
    <>
    <form onSubmit={onSubmitForm} className="login-form">
    <h1 className="logo">Liftlog <FontAwesomeIcon icon={faDumbbell} /></h1>
    <input type="text" value={username} onChange={e => onChange1(e)} name="text" className="input" placeholder="Username" required/>
    <input type="password" value={password} onChange={e => onChange2(e)} placeholder="Password" className="input" required/>
    <h2 className={valid ? "disappear" : "incorrect"}>Password or Username is incorrect</h2>
    <button to="/home" className="animated-button">
      <span>Submit</span>
      <span></span>
    </button>
    <Link to="signup" className="create-account">
      <span>Create Account</span>
    </Link>
    </form>
    </>
  )
};

export default Login;