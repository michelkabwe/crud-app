import React from 'react'
import { NavLink } from 'react-router-dom'
import loginIcon from './../Static/login.png'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome!</h1>
            <div className="goto-login__wrapper">
            <NavLink to="/Login">Login Here <img src={loginIcon} className="login-icon"/></  NavLink>        
            </div>
        </div>
    )
}

export default Home
