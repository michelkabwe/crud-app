import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

//import SignUp from './SignUp'
import Login from './Login'
import '../styles/Home.css'

const Home = () => {
    const navigate = useNavigate()

 

  
    return (
        <div className="home-container">
            <h1>Welcome!</h1>
            <Login />            
        </div>
    )
}

export default Home
