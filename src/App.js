import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './components/Login'
import Question from './pages/Question'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/soal/:category" component={Question} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
