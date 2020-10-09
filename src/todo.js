import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Button from 'react-bootstrap/Button';

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
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">TODO</NavbarBrand>
                    </div>
                </Navbar>
            <div className="Con">
                {/* <div className=""></div> */}
                
                <input type="text" onChange={this.textName} />
                <Button variant="primary" size="sm" onClick={this.addItem}>Add</Button>
                <p>{this.state.Incontent}</p>
                <br /><br />
                <table>                   
                    {this.state.items.map((itm,k) =>{
                        return(
                        <tr><th>{itm } </th>                                       
                            <td><select name="status">
                                <option value="Like to be done">Like to be done</option>
                                <option value="Going">Going</option>
                                <option value="Done">Done</option>                                     
                            </select></td>
                        <td><Button variant="danger" onClick={ ()=>{this.removeItem(k)}}>  Delete</Button></td></tr>
                        )
                    })}
                </table> 
            </div>
            </div>
        );
    }


}
export default Todo;