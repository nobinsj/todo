import React, {useState} from 'react';
import './App.css';
import './index.css';

function Todo ({text,complete,deleteTodo,completeTodo}) {
  return(
    <div className="row input-group border-top">
        <dl className="col-sm-1">
            <input type="checkbox" onChange={completeTodo}/>
        </dl>     
        <dl className="col-sm-8" style={{textDecoration: complete ? "line-through" : ""}}>
            {text}
        </dl>
        <dd className="offset-sm-1 col-sm-1">
            <button className="btn btn-outline-danger btn-sm" onClick={deleteTodo}>Delete</button>
        </dd>
    </div>
  )
}

function TodoApp() {
  const [text,setText] = useState('')
  const [todos,SetTodos] = useState([])

  const addTodo = () => {
    
    SetTodos([...todos,{text,complete:false}])

  }
  
  const deleteTodo =(i) => {

    const NewTodo = todos.filter((text,index) => index != i)
    SetTodos(NewTodo)
    
  }
  const completeTodo = (i) => {

    SetTodos(todos.map(
        (todo,k) => k==i ? {
            ...todo,complete: !todo.complete
        }
        :todo
    )
    );
   
  }
  return (
    <div>
        <div className="row input-group">
            <input type="text"  id="text" className="form-control offset-sm-1 col-sm-8" onChange={event => setText(event.target.value)} />
            <button type="submit" className="offset-sm-1 btn btn-success" onClick={addTodo}> Add </button>
        </div><br/>
            {/* <p>{text}</p>    */}
        <ul>

          {todos.map(({text,complete},i) => {

            return <Todo text={text} complete={complete} deleteTodo={() =>{deleteTodo(i)}} completeTodo={() => {completeTodo(i)}}/>
            
            })
          }
        </ul>
    </div>  
  );
}

export default TodoApp;
