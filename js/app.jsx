import React from 'react';   
import { Router, Route, Link } from 'react-router';

export default class App extends React.Component{  
  render() {
    return <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/Inbox">Inbox</Link></li>
    </ul>
    {this.props.children}
        /*<Link to="login">Login</Link>*/

        /*<RouteHandler/>*/
      /*</div>*/
  }
}

/*class About extends React.Component {
  render() {
    return <h3>About</h3>
  }
}

class Inbox extends React.Component {
  render() {
    return <h3>Inbox</h3>
  }
}

class Message extends React.Component{
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}*/

// let routes = (  
//   <Route name="app" path="/" handler={App}>
//     <Route name="login" path="/login" handler={LoginHandler}/>
//   </Route>
// );

/*Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});*/