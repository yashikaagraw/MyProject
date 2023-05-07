import React from "react";
import {Routes, Route} from "react-router-dom";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Product from "./Product";
import Home from "./Home";
import Help from "./Help";
import Login from "./login";
import Private from "./PrivateRouts";


function AllRoute() {
    return(
        <Routes>
            <Route path = "/" element = {<Private><Home /> </Private>}></Route>
            <Route path = "/contact" element = {<Contact />}></Route>
            <Route path = "/help" element = {<Help />}></Route>
            <Route path = "*" element = {<PageNotFound />}></Route>
            <Route path = "/product" element = {<Private><Product /> </Private>}></Route>
            <Route path = "/login" element = {<Login />}></Route>
            </Routes>

       

    )
}

export default AllRoute;