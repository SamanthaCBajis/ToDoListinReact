// our items or todos are defined in this script

import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }
    // define delete function and has arguement of item key - this resolves properly bind this to the constructor so createTasks can properly resolve delete function
    // delete function just gets called and passes in the component from props doesn't actually delete anything
    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
        key={item.key}>{item.text}</li>
    }
    // listening to the click event and associating it with an event handler called delete
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
            {listItems}
            </FlipMove>
            </ul>
        );
    }
};

export default TodoItems;

// render function is taking the list to todos, which are passed in as entries, turning them into JSX/HTML elements - by calling the map on the items and the createTasks function this is done

// value that is stored in this listItems variable is an array of li elements with the content to print - the key attribute, Date.now(), is set here on each element to have React track each element (most likely to be used to delete the items)

// the list is returned and shown on the screen through the return function

// wrapping the listItems, prior of getting printed on the page, inside a FlipMove component and specifying the animation duration and the type of easying the function would use