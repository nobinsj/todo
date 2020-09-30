import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text,setText] = useState('')
  const [todos,SetTodos] = useState([])

  const addTodo = () => {
    console.log('text is : ',text)
    SetTodos([...todos,text])
  }
  return (
  <div>
     <h1>TODO</h1>
    
    Enter  :  <input type="text" id="text" onChange={event => setText(event.target.value)} />
    <button type="submit" onClick={addTodo}> Add Todo</button>

    <p>{text}</p>
    <ul>
      {todos.map((el) => {
        return (<li> {el} </li>)
      })}
    </ul>
    </div>  
  );
}

export default App;
