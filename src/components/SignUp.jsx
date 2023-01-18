import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/SignUp.css'

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


    const navigate = useNavigate();
    const handleChange = (name, value) => {
        setValues({...values, [name]: value}) 
              
    }


    const handleSubmit = async (e) => {     // handlesubmit för att Registrera en användare
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
                <input type="email"
                name="email"
                value={values.email}
                onChange={({ target }) => {
                    handleChange(target.name, target.value);
                  }} />
                <p className="error-message">{error.email}</p>
                </label>

                <label>password
                <input type="password"
                 name="password"
                 value={values.password}
                 onChange={({ target }) => {
                    handleChange(target.name, target.value);
                  }} />
                <p className="error-message">{error.password}</p>
                </label>

                <label>confirm password
                <input type="password"
                 name="confirmPassword"
                 value={values.confirmPassword}
                 onChange={({ target }) => {
                    handleChange(target.name, target.value);
                  }}/>
                <p className="error-message">{error.confirmPassword}</p>
                </label>

                <input type="submit" />
                <p>Already have an account? <NavLink to="/Login">Login here!</NavLink> | <NavLink to="/Update">Forgot your password? </NavLink></p>
            </form>
            </div>

           <p>confirm Pass: </p> {values.confirmPassword} 
            
           <p>values Pass: </p>  {values.password}
           <p>values Pass: </p>  {values.email}
        </div>
    )
}

export default SignUp