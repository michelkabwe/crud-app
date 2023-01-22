import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/MobileNav.css'
import {menu} from 'react-icons-kit/iconic/menu'
import { Icon } from 'react-icons-kit'
import {ic_close_outline} from 'react-icons-kit/md/ic_close_outline'





const MobileNav = ({isLoggedin}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="mobile-nav__container">
            
            
            {!isOpen ? <Icon icon={menu}  onClick={()=>setIsOpen(true)} className="open-icon" size={22}/> : 
            <Icon icon={ic_close_outline}  
            onClick={()=>setIsOpen(false)}
            className="close-icon" size={22}/>
            }

            {isOpen && 

<div className="mobile-nav__wrapper">
            <ul className="mobile-nav__ul">
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
            }
        </div>
    )
}

export default MobileNav
