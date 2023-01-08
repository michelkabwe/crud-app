

import React, {useState, useEffect} from 'react'
import '../styles/Dashboard.css'
import axios from 'axios'
import User from './User'
import { Navigate, useNavigate } from 'react-router-dom'

const Dashboard = () => {

const navigate = useNavigate()
const [userList, setUserList] = useState([])

  useEffect(() => {
        axios.get("http://localhost:4000/log/userlist")
            .then((res) => {
                setUserList(res.data)
            })
            .catch((err) => console.error(err));
        },[])

 

        





    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => localStorage.removeItem('token')} className="sign-out__btn">Logout</button>

            {userList.map((user) => {
                return(
                    <div className="user-info" key={user.id}>
                    <User user={user} />
                    </div>
                    )})}  
        </div>
   )
}

export default Dashboard