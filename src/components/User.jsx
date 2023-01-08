import React, { useState } from 'react'
import axios from 'axios'
import '../styles/User.css'


const User = ({user}) => {
    const [deleteUserId, setdeleteUserId] = useState(false);
  
    const deleteUser = async (id) => {    
        axios.delete('http://localhost:4000/log/userlist/'+id,{
            params: { id:id }
        })
        .then((res) => { 
            console.log(res)
            setdeleteUserId(true)
        })
    }

    return (
       deleteUserId ? null : (  
        <div className="user-info" key={user.id}>
            <p className="user-id">User Id: {user.id}</p>
            <p className="user-email">Email: {user.email}</p>
            <button onClick={()=>deleteUser(user.id)} className="delete-btn">Delete</button>  
        </div>
    ))
}

export default User
