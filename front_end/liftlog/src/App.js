import './App.css';
import { Routes,Route } from 'react-router';
import Layout from './components/Layout'
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login/>}/>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
