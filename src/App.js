import './App.css';
//import TodoList from './components/TodoList';
import React, { useState } from 'react';

function App() {

  /* 
    Below array destructure syntax is the same as:
        const newTodoStateArr = useState("")
        consst newTodo = newTodoStateArr[0];
        const setNewTodo = newTodoStateArr[1];

        useState always returns an array with two items in it
        , the first item is the initial or current value of whatever the state is
        and the current value starts out as the default value I provide, that later on will
        update when we set the state to be a new value.
        : the quotes we use or null is the starting value of the state
  */
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([])

  const  handleNewTodoSubmit = (event) => {
    event.preventDefault();

      if(newTodo.length ===0)
      return;


    const todoItem = {
      text: newTodo,
      complete: false
    }




    //setTodos and pass in a brand new array containing all current todos plus 1 more
    setTodos([...todos, todoItem]); //use state to update the component, not .push into the state
    setNewTodo("");
  }
const handleTodoDelete = (delIndex) => {
  const filteredTodos = todos.filter((todo, i) => {
    return i !== delIndex;
  });

  setTodos(filteredTodos);
}

const handleToggleComplete = (idx) => {
  const updatedTodos = todos.map((todo, i) => {
    if(idx === i) {
      todo.complete = !todo.complete;
    }
    return todo;
  })


  setTodos(updatedTodos)
}



  return (
    <div style = {{textAlign: "center"}} className="container">
        <form onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}>
          <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)}/>
          <br></br> 
          <h3 className="mt-5">What do you want to do?</h3>
          <button>Add</button>
          <div  className="mt-3" style = {{backgroundColor: "black", width: "100%", height: "10px"}} ></div>
        </form>
        {
          todos.map((todo, i) => {
            const todoClasses = [];

            if(todo.complete) {
              todoClasses.push("line-through");
            }

            return (
              <div key={i}>
              <input checked={todo.complete} type="checkbox" onChange={(event) => {handleToggleComplete(i);}} />
              <span className={todoClasses.join(" ")}>{todo.text} </span>
              <button onClick={(event) => {
                handleTodoDelete(i);
              }}>Delete</button>
            </div>
            )
          })
        }
    </div>
  );
}

export default App;
//line 32 updates the state variable when it changes, the onChange attribute synthetic event