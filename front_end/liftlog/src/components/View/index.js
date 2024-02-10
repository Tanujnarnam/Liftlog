import {useState, useEffect} from 'react'
import './view.css'

const View = () => {

  const [data, setData] = useState([]);
  const [filterdata, setfiltData] = useState([]);
  const [searchQuery, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value)
  }
  
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch("https://liftlog-3dz3.onrender.com/dashboard/view" ,{
          method: "GET",
          headers: {token: localStorage.token}
        });
  
        const parseRes = await response.json();
  
        setData(parseRes);
        setfiltData(parseRes);
      }
      catch(err){
        console.error(err.message);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    setfiltData((data).filter((el) => {
      return el.exercise.toLowerCase().startsWith(searchQuery.toLowerCase());
    }));
  }, [searchQuery, data]
  )

  return(
    <>
    <div className='exercise-search'>
      <input type="text" placeholder='Search for exercise' value={searchQuery} onChange={handleSearchChange} className="search-bar"/>
    </div>
    <div className='table'>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Exercise</th>
          <th>Weight</th>
          <th>Reps</th>
        </tr>
      </thead>
      <tbody>
        {
          filterdata.map(entry => (
            <tr>
              <td>{entry.date.toString().slice(0,10)}</td>
              <td>{entry.exercise}</td>
              <td>{entry.weight}</td>
              <td>{entry.reps}</td>
            </tr>
        ))}
      </tbody>
    </table>
  </div>
  </>
  )
}


export default View;