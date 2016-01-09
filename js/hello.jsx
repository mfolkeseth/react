import React from 'react';
import World from './world.jsx';
 
export default class Hello extends React.Component {
	render() {
		return <h1 className="myclass">
				Hello <World/>
			</h1>
	}
}