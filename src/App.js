import React, { useState } from 'react'
import './App.css';
import {
  Routes, Route, useNavigate
} from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp';
import Update from './components/Update';
import Dashboard from './components/Dashboard';
import HiddenRoute from './HiddenRoute/HiddenRoute';


const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate()

  const signOut = () => {
    localStorage.removeItem('token-info')
    setIsLoggedin(false)
    navigate('/Login')
    }
  return (
    <div className="App">
    <Header isLoggedin={isLoggedin}/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={ <Login setIsLoggedin={setIsLoggedin}/>}/>
          <Route path="/SignUp" element={<HiddenRoute> 
             <SignUp/> </HiddenRoute> }/>
          <Route path="/Dashboard" 
           element={<HiddenRoute> 
          <Dashboard signOut={signOut} isLoggedin={isLoggedin}/></HiddenRoute> }/> 
          <Route path="/Update" element={<Update/>} />
    </Routes>
    </div>
  );
}

export default App;
