import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './features/dashboard/Dashboard';
import Header from './common/components/layout/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProject from './features/project/AddProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/addProject" component={AddProject}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
