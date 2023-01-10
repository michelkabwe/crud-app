import React ,{ useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import '../styles/Update.css'

const Update = () => {

    const [values, setValues] = useState({
        email:"",
        password: ""
    });

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (id,e) => {
        e.preventDefault();

        const headers = {
                    "Content-Type": "application/json"
        }
        axios.put('http://localhost:4000/update/userlist/'+id,{
            headers:headers,
            body: JSON.stringify({
                email:"",
                password:""
            }),
            params: { id:id }
        })
        .then((res) => {
            if(res){
                console.log("password updated")
            }
        })
    };

    return (
            <div className="update__container">
            <div className="update__title">
                <h1>Change password</h1>
            </div>
            <div className="input-container">
            <form onSubmit={handleSubmit}>
                <label>email
                <input 
                    type="email"
                        name="email"
                        onChange={handleChange} />
                </label>

                <label>password
                <input 
                    type="password"
                        name="password"
                        onChange={handleChange} />
                </label>
                <input type="submit" />
                <p>Already have an account? <NavLink to="/Login">Login here!</NavLink></p>
            </form>
            
        </div>
        </div>
    )
}

export default Update
