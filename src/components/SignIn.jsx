import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css'

const SignIn = ({setIsAuth}) => {
    //const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
        token:""
    });

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://63b4536e0f49ecf50887d537.mockapi.io/register", {
                email: values.email,
                password: values.password,
                token:  Math.random().toString(36).substr(2)
            })
            .then((res) => {
                //Store token in Localstorage...
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('password', res.data.password)

                
              
              
                    navigate("/Dashboard");
                      
                //setIsAuth(true);
            })
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
            </form>
            </div>
        </div>
    )
}

export default SignIn
