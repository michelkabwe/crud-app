import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css'



const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        id:"",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/signin/auth", {
                body: {
                id: values.id,
                email: values.email,
                password: values.password,
            },
            })
            .then((res) => 
              {
                  let newData = res
                  console.log(newData)
               
                    //const loggedUser = localStorage.getItem('user');
                    //console.log(loggedUser)
              }
            )
            .catch((err) => console.error(err));
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
                <p>Not registered? <NavLink to="/SignUp">Sign up here!</NavLink> | Forgot your password?</p>
            </form>
            </div>
        </div>
    )
}

export default Login