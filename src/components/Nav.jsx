import React, { useState } from 'react'
import '../styles/Nav.css'
import { NavLink } from 'react-router-dom';





const Nav = ({isLoggedin}) => {

    return (
        <div className="nav-container">
        <ul className="nav-list">
                <li className="nav-li">
                    <NavLink to="/"><p>Home</p></NavLink>
                </li>
                {!isLoggedin ?
                <li className="nav-li">
                    <NavLink to="/Login"><p>Login</p></NavLink> 
                </li> :null}
                {!isLoggedin ?
                <li className="nav-li">
                    <NavLink to="/SignUp"><p>Sign Up</p></NavLink>
                </li> : null }
            </ul> 


           
            
        </div>
    )
}

export default Nav
