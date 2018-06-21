import React, { Component } from 'react';

class TodoList extends Component {
  
  render() {
    return (
      <div>

        <ul> 
         {this.props.items.map((item, index) => (
            <li
              key={item._id}
              className={item.checked ? 'checked' : 'notChecked'}>
              <input 
                type="checkbox"
                className="myChecks"
                onChange={() => {
                  this.props.handleCheck(index, item._id);}}
              />
              {item.text}
            </li>
          ))}
        </ul>

        <input
          type="button"
          value="Clear All"
          onClick={() => {
            this.props.handleClear();}}
        />
      </div>
    );
  }
}

export default TodoList;