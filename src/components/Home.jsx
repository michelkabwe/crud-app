import React from 'react'
//import SignUp from './SignUp'
import SignIn from './SignIn'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome!</h1>
            <SignIn />            
        </div>
    )
}

export default Home
