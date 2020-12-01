import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Status from './components/status';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <nav>
                  <ul>
                      <li><Link to="/connection">Connection</Link></li>
                      <li><Link to="/">No where</Link></li>
                  </ul>
              </nav>
              <Switch>
                  <Route path="/connection">
                      <Status />
                  </Route>
                  <Route path="/test">
                      <Customers />
                  </Route>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
