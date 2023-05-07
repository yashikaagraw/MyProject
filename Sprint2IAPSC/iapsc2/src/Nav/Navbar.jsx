
import { Link } from "react-router-dom";
function Navbar () {
    // array of object of all pages
   const MyLink = [
  {path: "/", title: "Home"},
  {path: "/product", title: "Product"},
  {path: "/contact", title: "Contact"},
  {path: "/login", title: "Login"},
  
   ]
    return (
        <div style={{backgroundColor:"black",
        padding: "20px"}}>
            {
                MyLink.map((e)=> {
                    return(
          <Link key={e.path } to = {e.path} style={{ color: "white",
          textDecoration:"none",
          marginRight:"50px"}}>{e.title}</Link>
                    )
                })
            }
        </div>

    )
}

export default Navbar ;