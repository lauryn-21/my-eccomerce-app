import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Show from './components/Show';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Show/>}></Route>
    <Route index element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>


   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
