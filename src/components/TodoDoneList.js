import React, {Component} from 'react';

class TodoDoneList extends Component {
    render() { 
        return ( 
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2 shadow bg-white rounded'>
                <h6>Done</h6>
                <span className= 'mx-2 text-warning'>   
                    <i class="fas fa-undo-alt"></i>
                </span>
            </li>
         );
    }
}
 
export default TodoDoneList;