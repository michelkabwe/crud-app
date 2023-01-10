import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter,Routes, Route
} from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp';
import Update from './components/Update';
import Dashboard from './components/Dashboard';


const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);



  const signOut = () => {
    localStorage.removeItem('token-info')
    setIsLoggedin(false)
    }
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={ <Login setIsLoggedin={setIsLoggedin}/>}/>
          <Route path="/SignUp" element={ <SignUp/> }/>
          {isLoggedin ?
          <Route path="/Dashboard" element={<Dashboard signOut={signOut} isLoggedin={isLoggedin}/> }/> : null }
          <Route path="/Update" element={<Update/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
