import './home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return(
    <div className="Home">
      <h1>Welcome User!</h1>
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