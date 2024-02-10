import { useNavigate } from 'react-router';
import './track.css'
import { useState } from 'react';

const Track = () => {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  const navigate = useNavigate()

  const onChange1 = (e) => {
    setExercise(e.target.value);
  }
  const onChange2 = (e) => {
    setWeight(e.target.value);
  }
  const onChange3 = (e) => {
    setReps(e.target.value);
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try{
      const body = {exercise, weight, reps};

      await fetch("https://liftlog-3dz3.onrender.com/dashboard/track", {
        method: "POST",
        headers: {"Content-Type" : "application/json", token: localStorage.token},
        body: JSON.stringify(body)
      });

      navigate("/view")
    }
    catch(err){
      console.error(err.message);
    }
  }

  return(
    <>
    <form onSubmit={onSubmitForm} className='track-form'>
    <div className='Track'>
      <div className='track-div'>
        <label>Exercise</label>
        <select name="selectedFruit" value={exercise} onChange={e => onChange1(e)} required>
        <option value="" defaultValue disabled hidden>Choose here</option>
          <option value="Inclined Bench Press">Inclined Bench Press</option>
          <option value="Peck Deck Flies">Peck Deck Flies</option>
          <option value="Lateral Raises">Lateral Raises</option>
          <option value="Rear Delt Flies">Rear Delt Flies</option>
        </select>
      </div>
      <div className='track-div'>
        <label>Weight(lbs)</label>
        <input name="weight" className="track-input" value={weight} onChange={e => onChange2(e)} required/>
      </div>
      <div className='track-div'>
        <label>Reps</label>
        <input name="reps" className="track-input" value={reps} onChange={e => onChange3(e)} required/>
      </div>
    </div>
    <div></div>
    <button className="track-button" >
      <span>Track</span>
      <span></span>
    </button>
    </form>
    </>
  )
}


export default Track;