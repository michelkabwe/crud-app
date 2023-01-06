import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import '../styles/Dashboard.css'
import axios from 'axios'
import User from './User'

const Dashboard = () => {

    const navigate = useNavigate();
        const [userList, setUserList] = useState([])

  useEffect(() => {
        axios.get("http://localhost:4000/log/userList")
            .then((res) => {
               console.log(res,'Get requesst')
            })
            .catch((err) => console.error(err));
        },[])
  /*
        useEffect(() => {
            const checkUser = () => {
                if (!localStorage.getItem("username")) {
                    navigate("/Login");
                }
            };
            checkUser();
        },[]) */

     

    return (
       

        <div>
            <h1>list</h1>
           {/*} <h1>Dashboard</h1>
            {userList.map((user) => {
                return(
               <div className="user-info" key={user.id}>
                    <User user={user} />
                </div>
               
                  )
            })}*/}
            
        </div>
   )
}

export default Dashboard
