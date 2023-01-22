import React,  { useState } from 'react'
import '../styles/Header.css'
import Nav from './Nav'
import MobileNav from './MobileNav'




const Header = ({isLoggedin}) => {

    return (
        <div className="header">
            <Nav isLoggedin={isLoggedin}/>
            <MobileNav />       
        </div>
    )
}
export default Header
