import { Link } from 'react-router-dom';
import './track.css'

const Track = () => {
  return(
    <>
    <div className='Track'>
      <div className='track-div'>
        <label>Exercise</label>
        <select name="selectedFruit">
          <option value="ibp">Inclined Bench Press</option>
          <option value="pdf">Peck Deck Flies</option>
          <option value="lr">Lateral Raises</option>
          <option value="rdf">Rear Delt Flies</option>
        </select>
      </div>
      <div className='track-div'>
        <label>Weight(lbs)</label>
        <input className="track-input"></input>
      </div>
      <div className='track-div'>
        <label>Reps</label>
        <input className="track-input"></input>
      </div>
    </div>
    <Link to="/view" className="animated-button2">
      <span>Track</span>
      <span></span>
    </Link>
    </>
  )
}


export default Track;