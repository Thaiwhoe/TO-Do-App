import React, { Component } from 'react';
import TodoDoneList from "./TodoDoneList";

export default class TodoDone extends Component{
    render(){
        const {handleDone} = this.props 
        return(
            <ul className='list-group my-5'>
                <h4 className='text-capitalize text-center'>Dones</h4>
                <button 
                    type="button" 
                    onClick= {handleDone}
                    className="btn btn-warning btn-block text-capitalize"
                    >Clear History
                </button>
            </ul>
        )
    }
}