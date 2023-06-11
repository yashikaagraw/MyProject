import { useState } from "react";
let initialState= {
    title:"",
    category:"",
    price:"",
    image:"",
}

function AddProduct() {
    
const[formdata, setFormdata] = useState(initialState)
console.log(formdata);
const handleinput = (e) => {
    // console.log(e.target.value);
    setFormdata({...formdata,[e.target.name] : e.target.value})
    //onchange 
    
}
const handlepost = (e) => {
    e.preventDefault()
     const requestoptions = {
        method: "POST",
        headers: {"content-Type":"application/json"},
        body: JSON.stringify(formdata),
     };
     fetch("http://localhost:8080/products", requestoptions)
     .then((response)=> response.json())
     .then((data) => console.log(data));
}

    return(
        <div>
       <form onSubmit={handlepost}>
        <input type="text" placeholder="title" name="title" onChange={handleinput}/>
        <input type="text" placeholder="category" name="category" onChange={handleinput}/>
        <input type="text" placeholder="price" name="price" onChange={handleinput}/>
        <input type="text" placeholder="image" name="image" onChange={handleinput}/>
        {/* <input type="submit" /> */}
        <button type="submit">Submit</button>
       </form>
        </div>
    )
}
export default AddProduct;