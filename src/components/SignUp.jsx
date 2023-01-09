import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
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
    const handleSubmit = async (e) => {
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
                   navigate('/Login')
               }
           })
           //.catch(error => {
            //alert(JSON.stringify(error.response.data)) 
          //})
         
            //setTimeout(() => {
                //
                //console.log("signed up!")
            //},2500)                       
       
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
            </form>
            </div>
        </div>
    )
}

export default SignUp