import React from "react";
import { TodoItem } from "./TodoItem";

export function Todolist(){

    return(

        <>

        <h1>listas de tareas</h1>
        <ul className='list-group'>
            <TodoItem/>
        </ul>

       
                
        </>

    )
}
