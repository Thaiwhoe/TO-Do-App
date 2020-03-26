import React, { Component } from 'react'

export default class TodoItem extends Component {
    // state= {
    //     checked: false,
    // }

    // handleDone = (e, id) =>{

    //     const doneItems = {items}.filter(item => item.id === id)
    //     this.setState({
    //         checked: e.target.checked,
    //         completeItems: doneItems,
    //     })
    //     console.log(doneItems)

    // }

    render() {
        const { title,handleDelete,handleEdit, handleChecked, checked } = this.props
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2 shadow bg-white rounded'>
                    {/* <span className= 'mx-2'><input type='checkbox' /></span>
                    <h6>{title}</h6> */}
                <input type="checkbox" className='justify-content' checked={ checked } onChange={handleChecked}/>
                <h6>{title}</h6>
                <div className='todo-icon'>
                    <span className='mx-2 text-success' onClick={handleEdit}>
                        <i className='fas fa-pen'></i>
                    </span>
                    <span className='mx-2 text-danger' onClick={handleDelete}>
                        <i className='fas fa-trash'></i>
                    </span>
                </div>
            </li>
        )
    }
}
