import React, { Component } from 'react';

import './App.css';


class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
          items :  [],
          Incontent : ""
          
        }
    }

    textName = (e) => {
        
        this.setState({Incontent:e.target.value})
        
    }

 
    addItem = (e)=>{
        
        const currTxt =this.state.Incontent;
        const currItems = this.state.items;
        currItems.push(currTxt)
        this.setState({items:currItems})
       
    }

    removeItem = (k)=>{
        if(!window.confirm("Are you sure want to delete this")){
            return;
        }
        const currItems = this.state.items;
        currItems.splice(k,1);
        this.setState({items:currItems})
    }
   
    
    render() {
        return (

            <div className="Con">
                <h3>TODO</h3>
                <input type="text" onChange={this.textName} />
                <button onClick={this.addItem}>Add</button>
                <p>{this.state.Incontent}</p>
                <br /><br />
                <table>                   
                    {this.state.items.map((itm,k) =>{
                        return(
                        <tr><th>{itm } </th>                                   
                        <td><button onClick={ ()=>{this.removeItem(k)}}>  Delete</button></td></tr>
                        )
                    })}
                </table>
            </div>
        );
    }


}
export default Todo;