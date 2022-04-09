import './App.css';

//      - imports -      \\
import React, { useState } from 'react'
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'

//      - components -      \\
import Form from './components/Form';
import Login from './components/Login';

function App() {

  return (
    <React.StrictMode>
    <div className="App">
      <div className="container">
        <div>
          <img className='imgCont' id='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/1200px-League_of_Legends_2019_vector.svg.png' alt='epic lol logo' />
        </div>
        <h1>Cringe LP Calc for ur hardstuck needs</h1>
        <Login />
        <Form />
      </div>
    </div>
    </React.StrictMode>
  );
}

export default App;
