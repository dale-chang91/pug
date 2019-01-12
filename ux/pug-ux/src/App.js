import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/common/navbar/Navbar';

import MainPanel from './components/common/main/MainPanel';
import WorkHomePanel from './components/work/WorkHomePanel';
import WorkContainer from './components/work/WorkContainer';
import FunContainer from './components/fun/FunContainer';

import NotFound from './components/common/not-found/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPanel} />
            <Route path="/work" component={WorkHomePanel} />
            <Route path="/fun" component={FunContainer} />
            <Route component={NotFound} />
          </Switch>
          <div className="content">

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
