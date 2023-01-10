import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css'
import Dashboard from './Dashboard';



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
                if(res){
                    console.log(res.status,'status')
                setValues(res)
                localStorage.setItem('token-info', JSON.stringify(res.data.token));
                //console.log(res.data.token)
                let getToken = localStorage.getItem('token-info')
                console.log(getToken,'giiiittoekn')
                if(getToken){
                    navigate('/Dashboard')


                }

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
                <p>Not registered? <NavLink to="/SignUp">Sign up here!</NavLink> | Forgot your password?</p>
            </form>
            </div>  
        </div>
    )
}

export default Login