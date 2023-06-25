import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const[state, setState] = useState({});
  const{id} = useParams();
  console.log(state);
  useEffect(()=> {
    getData();
  }, []);

  const getData = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response)=>{
    console.log(response.data)
    setState(response.data)
  })
}


  return (
    <div>
      {
        <div>
        <img src={state.image} />
        <p>{state.description}</p>
        <p>{state.price}</p>
        </div>
      }
    </div>
  )
}

export default SingleProduct
