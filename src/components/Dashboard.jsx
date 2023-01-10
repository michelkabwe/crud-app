

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import User from './User'
import '../styles/Dashboard.css'


const Dashboard = ({signOut, isLoggedin}) => {
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
            {isLoggedin ? 
            <button onClick={signOut}>Logout</button> 
            : null }
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