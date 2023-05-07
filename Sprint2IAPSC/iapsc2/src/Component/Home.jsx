import { useContext } from "react";
import { MyAuthContext } from "../Context/AuthContext";


function Home() {
  const {token, logout} = useContext(MyAuthContext)
    return(
  <div>
     <h1>Home</h1>
     <h2>Token.-{token}</h2>
     <button onClick={() => logout()}>Log out</button>
  </div>
    )
}

export default Home;