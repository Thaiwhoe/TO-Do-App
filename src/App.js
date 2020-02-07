import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {TodoReminder} from "./components/TodoReminder";


import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
//import TodoReminder from './components/TodoReminder';
//import { TimePicker } from 'react-time-picker';
//import { DatePicker } from 'react-datepicker';
//import { Form, Container, Row, Col } from 'react-bootstrap';


class App extends Component {
  state={
    items: [],
    id: uuid(),
    item: '',
    editItem:false,
    field: {},
    errors: true,
    itemError: '',
    showError: false,
    selectedItem: {},
    showReminder: false,
    checkBoxVal: false,
    userData: '',
  }
  
  handleChange = (e)=>{
    this.setState({
      item:e.target.value,
    })
    
  };

  validate=()=> {
    if (this.state.items === '') {
      this.setState({
        itemError: 'Field cannot be empty',
        //showError: true
      })
    }else{
      this.setState({
        itemError: '',
        errors: false
      })
    }
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.validate();
    if (this.state.item === ''){
      this.setState({
        showError: true
      })
    }else{
      console.log('minime');
    const newItem = {
      id:this.state.id,
      title:this.state.item,
    }
    
    const updatedItems = [...this.state.items,newItem];
    
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false,
      showError: false
    })};
  };

  clearList = ()=>{
    this.setState({
      items:[]
    });
  };
  handleDelete = (id)=>{
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filteredItems
    });
  };

  handleEdit = id =>{

      const selectedItem = this.state.items.find(item => item.id === id);
      this.setState({
        item: selectedItem.title,
        editItem: true,
        id,
        selectedItem
      });
    };

    /* Submit by pressing Enter key*/
    handleKeyPress = (e) =>{
      if(e.key === 'Enter'){
        this.handleSubmit()
      }
    }

    handleEditSubmit = (e, id)=>{
      e.preventDefault();
      const editedItems = this.state.items.map(item => {
        if(item.id === this.state.selectedItem.id) {
          item.title = this.state.item;
        }
        return item;
      });
      this.setState(
        {
          items: editedItems,
          editItem: false,
          selectedItem: {},
          item: ''
        }
      )
    }

    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('items', JSON.stringify(nextState.items));
    }

    componentWillMount() {
      localStorage.getItem('items') && this.setState({
        items: JSON.parse(localStorage.getItem('items')),
      })
    }
    
    
  
  render() { 
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
             todo Input 
            </h3>
           
          <TodoInput 
          item={this.state.item} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} 
          editItem={this.state.editItem}
          handleKeyPress={this.handleKeyPress} 
          showError={this.state.showError}
          handleEditSubmit= {this.handleEditSubmit}
          //validateTodo={this.validateTodo}

          />
    
          <TodoList items={this.state.items} clearList={this.clearList} 
          handleDelete={this.handleDelete} 
          handleEdit={this.handleEdit} 
          handleValidation={this.handleValidation}
          
           />
          </div>
        </div>
      </div>
      );
  }
}
 
export default App;
