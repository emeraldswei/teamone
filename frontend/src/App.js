import React, { Component } from 'react';
import logo from './logo.svg';
import ListItem from './ListItem';
import TodoList from './TodoList';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      text: ''
    };
  }

  getList = () => {
    axios.get('http://localhost:8000/notes')
        .then(res => {
          const updated = res.data;
          this.setState({
            items: updated
        });
      });
  }

  componentDidMount() {
      this.getList();
    }


  setColor = (color) => {
    this.setState({
      color: color,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1
            className="App-title"
            style={{
              color: this.state.color,
            }}
          >
            Things to do:
          </h1>
        </header>
        <TodoList 
          items={this.state.items}
          handleCheck={this.handleCheck}
          handleClear={this.handleClear}
        />
        <ListItem
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          text={this.state.text}
        />
      </div>
    );
  }

  handleCheck = (index, id) => {
    this.getList();

    axios.delete('http://localhost:8000/notes/' + id);

    this.getList();
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.text.length) {
      return;
    }

    this.setState(prevState => ({
      text: '',
    }));

    this.getList();

    axios.post('http://localhost:8000/notes', {
      text: this.state.text,
      checked: false,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      this.getList();
  }

  handleClear = () => {
    this.getList();

    axios.delete('http://localhost:8000/notes');

    this.getList();

  }

  

}

export default App;
