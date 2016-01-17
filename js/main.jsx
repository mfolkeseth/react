/*import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'; 

import Header from './header.jsx';
import Hello from './hello.jsx';
import MainMenu from './mainMenu.jsx';
import { App, About, Inbox, Message } from './app.jsx';


import { square } from './modules';
console.log(square);

import User from './User';
var me = new User();
console.log(me.getName());

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<MainMenu/>, document.getElementById('content'));
ReactDOM.render(<App/>, document.getElementById('content'));


require('bootstrap-loader');
require('../scss/global.scss');*/

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Header from './header.jsx';
import Home from './home.jsx';
import ShoppingListPage from './shoppingList/shoppingListPage.jsx'

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

render((
  <Router>
    <Route path="/" component={Home} />
    <Route path="shopping-list" component={ShoppingListPage} />
    <Route path="inbox" component={Inbox}>
      <Route path="messages/:id" component={Message} />
    </Route>
  </Router>
), document.getElementById('content'))

render(<Header/>, document.getElementById('header'));
require('bootstrap-loader');