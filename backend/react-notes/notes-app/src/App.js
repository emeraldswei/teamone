import React, { Component } from 'react';
import StoryItem from './StoryItem.js';
import StoryList from './StoryList.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {stories: [], input:''};
  }

  render() {
    return (
      <div>
        <h2>Fairytale Stories</h2>
          <StoryList 
            stories={this.state.stories}
          />
        <StoryItem
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          text={this.state.text}
        />

      </div>
    );
  }


  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      //console.log('submit');
      if (!this.state.text.length) {
        return;
      }

      const newStory = {
        title: this.state.title,
        text: this.state.text,
        id: Date.now(),
      };

      this.setState(prevState => ({
        stories: prevState.stories.concat(newStory), 
        input: '',
      }));
    }
}

export default App;
