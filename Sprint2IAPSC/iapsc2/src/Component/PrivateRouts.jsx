import {  useContext } from "react"
import { MyAuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";
import { children } from "react";

function Private({children}){
    const {isAuth} = useContext (MyAuthContext);
    if(!isAuth){
        return <Navigate to = "/login" />

    }
    return children;
        
    
}
export default Private;