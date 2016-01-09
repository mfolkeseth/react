import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.jsx';

import { square } from './modules';
console.log(square);

import User from './User';
var me = new User();
console.log(me.getName());

ReactDOM.render(<Hello/>, document.getElementById('content'));

require('../css/myclass.css');