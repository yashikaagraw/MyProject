import { Box } from "@chakra-ui/react";
import React, { useReducer } from "react";
import Todoitem from "./TodoItem";
import Addtodo from "./Addtodo";

const initial = []

const reducer=(state,action) => {
    switch(action.type){
        case"ADD_TODO": return [...state,action.payload];
        case"DELETE_TODO": return[]
        case"UPDATE_TODO": return[]
        default: {
            throw new Error(`invalid action ${action.type}`);
        }
    }
};

const Todos = () => {
const[state,dispatch]= useReducer(reducer,initial);
const handleAdd = (task) => {
    dispatch({
        type: "ADD_TODO",
        payload: task,
    });
};
// console.log(state);
    return(
        <div>
         <Box>
            <Addtodo handleAdd = {handleAdd}/>
            <Todoitem/>
         </Box>
        </div>
    )
}
export default Todos;