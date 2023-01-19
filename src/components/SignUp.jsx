import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/SignUp.css'
import { Icon } from 'react-icons-kit'
import {eyeDisabled} from 'react-icons-kit/ionicons/eyeDisabled'
import {eye} from 'react-icons-kit/ionicons/eye'

const SignUp = () => {

    const [values, setValues] = useState({
        email:"",
        password: "",
        confirmPassword:""
    });

    //const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({
        email:"",
        password: "",
        confirmPassword:""

    })

    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)


    const navigate = useNavigate();
    const handleChange = (name, value) => {
        setValues({...values, [name]: value}) 
              
    }

    const toggle = () => {
        setShowPass(!showPass)
    }
    const toggleConfirmPass = () => {
        setShowConfirmPass(!showConfirmPass)
    }

// handlesubmit för att Registrera en användare
    const handleSubmit = async (e) => {     
        e.preventDefault();

        let inputError = {
            email: "",
            password: "",
            confirmPassword: "",
          };

         if(!values.email && values.password){
            setError({
                ...inputError,
                email: "Enter valid email address",
                password: "Password should not be empty",
              });
         }

         if (!values.email) {
            setError({
              ...inputError,
              email: "Enter valid email address",
            });
            return
          }

         if (values.confirmPassword !== values.password) {
            setError({
              ...inputError,
              confirmPassword: "Password and confirm password should be same",
            });
            return;
          }

          if (!values.password) {
            setError({
              ...inputError,
              password: "Password should not be empty",
            });
            return
          }
      
         
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
                <input 
                type="email"
                    name="email"
                        value={values.email}
                            onChange={({ target }) => {
                                handleChange(target.name, target.value);
                            }} />

                <p className="error-message">{error.email}</p>
                </label>
                <div className="input-wrapper">
                <label>password
                <input 
                 type={(!showPass ? 'password' : 'text' )}
                    name="password"
                        value={values.password}
                            onChange={({ target }) => {
                                handleChange(target.name, target.value);}}/>

                                {showPass ? 
                                <span className="eye"><Icon icon={eye} onClick={toggle}/></span> : 
                                <span className="eye-off" ><Icon icon={eyeDisabled} onClick={toggle} size={26}/></span> }
                                
                <p className="error-message">{error.password}</p>
                </label>
                </div>

                <div className="input-wrapper">
                <label>confirm password
                <input 
                type={(!showConfirmPass ? 'password' : 'text' )}
                    name="confirmPassword"
                        value={values.confirmPassword}
                            onChange={({ target }) => {
                                handleChange(target.name, target.value);
                                }}/>
                                
                                {showConfirmPass ? 
                                <span className="eye"><Icon icon={eye} onClick={toggleConfirmPass}/></span>: 
                                <span className="eye-off"><Icon icon={eyeDisabled} onClick={toggleConfirmPass}size={26}/></span>}

                <p className="error-message">{error.confirmPassword}</p>
                </label>
                </div>

                <input type="submit" />
                <p>Already have an account? <NavLink to="/Login">Login here!</NavLink> | <NavLink to="/Update">Forgot your password? </NavLink></p>
            </form>
            </div>
        </div>
    )
}

export default SignUp