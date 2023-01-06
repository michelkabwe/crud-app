import React from 'react'
//import SignUp from './SignUp'
import Login from './Login'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome!</h1>
            <Login />            
        </div>
    )
}

export default Home
