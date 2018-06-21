import React, { Component } from 'react';

class StoryList extends Component {
    render() {
      return (
        <ul>
          {this.props.stories.map(story => (
            <div>
            <lh key={story.id}>{story.title}</lh>
            <li key={story.id}>{story.text}</li>
            </div>
            ))}
        </ul>
        );
    }
}

export default StoryList;