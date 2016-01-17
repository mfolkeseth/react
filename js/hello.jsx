import React from 'react';
import World from './world.jsx';
 
export default class Hello extends React.Component {
	render() {
		return <div className="maincontent">
			<h1 className="myclass">
				Hello <World/>
			</h1>
		</div>
	}
}