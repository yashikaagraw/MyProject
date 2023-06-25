import React from 'react'
import { Link as RouterLink} from "react-router-dom";


const Navbar = () => {
    const links = [ 
        {
            title:"Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",

        },
        {
            title: "Products",
            path: "/products",
        },
        {
            title: "Login",
            path: "/login",
        },
        {
            title: "Contact",
            path: "/contact",
        }]
  return (
    <div>
      {
        links.map((e)=> (<RouterLink to={e.path}>{e.title}</RouterLink>))
      }
    </div>
  )
}

export default Navbar
