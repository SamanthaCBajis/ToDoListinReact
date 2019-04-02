// the actual logic for populating our items or todos is in the state object in this script

import React, { Component } from "react";
import TodoItems from "./TodoItems";
// to import the TodoItems component that will display todos on the page
import "./TodoList.css";
// reference to the TodoList css styles

class TodoList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            //defining our state object and within it defining an items array, or property, that stores all items user can enter
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
        // defined the addItem evetn handler and resolved this keyword properly
    addItem(e){
        if(this._inputElement.value !== " ") {
            var newItem = {
                text:this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();

    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }
    // passing the key from the clicked item and check thiskey against all of the items that are being stored currently by the filter method

    // created a new array called filteredItems that contains everything except actual item being removed. The filter array is set as our new items property on our state object
    // Created a newItem variable to store an object, it includes the entered text and a unique key value set by the current time (Date.now())
    // State's items property is set up and ensuring that the object isnt modified - giving it an entirely new array ,ade up of both the existing items data along with the newly entered data
    // e.preventDefault is cleaning the value of input and making room for the next todo item - since by default the page will reload and clear everything when form is submitted this will prevent that from happening
    render() {
        return (
            <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a}
                placeholder="Enter Next Todo">
                </input>
                <button type ="submit">Add</button>
            </form>
        </div>
        <TodoItems entries={this.state.items}
        delete={this.deleteItem}/>
     </div>
     // the component now has knowledge of a prop called delete from the delete= and the delete function from the TodoList actually connects
        );
    }
    // Read the entered value from the input element and store in the items array when user submits
    //Reference is called _inputElement so we can access this input anywhere in the component by typing that reference
    //TodoItems is the component that will display the todos in the browser
}

export default TodoList;

// JSX here to get the form elements, input and button, up and running. This is the TodoList component and it is being used by being referenced in the index.js

// onSubmit is event handler to add an item - will listen for the submit event on the form and then call addItem method

// Here clicking on the button whose type is submit is the equivalent of the submit event on the form