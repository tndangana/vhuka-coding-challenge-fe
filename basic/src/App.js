import React, { Component } from 'react';
import BasicMenu from './components/BasicMenu';
import { Route, Link,Switch } from "react-router-dom"
import DisplayPage from './components/DisplayPage';


class App extends Component {
  
  render() {
    return (
      <div className="container">
          <Switch>
              <Route exact path='/' component={ BasicMenu } />
              <Route exact path='/display/:age' component={ DisplayPage } />
          </Switch>
        </div>
  );
  }
}

export default App;
