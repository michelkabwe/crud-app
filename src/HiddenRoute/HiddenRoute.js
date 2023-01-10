import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const HiddenRoute = ({children}) => {
    const [token, setToken] = useState("", "token-info")
    return !token ? children : <Navigate to="/Login" />

}
export default HiddenRoute;
