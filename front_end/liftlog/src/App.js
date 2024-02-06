import './App.css';
import { useState} from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Layout from './components/Layout'
import Login from './components/Login';
import Home from './components/Home';
import Track from './components/Track';
import Signup from './components/Signup';
import View from './components/View';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  return (
    <Routes>
      <Route index path="/" element={!isAuthenticated ? <Login setAuth={setAuth}/> : <Navigate to="/home"/>}/>
      <Route path="/signup" element={!isAuthenticated ? <Signup setAuth={setAuth}/> : <Navigate to="/"/>}/>
      <Route path="/" element={<Layout setAuth={setAuth}/>}>
        <Route path="home" element={isAuthenticated ? <Home setAuth={setAuth}/> : <Navigate to="/"/>}/>
        <Route path="track" element={isAuthenticated ? <Track setAuth={setAuth}/> : <Navigate to="/"/>}/>
        <Route path="view" element={isAuthenticated ? <View setAuth={setAuth}/> : <Navigate to="/"/>}/>
      </Route>
    </Routes>
  );
}

export default App;
