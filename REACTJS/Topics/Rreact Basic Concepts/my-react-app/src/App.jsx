// import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
// import Todos from './assets/Components/Todos';

import { BrowserRouter, Navigate, Route, Routes, useSearchParams } from "react-router-dom"
import Contact from "./Components/Contact"
import PageNotFound from "./Components/PageNotFound"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import User from "./Components/User"
import Filter from "./Components/Filter"
import Peter from "./Components/Peter"
import Adams from "./Components/Adams"
import Login from "./Components/Login"
import ProtectedRoutes from "./Components/ProtectedRoutes"

// useReducer 
/*
const initialState = 0;
const reducer = (state, action) => {
  if (action == "increment") {
    return state + 2;
  } else if (action == "decrement") {
    return state - 2;
  } else {
    return state;
  }
}
*/

const App = () => {



  // Usestate.
  /*
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState({number : 0, theme : "blue"})
  const {number, theme} = count1

  const inc2 = ()=> {
setCount1((preVal)=> {
  return {...preVal, number: preVal.number + 1}
})
  }
  const dec2 = ()=> {
setCount1((preVal)=> {
  return {...preVal, number: preVal.number - 1}
})
  }
  const incrementFnc = () => {
    if (count >= 0 && count == 5) {
      window.alert("Stop");
    } else {
      setCount(preCount => preCount + 1)
    }
  }
  const decrementFnc = () => {
    if(count > 0 && count <=5) {
      setCount(preCount => preCount - 1)
    }else{
      window.alert("Stop");
    }
  } 
 */

  // useEffect.
  // Usecase 01:
  /*
    const [type, setType] = useState("user");
    const [data, setdata] = useState([]);
  
    const apiCalling = async () => {
      // API Fetching Using Axios Package and Using try catch and asyns await.
      try {
        await axios
          .get(`https://jsonplaceholder.typicode.com/${type}`)
          .then(res => setdata(res.data))
          .catch(err => console.error(err));
      } catch (error) {
        console.log(error)
      }
      // API Fetching Using React's fetch method.
      //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
      //  .then(res => res.json())
      //  .then(data => {
      //   console.log(data);
      //   setdata(data)})
      //  .catch(err => console.log(err));
    }
  
    useEffect(() => {
      // fetch(`https://jsonplaceholder.typicode.com/${type}`)
      //   .then(response => response.json())
      //   .then((json) => {
      //     console.log(json);
      //     setdata(json);
      //   });
      apiCalling()
    }, [type]);
    */

  // Usecase 02:
  /*
  const [Window, setWindow] = useState(window.innerWidth);
  const [WindowHeight, setWindowHeight] = useState(window.innerHeight);
  const handleresize = () => {
    setWindow(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener('resize', handleresize);

  }, []);
  */

  // useMemo.
  /*
    const [number, setnumber] = useState(0);
    const [times, setTimes] = useState(10);
  
    const multiplyNum = useMemo(() => {
      console.log("multiply Function Call");
      return number * 2;
    }, [number])
  */

  // useCallback:
  /*
  const [todos, setTodos] = useState([]);
  const [counterNumber, setCounterNumber] = useState(0);

  const addTodos = useCallback(() => {
    console.log("Todos Added");
    return setTodos((preVal) => [...preVal, "New Todo Added Successfully"]);
  }, [todos]);

  const incrementCounter = () => {
    setCounterNumber(preVal => preVal + 1);
  };
  */

  // useReducer:
  /*
  const [state, dispatch] = useReducer(reducer, initialState);
  */

  // useRef:
  /*
    const inputRef = useRef(null);
    const handleClick = () => {
      inputRef.current.value = 1000;
      inputRef.current.focus();
      inputRef.current.style.color = "red";
    }
  */


  return (
    <>
      {/* useState  
      <button onClick={incrementFnc}>+</button>
      <div>{count}</div>
      <button onClick={decrementFnc}>-</button>

      <h2>Concept 2</h2>
      <button onClick={dec2}>-</button>
      <div>{number}</div>
      <div>{theme}</div>
      <button onClick={inc2}>+</button>
      */}


      {/* useEffect  
      <button onClick={() => setType("posts")}>posts</button>
      <button onClick={() => setType("users")}>users</button>
      <button onClick={() => setType("comments")}>comments</button>
      <div>{data && data.length > -1 ? data.map((val, i) => {
        return <p key={i}>{val.name}</p>
      }) : "loading..."}</div>
     */}
      {/*
      <div>Current Window Width is: {Window} px</div>
      <div>Current Window Height is: {WindowHeight} px</div>
      */}

      {/* useMemo
      <div>{number}</div>
      <div>{multiplyNum}</div>
      <div>{times}</div>
      <button onClick={() => setnumber((num) => num + 1)}>Update Number</button>
      <br />
      <button onClick={() => setTimes((preVal) => preVal * 10)}>Multiply Count</button>
       */}


      {/*useCallback
      <Todos todos={todos} addTodos={addTodos} />
      <br />
      <br />
      <div>Counter: <button onClick={incrementCounter}>+</button> {counterNumber}</div>
      */}


      {/* useReducer 
      <h2>{state}</h2>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      */}

      {/* useRef  
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click me!</button>
      */}

      {/* Routing */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoutes  Component = {Home}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}>
            <Route path="peter" element={<Peter/>}/>
            <Route path="adams" element={<Adams/>}/>
          </Route>
          <Route path="/user/:id" element={<User/>} />
          <Route path="/filter" element={<Filter/>} />
          <Route path="/*" element={<Navigate to='/' />} />
          {/* <Route path="/*" element={<PageNotFound />} />  */}
        </Routes>
      </BrowserRouter>
   


    </>
  )
}

export default App