import './App.css';
import { Routes,Route } from 'react-router';
import Layout from './components/Layout'
import Login from './components/Login';
import Home from './components/Home';
import Track from './components/Track';
import Signup from './components/Signup';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home/>}/>
        <Route path="track" element={<Track/>}/>
      </Route>
    </Routes>
  );
}

export default App;
