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

    const handleSubmit = async (e) => {
        setIsLoggedin(true)
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
                //console.log(res.data.token)
                let getToken = localStorage.getItem('token-info');
                if(getToken){
                    console.log("overhereeee")
                    navigate('/Dashboard')
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
                <p>Not registered? <NavLink to="/SignUp">Sign up here!</NavLink> |                 <p>Already have an account? <NavLink to="/Login">Login here!</NavLink> | <NavLink to="/Update">Forgot your password? </NavLink></p>
</p>
            </form>
            </div>  
        </div>
    )
}

export default Login