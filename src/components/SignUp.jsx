import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/SignUp.css'

const SignUp = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {     // handlesubmit för att Registrera en användare
        e.preventDefault();
       
        const headers = {
                    "Content-Type": "application/json"
        }
        axios.post("http://localhost:4000/signup/register",values, {
            headers:headers,
            body: JSON.stringify({
                email: "",
                password: "",
            })
           })
           .then((res) => {
               if(res){
                   console.log(res,'ressss')
                setTimeout(() => {
                   navigate('/Login')
                },2500)  
               }
           })
           .catch((error) => alert(error.response.data.errors))  // Om email redan finns i backend kommer felmeddelande "" email allready exists "
        
    };


  


    return (
        <div className="sign-up__container">
            <div className="sign-up__title">
                <h1>Register Here</h1>
            </div>
            <div className="input-container">
            <form onSubmit={handleSubmit}>
                <label>email
                <input type="email"
                name="email"
                onChange={handleChange}>
                </input>
                </label>

                <label>password
                <input type="password"
                 name="password"
                 onChange={handleChange}>
                </input>
                </label>
                <input type="submit" />
                <p>Already have an account? <NavLink to="/Login">Login here!</NavLink> | <NavLink to="/Update">Forgot your password? </NavLink></p>
            </form>
            </div>
        </div>
    )
}

export default SignUp