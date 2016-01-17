import React from 'react';
import { Router, Route, Link } from 'react-router';

import MainMenu from './mainMenu.jsx';

export default class Home extends React.Component{
  render() {
    return (
      <div>
        <h1>Home</h1>
        <MainMenu/>
        {this.props.children}
      </div>
    )
  }
}