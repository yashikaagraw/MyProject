import { Flex, Input, Button } from "@chakra-ui/react";

import React from "react";
import { useState } from "react";

const Addtodo = ({handleAdd}) => {
    const[text,setText]= useState("")

    const handleClick = () => {
        // console.log(text);
        const newTodo= {
            id: Math.random() + Date.now() + text,
            title: text,
            status:false,  };

            handleAdd(newTodo);
    };
    return(
        <Flex>
            <Input placeholder="add new task"value={text}onChange= {(e)=> setText(e.target.value)} />
            <Button onClick={handleClick} variant = 'outline' colorScheme='teal' size='lg'>ADD TODO</Button>
        </Flex>
    );
};
export default Addtodo;