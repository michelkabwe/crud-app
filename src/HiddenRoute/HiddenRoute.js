import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const HiddenRoute = ({children}) => {

    // Privat route. OM token finns finns så visar den Navigate Routen nöär anvämndaren är inloggad
    const [token, setToken] = useState("", "token-info")
    return !token ? children : <Navigate to="/Login" />

}
export default HiddenRoute;
