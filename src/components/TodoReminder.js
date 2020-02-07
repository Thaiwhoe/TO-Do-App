import React, { Component } from 'react';
import {Form}  from 'react-bootstrap';

export class TodoReminder extends Component {
    render() {
        const {showRemindClose} =this.props
        return (
            <React.Fragment>
                <form onSubmit={e=> e.preventDefault()}>
                    <div className="container my-auto mx-auto">
                        <div className='card card-body mx-auto my-auto'>
                            <div className="col-10 mx-auto col-sm-6 mt-4">
                                <h3 className="text-capitalize text-center">
                                Remind me on:
                                </h3>
                               <div>
                                    <label>Date</label>
                                        <input 
                                            className='form-control'
                                            type="date"
                                            name="DOJ"
                                            placeholder="DOJ"
                                        />
                               </div> 

                               <br/>

                               <div>
                                    <label>Time</label>
                                        <input 
                                            className='form-control'
                                            type="time"
                                            name="DOJ"
                                            placeholder="DOJ"
                                        />
                               </div>

                                <button
                                type='submit'
                                className="btn btn-block btn-success mt-3"
                                >Remind me</button>
                               
                                {/* <button
                                onClick= {showRemindClose}
                                type='submit'
                                className="btn btn-block btn-danger mt-3"
                                >Close</button> */}
                            </div>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default TodoReminder
