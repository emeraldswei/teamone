import React, { Component } from 'react';

class ListItem extends Component {

	

	render() {

		return (
			<form
				onSubmit={this.props.onSubmit} onChange={this.props.onChange}
			>
				<input
					style={{backgroundColor: '#dce2ed', width: '300px', height: '30px'}}
					type="text"
					value={this.props.text}
				/>
			</form>

		);
	}
}

export default ListItem;
