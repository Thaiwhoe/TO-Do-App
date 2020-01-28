import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit} = this.props

        const itemList = items.map((item) => {
                     return(
                        <TodoItem 
                        key={item.id} 
                        title={item.title} 
                        handleDelete={()=> handleDelete(item.id)}
                        handleEdit={()=> handleEdit(item.id)}
                        />
                     )
                 }) 
        return (
         <ul className="list-group my-5">
             <h3 className= "text-capitalize text-center">
                Todo list 
             </h3>
             {itemList}
             <button 
             type="button" 
             className="btn btn-danger btn-block text-capitalize"
             onClick={clearList}
             >Clear list</button>
         </ul>   
        )
    }
}
