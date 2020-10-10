import React from 'react';
import './App.css';
import TodoApp from './todos';



function App() {
  return (
    <div className="container">
      <div className=" row-content">
        <div className="offset-sm-2 col-sm-8">
          <div className="card"> 
            <h3 className="card-header bg-primary text-white">TODO</h3>
              <div className="card-body">
                <TodoApp />
              </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;


