import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
     const [inputVal,  setInputval] = useState({})
    
    const [searchParams,setSearchParams] = useSearchParams();
    const age = searchParams.get("age");
    const city = searchParams.get("city");



  return (
    <>
    <h2>Age is {age}</h2>
    <h2>City is {city}</h2>
    <input type="text" placeholder='Age' onChange={(e)=> setInputval(()=> {
        return {...inputVal, age: e.target.value}
    }) }/>
    <input type="text" placeholder='City' onChange={(e) => setInputval(() => {
        return {...inputVal, city: e.target.value}
    })}/>
    <button onClick={()=> setSearchParams(inputVal)}>Set Search Params</button>
    </>
  )
}

export default Filter