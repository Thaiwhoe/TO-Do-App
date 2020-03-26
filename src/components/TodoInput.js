import React, { Component } from 'react';
import TodoReminder from './TodoReminder'


export default class TodoInput extends Component {
    state = {
        clicked: false,
    }

    handleCheckBox = () => {
        this.setState({
            clicked: !this.state.clicked
        })    
    }

    // showRemind=(e) => {
    //    this.setState({
    //        checked: true,
    //    })
    // }

    // showRemindClose = (e) => {
    //     this.setState({
    //         checked: false,
    //     })
    // }
    render() { 
        const { item,handleChange, handleSubmit,editItem,handleKeyPress,showError, handleEditSubmit } = this.props
        return (
            <div className="card card-body my-3 shadow p-3 mb-5 bg-white rounded">
            <form onSubmit={e => e.preventDefault()}>
                <div className="input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text bg-primary text-white">
                          <i className="fas fa-book"></i>
                      </div>
                    </div> 
                    <input type="text"
                    name='inputed' 
                    className="form-control text-capitalize"  
                    placeholder="Add a todo item" 
                    value={item}
                    onChange={handleChange} />   
                </div>
                { showError &&
                    <span>Field cannot be empty</span>
                }  
                <br />
                <div>
                    <label>
                        Remind me 
                        <i className="fas fa-bell" onClick={ this.handleCheckBox }></i>
                    </label>
                    { this.state.clicked && 
                    <TodoReminder 
                        showRemindClose = {this.showRemindClose}
                    /> }
                </div>
                <button 
                    type="submit"
                    onKeyPress={handleKeyPress} 
                    className={
                        editItem 
                            ? "btn btn-block btn-success mt-3" 
                            : "btn btn-block btn-primary mt-3"
                    }
                    onClick={editItem ? handleEditSubmit : handleSubmit}
                >
                    {editItem ? "Edit item":"Add item"}
                </button>
            </form>
                
            </div>
        )
    }
}
