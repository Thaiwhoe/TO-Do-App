import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const { item,handleChange, handleSubmit,editItem,handleKeyPress,showError, handleEditSubmit } = this.props
        return (
            <div className="card card-body my-3">
            <form onSubmit={e => e.preventDefault()}>
                <div className="input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text bg-primary text-white">
                          <i className="fas fa-book"></i>
                      </div>
                    </div> 
                    <input type="text" 
                    className="form-control text-capitalize"  
                    placeholder="Add a todo item" 
                    value={item}
                    onChange={handleChange} />   
                </div>
                { showError &&
                    <span>Field cannot be empty</span>
                    }   
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
