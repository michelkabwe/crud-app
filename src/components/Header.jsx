import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="header">
            <ul className="nav-list">
                <li className="nav-li">
                    <NavLink to="/"><p>Home</p></NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/Login"><p>Login</p></NavLink> 
                </li> 
                <li className="nav-li">
                    <NavLink to="/SignUp"><p>Sign Up</p></NavLink>
                </li> 

              
            </ul> 
        </div>
    )
}
export default Header
