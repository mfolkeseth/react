import React from 'react';

require('../scss/menu-item.scss');

export default class MainMenuItem extends React.Component {
	constructor(props) {
		super(props);
		// this.state is mutable. this.props is immutable
		this.state = {click: props.click};
		// component functions
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.state.click++;
		// template string `${variable}`
		console.log(`clicked ${this.props.title} ${this.state.click} times`);
	}

	render() {
		return <button onClick={this.handleClick} className="menu-item">
			<span className={this.props.icon}></span>
			<p className="title">{this.props.title}</p>
		</button>
	}
}