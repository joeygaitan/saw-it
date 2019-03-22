import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Posts from './components/LandingPage/Posts/Posts';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
    <div>
      <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/Posts' component={Posts}/>
      </Switch>
    </div>
</BrowserRouter>
    );
  }
}

export default App;
