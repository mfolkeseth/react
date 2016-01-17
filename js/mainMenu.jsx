import React from 'react';
import { Router, Route, Link } from 'react-router';
 
export default class MainMenu extends React.Component {
	render() {
		return <ul>
          <li><Link to="/shopping-list">Shopping List</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

		/*<div className="row">
			<div className="col-xs-8 col-xs-offset-2">
				<div className="row">
					<div className="col-xs-6">
						<MainMenuItem title="View shopping lists" icon="glyphicon glyphicon-list-alt" click="0"/>
					</div>
					<div className="col-xs-6">
						<MainMenuItem title="View TODO's" icon="glyphicon glyphicon-list-alt" click="0" />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6">
						<MainMenuItem title="Manage users" icon="glyphicon glyphicon-user" click="0" />
					</div>
				</div>
			</div>
		</div>*/
	}
}

