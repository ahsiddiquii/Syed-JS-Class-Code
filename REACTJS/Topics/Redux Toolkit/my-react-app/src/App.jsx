
import { useRef } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delTodo } from './Config/ReduxConfig/Reducers/TodoSlice';


function App() {
  const inputRef = useRef();
  const reduxSelectors = useSelector(state => state.todos);
  const reduxDispatch = useDispatch();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    reduxDispatch(addTodo({
      title: inputRef.current.value
    }))
  };
  const deleteTodo = index => {
    reduxDispatch(delTodo({
      index: index
    }))
  }


 




  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={formSubmitHandler}>
        <input type="text" ref={inputRef} />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {reduxSelectors && reduxSelectors.length > 0 ? reduxSelectors.map((item, index) => {
          return <li key={item.id}>{item.title} <button onClick={() => deleteTodo(index)}>Delete</button></li>
        }) : "No Todos Found!"

        }
      </ul>
    </>
  )
}

export default App
