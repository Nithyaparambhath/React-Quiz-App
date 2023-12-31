import './App.css';
import {  Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>

    </>
  );
}

export default App;
