import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter,Routes, Route
} from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
          <Route path="/" element={<Home/>} />
          
          <Route path="/SignIn" element={<SignIn/>} />  
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
