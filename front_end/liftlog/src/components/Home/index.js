import './home.css'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';

const Home = () => {

  const [name, setName]= useState("");

  const getName = async () => {
    try{
      const response = await fetch("http://localhost:5000/dashboard/" ,{
        method: "GET",
        headers: {token: localStorage.token}
      });

      const parseRes = await response.json();

      setName(parseRes.user_name);
    }
    catch(err){
      console.error(err.message);
    }
  }

  useEffect(() => {
    getName()
  }, []);

  return(
    <div className="Home">
      <h1>Welcome {name}</h1>
      <h2>Maximize your gains and track 
        your progress like never before with our cutting-edge gym rep tracker.
        Whether you're a seasoned athlete or just starting your fitness journey,
        Liftlog is your ultimate companion for achieving your fitness 
        goals.</h2>
      <Link to="/track" className='track-link'>
        <span>Get Started</span>
        <span></span>
      </Link>
    </div>
  )
};

export default Home;