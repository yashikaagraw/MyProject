import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { useReducer } from 'react'

let initialState= []

const reducer=(state, action) => {
    
    switch(action.type){
 case "ADDTODO": 
 return[...state,action.payload];

 case "DELETE_TODO": 
 return[];

case "UPDATE_TODO": 
return[];

 default:
    throw new Error(`invalid action$(action.type)`)
    }
}
const Todos = () => {
const[state, dispatch]= useReducer(reducer, initialState);
console.log(state)
 
const handleAdd=(task)=> {
    //console.log(input)
    dispatch({type:"ADDTODO",
payload:task,
})
}

const UpdateTodo=()=> {
    dispatch({
        type:"UPDATE_TODO",
        payload: id,
    })
}
  return (
    <div>
      <Box>
        <AddTodo handleAdd={handleAdd}/>
        <SimpleGrid columns={2} spacing={10}  bg='tomato'>
        {
            state.map((e)=>{
                return <TodoItem key={e.id} e={e} />
            })
        }
        </SimpleGrid>
      </Box>
      
    </div>
  )
}

export default Todos
