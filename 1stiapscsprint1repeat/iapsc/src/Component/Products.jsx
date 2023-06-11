import { useState } from "react";
import { useEffect } from "react";
import Productcart from "./Productcart";
import Pagenation from "./pagenation";
function Product() {
 const[state, setState] = useState([]);
 const[currentpages, setCurrentpages] = useState(1);
 const[totalelements, setTotalelements] = useState(null);
//  console.log(state);
// console.log(state.length);



 useEffect(() => {
  yashi(currentpages)
 }, [currentpages])



 const yashi = async() => {
    // let url = `http://localhost:8080/products?_page=${pages}&_limit=${limit}`
    let url = `http://localhost:8080/products?_page=${currentpages}&_limit=${limit}`
    const response = await fetch(url)
    let element = Number(response.headers.get("X-Total-Count"))
    setTotalelements(element)
    console.log(totalelements);
    const data= await response.json();
    // console.log(data);
    setState(data);
 }

 let limit = 3
 let totalpages = Math.ceil(totalelements/limit)
 console.log(totalpages);

const handlechange = (p) => {
    setCurrentpages(p+1);
    }
    console.log(currentpages)
 return(
  <div>
     
     <Pagenation totalpages= {totalpages} currentpages={currentpages} handlechange={handlechange}/> 
     <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
    {
         state.map((e) =>{
            return(
                <div>
                 <Productcart  e={e}/>  
                
                </div>
                )
             })
    }
    
    </div>
{/*       
      <button onClick={()=>{setPages(pages - 1)}} disabled = {pages===1}>Previous</button>
      <button>{pages}</button>
      <button onClick={()=> {setPages(pages+1)}}>Next</button> */}

        </div>
    )
}
export default Product;