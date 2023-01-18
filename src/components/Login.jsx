import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css'

const Login = ({setIsLoggedin}) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    //Post inloggning med parametrar  email + password som skickas med i body

    const handleSubmit = async (e) => {
        setIsLoggedin(true)    // när handlesubmit skickas set state isLoggedIn i App.js till true
        e.preventDefault();
        axios.post("http://localhost:4000/signin/auth",values, {
                body: JSON.stringify({
                email:'',
                password:''
            }),
            })
            .then((res) => {
                console.log(res)
                setValues(res)
                localStorage.setItem('token-info', JSON.stringify(res.data.token));
                //console.log(res.data.token) // Här spara jag token som en variabel, som sett i localstorage...
                let getToken = localStorage.getItem('token-info');
                if(getToken){  // om token token finns så navigeras man till Login sidan via navigate...
                    console.log("overhereeee")
                    navigate('/Dashboard')
                } else { 
                    alert("Could not login, check Email or Password!")
                }
            
        }).catch((err) => console.error(err));       
    };
    return (
        <div className="sign-up__container">
            <div className="sign-up__title">
                <h1>Sign In</h1>
            </div>
            <div className="input-container">
            <form onSubmit={handleSubmit}>
                <label>email
                     <input type="email"
                         name="email"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                ></input>
                </label>

                <label>password
                <input type="password"
                 name="password"
                 onChange={(e) => setValues({ ...values, password: e.target.value })}
                ></input>
                </label>
                <input type="submit" />
                <p>Not registered? <NavLink to="/SignUp">Sign up here!</NavLink> |                 | <NavLink to="/Update">Forgot your password? </NavLink></p>
            </form>
            </div>  
        </div>
    )
}

export default Login