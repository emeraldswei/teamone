import React, { Component } from 'react';

class StoryItem extends Component {
	constructor(props) {
		super(props);
		this.state = {title: '', text: ''}
	}
	

	render() {

		return (
			<form
				onSubmit={this.props.onSubmit} onChange={this.props.onChange}
			>
				<div>
					<label htmlFor="new-title">
						What is the title?
					</label>
					<input
						style={{backgroundColor: '#dce2ed', width: '300px', height: '30px'}}
						type="text"
						value={this.props.title}
					/>
				</div>
				<div>
					<label htmlFor="new-text">
						What is the story?
					</label>
					<input
						style={{backgroundColor: '#dce2ed', width: '300px', height: '300px'}}
						type="text"
						value={this.props.text}
					/>
				</div>
			</form>

		);
	}
}

export default StoryItem;
