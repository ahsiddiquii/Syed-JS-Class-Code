// useCallback

/* 
import React, { memo } from 'react'

const Todos = ({todos, addTodos}) => {
    
    console.log("Todos Component rendered");
    return (
        <>
            <h1>Todo List:</h1>
            <br />
            <p>{todos && todos.length > -1 ? todos.map((val, i) => {
                return <p index={i} >{val + (i + 1)}</p>
            }) : <p>No Todos Found!</p>}</p>
            <br />
            <button onClick={addTodos}>Add Todos</button>
        </>
    )
}

export default memo(Todos);
*/