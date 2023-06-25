import React, { useEffect, useReducer } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Box } from '@chakra-ui/react'
import ProductCard from './ProductCard'

const initialState = {
products: [],
loading: false,
error: null,
};

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
 switch(action.type){
  case "FETCH_REQUEST" :
    return {
      ...state,loading: true, error: null,
    };
  case "FETCH_SUCCESS": 
     return {
      ...state,products:action.payload, loading:false,error:null,
     };
   case "FETCH_FAILURE" :
    return {
      ...state, error: action.payload
    };
   
default:
  throw Error("Unknown action:"+ action.type);
}
};

const ProductPage = () => {
  const[state, dispatch] = useReducer(reducer, initialState);
  const{products,loading,error} = state;
  console.log(state)
  // dispatch
  //making network request to get product data 
 const getData = () => {

   //loading is true
  dispatch({type: "FETCH_REQUEST"});
  axios.get("https://fakestoreapi.com/products").then((response)=>{
    console.log(response.data)
    dispatch({type: "FETCH_SUCCESS",payload:response.data});
  }).catch((error)=>{
    dispatch({type: "FETCH_FAILURE", payload:error.msg})
  })
    dispatch({type: "FETCH_FAILURE"});





 }
  
  
  
  
  
    useEffect(()=> {
    getData();
  }, []);

  if(loading){
    return(
      <div>
        loading.........;
      </div>
    )
  }


  return (
    <Box bg='tomato' w='100%' p={4} color='white'>
      
     <h1>Product Page</h1> 
     {
      products.map((e)=>(
        <ProductCard e={e}/>
      ))
     }
    </Box>
  )
}
  

export default ProductPage
