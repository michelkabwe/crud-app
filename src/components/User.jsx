import React, {useState} from 'react'
import axios from 'axios'
import '../styles/User.css'


const User = ({user}) => {
    const [userDeleted, setUserDeleted]= useState(false)


    const deleteUser = (id) => {
        axios.delete(`https://63b4536e0f49ecf50887d537.mockapi.io/register/${id}`)
        setUserDeleted(true);

    }
    return (
        userDeleted ? null : (  
        <div className="user-info" key={user.id}>
            <p className="user-id">User Id: {user.id}</p>
            <p className="user-email">Email: {user.email}</p>
            <button onClick={()=>deleteUser(user.id)} className="delete-btn">Delete</button>  
        </div>
    ))
}

export default User
