import { useEffect, useState } from "react";

function Product() {
  const[state, setState] = useState([])

  useEffect(() => {
    yashi()
  }, [])
   const yashi = async() => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();
    console.log(data);
    setState(data);
   }
   
    return(
      
        
  <div >
     <h1>Product</h1>
     <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", height: "200px", gap: "20px", width: "80%"}}>
      {
        state ?.map((e) => {
          return <div >
          <img src= {e.image} alt="" height= "200px" />
          <h2>{e.price}</h2>
          <h1>{e.category}</h1>


          </div>
          
        })
      }

     </div>
     <button>PREV</button>
     <button>Current</button>
     <button>NEXT</button>
  </div>
  
      
    )
}

export default Product;