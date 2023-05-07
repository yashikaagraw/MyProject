import { useContext, useEffect } from "react";
import { useState } from "react";
import { MyAuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";


function Login(){
    
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    // to access anything from context api and accessing here is login 
    const {login, isAuth} = useContext(MyAuthContext)
    // console.log(email,password);
    // to send id password
    const inputvalue = {
        email, 
        password,
        // "email": "eve.holt@reqres.in",
        // "password": "cityslicka"
    }

    

    const handleSubmit = () => {
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputvalue)
          }).then(res => res.json())
            // .then(res => console.log(res));
            .then(res => login(res.token))
    }
  

   if(isAuth){
    return <Navigate to = "/" />;
   }

    return(
        <div>
            <h2>myLogin</h2>
          
           <input type="text" placeholder="email or number" onChange={(e) => setEmail(e.target.value) } />
           <br />
           <input type= "password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
           <br />
           <br />
           <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login;