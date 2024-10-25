import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    // Function: 
    let incerment = () => {
        setCounter(counter + 1)
        console.log(counter);
    }
    return (
        <>
            <div>
                <h1> {counter} </h1>
                <button onClick={incerment}>Increment</button>
            </div>
        </>
    )
}

export default Counter