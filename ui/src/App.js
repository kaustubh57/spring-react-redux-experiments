import React, { Component } from 'react';

import './App.css';
import Dashboard from './features/dashboard/Dashboard';
import Header from './common/components/layout/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard />
      </div>
    );
  }
}

export default App;
