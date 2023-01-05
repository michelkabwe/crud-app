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
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://63b4536e0f49ecf50887d537.mockapi.io/register", {
                email: values.email,
                password: values.password,
           })
            .then((res) => {
            console.log(res)
            setTimeout(() => {
                navigate('/SignIn')
            },2500)                       
            })
            .catch((err) => console.error(err));

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
                onChange={(e) => setValues({ ...values, email: e.target.value })}>
                </input>
                </label>

                <label>password
                <input type="password"
                 name="password"
                 onChange={(e) => setValues({ ...values, password: e.target.value })}>
                </input>
                </label>
                <input type="submit" />
            </form>
            </div>
        </div>
    )
}

export default SignUp
