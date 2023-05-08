import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Product() {

  const[state, setState] = useState([])
  const[value, setValue] = useState(1)
  
  let [pageparam, setPageeparam] = useSearchParams()

  useEffect(() => {
    
    yashi()
  }, [value])

  let limit = 5
   const yashi = async() => {
    // const res = await fetch(`https://fakestoreapi.com/products?_page=${value}&_limit=${limit}`)
    const res = await fetch(`http://localhost:8080/Product?_page=${value}&_limit=3`)
    //query param
    const data = await res.json();
    console.log(data);
    setState(data);
   }

   useEffect(() => {
    let paramobject = {value} 
    setPageeparam(paramobject);
   }, [value])
   
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
      <button disabled={value==1}onClick={() => setValue(value-1)}>PREV</button>
     <button>{value}</button>
     <button onClick={() => setValue(value+1)}>NEXT</button>
     </div>
      
  </div>
  
      
    )
}

export default Product;