import React, {useState, useEffect} from 'react'
import '../styles/Dashboard.css'
import axios from 'axios'
import User from './User'

const Dashboard = () => {

        const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get("https://63b4536e0f49ecf50887d537.mockapi.io/register")
            .then((res) => {
               setUserList(res.data)
            })
            .catch((err) => console.error(err));
        },[])

     

    return (
       

        <div>
            <h1>Dashboard</h1>
            {userList.map((user) => {
                return(
                <div className="user-info" key={user.id}>
                    <User user={user} />
                </div>
               
                  )
            })}
            
        </div>
   )
}

export default Dashboard
