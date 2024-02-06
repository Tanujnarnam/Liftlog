import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import './signup.css'

const Signup = ({setAuth}) => {

  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const [conpassword, setCon] = useState('');
  const [equal, setEqual] = useState(true);


  const onChange1 = e => {
    setUser(e.target.value);
  };
  const onChange2 = e => {
    setPass(e.target.value);
  };
  const onChange3 = e => {
    setCon(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault()

    if(password !== conpassword){
      setEqual(false);
      return;
    }

    if(password === conpassword){
      setEqual(true);
    }

    try{

      const body = {username, password};

      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token)

      setAuth(true);
    }
    catch(err){
      console.error(err.message);
    }
  }

  return(
    <>
    <form onSubmit={onSubmitForm}>
      <h1 className="logo">Liftlog <FontAwesomeIcon icon={faDumbbell} /></h1>
      <input type="text" value={username} onChange={e => onChange1(e)} className="input" placeholder="Username" required/>
      <input type="password" value={password} onChange={e => onChange2(e)} placeholder="Password" className="input" required/>
      <input type="password" value={conpassword} onChange={e => onChange3(e)} placeholder="Confirm Password" className="input" required/>
      <h2 className={!equal ? "incorrect" : "disappear"}> Password does not match! Try again!</h2>
      <button className="animated-button">
        <span>Sign Up</span>
        <span></span>
      </button>
    </form>
    </>
  )
};

export default Signup;