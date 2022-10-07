//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not

  const toggleMode = ()=>{
    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#242c8d';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return ( 
    <> 
    <Router>
    <Navbar title="Myworkonly" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3 '>
       <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Textform heading="Texthere" mode={mode}/>}>
          </Route>
        </Routes>      
    </div>
    </Router>
    
    </>
  );
}
export default App;