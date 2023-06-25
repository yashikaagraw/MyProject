import React from 'react'
import { Flex, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

const AddTodo = ({handleAdd}) => {
    const[inputVal,setInput]= useState("")
    //console.log(input)
    const handleclick=()=> {
    //console.log(input)
    const newTodo= {
        //to create new id
        id:Math.random()+Date.now()+inputVal,

        title:inputVal,
        status:false,

    };
    handleAdd(newTodo)
    setInput("")
    }
  return (
    <Flex>
      {/* <input type="text" placeholder='task' /> */}
 <Input placeholder="add task" value={inputVal} onChange={(e)=> {setInput(e.target.value)}}/>
     <Button colorScheme='twitter' size='lg'onClick={handleclick}>ADD TODO</Button> 
      </Flex>
  )
}

export default AddTodo
